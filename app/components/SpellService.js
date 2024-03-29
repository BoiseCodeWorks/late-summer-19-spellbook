import Spell from "../models/spell.js";

function formatUrl(url) {
    return '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent(url)
}

// @ts-ignore
let _spellApi = axios.create({
    baseURL: ''
})

// @ts-ignore
let _bcwApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Darryl/spells/'
})

let _state = {
    spells: [],
    mySpells: [],
    selectedSpell: {}
}

let _subscribers = {
    spells: [],
    mySpells: [],
    selectedSpell: []
}

function setState(prop, data) {
    _state[prop] = data
    _subscribers[prop].forEach(fn => fn())
}

export default class SpellService {
    forgetSpell(spellId) {
        _bcwApi.delete(spellId)
            .then(res => {
                console.log(res.data.message)
                this.getMySpells()
            })
            .catch(err => console.error(err))
    }

    addSpell() {
        _bcwApi.post('', this.SelectedSpell)
            .then(res => {
                console.log(res.data)
                this.getMySpells()
            })
            .catch(err => console.error(err))
    }
    getSpell(url) {
        _spellApi.get(formatUrl(url))
            .then(res => {
                console.log(res.data)
                setState('selectedSpell', res.data)
            })
            .catch(err => console.error(err))

    }

    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    }

    get Spells() {
        return _state.spells.map(s => new Spell(s))
    }

    get SelectedSpell() {
        return new Spell(_state.selectedSpell)
    }
    get MySpells() {
        return _state.mySpells.map(s => new Spell(s))
    }
    getMySpells() {
        _bcwApi.get('')
            .then(res => {
                console.log(res.data.data)
                setState('mySpells', res.data.data)
            })
            .catch(err => console.error(err))
    }


    getSpells() {
        _spellApi.get(formatUrl('http://dnd5eapi.co/api/spells/'))
            .then(res => {
                console.log("Got spells!", res.data.results)
                setState('spells', res.data.results)
            })
    }

}