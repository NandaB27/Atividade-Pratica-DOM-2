document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault()
    let cargo = document.getElementsByName("cargo")
    console.log('Dados pessoais:')
    console.log('Nome: ' + nome.value)
    console.log('Endereço: ' + endereço.value)
    console.log('Cidade: ' + cidade.value)
    console.log('Estado: ' + estado.value)
    console.log('Dados profissionais:')
    console.log('Natureza do cargo: ' + document.querySelector('input[name="cargo"]:checked').value)

    const interesses = []

    const checkbox = document.getElementsByName('interesses')
    checkbox.forEach(checkboxElement => {
        if (checkboxElement.checked) {
            interesses.push(checkboxElement.value)
        }
    })

    if (interesses.length <= 0) {
        const submit = document.getElementById("submit")
        alert('Precisa selecionar ao menos um.')
        submit.classList.add('disabled')
    }
    console.log(...interesses)


})