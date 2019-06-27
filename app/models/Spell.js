export default class Spell {
    constructor(data) {
        this._id = data._id || data.id
        this.name = data.name
        this.desc = data.desc
        this.duration = data.duration
        this.level = data.level
        this.page = data.page
        this.url = data.url
    }

    get Template() {
        return `
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        `
    }

}