const express = require("express")
const app = express()
const port = 8000
const fs = require("fs")


const productRoutes = require("./routes/productRoute")



app.get("/", (req, res) => {
    res.send("home page")

})




app.use(productRoutes)
app.use(express.json())



app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port}
    to open website`)

})
