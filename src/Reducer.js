export const initialState={
    basket: [{
        id :"12123456",
        title:"New Refriferator world class Buy now for summer season",
        price :18800.00,
        rating :3,
        image :"https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    
    }],
    user: null

};
 const reducer =(state={initialState}, action)=>{
     console.log(action)
      switch(action.type){
        case 'SET_USER':
            return {...state, user : action.user}
                 break;

          case 'ADD_TO_BASKET':
         return {...state, basket:[...state.basket, action.item] }
              break;
        case 'REMOVE_FROM_BASKET':
            let newBasket = state.basket.filter((item)=>{
                return action.id !== item.id
            })
            return {...state,basket: newBasket}
                break;
             default:
                 return state; 
      }
}
export default reducer;