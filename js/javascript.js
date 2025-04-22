// Javascript del efecto aura de las tarjetas de Sagas



// Selecciona todas las tarjetas
const sagaCards = document.querySelectorAll('.saga-card');

// Función para agregar el efecto de aura
function addAura(event) {
    const aura = document.createElement('div');
    aura.classList.add('aura');
    event.currentTarget.appendChild(aura);
}

// Función para quitar el efecto de aura
function removeAura(event) {
    const aura = event.currentTarget.querySelector('.aura');
    if (aura) {
        event.currentTarget.removeChild(aura);
    }
}

// Agregar eventos de mouseover y mouseout a cada tarjeta
sagaCards.forEach(card => {
    card.addEventListener('mouseover', addAura);
    card.addEventListener('mouseout', removeAura);
});