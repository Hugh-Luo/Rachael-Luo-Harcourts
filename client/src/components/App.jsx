import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Home";
import About from "./about";
import Contact from "./contact";
import RegisterPage from "./Register";
import registerSuccess from "./Register_Success";
import Register_fail from "./Register_failure";
import RegisterExist from "./Register_exist";

function App(){

    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/register' exact strict component={RegisterPage}/>
                    <Route path='/register/success-register' strict component={registerSuccess}/>
                    <Route path='/register/fail-register' strict component={Register_fail}/>
                    <Route path='/register/userExist' strict component={RegisterExist}/>
                </Switch>
            </div>
        </Router>
    )

}

export default App;
