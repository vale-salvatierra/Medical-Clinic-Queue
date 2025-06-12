class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }

    
    shift() {
        const firstItem = this.data[0];
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    reverse(){
        let temp = {}
        let j = 0
        for(let i = this.length - 1; i >= 0; i--){
            temp[j] = this.data[i]
            j++        
        }

        for(let i = 0; i < this.length; i++){
            this.data[i] = temp[i]
        }
        return this.data
    }

    slice(start, end) {
        let result = {};

        if (start < 0) {
            start = this.length + start;
        }
        if (end < 0) {
            end = this.length + end;
        }
        if (start >= 0 && end < this.length) {
            let j = 0
            for (let i = start; i < end; i++) {
                result.data[j] = this.data[i];
                j++;
            }
            result.length = j;
            return result;
        }
    }

    join(sep = ","){
        let result = '';
        for(let i = 0; i < this.length; i++){
            result += this.data[i]
            if(i < this.length - 1){
                result += sep
            }
        }
        return result;
    }

    forEach(callback){
        for(let i = 0; i < this.length; i++){
            callback(this.data[i])
        }

    }
}

const myArray = new MyArray();
myArray.push('a')
myArray.push('b')
myArray.push('c')
myArray.push('d')
console.log(myArray)

myArray.join("")
console.log(myArray)