import React, { useEffect, useState } from "react";

function SignUpAPI(props) {
    const [urlToLogin, setUrlToLogin] = useState('')

    useEffect(() => {
        if (props.APIDetailsSignUp.user.length > 0) {
            let formData = new FormData()
            formData.append('user', props.APIDetailsSignUp.user)
            formData.append('email', props.APIDetailsSignUp.email)
            formData.append('pass', props.APIDetailsSignUp.pass)

            const url = 'https://tomsclassroom.com/student/AAreg.php'
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then((response) => response.text())
                .then((post) => {
                    console.log(post.split(','))
                    let freshUser = post.split(',')
                    if (freshUser[0] === 'true') {
                        props.setUsername(freshUser[2])
                        localStorage.setItem('jwt', freshUser[3])
                        setUrlToLogin(`https://tomsclassroom.com/student/?rest_route=/simple-jwt-login/v1/autologin&jwt=${freshUser[3]}`)
                    }
                })
        }
    }, [props.APIDetailsSignUp])

    useEffect(() => {
        if (urlToLogin.length > 0) {
            fetch(urlToLogin, {
                method: 'GET'
            })
                .then((response) => {
                    if (response.status == '200') {
                        props.setIsLoggedIn(true)
                        window.location.replace('https://tomsclassroom.com/mysite/#/')
                    }
                    else {
                        console.log('error')
                    }
                })
        }

    }, [urlToLogin])

    return (
        <>
        </>
    )

}

export default SignUpAPI