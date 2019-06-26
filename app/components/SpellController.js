import SpellService from "./spellService.js";

let _ss = new SpellService()


export default class SpellController {
    constructor() {
        _ss.getSpells()
    }
}