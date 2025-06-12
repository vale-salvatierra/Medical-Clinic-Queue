class Page {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
        
    }

    peek() {
        if (this.length == 0) {
            console.log("Historial vacio")
        } else {
            return this.top.value
        }
    }
    push(value) {
        const newPage = new Page(value)
        if (this.length === 0) {
            this.top = newPage
            this.bottom = newPage

        } else {
            const holdingPointer = this.top
            this.top = newPage
            this.top.next = holdingPointer
        }
        
        this.length++
        return this
    }

    pop() {
        if (this.length == 0) return null
        const removedPage = this.top
        this.top = this.top.next
        this.length--

        if (this.length == 0) {
            this.bottom = null
        }

        return removedPage.value
    }
    isEmpty() {
        return this.length === 0
    }

    print(){
        if (this.isEmpty()) {
            console.log("Historial vacío")
            return
        }
        let index = 1
        let currentPage = this.top
        while (currentPage) {
            console.log(`${index}.  Nombre:  ${currentPage.value}`)
            currentPage = currentPage.next
            index++
        }
    }
}

let myStack = new Stack()
myStack.push("Google")
myStack.push("Youtube")
myStack.push("Chatgpt")
myStack.push("theGretaThunbergFoundation")
