import React, {useState, createContext} from "react";



export const PatientsContext = createContext();

export const PatientsContextProvider = props =>{

    const [patient, setPatient] = useState([])

    return (
        <PatientsContext.Provider value ={{patient, setPatient}}>
            {props.children}
        </PatientsContext.Provider>

    )
}