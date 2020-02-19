export const ShowBusy = ()=>{
    return {
        type:'CHANGE_BUSY_STATE',
        busy:true
    }
}

export const HideBusy = ()=>{
    return {
        type:'CHANGE_BUSY_STATE',
        busy:false
    }
}