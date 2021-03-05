import React, { useEffect } from "react";

function LoginAPI(props) {
//send in user and pass to get jwt
//get jwt and autologin
//redirect php or react?



    useEffect(() => {
        if (props.APIDetailsLogin.user.length > 0) {
            let formData = new FormData()
            formData.append('user', props.APIDetailsLogin.user)
            formData.append('pass', props.APIDetailsLogin.pass)

            //change from here

            const url = 'http://tomsclassroom.com/student/AAreg.php'
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