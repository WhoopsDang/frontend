import React from 'react'
import AddView from './routes/AddView';
import PatientView from './routes/PatientView'
import EditorView from './routes/EditorView'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'





const App = () => {
    
    return(
        <Router>
            <Routes>
                <Route path='/' element = {<AddView/>}/>
                <Route path='/getPatient/:id' element = {<PatientView/>}/>
                <Route path='/updatePatient/:id' element = {<EditorView/>}/>
            </Routes>
        </Router>
    )
}

export default App;