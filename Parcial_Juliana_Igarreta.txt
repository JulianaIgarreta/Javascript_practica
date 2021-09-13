const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Juliana Igarreta";
const tema = "TEMA 3";

const profesionales = [
    {
        id: 0,
        estaHabilitado: false,
        honorarioConsulta: 2007.68,
        edad: 29,
        nombre: "Huber Wilkins",
        email: "huberwilkins@speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 0,
        puntaje: 8,
    },
    {
        id: 1,
        estaHabilitado: true,
        honorarioConsulta: 2325.56,
        edad: 21,
        nombre: "Goldie Haley",
        email: "goldiehaley@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 7,
    },
    {
        id: 2,
        estaHabilitado: false,
        honorarioConsulta: 2208.17,
        edad: 36,
        nombre: "Pena Landry",
        email: "penalandry@speedbolt.com",
        especialidad: "Dermatologia",
        cantidadConsultas: 0,
        puntaje: 7,
    },
    {
        id: 3,
        estaHabilitado: false,
        honorarioConsulta: 3266.71,
        edad: 20,
        nombre: "Leanne Burch",
        email: "leanneburch@speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 1,
        puntaje: 5,
    },
    {
        id: 4,
        estaHabilitado: false,
        honorarioConsulta: 2674.09,
        edad: 31,
        nombre: "Haynes Fuentes",
        email: "haynesfuentes@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 4,
    },
    {
        id: 5,
        estaHabilitado: true,
        honorarioConsulta: 1851.37,
        edad: 27,
        nombre: "Tamika Fuentes",
        email: "tamikanewman@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 6,
    },
    {
        id: 6,
        estaHabilitado: true,
        honorarioConsulta: 2568.94,
        edad: 34,
        nombre: "Russo Baldwin",
        email: "russobaldwin@speedbolt.com",
        especialidad: "Dermatologia",
        cantidadConsultas: 4,
        puntaje: 10,
    },
    {
        id: 7,
        estaHabilitado: true,
        honorarioConsulta: 2601.76,
        edad: 36,
        nombre: "Dodson Shaffer",
        email: "dodsonshaffer@speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 0,
    },
    {
        id: 8,
        estaHabilitado: true,
        honorarioConsulta: 1949.92,
        edad: 40,
        nombre: "Guerra Bright",
        email: "guerrabright@speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 8,
        puntaje: 0,
    },
    {
        id: 9,
        estaHabilitado: true,
        honorarioConsulta: 3898.11,
        edad: 20,
        nombre: "Dina Navarro",
        email: "dinanavarro#speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 6,
        puntaje: 8,
    },
    {
        id: 10,
        estaHabilitado: false,
        honorarioConsulta: 2745.73,
        edad: 27,
        nombre: "Stafford Watts",
        email: "staffordwatts#speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 0,
        puntaje: 6,
    },
    {
        id: 11,
        estaHabilitado: false,
        honorarioConsulta: 2808.98,
        edad: 39,
        nombre: "Joni Avery",
        email: "joniavery@speedbolt.com",
        especialidad: "Neumonologia",
        cantidadConsultas: 3,
        puntaje: 9,
    },
    {
        id: 12,
        estaHabilitado: true,
        honorarioConsulta: 1941.13,
        edad: 21,
        nombre: "Mayra Tran",
        email: "mayratran#speedbolt.com",
        especialidad: "Oftamologia",
        cantidadConsultas: 8,
        puntaje: 3,
    },
    {
        id: 13,
        estaHabilitado: false,
        honorarioConsulta: 3930.0344999999998,
        edad: 23,
        nombre: "Ward Dale",
        email: "warddale#speedbolt.com",
        especialidad: "Cardiologia",
        cantidadConsultas: 1,
        puntaje: 3,
    },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

//Ejercicio A y B, creo el objeto literal pedido
appProfesionales = {
    profesionalesNuevo: profesionales,
    listarProfesionales: function (arregloProfesionales) {
        for (let i = 0; i < arregloProfesionales.length; i++) {
            let ID = profesionales[i].id;
            let estaHabilitado = profesionales[i].estaHabilitado == true ? "ok" : "Inactivo";
            let especialidad = profesionales[i].especialidad;
            let nombre = profesionales[i].nombre;
            let honorarioConsulta = profesionales[i].honorarioConsulta;
            let email = profesionales[i].email;

            console.log(`id: ${ID}, ${estaHabilitado}, su especialidad es: ${especialidad}, su nombre es: ${nombre},
            cobra su consulta: ${honorarioConsulta}, y su mail es: ${email} //`);
        }

    },
    //Ejercicio C
    filtrarHabilitados: function () {
        let arregloHabilitados = [];
        for (let i = 0; i < this.profesionalesNuevo.length; i++) {
            if (this.profesionalesNuevo[i].estaHabilitado == true) {
                arregloHabilitados.push(this.profesionalesNuevo[i].nombre)
            }
        }
        console.log(`Los profesionales que están habilitados son: ${arregloHabilitados}`)
    },

    //Ejercicio D

    buscarPorID: function (id) {
        for (let i = 0; i < this.profesionalesNuevo.length; i++) {
            if (id == this.profesionalesNuevo[i].id) {
                return console.log(this.profesionalesNuevo[i].nombre);
            }
        }

    },

    //Ejercicio E
    incrementarHonorarios: function (id, porcentaje) {

        let profesionalSueldo = this.buscarPorID(id);
        let factor = 1 +(1*porcentaje) / 100;
        if(profesionalSueldo)
        profesionalSueldo.honorarioConsulta = (factor + profesionalSueldo.honorarioConsulta).toFixed(2);
        return profesionalSueldo;
        
    },
    corregirEmails: function () {
        for(let i = 0; i< this.profesionalesNuevo.length;i++){
            const profesionalEmail = this.profesionalesNuevo[i];
            if(profesionalEmail){
                profesionalEmail.email = profesionalEmail.email.replace("#","@");
            }
            console.log(profesionalEmail.email);            
        }        
     
    }
}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarProfesional");
appProfesionales.listarProfesionales(profesionales); //Llamo al arreglo de objetos para que me muestre todo

console.log(o);

console.log(v, oo + "   C. filtrarHabilitados");
appProfesionales.filtrarHabilitados();
console.log(o);

console.log(v, oo + " D. buscarPorId(1)");
appProfesionales.buscarPorID(3);
console.log(o);

console.log(v, oo + "  E. incrementarHonorarios");
appProfesionales.incrementarHonorarios(3, 25);
console.log(o);

console.log(v, oo + " F. corregirEmails");
appProfesionales.corregirEmails();
console.log(o);