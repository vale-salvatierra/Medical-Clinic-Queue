class Node {  // define como sera cada nodo
    constructor(value){
        this.value = value, //guarda el valor que sera almacenado
        this.next = null // referencia al siguinete nodo
    }
}

class MySinglyLinkedList { //administra la estructura completa de la lista
    constructor(value) {
        this.head = { // apunta al primer nodo
            value: value,
            next: null
        }
        this.tail = this.head //apunta al ultimo nodo.
        this.length = 1 // cuantos nodos hay en la lista.
    }
    append(value){ //Agregar un nodo al final de la lista (se vuelve la cola)
        const newNode = new Node(value) //crea un nuevo nodo
        this.tail.next = newNode; //hace que el next del nodo actual, apunte al nuevo nodo.
        this.tail = newNode; //actualiza la tail para que ahora sea el nuevo nodo.
        this.length++; //aumenta el largo de la lista por que estamos agregando un nuevo nodo.

        return this
    }
    prepend(value){ // Agregar un nuevo nodo al principio de la lista (ahora es la cabeza y lo que habia antes, se vuelve su next)
        const newNode = new Node(value); //crea nuevo nodo.
        newNode.next = this.head; // su next apunta al nodo actual.
        this.head = newNode; //head ahora apunta al nuevo nodo.
        this.length++; //aumenta el largo de la lista por que estamos agregando un nuevo nodo.

        return this
    }
    insert(index, value){ //inserta un nodo en la posicion especifica(index)
        if(index >= this.length) //si el indice es mayor o igual al largo de la lista, lo agrega al final (append)
        {
            return this.append(value);
        }

        const newNode = new Node(value); //crea un nuevo nodo
        const firstPointer = this.getTheIndex(index-1); //obtiene la posicion del nodo justo antes del indice provided.
        const holdingPointer = firstPointer.next; //conecta el nuevo nodo entre firstPointer y holdingPointer.
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this
    }
    getTheIndex(index){ //Retorna el nodo que esta en una posicion especifica.
        let counter = 0;
        let currentNode = this.head;
        while(counter != index) //Recorre la lista hasta llegar al nodo numero (index)
        {
            currentNode= currentNode.next;
            counter++;
        }
        return currentNode;
    }


    remove(index){
        if(index == 0){ //si quieren eliminar el primer elemento(head)
            this.head = this.head.next //head se convierte en la siguiente 
            this.length-- 
            if (this.length == 0){ //si esta vacion al elimnar
                this.tail = null //tail apunta a null
            }
            return this 
        }

        const firstPointer = this.getTheIndex(index -1) //posicion del nodo antes del indice.
        const holdingPointer = this.getTheIndex(index +1) //posicion del nodo despues del indice.
        
        firstPointer.next = holdingPointer

        if(index == this.length -1){ //si se quiere eliminar el ultimo 
            this.tail = firstPointer; //tail se convierte en el anterior
        }

        this.length--
        return this
    }
}

let myLinkedList = new MySinglyLinkedList(1);