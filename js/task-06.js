const inputText = document.querySelector('#validation-input')

const lengthInputText = inputText.getAttribute('data-length')

inputText.addEventListener('blur', () => {
    inputText.value.length < lengthInputText || inputText.value.length > lengthInputText ? inputText.classList.add('invalid') : inputText.classList.add('valid')
})

