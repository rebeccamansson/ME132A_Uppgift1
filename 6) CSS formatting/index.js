"use strict";


/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/

let valueRows = document.querySelector("#inputRows").value;
let valueCols = document.querySelector("#inputCols").value;



function gridMaker(gridContainer, R, C) {
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

    gridContainer.innerHTML = "";


    for (let i = 0; i < C; i++) {


        for (let j = 0; j < R; j++) {
            gridContainer.appendChild(createNumberDiv());


        };
    };
};



console.log(gridMaker(document.querySelector("#grid"), valueRows, valueCols));

function createNumberDiv() {
    let divs = document.createElement("div");
    divs.innerHTML = Math.floor(99 * Math.random());
    divs.addEventListener("click", function () {
        divs.classList.toggle("selected");
        updateResults("selected");
    });


    return divs;


};

console.log(gridMaker(document.querySelector("#grid"), valueRows, valueCols));


let buttonC = document.querySelector("button");
buttonC.addEventListener("click", function () {


    console.log(gridMaker(document.querySelector("#grid"), valueRows, valueCols));


});










