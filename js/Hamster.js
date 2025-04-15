import {Pet} from "./Pet.js";

export class Hamster extends Pet {
    constructor(name, furColor) {
        super(name, furColor);
        this.sound = 'krimst';
        this.emoji = '🐹';
    }
    voice() {
        const sound = (' ' + this.sound).repeat(2);
        const emoji = (' ' + this.emoji).repeat(2);
                return `${this.name}: ${sound} ${emoji}`;    }
}