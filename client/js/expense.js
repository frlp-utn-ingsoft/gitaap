import { getRefs, render } from './render.js';
import movementService from './movement-service.js';

let state = {
    movements: [],
    movement: {},
    hasEdit: true,
};

let refs = getRefs(document.body);

/**
 * Obtiene todos los ultimos movimientos disponibles
 **/
async function getExpenses() {
    return movementService.getExpenses();
}

/**
 * Renderiza los libros
 **/
function renderExpenses(state) {
    console.log(refs);
    render('movement-list.html', state, refs.expense);
}

/**
 * Inicializa la vista income
 **/
async function init() {
    state.movements = await getExpenses();
    renderExpenses(state);
}

function getMovementData() {
    const formData = new FormData(refs.form.firstElementChild);
    const movement = Object.fromEntries(formData);
    movement.type = "expense"
    return movement;
}

// Event Listeners

/**
 * Agrega un movimiento a edicion
 **/
window.editMovement = function (movement) {
    state.movement = movement;
    render('movement-form.html', state, refs.form);
};

/**
 * Cancela una edicion o creación
 **/
window.onCancel = function () {
    state.movement = {};
    render('movement-form.html', state, refs.form);
};

/**
 * Elimina un movimiento
 **/
window.onRemove = async function (e) {
    e.stopPropagation();
    e.preventDefault();

    await movementService.remove(state.movement);

    state.movement = {};
    render('movement-form.html', state, refs.form);
};

/**
 * Guarda un movimiento
 **/
window.onSave = async function (e) {
    e.stopPropagation();
    e.preventDefault();
    const movement = getMovementData();

    if(validate(movement)){
        if (movement.id) {
            await movementService.update(movement);
        } else {
            await movementService.create(movement);
        }
    
        state.movement = {};
        render('movement-form.html', state, refs.form);
    
    } else {
        alert("Todos los campos son obligatorios!");
    }
};

const validate = (movement) => (
        movement.amount &&
        movement.category &&
        movement.date &&
        movement.description &&
        movement.type 
);

init();
