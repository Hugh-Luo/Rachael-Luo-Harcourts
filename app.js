require('dotenv').config();

const express =require('express');

const path = require('path');

const client = require("@mailchimp/mailchimp_marketing");

const port = process.env.PORT || 5000;


const bodyParser = require('body-parser')
const app = express()

const cors = require('cors')     // check the detail to understand it

app.use(cors())

app.use(bodyParser.json())         // THis part is very important when you got "fetch", get information from other url

app.use(bodyParser.urlencoded({extended:true}));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'))
    })

}


app.get('/api/hello', (req,res)=>{
    res.send({express: 'Hello From Express'})
})




/*      THis part for you to add a member to list */
/*app.post('/stefan', (req,res)=>{
    // res.send(JSON.stringify({hello:"there"}))
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    console.log({
        fname: fname,
        lname: lname,
        email: email
    })

        /!* this part used to add member to mailchimp audience*!/

    client.setConfig({
        apiKey: process.env.API_KEY,
        server: process.env.SERVER_PREFIX
    });

    const add_member = async () => {
        const response = await client.lists.addListMember(process.env.LIST_ID, {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: fname,
                LNAME: lname
            }
        });
        console.log(response)  // when sumbmit successful, this will be excuted
    };



    add_member().then((message)=>{
        res.send("Add successfully: " + message)
    }).catch((error)=>{
        res.send("Sorry, Got error " + error)
    });

})*/



/*                            THis part for you to check whether the user exists             */


app.post('/rachael', (req,res)=>{
    const info = req.body
    // console.log(info)

    const {information_to_backend: value_parent} = info
    console.log(value_parent)

    const fname = value_parent.fName
    const lname = value_parent.lName
    const email = value_parent.email


    /*const email = req.body.email

    client.setConfig({
        apiKey: process.env.API_KEY,
        server: process.env.SERVER_PREFIX
    });

    const check_Exixts = async () => {
        try {
            const response = await client.lists.getListMember(
                process.env.LIST_ID,
                email
            );
            res.send(response);
        } catch (err){
            console.log(err.status)
        }

    };

    check_Exixts()*/


    client.setConfig({
        apiKey: process.env.API_KEY,
        server: process.env.SERVER_PREFIX
    });

    function check_user_exist (email) {
        return new Promise((resolve, reject)=> {

            let response = client.lists.getListMember(
                process.env.LIST_ID,
                email
            )
            resolve(response)
        })
    }


    function add_user (email, fname, lname) {
        return new Promise((resolve, reject)=> {
            const response = client.lists.addListMember(process.env.LIST_ID, {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            })

            resolve(response)
        })
    }


    let mailchimp = async () => {
        try {
            const exist_response = await check_user_exist(email)
            console.log('User already exists')
            res.send(JSON.stringify('user already exists'))
        } catch (err) {
            console.log("User doesn't exist")
            try {
                const add_response = await add_user(email,fname, lname)
                console.log(add_response)
                res.send(add_response)
            } catch(err) {
                console.log(err)
                res.send( err)
            }

        }

    }

    mailchimp()

    /*   check_user_exist(email).then(message=>{
           console.log(message)
       }).catch(err=>{
           console.log(
               err.status
           )
       })*/



})





app.listen(port, ()=>{
    console.log('THe server is running on ' + port)
})