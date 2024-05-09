/* eslint-disable no-empty */
import {ShowBusy,HideBusy} from '../actions/activityindicator';

//export const SERVER_URL = "https://localhost:44327/";

export const SERVER_URL = "http://MS00015080D:9000/";

export const WEBAPI_SERVER_URL = SERVER_URL+"api";

export const WebAPIGetCall = (apicall,dispatch)=>{

    async function WebApiCall(apicall,dispatch){
        try{
        
            dispatch(ShowBusy())
     
             console.log(`Attempting to call ${WEBAPI_SERVER_URL}/${apicall}`)   

            const rawResponse = await fetch(`${WEBAPI_SERVER_URL}/${apicall}`);
            const jsonResponse = await rawResponse.json();
            dispatch(HideBusy())
            return jsonResponse;
        }catch(e){
            return '404';
        }finally{
        }
    }
    return WebApiCall(apicall,dispatch);
    
}
