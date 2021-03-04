import React, { useEffect } from "react";

function APIFetcher(props) {

    // register user
    // if successful, authenticate user
    // if get jwt log user in


    useEffect(() => {
        if (props.APIDetails.user.length > 0) {
            let formData = new FormData()
            formData.append('user', props.APIDetails.user)
            formData.append('email', props.APIDetails.email)
            formData.append('pass', props.APIDetails.pass)

            const url = myCustomScript.php
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then((response)=>response.text())
            .then((post)=> {
                console.log(post)
                // if post is jwt use it to authenticate
                // if not, throw err
            })
           
        }

    }, [props.APIDetails])

    return (
        <>
        </>
    )

}

export default APIFetcher