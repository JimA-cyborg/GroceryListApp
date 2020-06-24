

const initialState = {
    totalItems: 0,
    quantity: 0,
    itemName: '',
    groceryList: []
}

const reducer = (state=initialState, action) => {
    console.log('STATE!!!', state)
    let groceryList;
    switch(action.type) {
        case 'ADD_ITEM':{
            const newItem = {
                itemName: action.payload,
                quantity: 1,
            }
        groceryList = state.groceryList.slice();
        groceryList.push(newItem);
        console.log('NEW STATE AFTER ITEM IS ADDED', state)
        return {
            ...state,
            groceryList,
            totalItems: state.totalItems + 1,
            quantity: 1
          }
        }
        case 'DELETE_ITEM':{
            console.log("DELETE ITEM CALLED IN REDUCER")
            return alert('Hi')
            
        }
        default: return state;
    }
}

export default reducer