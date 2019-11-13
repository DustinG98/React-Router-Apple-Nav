import React from 'react'
import {NavLink} from 'react-router-dom';

function SubNav(props){
    let links = props.links;
    return (
        <div>
            {(links !== undefined) ? links.map((item) => {
            return <NavLink to={`/${item.name}`} className="subLink">{item.name}
            <img src={item.img} alt=""/>
            </NavLink>
            }): null}
        </div>
    )
}

export default SubNav