// Initialise select options for search filter

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });

// About us tabs

$('.tabs').tabs();

var typed = new Typed (".auto-type",{
    strings: ["brand names", "product names", "copy writing", "campaigns", "art projects"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});

// 
//LOCAL STORAGE  - user enters word and clicks 'translate' - hero image goes away, and word saves to local
var word = document.getElementById("translate")
var saveButton = document.getElementById("save");

function saveUserWord() {
  var userWord = {
    word: word.value.trim()
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("userWord", JSON.stringify(userWord));
}

  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveUserWord();
    });