async function InsertionSort(barsArray, n) {
       
    for (let i = 1; i < n; i++) {

       let j = i-1;
       let key = parseInt(barsArray[i].style.height);

       barsArray[j+1].style.backgroundColor = "#1212e0";
       barsArray[j].style.backgroundColor = "#1212e0";
       await new Promise(resolve => setTimeout(resolve, delay));

        while (j >= 0 && parseInt(barsArray[j].style.height) > key) {

            await swap(barsArray[j+1], barsArray[j]);

            barsArray[j+1].style.backgroundColor = "#bfc113";
            barsArray[j].style.backgroundColor = "#1212e0";
            await new Promise(resolve => setTimeout(resolve, delay));

            j--;
        
            if (j >= 0) {
                barsArray[j].style.backgroundColor = "#1212e0";
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    
        if (j >= 0)
            barsArray[j].style.backgroundColor = "#bfc113";
        barsArray[j+1].style.backgroundColor = "#bfc113";
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    for (let i = 0; i < n; i++) {
        barsArray[i].style.backgroundColor = "#008000";
    }
    await new Promise(resolve => setTimeout(resolve, delay));
}