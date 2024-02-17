import React from 'react';
import "./nav.css"

export default function Nav() {
  return (
    <div className='nav'>
        <div>Home</div>
        <div className="nav-right">
            <div>Transaction Table</div>
            <div>Bar Chart</div>
            <div>Statistic</div>
            <div>Help</div>
        </div>
    </div>
  );
}
