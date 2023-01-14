import './RightBar.css';
import React from 'react';
import Clock from './Clock';


const RightBar = () => {
    return (
        <nav className="holy-grail__right">
            <Clock/>
            {/* <ul>
                <li>
                    <label htmlFor="private">פרטי</label>
                    <input id="private" type="radio" name="type"/>
                </li>
                <li>
                    <label htmlFor="bus">אוטובוס</label>
                    <input id="bus" type="radio" name="type"/>
                </li>
                <li>
                    <label htmlFor="commercial">מסחרית</label>
                    <input id="commercial" type="radio" name="type"/>
                </li>
                <li>
                    <label htmlFor="moto">אופנועים</label>
                    <input id="moto" type="radio" name="type"/>
                </li>
            </ul> */}
        </nav>
    );
}

export default RightBar;