const Product=require('../model/product.js')

exports.getAllProduct = async (req, res) => {
    let getdata = await Product.find({})
    res.json(getdata);
    console.log(getdata)
}
exports.getProduct = async (req, res) => {
    let id = (req.params.id)
    let item = await Product.find({ 'id': id })
    res.json(item)
}
exports.getCategoryProduct = async (req, res) => {
    let cat = (req.params.cat)
    let item = await Product.find({ 'category': cat })
    res.json(item)
}