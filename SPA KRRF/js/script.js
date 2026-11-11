 //Script de Botonera
 function llamar(){
        let botonera=document.getElementById("botonera");
            botonera.classList.toggle("botonera-open");
            botonera.style.transition="0.5s";
    }
  //Script de Galeria  
        let num=0;
        function adelante(){
             num++
            if(num>8)
            num=1;
        let img=document.getElementById('img');
            img.src="img/"+"spa0"+num+".jpg";
        }
         function atras(){
             num--
            if(num<1)
            num=8;
        let img=document.getElementById('img');
            img.src="img/"+"spa0"+num+".jpg";
        }
//Script del Header
        window.addEventListener('scroll',Bajar);
        function Bajar(){
            let header=document.getElementById("header");
            let posy=window.pageYOffset;
            if(posy>300){
                header.style.background="black";
                header.style.transition="0.5s";
            }
            else{
                header.style.background="none";
                header.style.transition="0.5s";
            }
        }

        //Script de los clientes
        let imagenes=[];
        imagenes[0]="img/shakira.jpeg";
        imagenes[1]="img/thalia.jpeg";
        imagenes[2]="img/jennifer.jpg";
        imagenes[3]="img/fumala.jpg";
        let cambioImagenes=0;
        function Cambiar(){
            document.imagen.src=imagenes[cambioImagenes];
            if(cambioImagenes<3){
                cambioImagenes++;    
            }
            else{
                cambioImagenes=0;
            }
        }
        setInterval(Cambiar, 3000);
        window.addEventListener("load",Cambiar);