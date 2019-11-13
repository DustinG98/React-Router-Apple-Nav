import React from 'react'
import {NavLink} from 'react-router-dom';

function SubNav(props){
    let links = props.links;
    return (
        <div className="subNav">
            {(links !== undefined) ? links.map((item) => {
            return <NavLink to={`/${item.name}`} className="subNavItems">{item.name}
            <img src={item.img} alt=""/>
            </NavLink>
            }): null}
        </div>
    )
}

export default SubNav