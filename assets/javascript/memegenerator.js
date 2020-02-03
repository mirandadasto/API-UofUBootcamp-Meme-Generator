var favoriteThingsArray = ["Aerial Silks", "Aerial Lyra", "Aerial Hammock", "Contortion", "Dogs", "Horses", "Sound of Music", "Dancing", "Teaching"];

// function displayGifInfo() 
// {
//     var favoriteThing = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + favoriteThing + "&api_key=eIhSvDCSjLD4C68VaoHGdJOpwgTg0OtT";

//     $.ajax(
//         {
//             url: queryURL,
//             method: "GET"
//         }).then(function(response)
//         {
//             var results = response.data;

//             for (var i = 0; i < results.length; i++)
//             {
//                 if(results[i].rating !== "r" && results[i].rating !== "pg-13")
//                 {

//                     var favoriteThingDiv = $("<div class = 'favoriteThing'>");
        
//                     var rating = response.rating;
        
//                     var p = $("<p>").text("Rating: " + rating);
        
//                     var favoriteImage = $("<img>");
        
//                     favoriteImage.attr("src", results[i].images.fixed_height.url);
        
//                     favoriteThingDiv.append(p);
//                     favoriteThingDiv.append(favoriteImage);
        
//                     $("favorite-things-view").prepend(favoriteThingDiv);
//                 }
//             }
//         })
// }

// Function for displaying movie data
function renderButtons() 
{
    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
    // Looping through the array of movies
    for (var i = 0; i < favoriteThingsArray.length; i++) 
    {
      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("favoriteThing-btn");
      // Adding a data-attribute
      a.attr("data-name", favoriteThingsArray[i]);
      console.log(favoriteThingsArray[i]);
      // Providing the initial button text
      a.text(favoriteThingsArray[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

//    // This function handles events where a movie button is clicked
//    $("#add-favorite-thing").on("click", function(event) 
//    {
//         event.preventDefault();
//         // This line grabs the input from the textbox
//         var favoriteThing = $("#favorite-Things-input").val().trim();

//         // Adding movie from the textbox to our array
//         favoriteThingsArray.push(favoriteThing);

//         // Calling renderButtons which handles the processing of our movie array
//         renderButtons();
//   });

  // Adding a click event listener to all elements with a class of "movie-btn"
  //$(document).on("click", ".favoriteThing-btn", displayGifInfo);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();