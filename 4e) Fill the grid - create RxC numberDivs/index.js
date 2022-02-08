"use strict";


/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/

let valueRows = document.querySelector("#inputRows").value;
let valueCols = document.querySelector("#inputCols").value;



function gridMaker(gridContainer, R, C) {
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

  gridContainer.innerHTML = "";


  // for (let i = 0; i < C; i++) {

  // for (let j = 0; j < R; j++) {
  // gridContainer.appendChild(createNumberDiv());


  // };
  // };
  // };


  function gridMaker(gridContainer, R, C) {
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

    // Andra loopen här 
    let nTotal = R * C;
    for (let i = 0; i < nTotal; i++) {
      gridContainer.appendChild(createNumberDiv());
    }

  }


  console.log(gridMaker(document.querySelector("#grid"), valueRows, valueCols));

  function createNumberDiv() {
    let divs = document.createElement("div");
    divs.innerHTML = Math.floor(99 * Math.random());
    return divs;


  }
}

