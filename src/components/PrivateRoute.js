import React from 'react'
import {Route,} from "react-router-dom";
import BlogPost from "../Pages/BlogPost";
import BlogNavigation from "../Pages/BlogNavigation";

function PrivateRoute  () {
    return (
        <>
        <Route exact path='/BlogPost/'>
            <BlogNavigation />
        </Route>
            <Route exact path='/BlogPost/:id'>
                <BlogPost />
        </Route>
        </>
    )

}
export default PrivateRoute