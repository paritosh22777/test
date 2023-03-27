async function Merge(barsArray, leftIndex, midIndex, rightIndex) 
{
    for (let i = leftIndex; i <= rightIndex; i++) {
        barsArray[i].style.backgroundColor = 'red';
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    let leftArrSize = midIndex - leftIndex + 1, rightArrSize = rightIndex - midIndex;

    let leftArray = [], rightArray = [];

    for (let i = 0; i < leftArrSize; i++) 
    {
        leftArray[i] = barsArray[i + leftIndex].style.height;
    }

    for (let j = 0; j < rightArrSize; j++) 
    {
        rightArray[j] = barsArray[midIndex + 1 + j].style.height;
    }

    let leftCurrIndex = 0, rightCurrIndex = 0, barCurrIndex = leftIndex;

    while (leftCurrIndex < leftArrSize && rightCurrIndex < rightArrSize) 
    {
        let var1 = parseInt(leftArray[leftCurrIndex]);
        let var2 = parseInt(rightArray[rightCurrIndex]);
        if (var1 <= var2)
        {
            barsArray[barCurrIndex].style.height = leftArray[leftCurrIndex];
            leftCurrIndex++;
        }
        else 
        {
            barsArray[barCurrIndex].style.height = rightArray[rightCurrIndex];
            rightCurrIndex++;
        }
        barCurrIndex++;
    }

    while (leftCurrIndex < leftArrSize)
    {
        barsArray[barCurrIndex].style.height = leftArray[leftCurrIndex];
        leftCurrIndex++;
        barCurrIndex++;
    }

    while (rightCurrIndex < rightArrSize)
    {
        barsArray[barCurrIndex].style.height = rightArray[rightCurrIndex];
        rightCurrIndex++;
        barCurrIndex++;
    }

    await new Promise(resolve => setTimeout(resolve, delay));
}


async function MergeSort(barsArray, leftIndex, rightIndex) {
    if (leftIndex >= rightIndex) {
        return;
    }

    for (let i = leftIndex; i <= rightIndex; i++) {
        barsArray[i].style.backgroundColor = '#1212e0';
    }

    if ((rightIndex - leftIndex) == barsArray.length - 1)
        await new Promise(resolve => setTimeout(resolve, delay));

    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    for (let i = midIndex + 1; i <= rightIndex; i++) {
        barsArray[i].style.backgroundColor = "#bfc113";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    await MergeSort(barsArray, leftIndex, midIndex);

    for(let i = midIndex + 1; i <= rightIndex; i++) 
    {
        barsArray[i].style.backgroundColor = '#1212e0';
    }

    for(let i = leftIndex; i <= midIndex; i++)
    {
        barsArray[i].style.backgroundColor = "#bfc113";
    }
    
    await new Promise(resolve => setTimeout(resolve, delay));

    await MergeSort(barsArray, midIndex + 1, rightIndex);

    for (let i = leftIndex; i <= rightIndex; i++) {
        barsArray[i].style.backgroundColor = '#1212e0';
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    await Merge(barsArray, leftIndex, midIndex, rightIndex);

    if ((rightIndex - leftIndex) == barsArray.length - 1) 
    {
        for (let i = leftIndex; i <= rightIndex; i++)
        {
            barsArray[i].style.backgroundColor = "#008000";
        }
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}