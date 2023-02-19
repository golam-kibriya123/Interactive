/*area calculator*/
let area = 0;
function areaCalculation(shapeName) {
    if (shapeName === 'triangle') {
        const firstINput = stringTONumber('triangle-b')
        let base = takeById('triangle2-b');
        base.innerText = firstINput;

        let secondInput = stringTONumber('triangle-h');
        let height = takeById('triangle2-h');
        height.innerText = secondInput;
        const area = 0.5 * base.innerText * height.innerText;

        isOk(area);

    }
    else if (shapeName === 'rectangle') {
        const firstINput = stringTONumber('rectangle-w');
        let base = takeById('rectangle2-w');
        base.innerText = firstINput;

        let secondInput = stringTONumber('rectangle-l');
        let height = takeById('rectangle2-l');
        height.innerText = secondInput;
        const area = base.innerText * height.innerText;


        isOk(area);
    }
    else if (shapeName === 'Parallelogram') {
        const firstINput = stringTONumber('Parallelogram-b');
        let base = takeById('Parallelogram2-b');
        base.innerText = firstINput;

        let secondInput = stringTONumber('Parallelogram-h');
        let height = takeById('Parallelogram2-h');
        height.innerText = secondInput;
        const area = base.innerText * height.innerText;

        isOk(area);
    }
    else if (shapeName === 'rhombus') {
        const firstINput = stringTONumber('rhombus-d1');
        let base = takeById('rhombus2-d1');
        base.innerText = firstINput;

        let secondInput = stringTONumber('rhombus-d2');
        let height = takeById('rhombus2-d2');
        height.innerText = secondInput;
        const area = base.innerText * height.innerText;


        isOk(area);
    }
    else if (shapeName === 'pentagon') {
        const firstINput = stringTONumber('pentagon-p');
        let base = takeById('pentagon2-p');
        base.innerText = firstINput;

        let secondInput = stringTONumber('pentagon-b');
        let height = takeById('pentagon2-b');
        height.innerText = secondInput;
        const area = 0.5 * base.innerText * height.innerText;


        isOk(area);
    }
    else if (shapeName === 'ellipse') {
        const firstINput = stringTONumber('ellipse-a');
        let base = takeById('ellipse2-a');
        base.innerText = firstINput;

        let secondInput = stringTONumber('ellipse-b');
        let height = takeById('ellipse2-b');
        height.innerText = secondInput;
        const area = 3.1416 * base.innerText * height.innerText;


        isOk(area)
    }
}


btnEvent('calculate-triangle', 'triangle');
btnEvent('calculate-rectangle', 'rectangle');
btnEvent('calculate-Parallelogram', 'Parallelogram');
btnEvent('calculate-rhombus', 'rhombus');
btnEvent('calculate-pentagon', 'pentagon');
btnEvent('calculate-ellipse', 'ellipse');



colorChanger('card1');
colorChanger('card2');
colorChanger('card3');
colorChanger('card4');
colorChanger('card5');
colorChanger('card6');








