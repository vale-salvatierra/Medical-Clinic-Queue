export class Paciente {
    constructor(name, age, symptoms) {
        this.name = name;
        this.age = age;
        this.symptoms = symptoms;
        this.arrivalTime = new Date().toLocaleTimeString();
        this.next = null; 
    }
}