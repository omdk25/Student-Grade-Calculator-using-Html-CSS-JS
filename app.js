const btn = document.getElementById('btn')

// Function
const calculate = () => {
  let se = document.getElementById('se').value
  let cns = document.getElementById('cns').value
  let ip = document.getElementById('ip').value
  let devops = document.getElementById('devops').value

  let obtainedMarks =
    parseFloat(se) + parseFloat(cns) + parseFloat(ip) + parseFloat(devops)

  let percentage = (obtainedMarks / 400) * 100

  let grade = ''

  if (percentage <= 100 && percentage >= 80) {
    grade = 'A'
  } else if (percentage <= 79 && percentage >= 60) {
    grade = 'B'
  } else if (percentage <= 59 && percentage >= 40) {
    grade = 'C'
  } else if (percentage <= 39 && percentage >= 33) {
    grade = 'D'
  } else {
    grade = 'F'
  }

  if (percentage >= 33) {
    let showResult = document.getElementById('showResult')
    showResult.innerHTML = `You have obtained ${obtainedMarks} Marks out of 400 Marks with ${percentage}% <br>and ${grade} Grade.You Are Pass.`
  } else {
    let showResult = document.getElementById('showResult')
    showResult.innerHTML = `You have obtained ${obtainedMarks} Marks out of 400 Marks with ${percentage}% <br>and ${grade} Grade.You Are Fail.`
  }
}

// Event Listener
btn.addEventListener('click', calculate)