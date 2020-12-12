import React, {useState} from 'react';

import Header from "./header";
import Footer from "./footer";



function RegisterPage(props){

/*        const [fname, setFname] = useState('')

        const [lname, setLname] = useState('')

        const [email, setEmail] = useState('')

        function handleFnameChange (event) {
            setFname(event.target.value)
            // console.log(fname)
        }

        function handleLnameChange (event) {
            setLname(event.target.value)
        }

        function handleEmailChange (event) {
            setEmail(event.target.value)
        }

        function handleSubmit (event) {
            event.preventDefault()
            console.log({fname: fname, lname: lname, email: email})

        }*/


    /*                Try another method                 */


    const [registerInfo, setRegisterInfo] =useState({
        fName: '',
        lName: '',
        email: ''
    })

    const fName = registerInfo.fName

    const lName = registerInfo.lName

    const email = registerInfo.email

    function handleRegisterInfoChange (event) {

        const {name, value:newValue} = event.target
        // console.log(name)
        // console.log(event.target)
        // console.log(event.target.name)


        setRegisterInfo(prevState => {
            return {
                ...prevState,
                [name] : newValue
            }
        })
        // console.log(registerInfo)

    }

    function handleSubmit (event) {
        event.preventDefault()
        // console.log(registerInfo)

        fetch('/rachael', {  // because we wrote the "proxy code" , then we do not need to specify the route
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(
                {information_to_backend : registerInfo}
            )

        })
            .then(res=>
                // console.log(res)
                /*if (res.ok) {
                    console.log('SUCCESS')
                } else {
                    console.log('Not Successful')
                }*/
                // console.log(res)
                {
                 return  res.json()
                }
            )
            .then(data=> {
                // console.log(data)
                if (data.status === 400) {
                    // console.log('Failure register')
                    props.history.push('/register/fail-register')


                } else if (data.status === 'subscribed'){
                    // console.log('Successfully register')
                    props.history.push('/register/success-register')
                } else if (data === 'user already exists') {
                    props.history.push('/register/userExist')
                    // console.log('User exists')
                }
            })


            .catch(err=>{
                console.log(err)
            })

            setRegisterInfo({
                fName: '',
                lName: '',
                email: ''
            })

    }


    return (
        <div id='register'>
            <Header/>
            <div>
                <form className="form-signin" onSubmit={handleSubmit}>
                    <img className="mb-4" src="images/company.png" alt="companyLogo" width="88" height="88"/>
                        <h1 className="h3 mb-3">To Be A Member!</h1>

                        <input type="text" name='fName' className="form-control top" placeholder="First Name" required
                               autoFocus onChange={handleRegisterInfoChange} value={fName}/>

                            <input type="text" name='lName' className="form-control middle" placeholder="Last Name"
                                   required onChange={handleRegisterInfoChange} value={lName}/>

                                <input type="email" name='email' className="form-control bottom" placeholder="Email"
                                       required  onChange={handleRegisterInfoChange}  value={email}/>

                                    <button className="btn btn-lg btn-primary btn-block" type="submit"
                                           >Sign Up
                                    </button>


                </form>


            </div>
            <Footer id='register_footer'/>
        </div>

    )
}

export default RegisterPage;