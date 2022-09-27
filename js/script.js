// Initialise select options for search filter
/* 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });
 */
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });

// About us tabs materialize animate
$('.tabs').tabs();

// Typing animation
var typed = new Typed (".auto-type",{
    strings: ["brand names", "product names", "copy writing", "campaigns", "art projects"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});

// Fun fact API 

var randomWordEl = $('#randomWord')
var APIkey = "4s5jzik/flN/oJ+DRV00pg==FCTdV9mEsQVKjz4S";

//

function displayRandomWord(event){
  event.preventDefault();
  getFacts ();
}

function getFacts (){
    var apiUrl = "https://api.api-ninjas.com/v1/randomword";
    fetch(apiUrl)
    .then (function (response) {
            if (response.status == 200) {
            console.log("This is working!" + response);
            response.json().then (function (data) {
                console.log (data);
              
              const {word} = data;
            
        // Display random word from response

        $(randomWordEl).html(word);
              })
          }
        })
}

getFacts();

$("#random-button").on("click",displayRandomWord);
/* $.ajax({
  method: 'GET',
  url: 'https://api.api-ninjas.com/v1/randomword',
  headers: { 'X-Api-Key': '4s5jzik/flN/oJ+DRV00pg==FCTdV9mEsQVKjz4S'},
  contentType: 'application/json',
  success: function(result) {
      console.log(result);
  },
  error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
  }
});
 */
