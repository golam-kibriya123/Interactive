
function btnEvent(id, shapeName) {

    document.getElementById(id, shapeName).addEventListener('click', function () {
        return calculation(shapeName);

    })
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








