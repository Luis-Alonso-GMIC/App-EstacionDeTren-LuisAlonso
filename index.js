let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(countEl)
let count = 0

function increment(){
    
    count = count + 1
    countEl.textContent = count
    
}

function resta() {
    if (count > 0) {
        count-- //Esto es como hacer (count = count - 1);
        countEl.textContent = count;
    } else {

        alert('No puedes seguir restando, el valor es 0, ESPABILA!!!')
        
    }
} 

function save() {
    
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    

}



