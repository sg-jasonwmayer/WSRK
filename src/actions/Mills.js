

export const addMill=(mill)=>{
    //console.log(`Adding mill .... ${mill}`);
   return{
    type:'ADD_MILL',
    mill
   }
};

export const populateMills = (mills)=>{
    return {
        type:'POPULATE_MILLS',
        mills
    }
}