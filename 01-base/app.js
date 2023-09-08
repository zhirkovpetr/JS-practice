const result = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submit = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let action = '+'

plus.onclick = function () {
  action = '+'
}

minus.onclick = function () {
  action = '-'
}

function printResult(sum) {
  if (sum < 0) {
    result.style.color = 'red'
  } else {
    result.style.color = 'green'
  }
  result.textContent = sum
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value)
  const num2 = Number(inp2.value)
  return actionSymbol === '+' ? num1 + num2 : num1 - num2
}

submit.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)
}
