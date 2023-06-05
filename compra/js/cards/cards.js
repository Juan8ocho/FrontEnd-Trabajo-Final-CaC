// configuracion inicial de los elementos del main con las cards ya listas y capturadas en array

for (let card of cards) {
    card.classList.add('card__align--center') //a cada card en su lista de clase le agregamos
    
     //agarro la ultima p y le cambio algunos valores
    const lastP = card.querySelector('p:last-child')
    lastP.classList.add('text-danger') //cambio color de texto a rojo
    

     //lo mismo pero con card body
    const nthChild = card.querySelector(':nth-child(3)')
    const b = document.createElement('b')
    b.innerText = nthChild.innerText
    nthChild.innerHTML = b.outerHTML
}