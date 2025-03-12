const express = require('express');
const app = express();
const mdb = require("mongoose");
const Signup = require("./models/UsersSchema");
const bcrypt = require('bcrypt');
const cors = require('cors');
require("dotenv").config(); 
const dotenv = require('dotenv')
dotenv.config();
app.use(cors())
app.use(express.json())


const PORT = 3002;

mdb.connect("mongodb+srv://yadav:yadav@credential.25wb3.mongodb.net/Credential?retryWrites=true&w=majority&appName=Credential")
   .then(() => {
    console.log("mdb Connection Successful");
   })
   .catch((err)=> {console.log("check your connection string", err);})

app.post("/signup", async (req, res) => {
  try{
    const {Username, password} = req.body;
    console.log(Username,password);
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newSignup = new Signup({
          Username : Username,
          password : hashedPassword

    })

    await newSignup.save();
    console.log("Signup successful");
    res.status(200).json(newSignup);

  }
  catch(error){
    console.log("error occur",error);
    res.status(400).json({ message: "unsuccessful", isSignedUp: false });
  }
});


app.post("/login", async(req, res) => {
  const{Username, password} = req.body;
  try{
    console.log(Username+" "+password);
    const userDetails = await Signup.findOne({Username});

    if(userDetails) {
      //alert("signup please");
      const storePw = userDetails.password;
      bcrypt.compare(password, storePw, (err, res) => {
        if(err) {
          console.log(err);
        }
        if(res) {
          console.log("passwords match !!");
        }
        else console.log("passwords doesn't match !!");
      });
      res.status(200).json({message : "hi"});
    }
    else{
      return res.status(200).json({message:"Otha veliya poda poolu..."});
    }
  }
  catch(err){
    console.log(err);
    return res.status(200).json({message:"What are you doing step bro take it out..."});
  }
}) 

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
})

