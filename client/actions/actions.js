

export const addItem = (text) => ({
    type: 'ADD_ITEM',
    payload: text
})

export const deleteItem = (index) => (console.log('Index in actions: ',index),{
    type: 'DELETE_ITEM',
    payload: index
})

// export const increaseQuant = (quantity) = ({
//     type: 'INCREASE_QUANT',
//     payload: quantity
// })

// export const decreaseQuant = (quantity) = ({
//     type: 'DECREASE_QUANT',
//     payload: quantity
// })