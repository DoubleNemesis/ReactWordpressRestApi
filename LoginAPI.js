import React, { useEffect } from "react";

function LoginAPI(props) {

// to get specific data: validate jwt and server side use that username to fetch data. Make sure key is needed to access enpoint.

    useEffect(() => {
        if (props.APIDetailsLogin.user.length > 0) {
            let formData = new FormData()
            formData.append('username', props.APIDetailsLogin.user)
            formData.append('password', props.APIDetailsLogin.pass)

            //change from here

            const url = 'https://tomsclassroom.com/student/?rest_route=/simple-jwt-login/v1/auth'
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then((response)=>response.text())
            .then((post)=> {
                console.log(post)
                // if post is jwt use it to authenticate
                // by diverting to new page 
                //https://tomsclassroom.com/student/?rest_route=/simple-jwt-login/v1/autologin&jwt=JWT
                //auth code?
                // if not, throw err
            })
           
        }

    }, [props.LoginAPI])

    return (
        <>
        </>
    )

}

export default LoginAPI