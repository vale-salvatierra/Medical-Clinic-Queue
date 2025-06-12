import { Queue } from "./queue.mjs";

const form = document.querySelector('#form-turno')
const fullName = document.querySelector('#fullName')
const inputAge = document.querySelector('#inputAge')
const sympt = document.querySelector('#symptoms')
const divCurrentTurn = document.querySelector('#divCurrentTurn')
const btnAtender = document.querySelector('#btnAtender')
const tBody = document.querySelector('#tBody')
const nextTurn = document.querySelector('#nextTurn')

const queue = new Queue()


const waitingList = () =>{
    let patients = queue.toArr()
    tBody.innerHTML=''

    if(patients.length === 0){        
        let h2 = document.createElement('h2')
        h2.textContent = 'No new Patients'
        tBody.appendChild(h2)
    }
    
    patients.forEach((e, i) =>{
        const tr = document.createElement('tr')
        const th = document.createElement('th')
        th.setAttribute('scope', 'row')
        th.textContent = `${i+1}`
        
        const tdName = document.createElement('td')
        tdName.textContent = `${e.name}`


        const tdAge = document.createElement('td')
        tdAge.textContent = `${e.age}`


        const tdSympt = document.createElement('td')
        tdSympt.textContent = `${e.symptoms}`


        const tdTime = document.createElement('td')
        tdTime.textContent = `${e.arrivalTime}`

        tBody.appendChild(tr)
        tr.appendChild(th)
        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tr.appendChild(tdSympt)
        tr.appendChild(tdTime)
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const name = fullName.value
    const age = inputAge.value
    const symptoms = sympt.value

    queue.enqueue(name,age,symptoms)
    waitingList()
    form.reset()
})

btnAtender.addEventListener('click',() => {
    const atendiendo = queue.dequeue()
    if(atendiendo){
        divCurrentTurn.innerHTML = `<h2 class="fw-bold fs-2">${atendiendo.name}</h2>
        <p class="fw-normal fs-3">${atendiendo.age} - ${atendiendo.symptoms}</p>`
    }else{
        divCurrentTurn.textContent = '---'
    }

    const nextPatient = queue.peek()
    if(nextPatient){
        nextTurn.innerHTML = `<h3 class="fw-normal fs-6"><b>Next patient: </b>${nextPatient.name}</h3>`
    }else{
        nextTurn.innerHTML = ''
    }

    waitingList()
})


