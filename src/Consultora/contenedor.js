import fs from 'fs';
const path = './files/productos.json';

class Contenedor{
    getAll = async()=>{
        try{
        let data = await fs.promises.readFile(path,'utf8');
        let productos = JSON.parse(data);
        return productos;
        }catch(err){
            console.log(err);
        }
}
    saveData = async(productos)=>{
        try{
            let data = await this.getAll();
            if(productos.lenght===0){
                data.push(productos);
                await fs.promises.writeFile(path,JSON.stringify(data, null, '\t'));

            }else{
                productos.id = data.length+1;
                data.push(productos);
                console.log(data);
                await fs.promises.writeFile(path,JSON.stringify(data, null, '\t'));
            }
        }catch(error){
            console.log(error);
        }
    }

    getById = async(idNumber)=>{
        try{
            let data = await this.getAll();
            let producto = data.find(producto=>producto.id===idNumber);
            return producto;
        }catch(error){
            console.log(error);
        }
    }

    getAny = async()=>{
        try{
            let data = await this.getAll();
            let producto = data[Math.floor(Math.random()*data.length)];
            return producto;
        }catch(error){
            console.log(error);
        }
    }

    deleteAll = async()=>{
        try{
            let data = await this.getAll();
            data = [];
            await fs.promises.unlink(path);
            console.log('Todos los productos fueron eliminados');
        }catch(error){
            console.log(error);
        }
    }

    update = async(producto)=>{
        try{
            let data = await this.getAll();
            let index = data.findIndex(producto=>producto.id===producto.id);
            data[index] = producto;
            await fs.promises.writeFile(path,JSON.stringify(data, null, '\t'));
            console.log('Producto actualizado');
        }catch(error){
            console.log(error);
        }
    }

}
export default Contenedor;

