
const millReducer = (state,action) => {
  switch(action.type){
    case 'POPULATE_MILLS':
      return action.mills; 
    case 'ADD_MILL':
      return [...state,action.mill]
    default:
      return state
  }
}

export default millReducer;