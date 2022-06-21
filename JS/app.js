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
                        <button class="button-add" onclick="add(${data.nombre},${data.valor})">Agregar</button>
                        </div>
                        <!-- <img class="card-img-bottom" src="../bootstrap4/img_avatar6.png" alt="Card image" style="width:100%"> -->
                </div>
                
                `
                carta.innerHTML += producto
        });
}

mostrarProductos();

let products = [];
let total = 0;

function add(nombre, valor) {
    console.log(nombre, valor);
   /*  products.push(nombre);
    total = total + valor;
    document.getElementById("checkout").innerHTML = `Pagar $${total}` */
}

function pay() {
    window.alert(products.join(", \n"));
}
       

function agregar(){
        nombre = document.querySelector('#nombre').value;
        valor = document.querySelector('#valor').value;


        function Producto(nombre, valor){
                this.nombre = nombre
                this.valor = valor
        }

        
        
        nuevoProducto = new Producto(nombre, valor);

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