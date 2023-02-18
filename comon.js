/* take value from input and convert this integer type number into string type number. also give a alert when the input dose not a number*/
function takeValueById(InputId) {
    const stringTypeValue = document.getElementById(InputId).value;

    if (isNaN(stringTypeValue) || stringTypeValue <= 0) {
        alert('please inter a positive number or greater than 0')
    }
    else {
        const numberTypeValue = parseFloat(stringTypeValue);
        return numberTypeValue;
    }

}
/* basic calculation  */
function calculation(shapeName) {
    if (shapeName === 'triangle') {
        const base = takeValueById('triangle-b');
        const height = takeValueById('triangle-h');
        const triangleArea = 0.5 * base * height;
        console.log(triangleArea);
        return triangleArea;
    }
   else if(shapeName === 'rectangle') {
        const base = takeValueById('rectangle-w');
        const height = takeValueById('rectangle-l');
        const triangleArea =  base * height;
        console.log(triangleArea);
        return triangleArea;
    }
    else if (shapeName === 'Parallelogram') {
        const base = takeValueById('Parallelogram-b');
        const height = takeValueById('Parallelogram-h');
        const triangleArea =  base * height;
        console.log(triangleArea);
        return triangleArea;
    }
    else if (shapeName === 'rhombus') {
        const base = takeValueById('rhombus-d1');
        const height = takeValueById('rhombus-d2');
        const triangleArea =  base * height;
        console.log(triangleArea);
        return triangleArea;
    }
    else if (shapeName === 'pentagon') {
        const base = takeValueById('pentagon-p');
        const height = takeValueById('pentagon-b');
        const triangleArea =  0.5*base * height;
        console.log(triangleArea);
        return triangleArea;
    }
    
    else if (shapeName === 'ellipse') {
        const base = takeValueById('ellipse-a"');
        const height = takeValueById('ellipse-b');
        const triangleArea = 3.1416*base * height;
        console.log(triangleArea);
        return triangleArea;
    }
    
}

/* set inner text  */
function setText(fieldId, filedText) {
    const fieldName = document.getElementById(fieldId);
    fieldName.innerText = filedText;
}