let delay = 500;

async function swap(el1,el2)
{ 
    el1.style.background = '#ff0000';
    el2.style.background = '#ff0000';
    await new Promise(resolve => setTimeout(resolve, delay));

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

    await new Promise(resolve => setTimeout(resolve, delay));
}