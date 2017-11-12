import dirs from './dirs'
import * as fs from 'fs'
import * as path from 'path'
import * as colors from 'colors/safe'


const targetFile = path.resolve(dirs.projectRoot, dirs.database, 'db.json')
const targetFileDisplay = path.relative(dirs.projectRoot, targetFile)

const db = []

fs.writeFileSync(targetFile, JSON.stringify(db))

console.info(`${colors.cyan(targetFileDisplay)} written`)
