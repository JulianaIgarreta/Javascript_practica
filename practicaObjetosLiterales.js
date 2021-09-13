const juli = {
    nombre: "Juliana",
    apellido: "Igarreta", 
    edad: 25,
    pasatiempos: ["Entrenar", "comer", "juntarse con amigos"], 
    solera:true, 
    contacto:{
        email: "julianaigarreta@gmail.com",
        instagram: "@julianaigarreta",
        cel: 2615062541
    },
    saludar: function(){
        console.log("Hola")
    }, 
    decirMiNombre:function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}
console.log(juli)
console.log(juli.nombre)
juli.saludar();
juli.decirMiNombre();