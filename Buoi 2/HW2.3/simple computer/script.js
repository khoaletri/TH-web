function appendToInput(value) {
  document.getElementById("result").value += value;
}

function clearInput() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  const expression = document.getElementById("result").value;
  try {
    const result = eval(expression);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
