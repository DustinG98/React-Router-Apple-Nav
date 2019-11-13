import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import NavData from "../Data"
import SubNav from './SubNav'

function NavWrapper(){
    return (
        <div>
            <nav>
                {NavData.map((item) => {
                    return <NavLink to={item.name} key={item.name} className="navLinks">{item.name}</NavLink>
                })}
            </nav>
                {NavData.map((item) => {
                    return <Route path={`/${item.name}`} key={item.name} render={(props) => 
                        <SubNav {...props} links={item.subLinks}/>
                    }/>
                })}
        </div>
    )
}

export default NavWrapper