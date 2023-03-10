module.exports = {
    addPerson: (req, res) => {
        database.push(req.body)
        res.status(200).send(database)
    },
    getPeople: (req, res) =>{
            res.status(200).send(database)
    },
    updatePersonPower: (req, res) => {
        let name = req.query.name
        let index
        for (let i = 0; i < database.length; i++) {
            let currentName = database[i].name
            if (currentName === name) {
                index = i
            }
        }
        if (index === undefined) {
            res.status(400).send("user not found")
        }else {
            database[index].power += 100
            res.status(200).send(database)
        }
    },
    deletePerson: () => {
        let name = req.params.name
        //Or
        //let {name} = req.params

        let index

        for(let i = 0; i < database.length; i++) {
            let currentName = database[i].name
            
            if(currentName === name) {
                index  = i
            }
        }

        if (index === undefined) {
            res.status(200).send(database)
        }else{
            database.splice(index, 1)
            res.status(200).send(database)
        }
    }
}


app.post("/person", (req, res) => {
    database.push(req.body) //maBod
    res.status(200).send(database) //doesn't matter what we send back, we just want to show success
})