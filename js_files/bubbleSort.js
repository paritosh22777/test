async function BubbleSort(barsArray, n)
{
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n - i - 1; j++)
        {
            barsArray[j].style.backgroundColor = '#1212e0';
            barsArray[j+1].style.backgroundColor = '#1212e0';
            await new Promise(resolve => setTimeout(resolve, delay));
            let var1 = parseInt(barsArray[j].style.height);
            let var2 = parseInt(barsArray[j+1].style.height);
            if(var1 > var2)
            {
                await swap(barsArray[j], barsArray[j+1]);
            }
            barsArray[j].style.backgroundColor = '#bfc113';
            barsArray[j+1].style.backgroundColor = '#bfc113';
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        barsArray[n - i - 1].style.backgroundColor = '#008000';
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}