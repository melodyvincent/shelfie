module.epxorts = {

    }
    readProduct: (req,res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory().then(response => {
            res.status(200).send(response);
       });
    }, 

    addProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { product_name, price, image_url} = req.body;

        dbInstance.addProduct([product_name, price, image_url])
        .then( () => res.send('Its Working!'))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong!"})
            console.log(err)
        });
    },

    
};