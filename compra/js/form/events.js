const resetCategories = () => {
    total = null
    selected = null
    eventsAssignmentAll()
    totalTag.innerText = totalText
}

const setCategory = (e) => {

    const option = e.target.value

    if (option === 'none') {
        resetCategories()
        return
    }

    category = option
    const index = categories[category].value
    const container = cardsContainer[index]

    selected = index
    changeColor(container, index)
    eventsAssignmentAll()

    totalPrice()
}

const setTicket = (e) => {

    const { value } = e.target

    if (value < 0 || isNaN(value)) {
        e.target.value = 0
        total = null
        return
    }

    tickets = value
    totalPrice()
}



const reset = (e) => {

    e.preventDefault()

    for (let input of inputs)
        input.value = ''    // reseteo todas la categorias dondole valor 0

    select.value = 'none'    // resetea solo la categoria dandole el valor que tiene la primer opcion

    resetCategories()
}

const submit = (e) => {

    e.preventDefault()

    const { firstname, lastname, email, tickets, category } = form

    const verified = {
        firstname: firstname.value !== '',
        lastname: lastname.value !== '',
        email: email.value.includes('@'),
        tickets: tickets.value > 0,
        category: category.value !== 'none'
    }

    const values = Object.values(verified)  //construyo un arreglo con solo los valores
    const submitAccepted = values.every(value => value)

    submitAccepted
        ? alert('Datos enviados correctamente')
        : alert('Verifique los datos ')


}

// ASIGNACION DE EVENTOS

form.category.addEventListener('change', setCategory)

form.tickets.addEventListener('change', setTicket)
form.tickets.addEventListener('keyup', setTicket)

form.addEventListener('submit', submit)
resetBtn.addEventListener('click', reset)