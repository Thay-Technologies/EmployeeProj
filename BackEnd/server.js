const express = require("express");
const errorHandler = require("./middeware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();

const app = express();
const port = process.env.PORT || 5000;

/*app.use(express.json());

app.use("/api/employees", require("./routes/employeeRoutes"));
app.use(errorHandler);*/

app.listen(port, ()=>{
  console.log(`Server running on port ${port} `);
});