import React, { useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import HomePage from "./Pages/Home";
import TopMenu from "./components/TopMenu";
import Login from "./Pages/Login";
import PrivateRoute from "./components/PrivateRoute";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);



    return (
        <Router>
            <div className="nav-container">
                <ul>
                    <TopMenu url="/" pageName="home"/>
                    {isAuthenticated && <TopMenu url="/BlogPost/" pageName="Blogs"/>}
                    {isAuthenticated ? <TopMenu url="/Login" pageName="Logout"/> : <TopMenu url="/Login" pageName="Login" />}
                </ul>
            </div>

            <Switch>
                <Route exact path="/" >
                    <HomePage />
                </Route>
                <Route path="/Login"  >
                    <Login
                        Login={isAuthenticated ? "Logout" : "Login"}
                            click={() =>  {toggleIsAuthenticated(!isAuthenticated)}}
                        Logcaption={isAuthenticated ? "Welkom user" : "Please log in to see our blogs"}
                        falseClick={() => {isAuthenticated && toggleIsAuthenticated(false)}}
                        textt={isAuthenticated ? 'button' : "text"}
                        disabled={isAuthenticated}
                        />
                </Route>
                {isAuthenticated ? <PrivateRoute /> : <Redirect to='/Login' />}


            </Switch>
        </Router>
    );
}

export default App;

