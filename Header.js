import React from 'react'

function Header({children, ...props}) {

    let displayName = props.isLoggedIn ? props.username : 'guest' 

    return (
        <>
        <h1>Wordpress Rest API Test App</h1>
        <div className="header">
        <p>Welcome {displayName}!</p>
        {children}
        </div>
        </>
    )


}

export default Header