//Adding a movie to our list when the Add button is pressed


// select the HTML element with the message id using querySelector. Save it to a variable called message.
let message = document.querySelector(`#message`); 


// In index.js, create a new function called addMovie that takes in an event as a parameter.
function addMovie(event){ 
    // Because our button is inside a form element, it has a default action that is also running and interfering with our code. To fix this, at the beginning of the addMovie function, add event.preventDefault()
    event.preventDefault()
    // Use querySelector to get the input, save it to a variable called inputField.
    let inputField = document.querySelector(`input`);
    //Create a new variable called movie, store a new li element in it using document.createElement
    const movie = document.createElement(`li`); 
    // Next create a new span element and save it to a variable called movieTitle. 
    const movieTitle = document.createElement(`span`); 
    // Set the textContent of movieTitle to be the value of inputField. 
    movieTitle.textContent = inputField.value;
    // Finally, we need to add this function as an event handler for every movie title. In the addMovie function, after you set the textContent of the span element, use addEventListener to listen for a click event on the span and run the crossOffMovie function.

    // In the crossOffMovie function, we’re going to do something similar, but we want to have different messages based off of whether the movie was just checked off as ‘watched’ or if it was added back to the list. So let’s start by creating the structure for an if/else block. Put it below where you toggled the checked class in the crossOffMovie function.
    movieTitle.addEventListener(`click`, event => {
        event.target.classList.toggle(`checked`)
        if(event.target.classList.contains(`checked`)) { 
            message.textContent = `Movie Watched!`
        }
            else {
                message.textContent = `Movie Added Back!`;
      
          }
          revealMessage()
    }
    );
    // Use the appendChild method on movie, passing in movieTitle to attach the title to its parent.
    // after appending the movieTitle to movie, use createElement to create a new button element and save it to a variable called deleteBtn.
    movie.appendChild(movieTitle); 
    const deleteBtn = document.createElement(`button`); 
    // Set the textContent of deleteBtn to be the letter X.
    deleteBtn.textContent = `X`; 
    // Then, use querySelector to find the ul element that already exists in our HTML and use appendChild to attach the movie element we created to the list.
    // Use addEventListener to listen for a click event on the button and run the deleteMovie function. We will create that function later in this step.
    deleteBtn.addEventListener(`click`,deleteMovie); 
    // use the appendChild method to add deleteBtn onto the movie element.
    movie.appendChild(deleteBtn);
    document.querySelector(`ul`).appendChild(movie); 
    // set the value of inputField to an empty string at the bottom of the addMovie function.
    inputField = ``; 

}
// Finally, outside of your function, use querySelector to select the form element and then use addEventListener to listen for a submit event on the form element and run the addMovie function.
document.querySelector(`form`).addEventListener(`submit`, addMovie); 
// create a new function called deleteMovie that takes in an event parameter. 
function deleteMovie(event){ 
    event.target.parentNode.remove(); 
    // In the deleteMovie function, add a line that assigns the textContent of message to be a string that says something like ‘Movie deleted!’ 
    message.textContent = `Movie Deleted!`; 
    revealMessage()
}

// In index.js, create a new function called crossOffMovie that takes in an event as a parameter. - Later, we will need to add this as an event handler for every movie title span.
// function crossOffMovie(event) {
//     // Call event.target.classList.toggle() passing in the checked class so that the class is added or removed if the title is clicked. (We want users to be able to “un-cross” movies off in case they did it by accident).
    
function revealMessage() {
    message.classList.remove(`hide`);
    setTimeout(()=> message.classList.add(`hide`), 1000)


}