"use strict";


/*

We will continue with our work from 4b.
We need to fix these two things:

First:
gridMaker must be called each time the user clicks on the button (See index.html).


Second:
We now need to make sure that when we call (anropar) gridMaker we must use
the values in #inputRows and #inputColumns as arguments.

*/



function gridMaker(gridContainer, R, C) {

  // Update the CSS properties to give the grid the correct dimensions
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

}



document.querySelector("button").addEventListener("click", function () {

  gridMaker(
    document.querySelector("#grid"),
    document.querySelector("#inputRows").value,
    document.querySelector("#inputCols").value
  );
  gridMaker(document.querySelector("#grid"), (document.querySelector("#inputRows").value), (document.querySelector("#inputCols").value));
  console.log(document.querySelector("#inputRows").value, document.querySelector("#inputCols").value)
});

