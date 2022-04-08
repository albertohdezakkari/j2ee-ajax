const URL = "https://swapi.dev/api/";
const PEOPLE = "people";
const PLANETS = "planets";
const STARSHIPS = "starships";

function getFilms(){
    /*PETICIÓN ASÍNCRONA AL SERVIDOR */
    $.ajax(
        {
            //url: "/Controller?ACTION=ADD&ID=5&NOMBRE=PERA",
            /*url: "/Controller",
            data:"ACTION=LISTAR_PELICULAS&ID=3",*/
            url: URL + PEOPLE,
            //data:"ACTION=LISTAR_PELICULAS&ID=3",
            type: 'GET',
            dataType: 'json',
            success: function (responseText){
                // document.getElementById();
                // document.querySelector();
                // ('#GALLERY')
                /////////////
                // CHULETA PARA EL PROYECTO DE 08-04-22
                /////////////
                    let html="";
                    html+="<table>";
                    // CABECERAS
                    for(let contador in responseText.results){
                        html+="<tr>";
                            html+="<td>";
                                html+=responseText.results[contador].name  ;
                                html+="<img src='../img/300.jpg' />";
                            html+="</td>";
                        html+="</tr>";
                        // responseText.results[contador].name           
                        /*let imgPersonaje=responseText.results[contador].img;
                        let imagen1 = <img src='imgPersonaje' />;
                        let imagen2 = <img src="img/300.jpg"/>;*/
                    }
                    html+="</table>";
                /////////////
                let personaje = "";
                personaje+="NAME="+responseText.results[0].name;
                personaje+="<br>HEIGHT="+responseText.results[0].height;
                personaje+="<br>MASS="+responseText.results[0].mass;
                personaje+="<br>COLOR="+responseText.results[0].hair_color;
                personaje+="<br>EYE="+responseText.results[0].eye_color;
                document.getElementById("GALLERY").innerHTML=personaje;
                $('#GALLERY').html(personaje);
                //$('#GALLERY').text(personaje);
            },
            error: function(xhr, textStatus, errorThrown){}
        }
    );
}