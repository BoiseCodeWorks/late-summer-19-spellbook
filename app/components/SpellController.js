import SpellService from "./spellService.js";

let _ss = new SpellService()

function drawSpells() {
    let spellElem = document.querySelector('#api-spells');
    let mySpells = _ss.Spells;
    let template = '';
    mySpells.forEach(spell => template += //tbd)
}

export default class SpellController {
    constructor() {
        _ss.getSpells()
    }
}