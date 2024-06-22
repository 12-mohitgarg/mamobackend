
const express =require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());


const Routes = require("./routes/route");

app.use("/api/v1",Routes);


app.listen(PORT,() =>{
    console.log(`server started successfully at port number ${PORT}`);
})


const dbConnect =require("./config/database");
dbConnect();



app.get("/",(req,res) => {
    res.send(`<h1>this is homepage</h1>`)
})