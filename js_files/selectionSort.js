async function SelectionSort(barsArray, n)
{
    for(let i = 0; i < n - 1; i++)
    {
        let minIndex = i;
        barsArray[minIndex].style.backgroundColor = 'blue';
        await new Promise(resolve => setTimeout(resolve, delay));
        for (let j = i+1; j < n; j++) {
            barsArray[j].style.backgroundColor = 'blue';
            await new Promise(resolve => setTimeout(resolve, delay));
            var1 = parseInt(barsArray[j].style.height);
            var2 = parseInt(barsArray[minIndex].style.height);
            if(var1 < var2)
            {
                barsArray[minIndex].style.backgroundColor = '#BFC113';
                minIndex = j;
                barsArray[minIndex].style.backgroundColor = 'blue';
                await new Promise(resolve => setTimeout(resolve, delay))
            }
            if(minIndex != j)
            {
                barsArray[j].style.backgroundColor = '#BFC113';
                await new Promise(resolve => setTimeout(resolve, delay))
            }
        }
        if(minIndex != i)
            await swap(barsArray[minIndex], barsArray[i]);
        barsArray[minIndex].style.backgroundColor = '#BFC113';
        barsArray[i].style.backgroundColor = 'green'
        await new Promise(resolve => setTimeout(resolve, delay))
    }
    barsArray[n-1].style.background = 'green';
}