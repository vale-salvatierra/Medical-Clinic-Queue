class Node {
    constructor(value) {
        this.value = value
        this.next = null
        
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
            console.log("Stack vacio")
        } else {
            return this.top.value
        }
    }
    push(value) {
        const newNode = new Node(value)
        if (this.length == 0) {
            this.top = newNode
            this.bottom = newNode
            this.is
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }

    pop(){
        if (this.length == 0) return null
        const removedNode = this.top
        this.top = this.top.next
        this.length--

        if(this.length == 0){
            this.bottom = null
        }

        return removedNode
    }


}

let myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
