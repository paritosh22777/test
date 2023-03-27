let arraySize = document.querySelector('.array-size');
let animationSpeed = document.querySelector(".speed");

let array = [];
function addBars(size){
    let arrayDiv = document.getElementById('array');
    for(let i = 0; i < size; i++) {
        let num = Math.floor(Math.random() * 100) + 1;
        array.push(num);
        let bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${array[i]*5}px`;
        arrayDiv.appendChild(bar);
    }   
}

function removeBars()
{
    document.querySelectorAll(".bar").forEach((bar) => {
        bar.remove();
        array.pop();
    });
}

let btn = document.querySelector('.new-array')
btn.addEventListener('click', () => {
    let addBtn = document.querySelector('.new-array');
    addBtn.textContent = 'Refresh array';
    bubbleSortBtn.disabled = false;
    selectionSortBtn.disabled = false;
    insertionSortBtn.disabled = false;
    quickSortBtn.disabled = false;
    mergeSortBtn.disabled = false;
    arraySize.disabled = false;
    animationSpeed.disabled = false;
    removeBars();
    addBars(arraySize.value);
});

arraySize.addEventListener('input', () => {
    removeBars();
    addBars(arraySize.value);
});

animationSpeed.addEventListener('input', () => {
    delay = 3000 - animationSpeed.value + 100;
    document.querySelectorAll('.bar').forEach((bar) => {
        bar.style.transitionDuration = ((delay/1000)*0.7) + 's';
    });  
})

let bubbleSortBtn = document.querySelector('.bubble-sort');
bubbleSortBtn.addEventListener('click', () => {
    let barsArray = document.querySelectorAll('.bar')
    BubbleSort(barsArray, barsArray.length);
})

let selectionSortBtn = document.querySelector('.selection-sort');
selectionSortBtn.addEventListener('click', () => {
    let barsArray = document.querySelectorAll('.bar')
    SelectionSort(barsArray, barsArray.length);
})

let insertionSortBtn = document.querySelector('.insertion-sort');
insertionSortBtn.addEventListener('click', () => {
    let barsArray = document.querySelectorAll('.bar')
    InsertionSort(barsArray, barsArray.length);
})

let quickSortBtn = document.querySelector('.quick-sort');
quickSortBtn.addEventListener('click', () => {
    let barsArray = document.querySelectorAll('.bar')
    QuickSort(barsArray, 0, barsArray.length-1);
})

let mergeSortBtn = document.querySelector('.merge-sort');
mergeSortBtn.addEventListener('click', () => {
    let barsArray = document.querySelectorAll('.bar')
    MergeSort(barsArray, 0, barsArray.length-1);
})

bubbleSortBtn.disabled = true;
selectionSortBtn.disabled = true;
insertionSortBtn.disabled = true;
quickSortBtn.disabled = true;
mergeSortBtn.disabled = true;
arraySize.disabled = true;
animationSpeed.disabled = true;