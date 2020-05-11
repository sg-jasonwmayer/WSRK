export const SearchResults=(searchObject)=>{
   return{
    type:'SEARCH_INPUTS',
    searchObject
   }
};


export const populateSearchCriteria = (searchobject)=>{
    return {
        type:'SEARCH_INPUTS',
        searchobject
    }
}


export const populateSearchResults = (searchresults)=>{
    return {
        type:'SEARCH_RESULTS',
        searchresults
    }
}