let instrument = document.querySelector('.name');

instrument.onclick = toggleInstrument;

function toggleInstrument() {
 const k = document.getElementById("kick")
 k.firstChildElement.classList.toggle("on");
}
