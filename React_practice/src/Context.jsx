import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";
const Appcontext = React.createContext();
const initialState ={
    name :"",
    image:"",

    services:[],
};
export const API = "http://localhost:9000";

const AppProvider=({children})=>{
    const updateHomepg=()=>{
        return dispatch(
            {
                type:"HOME_UPDATE",
                payload:{
                name:"Saksha Gotad",
                image:"./images/hero.svg"     
                 }
            });
    }
    
    const updateAbout=()=>{
        return dispatch(
            {
                type:"ABOUT_UPDATE",
                payload:{
                name:"Saksha Gotad",
                image:"./images/about1.svg"     
                 }
            });
    }
    
     
    const [state,dispatch]= useReducer(reducer,initialState);

    //to get api data
    const getServices = async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          dispatch({ type: "GET_SERVICES", payload: data });
        } catch (error) {
          console.log(error);
        }
      };


    // call api 
    useEffect(()=>{
      getServices(API);
    },[])

    return(  <Appcontext.Provider value={{...state,updateHomepg,updateAbout}}>{children}</Appcontext.Provider>
        
    )
  
}

const useGlobalContext = ()=>{
   return useContext(Appcontext);
}

export {useGlobalContext,AppProvider};  