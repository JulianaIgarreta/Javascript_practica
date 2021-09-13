const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Juliana Igarreta";
const tema = "Mamasita rosalia";

const departamentos = [
    {
        id: 1,
        propietarios: "Dueño: Luis Perez",
        cantidadHabitacion: 2,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 2395.8
    },
    {
        id: 2,
        propietarios: "Dueños: Luis Perez y María Martinez",
        cantidadHabitacion: 1,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 1597.2
    },
    {
        id: 3,
        propietarios: "Dueña: Laura García",
        cantidadHabitacion: 2,
        disponible: false,
        aceptaMascotas: false,
        cantidadPersonas: 4,
        precioAlquiler: 3993
    },
    {
        id: 4,
        propietarios: "Dueña: Julieta Tols",
        cantidadHabitacion: 1,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 1996.5
    },
    {
        id: 5,
        propietarios: "Dueños: Julieta Tols y Pablo Groming",
        cantidadHabitacion: 1,
        disponible: false,
        aceptaMascotas: false,
        cantidadPersonas: 1,
        precioAlquiler: 11979
    },
    {
        id: 6,
        propietarios: "Dueño: Pablo Groming",
        cantidadHabitacion: 2,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 3,
        precioAlquiler: 4658.5
    },
    {
        id: 7,
        propietarios: "Dueño: Luis Perez",
        cantidadHabitacion: 2,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 3,
        precioAlquiler: 3327.5
    },
    {
        id: 8,
        propietarios: "Dueña: Julieta Tols",
        cantidadHabitacion: 3,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986
    },
    {
        id: 9,
        propietarios: "Dueñas: Julieta Tols y Laura García",
        cantidadHabitacion: 3,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986
    },
    {
        id: 10,
        propietarios: "Dueñas: Julieta Tols y Laura García",
        cantidadHabitacion: 3,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986
    },
    {
        id: 11,
        propietarios: "Dueño: Luis Perez",
        cantidadHabitacion: 3,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986
    },
    {
        id: 12,
        propietarios: "Dueño: Juan Pablo Martinez",
        cantidadHabitacion: 3,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986
    },
    {
        id: 13,
        propietarios: "Dueño: Juan Pablo Martinez",
        cantidadHabitacion: 2,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 4059.55
    },
    {
        id: 14,
        propietarios: "Dueño: Juan Pablo Martinez",
        cantidadHabitacion: 1,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 3993
    },
    {
        id: 15,
        propietarios: "Dueños: Martín Gutierrez y José Torres",
        cantidadHabitacion: 0,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 798.6
    },
    {
        id: 16,
        propietarios: "Dueños: Martín Gutierrez y José Torres",
        cantidadHabitacion: 0,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 798.6
    },
    {
        id: 17,
        propietarios: "Dueños: Martín Gutierrez y José Torres",
        cantidadHabitacion: 0,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 665.5
    }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A

let inmobiliaria = {
    datos: departamentos,
    listadoDeDeptos: function (arraydepartamentos) {
        for (let i = 0; i < arraydepartamentos.length; i++) {
            let id = arraydepartamentos[i].id;
            let propietarios = arraydepartamentos[i].propietarios;
            let cantidadHabitaciones = arraydepartamentos[i].cantidadHabitacion;
            let disponible = arraydepartamentos[i].disponible == true ? "Está disponible" :  "Alquilado";
            let aceptaMascotas = arraydepartamentos[i].aceptaMascotas == true ? "Acepta mascotas" : "No acepta mascotas";
            let cantidadPersonas = arraydepartamentos[i].cantidadPersonas;
            let precioAlquiler = arraydepartamentos[i].precioAlquiler;

            console.log(`ID: ${id}, precio ${precioAlquiler}, ${disponible}, ${cantidadHabitaciones},
        máximo ${cantidadPersonas} ${aceptaMascotas}, propietarios:${propietarios} `)

        }
    }, 
    departamentosDisponibles : function (){
        for(let i = 0; i < this.datos.length ; i++){
           // departamentos[i].disponible == true ? "Departamento disponible" : " ";
            console.log(`El departamento ${i}, ${departamentos[i].disponible == true ? "Departamento disponible" : " "} ` )
        }
    },
    buscarPorId : function (id){
        for(let i = 0; i < this.datos.length ; i++){
            if(id == this.datos[i].id){
                return this.datos[i]
            }
        }
        
    }, 
    buscarPorPrecio : function(precioBuscado){
        let deptosFiltrados = [];
        let departamentosDisponibles = this.departamentosDisponibles();
        for(let i = 0; i < this.datos.length ; i++){
            if(departamentosDisponibles[i].precioAlquiler <= precioBuscado){
                deptosFiltrados.push(departamentosDisponibles[i])
            }
        }
        return departamentosFiltrados;
    }
}

// B

// C

// D

// E

// F

// G

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos: ");
inmobiliaria.listadoDeDeptos(departamentos);

console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
inmobiliaria.departamentosDisponibles();

console.log(o);

console.log(v, oo + " D. buscarPorId");
let idDepartamento =inmobiliaria.buscarPorId(2)
inmobiliaria.listadoDeDeptos([idDepartamento]);

console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
console.log(o);

