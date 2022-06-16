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

function mostrarProductos(){
        
        let carta = document.querySelector('#carta');


        BD.forEach((data) => {

                let producto =`
                
                <div class="card" style="width:400px">
                        <div class="card-body">
                        <h4 class="card-title">${data.nombre}</h4>
                        <p class="card-text">${data.valor}</p>
                        </div>
                        <!-- <img class="card-img-bottom" src="../bootstrap4/img_avatar6.png" alt="Card image" style="width:100%"> -->
                </div>
                
                `
                carta .innerHTML += producto
        });
}

mostrarProductos();

function solicitar(){
        

        function Producto(nombre, valor){
                this.nombre = nombre
                this.valor = valor
        }

        nombre = document.querySelector('#nombre');
        valor = document.querySelector('#valor');
        
        nuevoProducto = new Producto(nombre, valor);
        console.log(nombre)
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
//consultar();