import React from 'react'
import './Preloader.css'

const Preloader = ({ isSearching }) => {
    return (
        <div className={`preloader ${isSearching ? "preloader_active" : ""}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
