import dirs from './dirs'
import * as fs from 'fs'
import * as path from 'path'
import * as colors from 'colors/safe'

const sourceFile = path.resolve(dirs.projectRoot, dirs.database, 'db.txt')
const lines = fs.readFileSync(sourceFile, 'utf-8').toString().split('\n')

const db = []
var current = {
    hashtag: '',
    description: '',
    img: '',
    url: ''
}

lines.forEach((line: string, idx) => {
    if (idx % 5 === 0) {
        current.hashtag = line.trim()
    }
    if (idx % 5 === 1) {
        current.description = line.trim()
    }
    if (idx % 5 === 2) {
        current.img = line.trim()
    }
    if (idx % 5 === 3) {
        current.url = line.trim()
    }
    if (idx % 5 === 4) {
        db.push(current)
        current = {
            hashtag: '',
            description: '',
            img: '',
            url: ''
        }
    }
})

const targetFile = path.resolve(dirs.projectRoot, dirs.database, 'db.json')
const targetFileDisplay = path.relative(dirs.projectRoot, targetFile)


fs.writeFileSync(targetFile, JSON.stringify(db))

console.info(`${colors.cyan(targetFileDisplay)} written`)
