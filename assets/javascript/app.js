var movies = ["toy story", "up", "wall e"];

function displayGif() {
  $("button").on("click", function() {
    var movie = $(this).attr("data-name");
    console.log(this);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      movie + "-pixar&rating=g&api_key=5hLboZ2p4N9zrnpsSsN4JyAg2P94McEq&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#pixars-view").empty();

        var results = response.data;
        console.log(results)

      for (var i = 0; i < results.length; i++) {
          var movieDiv = $("<div class=pixMovie>");
          var p = $("<p>").text("rated: " + results[i].rating);
          var movieImage = $("<img>");
          movieImage.attr("src", results[i].images.fixed_height.url);
          movieDiv.append(movieImage).append(p);
          $("#pixars-view").prepend(movieDiv);
      }
    });
  });
}

function renderButton() {
  $("#buttons-view").empty();
  
  for (var i = 0; i < movies.length; i++) {
    var a = $("<button>");
    a.text(movies[i]);
    a.addClass("pixar");
    a.attr("data-name", movies[i]);
    $("#buttons-view").append(a);
  }
}

$("#add-pixar").on("click", function(event) {

  event.preventDefault();
  var pixar = ["toy story", "a bugs life", "toy story 2", "monsters inc", "finding nemo", "the incredibles", "cars", "Ratatouille", "wall e", "up", "toy story 3", "cars 2", "brave", "monsters university", "inside out", "the good dinosaur", "finding dory", "cars 3", "coco", "the incredibles 2"];
  var a = document.getElementById("pixar-input").value;
  console.log(a);
  if (pixar.indexOf(a) === -1) {
    alert("Thats not a Pixar Movie")
  } else {
    var movie = $("#pixar-input").val().trim();
    movies.push(movie);
    renderButton();
  }

});

$(document).on("click", ".pixar", displayGif);

