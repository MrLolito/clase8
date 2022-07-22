import {Router} from 'express';
import Consultora from '../Consultora/contenedor.js';
const router = Router();
const products = [];
const consultora = new Consultora();

//Productos 
router.get('/',async(req,res)=>{
    let allProducts = consultora.getProducts();
    res.send(allProducts);
})

//Productos por id
router.get('/id', async(req,res)=>{
    let volverProducto = consultora.getProducts(req.query.id);
    res.send(volverProducto);
})

//sAVE DATA
router.post('/',(req,res)=>{
    let products = req.body
    if(!products.name) res.status(400).send('El nombre es obligatorio');
    products.push(products)
    res.send({status:"success", message:"Producto agregado correctamente"})
    consultora.saveData(products);
})

//Update
router.put('/',(req,res)=>{
    let products = req.body
    if(!products.name) res.status(400).send('El nombre es obligatorio');
    products.push(products)
    res.send({status:"success", message:"Producto actualizado correctamente"})
    consultora.update(products);
})

//DELETE    
router.delete('/',(req,res)=>{
    let products = req.body
    if(!products.name) res.status(400).send('El nombre es obligatorio');
    products.push(products)
    res.send({status:"success", message:"Producto eliminado correctamente"})
    consultora.deleteAll();
})


export default router;