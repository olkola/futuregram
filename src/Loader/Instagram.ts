export default class Instagram {

    public getHashtags(user: string): string[] {
        fetch('https://www.instagram.com/whizzzkid/?__a=1', {
                mode: 'no-cors'
            }).then((response) => {
                console.log(response.status)
                return response.json()
            }).then(data => {
                console.log(data)
            })
        return []
    }

}
