import axios from 'axios';

export const getTest = async()=>{
    try{
        return await axios.get("/users")
    }
    catch(e){
        console.log(e.response)
    }
}