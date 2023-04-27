import React from 'react'
import AddView from './routes/AddView';
import PatientView from './routes/PatientView'
import EditorView from './routes/EditorView'
import {Routes, Route} from 'react-router-dom'
import GenLayout from './routes/GenLayout';





const App = () => {
    
    return(
        
        <Routes>
            <Route path='/' element = {<GenLayout/>}>
                <Route path='/recepcion' element = {<AddView/>}/>
                <Route path='/getPatient/:id' element = {<PatientView/>}/>
                <Route path='/updatePatient/:id' element = {<EditorView/>}/>
            </Route>    
        </Routes>
    )
}

export default App;