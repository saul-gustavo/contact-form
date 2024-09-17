const formulario = document.querySelector('.form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll(".input-all");
    const textarea = document.querySelector('.field-msj');
    const radioGroup = document.querySelectorAll('input[name="query-type"]');
    const checkbox = document.querySelector('.check-terms');

    let isValid = true;

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;

        if (input.value.trim() === "") {
            input.classList.add('border');
            errorMessage.style.display = "block"
            isValid = false;
        } else {
            input.classList.remove('border');
            errorMessage.style.display = "none"
        }
    })

    const errorTextarea = textarea.nextElementSibling;
    if (textarea.value.trim() === "") {
        textarea.classList.add('border');
        errorTextarea.style.display = "block";
        isValid = false;
    } else {
        textarea.classList.remove('border');
        errorTextarea.style.display = "none";
    }

    const errorRadio = document.querySelector('.content-check .text-error');
    let isRadioChecked = false;
    radioGroup.forEach(radio => {
        if (radio.checked) {
            isRadioChecked = true;
        }
    });

    if (!isRadioChecked) {
        errorRadio.style.display = "block"
        isValid = false;
    } else {
        errorRadio.style.display = "none";
    }

    const errorCheckbox = checkbox.nextElementSibling.nextElementSibling;
    if (!checkbox.checked) {
        checkbox.classList.add('border');
        errorCheckbox.style.display = 'block';
        isValid = false;
    } else {
        checkbox.classList.remove('border')
        errorCheckbox.style.display = 'none'
    }

    if (isValid) {
        document.querySelector('.alert-message').style.display = "block"
    }
})