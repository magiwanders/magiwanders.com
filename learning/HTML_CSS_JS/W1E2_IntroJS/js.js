// difference between let and var, let is block scoped, var is function scoped
// NEVER USE VAR, only const and let

const MIN_VALUE = 0;
const MAX_VALUE = 99;

function action() {
  let value = Number(document.getElementById("input").value)
  // Number is needed if input is null, makes it zero

  const isInRange = value <= MAX_VALUE && value >= MIN_VALUE;
  console.log(isInRange);

  const errorLabel = document.getElementById("error-label");
  if(isInRange && errorLabel) errorLabel.remove();

  if(!isInRange) {
    const inputContainer = document.getElementById("input-container");
    if(!errorLabel) {
      const child = document.createElement("div");
      child.setAttribute("id", "error-label");
      const text = document.createTextNode("Error on range \(" + MIN_VALUE + " to " + MAX_VALUE + "\)");
      child.appendChild(text)
      inputContainer.appendChild(child)
    }
  }

  const circleContainer = document.getElementById("circle-container")

  // removes all circles
  while(circleContainer.lastChild) {
    circleContainer.removeChild(circleContainer.lastChild)
  }

  // add children to circle container
  let index=0;
  while (value > MIN_VALUE && value <= MAX_VALUE) {
    const child = document.createElement("div")
    child.classList.add("circle") // adds class before appending

    const isEven = index%2;
    if (isEven) {
      child.classList.add("grey")
    } else {
      child.classList.add("green")
    }

    circleContainer.appendChild(child)
    value--
    index++
  }
}

btn.onclick = action;
