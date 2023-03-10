let express = require("express")
let cors = require("cors")

let app = express()

app.use(express.json())
app.use(cors())

let {
    addPerson,
    getPeople,
    updatePersonPower,
    deletePerson
} = require("./controller")

let databse = []

app.get("/people",)



app.listen(7417, () => {
    console.log("app is up on 7147") //will show up on backend console
})