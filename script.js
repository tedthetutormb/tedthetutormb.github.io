document.addEventListener('click', function (e) {
  // MULTIPLE CHOICE BUTTONS
  if (e.target.matches('.btn-mc-answers')) {
    const container = e.target.closest('.multchoiceAnswers')
    const answers = container.querySelector('.answers')

    answers.classList.toggle('visible')

    e.target.textContent = answers.classList.contains('visible')
      ? 'Hide Answers'
      : 'Show Answers'

    return
  }

  // K&U BUTTONS (toggle entire section)
  if (e.target.matches('.btn-ku-answers')) {
    const container = e.target.closest('.k-and-u-answers')

    container.classList.toggle('visible')

    const isVisible = container.classList.contains('visible')

    e.target.textContent = isVisible ? 'Hide Answers' : 'Show Answers'
  }

  // MULTIPLE CHOICE QUESTIONS
  if (e.target.matches('.btn-mc-questions')) {
    const container = e.target.closest('.multchoice')

    container.classList.toggle('visible')

    const isVisible = container.classList.contains('visible')

    e.target.textContent = isVisible ? 'Hide Questions' : 'Show Questions'
  }
})
