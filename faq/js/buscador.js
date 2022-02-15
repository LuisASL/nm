var search = document.getElementById("search"),
    letras = document.getElementsByTagName("p"),
    forEach = Array.prototype.forEach;

search.addEventListener("keyup", function (e) {/* Escucha las letras que se tecleen */
    var choice = this.value;

    forEach.call(letras, function (f) {
        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
            f.parentNode.style.display = "none";
        else
            f.parentNode.style.display = "block";
    });


    $(function () {/* Bloquea la tecla ENTER */
        $("input").keypress(function (e) {
            var key;
            if (window.event)
                key = window.event.keyCode; //IE
            else
                key = e.which; //firefox     
            return (key != 13);
        });
    });


    const categorias = document.querySelectorAll('#categorias .categoria');
    const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
    categorias.forEach(() => {
        
            // Activamos el contenedor de preguntas que corresponde
            contenedorPreguntas.forEach((contenedor) => {
                
                    contenedor.classList.add('activo');     
            });    
    });
}, false);
