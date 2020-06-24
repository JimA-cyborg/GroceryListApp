

const initialState = {
    totalItems: 0,
    quantity: 0,
    itemName: '',
    groceryList: []
}

const reducer = (state=initialState, action) => {
    let groceryList;
    switch(action.type) {
        case 'ADD_ITEM':{
            const newItem = {
                itemName: action.payload,
                quantity: 1,
            }
        groceryList = state.groceryList.slice();
        groceryList.push(newItem);
        return {
            ...state,
            groceryList,
            totalItems: state.totalItems + 1,
            quantity: 1
          }
        }
        default: return state;
    }
}

export default reducer