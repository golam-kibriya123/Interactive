
function btnEvent(id,shapeName) {
    document.getElementById(id).addEventListener('click', function () {
        return calculation(shapeName);


    })
}

btnEvent('calculate-triangle','triangle');
btnEvent('calculate-rectangle','rectangle');
btnEvent('calculate-Parallelogram','Parallelogram');
btnEvent('calculate-rhombus','rhombus');
btnEvent('calculate-pentagon','pentagon');
btnEvent('calculate-ellipse','ellipse');

