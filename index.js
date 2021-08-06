// getting handlers
const boxes = [...document.getElementsByClassName("box")];
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const reset = document.getElementById("reset");

// starting values for the game
let values = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
let indicator = "X";
let someoneWins = false;

// function for resetting the scores of both players
reset.addEventListener("click", () => {
  player1.innerText = 0;
  player2.innerText = 0;
});

// function for adding won class to the appropriate cells
const addWonClass = indexes => {
  indexes.forEach(index => {
    boxes[index].className = `${boxes[index].className} won`;
    console.log(boxes[index]);
  });
};

// function for resetting the starting values
const resetToStartingValues = () => {
  values = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
  indicator = "X";
  someoneWins = false;
  boxes.forEach(box => {
    // resetting the values inside the box
    box.innerHTML = "";
    // resetting the won classnames back to box
    box.className = "box";
  });
};

// adding click event listeners to all the boxes of grid
boxes.forEach((box, index) => {
  box.addEventListener("click", event => {
    // checking if that box is already filled
    if (values[index] === "X" || values[index] === "O") {
      alert("Not allowed");
    }
    // if not filled already then this block will be executed
    else {
      // filling the clicked box with the current indicator and filling up the array with the same indicator
      values[index] = indicator;
      console.log(values);
      event.target.innerText = indicator;

      //  checking different combinations to see if someone is winning
      if (
        values[0] === values[1] &&
        values[1] === values[2] &&
        values[2] === values[0]
      ) {
        console.log("someone is winning");
        someoneWins = true;
        addWonClass([0, 1, 2]);
      } else if (
        values[2] === values[5] &&
        values[5] === values[8] &&
        values[8] === values[2]
      ) {
        console.log("someone is winning");
        someoneWins = true;
        addWonClass([2, 5, 8]);
      } else if (
        values[1] === values[4] &&
        values[4] === values[7] &&
        values[7] === values[1]
      ) {
        console.log("someone is winning");
        someoneWins = true;
        addWonClass([1, 4, 7]);
      } else if (
        values[8] === values[7] &&
        values[7] === values[6] &&
        values[6] === values[8]
      ) {
        console.log("someone is winning");
        someoneWins = true;
        addWonClass([6, 7, 8]);
      } else if (
        values[0] === values[3] &&
        values[3] === values[6] &&
        values[0] === values[6]
      ) {
        console.log("someone is winning");
        someoneWins = true;
        addWonClass([0, 3, 6]);
      } else if (
        values[2] === values[4] &&
        values[4] === values[6] &&
        values[2] === values[6]
      ) {
        console.log("someone is winning");
        someoneWins = true;
        addWonClass([2, 4, 6]);
      } else if (
        values[0] === values[4] &&
        values[4] === values[8] &&
        values[8] === values[0]
      ) {
        console.log("someone is winning");
        someoneWins = true;
        addWonClass([0, 4, 8]);
      } else if (
        values[3] === values[4] &&
        values[4] === values[5] &&
        values[5] === values[3]
      ) {
        console.log("someone is winning");
        someoneWins = true;
        addWonClass([3, 4, 5]);
      }

      // if someone has won then starting variables have to be reset and respective player score has to be increased
      if (someoneWins) {
        indicator === "X"
          ? (player1.innerText = Number(player1.innerText) + 1)
          : (player2.innerText = Number(player2.innerText) + 1);

        setTimeout(() => {
          alert(`Player ${indicator === "X" ? "1" : "2"} won`);
          resetToStartingValues();
        }, 100);
      }
      // checking if game has tied
      else if (values.every(value => value === "X" || value === "O")) {
        console.log(indicator);
        event.target.innerText = indicator;

        setTimeout(() => {
          alert("Tied");
          resetToStartingValues();
        }, 100);
      }
      // if no one wins and if game is not tied then the indicator should be changed
      else {
        indicator === "X" ? (indicator = "O") : (indicator = "X");
      }
    }
  });
});
