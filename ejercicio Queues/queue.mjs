import { Paciente } from "./paciente.mjs";

export class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(nombre, edad, sintoma) {
        const newPaciente = new Paciente(nombre, edad, sintoma);
        if (!this.first) {
            this.first = newPaciente;
            this.last = newPaciente;
        } else {
            this.last.next = newPaciente;
            this.last = newPaciente;
        }
        this.length++;

        return this;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        let removed = this.first
        this.first = this.first.next;
        if (!this.first) {
            this.last = null;
        }
        
        this.length--;

        return removed;
    }
    isEmpty() {
        return this.length === 0;
    }

    toArr(){
        const arr = []
        let current = this.first
        while(current){
            arr.push(current)
            current = current.next
        }

        return arr

    }
}