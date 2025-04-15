import {Pet} from "./Pet.js";

export class Cat extends Pet {
    constructor(name, furColor) {
        super(name, furColor);
        this.sound = 'miau';
        this.emoji = '🐈';
    }
    voice() {
        const sound = (' ' + this.sound).repeat(2);
        const emoji = (' ' + this.emoji).repeat(2);
        return `${this.name}: ${sound} ${emoji}`;
        }
}