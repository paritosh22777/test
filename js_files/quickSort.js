async function Partition(barsArray, leftIndex, rightIndex) {
    let pivot = parseInt(barsArray[leftIndex].style.height);
    let left = leftIndex - 1, right = rightIndex + 1;
    while (true) {
        do {
            left++;
            if (left - 1 >= leftIndex) {
                barsArray[left - 1].style.backgroundColor = '#ff0000';
                barsArray[left].style.backgroundColor = '#1212e0';
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        while (parseInt(barsArray[left].style.height) < pivot);
        do {
            right--;
            if (right + 1 <= rightIndex) {
                barsArray[right + 1].style.backgroundColor = '#40e0d0';
                barsArray[right].style.backgroundColor = '#1212e0';
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        while (parseInt(barsArray[right].style.height) > pivot);
        if (left >= right) {
            for (let i = 0; i < barsArray.length; i++) {
                barsArray[i].style.backgroundColor = '#bfc113';
            }
            return right;
        }
        await swap(barsArray[left], barsArray[right]);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

async function QuickSort(barsArray, leftIndex, rightIndex) {
    if (leftIndex >= rightIndex)
    {
        for(let i = 0; i < barsArray.length; i++)
    {
        barsArray[i].style.backgroundColor = '#008000';
    }
    await new Promise(resolve => setTimeout(resolve, delay));
        return;
    }
    let pivotIndex = await Partition(barsArray, leftIndex, rightIndex);
    await QuickSort(barsArray, leftIndex, pivotIndex);
    await QuickSort(barsArray, pivotIndex + 1, rightIndex);    
}