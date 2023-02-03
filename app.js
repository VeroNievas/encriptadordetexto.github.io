
    
    function cifrarTexto() {
        let input = document.querySelector("textarea.textoentrada");
        let input1 = input.value.replaceAll('e', 'enter');
        let input2 = input1.replaceAll('i', 'imes');
        let input3 = input2.replaceAll('a', 'ai');
        let input4 = input3.replaceAll('o', 'ober');
        let input5 = input4.replaceAll('u', 'ufat');
        textosalida.innerHTML =  input5;
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("textosalida").style.height = "768px";
        document.getElementById("textosalida").style.marginTop = "32px";
        
    }

    var button1 = document.querySelector("button.botonencriptar");
    button1.onclick = cifrarTexto;
    
    function copiarTexto() {
        var copyText = document.getElementById("textosalida");
        navigator.clipboard.writeText(copyText.value);
        alert("Se ha copiado el texto: " + copyText.value);
    }
    var button2 = document.querySelector("button.botoncopiar");
    button2.onclick = copiarTexto;

    
    function descifrarTexto() {
        let cifrado = document.querySelector("textarea.textoentrada");
        
        let cifrado1 = cifrado.value.replaceAll('enter', 'e');
        let cifrado2 = cifrado1.replaceAll('imes', 'i');
        let cifrado3 = cifrado2.replaceAll('ai', 'a');
        let cifrado4 = cifrado3.replaceAll('ober', 'o');
        let cifrado5 = cifrado4.replaceAll('ufat', 'u');
        textosalida.innerHTML =  cifrado5;
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("mensaje").style.display = "none";
        document.getElementById("textosalida").style.height = "768px";
        document.getElementById("textosalida").style.marginTop = "32px";
        
    }

    var button3 = document.querySelector("button.botondesencriptar");
    button3.onclick = descifrarTexto;