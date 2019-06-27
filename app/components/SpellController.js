import SpellService from "./spellService.js";

let _ss = new SpellService()

function drawSpells() {
    let spellElem = document.querySelector('#api-spells');
    let mySpells = _ss.Spells;
    let template = '';
    mySpells.forEach(spell => template += `<li>
    <button type="button" class="btn btn-primary btn-sm"
        onclick="app.controllers.spellController.getSpell('${spell.url}')">${spell.name}</button>
</li>`)
    spellElem.innerHTML = template
}

function drawSelectedSpell() {
    let selectedElem = document.querySelector('#active-spell');
    let selectedSpell = _ss.SelectedSpell
    let template = '';

}

export default class SpellController {
    constructor() {
        _ss.addSubscriber('spells', drawSpells)
        _ss.getSpells()
    }

    getSpell(url) {
        _ss.getSpell(url)
    }


}