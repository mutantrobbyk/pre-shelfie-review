module.exports={
    getPeople: (req, res) => {
        const db = req.app.get('db')
        db.get_people().then(result => {
            res.status(200).send(result)
        })
    },
    getPerson: (req, res) => {
        // console.log(req.params)
        const db = req.app.get('db')
        const {id} = req.params
        db.get_one_person(id).then(result => {
            res.status(200).send(result)
        })

    },
    addPerson: (req, res) => {
        const db = req.app.get('db')
        const {name, hobby, image} = req.body
        const newImage = `robohash.org/${name}.png`
        db.add_person([name, hobby, newImage]).then(result => {
            res.status(200).send(result)
        })
    },
    updatePerson: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, hobby, image} = req.body
        const newImage = `robohash.org/${name}.png`
        db.update_person([name, hobby, newImage, id]).then(result => {
            res.status(200).send(result)
        })
    },
    deletePerson: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_person(id).then(result => {
            res.status(200).send(result)
        })
    }
}