import { createFetch } from "@vueuse/core";
import { globalState, isAuth } from "../store";

export const useApi =createFetch({
    baseUrl: 'https://vara.onrender.com/api',
    options: {
        beforeFetch({options}){

            if(isAuth.value){
                options.headers = {
                    Authorization: `Bearer ${globalState.accessToken}`
                }
            }

            return{options}

        }
    }
})