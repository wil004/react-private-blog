import React from 'react';
import {NavLink} from "react-router-dom";

function TopMenu({url, pageName}) {
    return (
        <nav>

            <li>
                <NavLink to={url}>{pageName}</NavLink>
            </li>

        </nav>
    )
}

export default TopMenu