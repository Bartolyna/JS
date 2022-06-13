const BD = [
        { 
                'nombre': 'camara',
                'valor': '120.000'
        },
        { 
                'nombre': 'televisor',
                'valor': '1.200.000'
        },
        { 
                'nombre': 'computador',
                'valor': '2.200.000'
        },

];


function solicitar(){
        

        function Producto(nombre, valor){
                this.nombre = nombre
                this.valor = valor
        }

        nombre = prompt('Ingrese  el nombre producto ');
        valor = prompt('Ingrese el valor del producto');

        nuevoProducto = new Producto(nombre, valor);
        console.log(nuevoProducto)
}

       

function agregar(){
        BD.push(nuevoProducto);        
        console.log(BD)
} 

function consultar(){
        let producto = prompt('Ingrese el producto a consultar');
        let consulta = BD.find(element => producto);
       
        console.log(consulta.valor);

}

function eliminar(){

}



/* solicitar();
agregar(); */
consultar();