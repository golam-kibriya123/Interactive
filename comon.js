
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
/* set inner text  */
function setText(fieldId, filedText) {
    const fieldName = document.getElementById(fieldId);
    fieldName.innerText = filedText;

};




/*  calculation  */
function calculation(shapeName) {
    if (shapeName === 'triangle') {
        const base = takeValueById('triangle-b');
        const height = takeValueById('triangle-h');
        const triangleArea = 0.5 * base * height;
        createNadAdded();
        setText('area-value', triangleArea);

        return triangleArea;
    }
    else if (shapeName === 'rectangle') {
        const rectangleW = takeValueById('rectangle-w');
        const rectangleL = takeValueById('rectangle-l');
        const rectangle = rectangleW * rectangleL;
        createNadAdded();
        setText('area-value', rectangle);
        return rectangle;
    }
    else if (shapeName === 'Parallelogram') {
        const ParallelogramB = takeValueById('Parallelogram-b');
        const ParallelogramH = takeValueById('Parallelogram-h');
        const ParallelogramArea = ParallelogramB * ParallelogramH;
        createNadAdded();
        setText('area-value', ParallelogramArea);
        return ParallelogramArea;
    }
    else if (shapeName === 'rhombus') {
        const rhombusD1 = takeValueById('rhombus-d1');
        const rhombusD2 = takeValueById('rhombus-d2');
        const rhombusArea = rhombusD1 * rhombusD2;
        createNadAdded();
        setText('area-value', rhombusArea);
        return rhombusArea;
    }
    else if (shapeName === 'pentagon') {
        const pentagonP = takeValueById('pentagon-p');
        const pentagonB = takeValueById('pentagon-b');
        const pentagonArea = 0.5 * pentagonB * pentagonP;
        createNadAdded();
        setText('area-value', pentagonArea);
        return pentagonArea;
    }

    else if (shapeName === 'ellipse') {
        const ellipseA = takeValueById('ellipse-a');
        const ellipseB = takeValueById('ellipse-b');
        const ellipseArea = ellipseA * ellipseB;
        createNadAdded();
        setText('area-value', ellipseArea);

        return ellipseArea;
    }

}
/* create element and added*/
function createNadAdded() {
    const parentElement = document.getElementById('area-parent');
    const childElement = document.createElement("div")
    childElement.classList.add('flex', 'justify-between', 'mt-4');
    childElement.innerHTML = ` <p> Triangle <span id="area-value" class="ml-3"></span>cm<sup>2</sup> </p>
    <button class="bg-sky-600 px-3 py-1 rounded-md text-white text-sm">Convert to m<sup>2</sup></button>`;
    parentElement.appendChild(childElement);
}























/*navigation control*/
document.getElementById('blog-btn').addEventListener('click', function () {

    window.location.href = "http://127.0.0.1:5500/blog.html"

})
