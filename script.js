//changes the text to reflect sin, cos or e^x based on user selection
const textElement = document.getElementById("dText");

var selection = null;
function changeSelection(x) {
  selection = x;
  textElement.textContent = "Showing " + selection;
}
