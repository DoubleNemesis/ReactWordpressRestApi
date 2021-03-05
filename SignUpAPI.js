import React, { useEffect } from "react";

function SignUpAPI(props) {

    useEffect(() => {
        if (props.APIDetailsSignUp.user.length > 0) {
            let formData = new FormData()
            formData.append('user', props.APIDetailsSignUp.user)
            formData.append('email', props.APIDetailsSignUp.email)
            formData.append('pass', props.APIDetailsSignUp.pass)

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

    }, [props.APIDetailsSignUp])

    return (
        <>
        </>
    )

}

export default SignUpAPI