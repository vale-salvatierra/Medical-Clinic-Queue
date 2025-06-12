class Cancion {
    constructor(nombre, artista, duracion) {
        this.nombre = nombre;
        this.artista = artista;
        this.duracion = duracion;
        this.next = null;
        this.prev = null;
    }
}

class ListaDeReproduccion { //administra la estructura completa de la lista
    constructor(nombre, artista, duracion) {
        const song = new Cancion(nombre, artista, duracion)
        this.tail = song
        this.head = song
        this.currentSong = song
        this.isPlaying = false
        this.length = 1
    }
    agregarCancion(nombre, artista, duracion) { //Agregar un nodo al final de la lista (se vuelve la cola)
        const newSong = new Cancion(nombre, artista, duracion) //crea un nuevo nodo
        newSong.prev = this.tail
        this.tail.next = newSong; //hace que el next del nodo actual, apunte al nuevo nodo.
        this.tail = newSong; //actualiza la tail para que ahora sea el nuevo nodo.
        this.length++; //aumenta el largo de la lista por que estamos agregando un nuevo nodo.

        return this
    }

    getTheSong(nombre) { //Retorna el nodo que esta en una posicion especifica.

        let currentNode = this.head;
        while (currentNode != null) //Recorre la lista hasta llegar al nodo numero (index)
        {
            if (currentNode.nombre == nombre) {
                return currentNode;
            }


            currentNode = currentNode.next;
        }
        console.log("Nombre inválido");
        return null;

    }

    remove(nombre) {

        let nodoAEliminar = this.getTheSong(nombre)
        if (!nodoAEliminar) return this;

        if (this.head.nombre == nombre) { //si quieren eliminar el primer elemento(head)
            this.head = this.head.next //head se convierte en la siguiente 
            this.length--
            if (this.length == 0) { //si esta vacion al elimnar
                this.tail = null //tail apunta a null
            }
            return this
        }

        let currentNode = this.head; //para empezar desde el principio de la lista
        while (currentNode.next != nodoAEliminar) {  //la recorre hasta que currentNode sea el que esta antes de nodoAEliminar
            currentNode = currentNode.next
        }

        currentNode.next = nodoAEliminar.next



        if (this.tail == nodoAEliminar) { //si se quiere eliminar el ultimo 
            this.tail = currentNode; //tail se convierte en el anterior
        }

        this.length--
        return this
    }

    mostrar() {
        let index = 1
        let currentNode = this.head
        while (currentNode) {
            console.log(`${index}. 🎵 Nombre: ${currentNode.nombre} | Artista: ${currentNode.artista} | Duración: ${currentNode.duracion} segundos`)
            currentNode = currentNode.next
            index++
        }
    }

    duracionTotal() {
        let currentNode = this.head
        let total = 0
        while (currentNode) {
            total += currentNode.duracion
            currentNode = currentNode.next
        }
        return total
    }

    contarCanciones() {
        return this.length
    }

    reproducir() {
        if (!this.head) {
            console.log("La list de reproduccion esta vacia")
            return
        } else {
            this.currentSong = this.head
            this.isPlaying = true
            console.log(`" La lista comienza a reproducirse. Primera canción: "${this.currentSong.nombre}"`)
        }
    }

    play() {
        if (this.currentSong) {
            if(this.isPlaying){
                console.log(`Ya se está reproduciendo: "${this.currentSong.nombre}"`)
            }else{
                this.isPlaying = true
                console.log(`▶️ Reproduciendo: ${this.currentSong.nombre} - ${this.currentSong.artista} (${this.currentSong.duracion} segundos)`);
            }
            
        } else {
            console.log(" No hay ninguna canción para reproducir.");
        }
    }

    prev() {
        if (this.currentSong && this.currentSong.prev) {
            this.currentSong = this.currentSong.prev
            this.isPlaying = false
            console.log(`Listo para reproducir: "${this.currentSong.nombre}"`)
        } else {
            console.log("Estas en la primera cancion")
        }
    }

    next() {
        if (this.currentSong && this.currentSong.next) {
            this.currentSong = this.currentSong.next
            this.isPlaying = false
            console.log(`Listo para reproducir: "${this.currentSong.nombre}"`)
        } else {
            console.log("Estas en la ultima cancion")
        }
    }

    stop() {
        if (this.isPlaying && this.currentSong) {
            
            console.log(`La canción "${this.currentSong.nombre}" se ha pausado.`)
            this.isPlaying = false
        } else {
            console.log("No hay ninguna canción en reproducción.");
        }
    }
}

let myPlaylist = new ListaDeReproduccion("hola", "vale", 201);
myPlaylist.agregarCancion("Chica", "Isabel", 198)
myPlaylist.agregarCancion("Como", "Sofi",201)
myPlaylist.agregarCancion("Estas", "Jovan", 209)