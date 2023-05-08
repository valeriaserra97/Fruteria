//declaracion de variables globales.
//-----------------------------------
let acumulador=0;
let importe=0;
let compra=new Array(0);
let ref=-1;
let pesado=false;

let frutas=[
{id:0,nombre:'Arandano',precio:2.50,min:0.100,max:5.00},
{id:1,nombre:'Bayas',precio:3.50,min:0.250,max:3.00 },
{id:2,nombre:'Cerezas',precio:1.50,min:0.250,max:2.00 },
{id:3,nombre:'Frambuesa',precio:2.25,min:0.100,max:3.00 },
{id:4,nombre:'Fresa',precio:1.10,min:0.100,max:4.00},

{id:5,nombre:'Granada',precio:2.35,min:0.100,max:3.00},
{id:6,nombre:'Kiwi',precio:2.15,min:0.100,max:3.00},
{id:7,nombre:'Limon',precio:1.70,min:0.900,max:2.50},
{id:8,nombre:'Manzana Verde',precio:1.55,min:0.100,max:3.50},
{id:9,nombre:'Melocoton',precio:1.15,min:0.100,max:3.50},

{id:10,nombre:'Mora',precio:1.45,min:0.100,max:2.500},
{id:11,nombre:'Naranja',precio:2.75,min:0.050,max:0.800},
{id:12,nombre:'Pera',precio:1.70,min:0.100,max:3.00},
{id:13,nombre:'Piñas',precio:1.55,min:0.100,max:1.500},
{id:14,nombre:'Sandía',precio:1.25,min:0.100,max:3.00}
];

const display1=document.getElementById("articulo");
const display2=document.getElementById("precio");
const display3=document.getElementById("peso");
const display4=document.getElementById("importe");
const display5=document.getElementById("TC");
const ticket=document.getElementById("ticket");

//************************************************************************* */
function Limpiar(op){
    display1.innerHTML="- -";
    display2.innerHTML='0.00  €.';
    display3.innerHTML="0.00 Kg.";
    display4.innerHTML='0.00  €.';
    ref=-1;
    importe=0;
    pesado=false;
    if(op=='N'){
    for(let i=0;i<compra.length;i++){compra.pop}    
    acumulador=0;
    display5.innerHTML='0.00 €.';
    ticket.style.visibility='hidden';
    }

}
//************************************************************************* */
function Press(elem){
    elem.style.backgroundColor='#777';
}
//************************************************************************ */
function unPress(elem){
    elem.style.backgroundColor='#dfe9f1';
}
//************************************************************************ */
function Select(i){
     display1.innerHTML=frutas[i].nombre;
     display2.innerHTML=frutas[i].precio+"  €."
     display3.innerHTML="0.00 Kg.";
     display4.innerHTML='0.00  €.';
     ref=i;
}
//*********************************************************************** */
function Pesar(){
   if (!pesado && ref>=0){
    let maximo=frutas[ref].max;
    let minimo=frutas[ref].min;
    let precio=frutas[ref].precio.toFixed(2);
    let peso=(Math.random()*maximo)+minimo;
    display3.innerHTML=peso.toFixed(3)+" Kg.";
    importe=(peso*precio);
    display4.innerHTML=importe.toFixed(2)+"  €.";
    pesado=true;
   }else{
    alert("Error: primero debe elegir artículo.");
   }
}
//********************************************************************* */
function Add(){
    //console.log(acumulador);
    if(pesado){
    acumulador+=importe;//console.log(acumulador);
    let peso=parseFloat(display3.innerHTML);
    let stotal=parseFloat(display4.innerHTML);
    compra.push({articulo:frutas[ref].nombre,precio:frutas[ref].precio,cantidad:peso,subtotal:stotal},);
    display5.innerHTML=acumulador.toFixed(2)+" €.";
    pesado=false;
    importe=0;
    ref=-1;
      }else{
        alert("Error: primero debe elegir y pesar un artículo.");
      }
    }
/************************************************************************************** */
function Ahora(){
    var hoy={dia:"",hora:"",diasem:"",nds:"",mes:"",nmes:"", annus:""};
    var f=new Date();
        if(f.getDate()<10){var dd='0'+f.getDate();}else{var dd=f.getDate();}
        if((f.getMonth()+1)<10){var mm='0'+(f.getMonth()+1);}else{var mm=(f.getMonth()+1);}
        hoy.mes=mm;
        switch(parseInt(mm)){
            
            case 1:hoy.nmes="ENERO";break;
            case 2:hoy.nmes="FEBRERO";break;
            case 3:hoy.nmes="MARZO";break;
            case 4:hoy.nmes="ABRIL";break;
            case 5:hoy.nmes="MAYO";break;
            case 6:hoy.nmes="JUNIO";break;
            case 7:hoy.nmes="JULIO";break;
            case 8:hoy.nmes="AGOSTO";break;
            case 9:hoy.nmes="SEPTIEMBRE";break;
            case 10:hoy.nmes="OCTUBRE";break;
            case 11:hoy.nmes="NOVIEMBRE";break;
            case 12:hoy.nmes="DICIEMBRE";break;
           
        }//fin de switch
        hoy.annus=f.getFullYear();
        hoy.dia=dd+'-'+mm+'-'+f.getFullYear();
        
        if(f.getHours()<10){var hh='0'+f.getHours();}else{var hh=f.getHours();}
        if(f.getMinutes()<10){ mm='0'+f.getMinutes();}else{ mm=f.getMinutes();}
        if(f.getSeconds()<10){var ss='0'+f.getSeconds();}else{var ss=f.getSeconds();}
        hoy.hora=hh+':'+mm+':'+ss;
    
    switch(f.getDay()){
    case 0:hoy.diasem="DOMINGO";hoy.nds=6;break;
    case 1:hoy.diasem="LUNES";hoy.nds=0;break;
    case 2:hoy.diasem="MARTES";hoy.nds=1;break;
    case 3:hoy.diasem="MI\xc9RCOLES";hoy.nds=2;break;
    case 4:hoy.diasem="JUEVES";hoy.nds=3;break;
    case 5:hoy.diasem="VIERNES";hoy.nds=4;break;
    case 6:hoy.diasem="S\xc1BADO";hoy.nds=5;break;
    }//fin de switch
        
    return hoy;	
    
    }//fin de funcion
/************************************************************************************* */
function Terminar(){
if(compra.length>0){

 let cuerpo=document.getElementById("cuerpo");
 let momento=document.getElementById("ahora");
 let linea="";
 let fondo="";
 
 let ahora=Ahora();
momento.innerHTML=ahora.dia+"     "+ahora.hora;
cuerpo.innerHTML="";
for(let i=0;i<compra.length;i++){
 if(i % 2==0){fondo='par'}else{fondo='impar'}
 linea+="<tr class='"+fondo+"'><td class='concept'>"+compra[i].articulo+
            "</td><td class='pvp'>"+compra[i].cantidad+
            "</td><td class='peso'>"+compra[i].precio+
            "</td><td class='stl'>"+compra[i].subtotal+"</td></tr>";
}//fin del for i
linea+="<tr class='totalizar'><td colspan='3'>TOTAL</td><td>"+acumulador.toFixed(2)+" €.</td></tr>";
cuerpo.innerHTML+=linea;
ticket.style.visibility='visible';
}else{
    alert("Error: no hay ningún artículo en la lista de la compra.");
}
}//fin de la funcion Terminar    
