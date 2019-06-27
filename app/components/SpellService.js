import Spell from "../models/spell.js";

function formatUrl(url) {
    return '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent(url)
}

let _spellApi = axios.create({
    baseURL: ''
})

let _state = {
    spells: []
}

let _subscribers = {
    spells: []
}

function setState(prop, data) {
    _state[prop] = data
    _subscribers[prop].forEach(fn => fn())
}

export default class SpellService {
    getSpell(url) {
        _spellApi.get(formatUrl(url))
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.error(err))
    }

    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    }

    get Spells() {
        return _state.spells.map(s => new Spell(s))
    }

    getSpells() {
        _spellApi.get(formatUrl('http://dnd5eapi.co/api/spells/'))
            .then(res => {
                console.log("Got spells!", res.data.results)
                setState('spells', res.data.results)
            })
    }

}