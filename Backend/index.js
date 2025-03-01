const express = require('express');
const app = express();
const mdb = require("mongoose");
const PORT = 3000;
const Signup = require("./models/UsersSchema");
const bcrypt = require('bcrypt');
app.use(express.json())


mdb.connect("mongodb+srv://yadav:yadav@credentials.dmbcf.mongodb.net/?retryWrites=true&w=majority&appName=Credentials")
   .then(() => {
    console.log("mdb Connection Successful");
   })
   .catch((err)=> {onsole.log("check your connection string", err);})

app.post("/signup", async (req, res) => {
  try{
    const {Username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newSignup = new Signup({
          Username : Username,
          password : password

    })

    await newSignup.save();
    console.log("Signup successful");
    res.status(200).json(newSignup);

  }
  catch(error){
    console.log(error);
    res.status(400).json({ message: "unsuccessful", isSignedUp: false });
  }
});


app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);

})