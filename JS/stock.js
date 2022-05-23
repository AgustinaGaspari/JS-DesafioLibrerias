//clase
class Producto{
    constructor(id,nombre,precio,stock,cantidad,img){
        this.id=id;
        this.nombre= nombre;
        this.precio= precio;
        this.stock= stock;
        this.cantidad =cantidad;
        this.img = img;
        
    }
}

//Declaro array
    let productos= []
    console.log(productos)
    

//Agrego productos al array
    productos.push(new Producto(1,"BANDOLERA",2500,30,1,'../img/bandolera.png'));
    productos.push(new Producto(2,"RIÑONERA L",2000,20,1,'../img/Riñonera.png'));
    productos.push(new Producto(3,"BOLSOTOTE",3500,15,1,'../img/BolsoBlackout.png'));
    productos.push(new Producto(4,"BILLETERA S", 900, 10,1,'../img/BilleteraBlackoutChica.png'));
    productos.push(new Producto(5,"BILLETERA L", 1000,10,1,'../img/BilleteraBlackoutGrande.png'));
    productos.push(new Producto(6,"MOCHILA",4500,5,1,'../img/mochila.png'));
    productos.push(new Producto(7,"RIÑONERA S",1500,20,1,'../img/riñonera3.png'));
    productos.push(new Producto(8,"TABAQUERA",1800,15,1,'../img/TabaqueraCamara.png'));