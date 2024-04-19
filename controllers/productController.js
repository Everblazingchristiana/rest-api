exports.getAllProducts = (req, res) => {
    res.status(200)
    res.json([
     {
        productName: "iphone15",
        productPrice: "$1000",
     }, 
     
     {
        productName: "iphone13",
        productPrice: "$500",
     },

     {
        productName: "iphone12",
        productPrice: "$300",
     },
    ])
}

exports.createSingleProduct = (req, res) => {
    res.status(200)
    res.json({
        
        message: "product added successfully"
        

})

}

exports.getSingleProduct = (req, res) => {
    res.status(200)
    res.json({

        message: "single product gotten successfully"
    })
}

exports.updateAllProduct = (req, res) => {
    res.status(200)
    res.json({
        message: 'product updated successfully'
    })
}

exports.deleteAllProduct = (req, res) => {
    res.status(200)
    res.json({
        message: 'product deleted successfully'
    })
}
