const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', (event) => {
    event.currentTarget.value === '' ? output.textContent = 'Anonymous' : output.textContent = event.currentTarget.value
})