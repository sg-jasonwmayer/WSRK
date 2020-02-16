const ActivityIndicatorReducer = (state,action) => {
    switch(action.type){
      case 'CHANGE_BUSY_STATE':
        return action.busy; 
      default:
        return state
    }
 }

 export default ActivityIndicatorReducer;
 