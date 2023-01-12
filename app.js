

const movies = [
    {
        watched: false,
        name: "Avatar",
        year: 2009,
        country: "USA",
        remark:"",
        actors:["Sam Worthington", "Kate Winslet" ]
    },

    {
        watched: true,
        name: "Početak",
        year: 2009,
        country: "USA",
        remark:"",
        actors:["Tom Hardy", "Leonardo DiCaprio" ]
    },

    {
        watched: true,
        name: "Top Gun",
        year: 2010,
        country: "USA",
        remark:"",
        actors:["Miles Teller", "Tom Cruise", "Meg Ryan"]
    }

]

function displayMoviesInTable(){
    let tableBody = document.getElementById("table_body");
    let rows = "";
    movies.forEach(movie => {
        let rowClass = movie.watched ? "green" : "red";
        rows += `<tr class="${rowClass}">
        <td class="text-center">
        <div class="form-check">
        <input class="form-check-input" class="text-center" type="checkbox" onclick="checkbox(${movies.indexOf(movie)})" ${movie.watched ? "checked" : ""}>
        </div>
        </td>
        <td class="text-center">${movie.name}</td>
        <td class="text-center">${movie.year}</td>
        <td class="text-center">${movie.country}</td>
        <td class="text-center">${movie.remark}</td>
        <td class="text-center">${movie.actors.join(", ")}</td>
        </tr>`;
    });
    tableBody.innerHTML = rows;
    document.getElementById("movie_form").reset();

}

const checkbox = (check) => {
    movies[check].watched = !movies[check].watched;
    displayMoviesInTable();
} 



function getMovies (){
      let  name = (String)(document.getElementById("movie_name").value);
      let  year= (String)(document.getElementById("movie_year").value);
      let  country =(String)(document.getElementById("movie_country").value);
      let  remark = (String)(document.getElementById("movie_remark").value);
      let  actors = (String)(document.getElementById("movie_actors").value);
      let  arrActors = actors.split(",");
      

      let newMovie = {
          watched: false,
          name: name,
          year: year,
          country: country,
          remark: remark,
          actors:arrActors
        }

        movies.push(newMovie);        
        
        displayMoviesInTable(newMovie);
        window.onload = function() {
            document.getElementById("exampleModal").classList.add("hide");
        }
    }
    
    
    displayMoviesInTable();
    document.getElementById("movie_form").addEventListener("submit", function(e) {
        e.preventDefault();
    });

   