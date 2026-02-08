document.addEventListener('click', function (e) {
  if (!e.target.matches('.btn-mc-answers')) return

  const container = e.target.closest('.multchoiceAnswers')
  const answers = container.querySelector('.answers')

  answers.classList.toggle('visible')

  e.target.textContent = answers.classList.contains('visible')
    ? 'Hide Answers'
    : 'Show Answers'
})
