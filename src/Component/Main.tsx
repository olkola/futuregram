import * as React from 'react'

const db = require('../../database/db.json')

export default class Main extends React.Component<{}, {}> {

    public render() {
        const elements = db.map(item => (
            <div>
                <p>{ item.hashtag }</p>
                <p>{ item.description }</p>
                <p>
                    <img src={item.img} alt='' />
                </p>
                <p>
                    <a href={ item.url }>{ item.url }</a>
                </p>
                <hr />
            </div>
        ))
        return (
            <div>
                { elements }
            </div>
        )
    }

}