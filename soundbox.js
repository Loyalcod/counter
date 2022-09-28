let countEl = document.getElementById('countel')
// console.log(countEl.innerText)

let count = 0

function increment(){
    
    count += 1
    countEl.innerText = count

}

let getRecent = document.getElementById('storein')

function save(){

    getRecent.innerText += count + ' - '
    countEl.innerText = 0
    count = 0
    
    
}

