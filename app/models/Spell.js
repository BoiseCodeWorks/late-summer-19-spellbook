export default class Spell {
    constructor(data) {
        this._id = data._id || data.id
        this.name = data.name
        this.description = data.desc || data.description
        this.duration = data.duration
        this.level = data.level
        this.page = data.page
        this.url = data.url
        this.range = data.range
    }

    get Template() {
        return `
            <ul>
            <li>${this.name}</li>
            <li>${this.description}</li>
            <li>${this.duration}</li>
            <li>${this.level}</li></ul>
            
        `
    }
    get MyTemplate() {
        return `
            <ul>
            <li>${this.name}</li>
            <li>${this.description}</li>
            <li>${this.duration}</li>
            <li>${this.level}</li></ul>
            <button class="btn btn-sm btn-secondary" onclick="app.controllers.spellController.forgetSpell('${this._id}')">Forget
                    Spell</button>
            
        `
    }

}