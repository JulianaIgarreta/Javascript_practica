function esBisiestro(anio){
    if(((anio % 4 == 0) && (anio % 100 == 0)) ||(anio % 400 ==0)){
        return "El año es bisiestro"
    }else{
        return "El año no es bisiestro"
    }
}
let anio =  2021;
let anioBisiestro = console.log(esBisiestro(anio));