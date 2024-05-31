//changes the text to reflect sin, cos or e^x based on user selection
const textElement = document.getElementById("dText");

let selection = "Sin(x)";
function changeSelection(x) {
  selection = x;
  textElement.textContent = "Showing " + selection;
}
function taylorSeriesSine(x, terms) {
  let sum = 0;
  for (let n = 0; n < terms; n++) {
      sum += ((-1) ** n) * (x ** (2 * n + 1)) / factorial(2 * n + 1);
  }
  return sum;
}
function taylorSeriesCosine(x, terms) {
  let sum = 0;
  for (let n = 0; n < terms; n++) {
  sum += ((-1) ** n) * (x ** (2 * n)) / factorial(2 * n);
  }
  return sum;
}


function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function plotTaylorSeries1() {
  const canvas = document.getElementById('plot');
  const ctx = canvas.getContext('2d');
  const terms = document.getElementById('terms').value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const width = canvas.width;
  const height = canvas.height;
  const scaleX = width / (2 * Math.PI);
  const scaleY = height / 2;

  ctx.beginPath();
  ctx.moveTo(0, height / 2);

  for (let x = -Math.PI; x <= Math.PI; x += 0.01) {
      const y = taylorSeriesSine(x, terms);
      ctx.lineTo((x + Math.PI) * scaleX, height / 2 - y * scaleY);
  }

  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, height / 2);

  for (let x = -Math.PI; x <= Math.PI; x += 0.01) {
      const y = Math.sin(x);
      ctx.lineTo((x + Math.PI) * scaleX, height / 2 - y * scaleY);
  }

  ctx.strokeStyle = 'red';
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = 'black';
  ctx.fillText("Taylor Series Approximation", 10, 20);
  ctx.fillText("Actual sin(x)", 10, 40);
  ctx.strokeStyle = 'blue';
  ctx.strokeRect(0, 10, 5, 5);
  ctx.strokeStyle = 'red';
  ctx.strokeRect(0, 30, 5, 5);
  window.onload = plotTaylorSeries1;
}
function plotTaylorSeries2() {
  const canvas = document.getElementById('plot');
  const ctx = canvas.getContext('2d');
  const terms = document.getElementById('terms').value;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const width = canvas.width;
  const height = canvas.height;
  const scaleX = width / (2 * Math.PI);
  const scaleY = height / 2;

  ctx.beginPath();
  ctx.moveTo(0, height / 2);

  for (let x = -Math.PI; x <= Math.PI; x += 0.01) {
      const y = taylorSeriesCosine(x, terms);
      ctx.lineTo((x + Math.PI) * scaleX, height / 2 - y * scaleY);
  }

  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, height / 2);

  for (let x = -Math.PI; x <= Math.PI; x += 0.01) {
      const y = Math.cos(x);
      ctx.lineTo((x + Math.PI) * scaleX, height / 2 - y * scaleY);
  }

  ctx.strokeStyle = 'red';
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = 'black';
  ctx.fillText("Taylor Series Approximation", 10, 20);
  ctx.fillText("Actual cos(x)", 10, 40);
  ctx.strokeStyle = 'blue';
  ctx.strokeRect(0, 10, 5, 5);
  ctx.strokeStyle = 'red';
  ctx.strokeRect(0, 30, 5, 5);
  window.onload = plotTaylorSeries2;
}

function plot() {
  if (selection === "Sin(x)"){
    plotTaylorSeries1();
  } else if (selection === "Cos(x)") {
    plotTaylorSeries2();
  } 
}


