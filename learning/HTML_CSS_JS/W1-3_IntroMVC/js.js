// MODEL/STATE

// inner representation of the four types of button
const buttonsModel = [
  {
    color: "red",
    number: 4,
    selected: 0,
    // maxSelectable: 2,
  },
  {
    color: "orange",
    number: 5,
    selected: 0,
    // maxSelectable: 4,
  },
  {
    color: "yellow",
    number: 6,
    selected: 0,
    // maxSelectable: 5,
  },
  {
    color: "white",
    number: 7,
    selected: 0,
    // maxSelectable: 2,
  },
]

// creates random number of max selectable buttons for given color.
function forEachFunction(group, index) {
  buttonsModel[index].maxSelectable = generateRandomNumberUpTo(group.number);
}

buttonsModel.forEach(forEachFunction); // Assigns a random max number to every button color

console.log(buttonsModel);

function reduceFunction(acc, next) {
  // FIRST CALL
  // acc(umulator) is 0 in the first call
  // next is the first element of the array on which I called the reduce function
  return acc + next.number;
  // CALL n (there will be as many calls as elements of the array)
  // new acc is now the last returned value
  // next is the nth element of the array
}

// reduce(f(), value) is called on an array. It reduces the array to a single value
// this value is calculated by the function f() passed to the reduce() function
// the second argument is the starting value of the acc(umulator)
const modelLength = buttonsModel.reduce((acc, next) => reduceFunction(acc, next), 0);

model = Array(modelLength).fill(false)
previous_model = Array(modelLength).fill(false)

let keys = document.querySelectorAll(".key");



// VIEW

// Creates a button of the specified color with its circle indicator
function createButton(color) {
  const button = document.createElement("div");
  button.classList.add("key", color);

  const circle = document.createElement("div");
  circle.classList.add("circle");

  button.appendChild(circle);

  return button
}

// Different from the normal render function because it has to create all the buttons
function firstPainfulRender() {
  const barContainer = document.getElementById("bar");

  let index = 0;
  let groupNumber = 0;
  for (group of buttonsModel) { // For each color
    for (let i = 0; i < group.number; i++) { // For each button in that color
      const button = createButton(group.color); // Create actual button of that color
      barContainer.appendChild(button); // Add it to the bar div
    }

    // group.color is the color of the last created button, index is the global number of the first created button of that color, groupNumber increments each time color changes
    updateClickReferences(group.color, index, groupNumber++); // when a group has been created it must be assigned the onclick function
    index += group.number;
  }

}

// Updates the classes to display the selected keys as described in model.
function render() {
  keys = document.querySelectorAll(".key");
  keys.forEach(function(key, index) {
    key.classList.toggle("selected", model[index]); // if model[index] is true selected can only be added, of false it can only be removed.
    key.firstElementChild.classList.toggle("active-circle", model[index]);
  })
}



// CONTROLLER
function generateRandomNumberUpTo(number) {
  return Math.floor(Math.random() * (number + 1));
}

// assigns to each key the onClick function (which toggles the selection inside model and calls render()
function click_assignment(key, index, color, groupNumber) {

  key.onclick = function() {
    // check maxSelectable constraint
    console.log(index, color)
    const currentColorSelected = buttonsModel[groupNumber]

    // toggle
    if (!model[index]) { // If button was not selected
      if (currentColorSelected.selected < currentColorSelected.maxSelectable) { // if it can be selected
        currentColorSelected.selected++;
        model[index] = !model[index];
      }
    } else { // If button was selected
      currentColorSelected.selected--;
      model[index] = !model[index];
    }

    console.log(currentColorSelected)
    render()
  }
}

// reassignes all the onClick functions to the buttons starting from the index of the first button of the color group
function updateClickReferences(color, startFromIndex, groupNumber) {
  keys = document.querySelectorAll("." + color); // gets all elements with class .<color>
  keys.forEach(
    (key, index) => click_assignment(key, index + startFromIndex, color, groupNumber)
  );
}

function reset_all() {
  previous_model = model
  model = Array(modelLength).fill(false)
  render()
}

reset.onclick = reset_all;

function select_all() {
  previous_model = model
  model = Array(modelLength).fill(true)
  render()
}

select.onclick = select_all;

function restore_all() {
  model = previous_model
  render()
}

restore.onclick = restore_all;

firstPainfulRender();
