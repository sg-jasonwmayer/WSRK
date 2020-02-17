
const loadPlanReducer = (state,action) => {
    switch(action.type){
      case 'SEARCH_INPUTS':
        return action.searchobject; 
      case 'SEARCH_RESULTS':
        //console.log(action.searchresults);
        return action.searchresults;
      default:
        return state
    }
 }

 export default loadPlanReducer;