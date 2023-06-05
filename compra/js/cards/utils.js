// utils funciones q van a servir en un futuro 
const colors = ['bg-primary', 'bg-danger', 'bg-success']
const transparent = 'bg-transparent'

const changeColor = (container, index, revert = false) => {

    const i = Number(index)

    revert
        ? container.classList.replace(colors[i], transparent)
        : container.classList.replace(transparent, colors[i])
}

