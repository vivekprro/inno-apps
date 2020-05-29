import React from 'react'

import './Banner.css'

const Banner = (props) => {
    return (
        <div className="banner">
            {props.children}
        </div>
    )
}

export default Banner
