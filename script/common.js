
/*take by id*/
function takeById(idName) {
    const idName2 = document.getElementById(idName);
    return idName2;
}
/*take input and convert string to number*/
function stringTONumber(stringValue) {
    const inputString = document.getElementById(stringValue);
    const inputStringValue = inputString.value;
    const numberValue = parseInt(inputStringValue);
    return numberValue;
}

/*negative number or string checker */
function isOk(inputValue) {
    if (isNaN(inputValue) == true || inputValue <= 0) {
        return alert('please input a positive number');
    }
    else {
        titleManager('title1');
        createNadAdded(inputValue.toFixed(2));

    }

}
/*set as inner text and clear input field*/
function setInnerText(inputId1, inputId2) {


    let firstINput = stringTONumber(inputId1)

    let base = takeById(inputId2);
    if (firstINput <= 0 || isNaN(firstINput) === true) {
        return 0;
    }
    else {
        base.innerText = firstINput;
        document.getElementById(inputId1).value = "";
        return base;

    }
}

/*button event*/
function btnEvent(id, shapeName) {
    document.getElementById(id).addEventListener('click', function () {

        areaCalculation(shapeName);


    });
}

/*title*/
let newTitle = '';
function titleManager(titleId) {
    const getTitle = document.getElementById(titleId);
    newTitle = getTitle.innerText;
    return newTitle;

}
/*serial number*/
let number = 0;

function serial() {
    do {
        number++;
    }
    while (number < 1);
    return number;
}
/* create element and added*/
function createNadAdded(innerValue) {
    const parentElement = document.getElementById('area-parent');
    const childElement = document.createElement("div")
    childElement.classList.add('flex', 'justify-between', 'mt-4');
    childElement.innerHTML = ` <p class="text-sm" >${serial()}. ${newTitle} <span id="area-value" class="ml-2">${innerValue}</span>cm<sup>2</sup> </p>
    <button class="bg-sky-600 px-3 py-1 rounded-md text-white text-sm">Convert to m<sup>2</sup></button>`;
    parentElement.appendChild(childElement);
}

/*random color creator */
function colorChanger(cardId) {
    document.getElementById(cardId).addEventListener('mouseenter', function () {
        const colorCreator = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
        document.getElementById(cardId).style.backgroundColor = colorCreator;
        document.getElementById(cardId).addEventListener('mouseleave', function () {
            document.getElementById(cardId).style.backgroundColor = 'white';
        })
    })
}
