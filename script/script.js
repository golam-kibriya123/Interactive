/*area calculator*/
let area = 0;
function areaCalculation(shapeName) {
    if (shapeName === 'triangle') {
        const base = setInnerText('triangle-b', 'triangle2-b')

        let height = setInnerText('triangle-h', 'triangle2-h');

        const area = 0.5 * base.innerText * height.innerText;

        isOk(area);


    }
    else if (shapeName === 'rectangle') {
        const base = setInnerText('rectangle-w', 'rectangle2-w');


        let height = setInnerText('rectangle-l', 'rectangle2-l');

        const area = base.innerText * height.innerText;

        isOk(area);
    }
    else if (shapeName === 'Parallelogram') {
        const base = setInnerText('Parallelogram-b', 'Parallelogram2-b');


        let height = setInnerText('Parallelogram-h', 'Parallelogram2-h');

        const area = base.innerText * height.innerText;

        isOk(area);
    }
    else if (shapeName === 'rhombus') {
        const base = setInnerText('rhombus-d1', 'rhombus2-d1');


        let height = setInnerText('rhombus-d2', 'rhombus2-d2');

        const area = base.innerText * height.innerText;


        isOk(area);
    }
    else if (shapeName === 'pentagon') {
        const base = stringTONumber('pentagon-p', 'pentagon2-p');


        let height = stringTONumber('pentagon-b', 'pentagon2-b');

        const area = 0.5 * base.innerText * height.innerText;


        isOk(area);
    }
    else if (shapeName === 'ellipse') {
        const base = setInnerText('ellipse-a', 'ellipse2-a');

        let height = setInnerText('ellipse-b', 'ellipse2-b');

        const area = 3.1416 * base.innerText * height.innerText;


        isOk(area)
    }
}
/*button event*/

btnEvent('calculate-triangle', 'triangle');
btnEvent('calculate-rectangle', 'rectangle');
btnEvent('calculate-Parallelogram', 'Parallelogram');
btnEvent('calculate-rhombus', 'rhombus');
btnEvent('calculate-pentagon', 'pentagon');
btnEvent('calculate-ellipse', 'ellipse');


/*color changer*/
colorChanger('card1');
colorChanger('card2');
colorChanger('card3');
colorChanger('card4');
colorChanger('card5');
colorChanger('card6');





