window.onload = function() {
    visor1=this.document.getElementById("visor");
    mititulo=this.document.getElementById("titulo");
}
function mifoto (num) {
    f="foto"+num+".jpg";
    document.images["fotoVisor"].src=f;
    t=document.images["fotos"+num].alt;
    mititulo.innerHTML=t;
}