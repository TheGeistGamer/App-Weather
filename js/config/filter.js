export function NumText(string){//solo letras y numeros
    var out = '';
    //Se añaden las letras validas
    var filtro = '!@#$%^(*&)_-=+}{:"/><,[]|`';//Caracteres validos
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) {
        console.log('Simbolos encontrados');
       }
	     

    console.log(out);
    return out;
}


