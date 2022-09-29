$(document).ready(function () {
  $('select').formSelect();
});

// About us tabs

$('.tabs').tabs();


// Side Nav animation

$(document).ready(function () {
  $('.sidenav').sidenav();
});
$(document).ready(function () {
  $('.collapsible').collapsible();
})

// Typing animation

//var typed = new Typed (".auto-type",{
// strings: ["brand names", "product names", "copy writing", "campaigns", "art projects"],
// typeSpeed: 40,
// backSpeed: 40,
// loop: true
//});

// Fun fact API 

var randomWordEl = $('#randomWord')
var APIkey = "4s5jzik/flN/oJ+DRV00pg==FCTdV9mEsQVKjz4S";

//

function getRandomWord(event) {
  event.preventDefault();
  var apiUrl = "https://api.api-ninjas.com/v1/randomword";
  fetch(apiUrl)
    .then(function (response) {
      if (response.status == 200) {
        console.log("This is working!" + response);
        response.json().then(function (data) {
          console.log(data);

          const { word } = data;

          // Display random word from response

          $(randomWordEl).html(word);
        })
      }
    })
}

$("#random-button").on("click", getRandomWord);

var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");


// Search Results

var searchInputVal = document.querySelector("#search-input");
var dutchBtn = document.querySelector("#nl-button");
var frenchBtn = document.querySelector("#fr-button");
var germanBtn = document.querySelector("#de-button");
var greekBtn = document.querySelector("#el-button");
var italianBtn = document.querySelector("#it-button");
var japaneseBtn = document.querySelector("#ja-button");
var russianBtn = document.querySelector("#ru-button");
var spanishBtn = document.querySelector("#es-button");
var dutchText = document.querySelector("#nl-translation");
var frenchText = document.querySelector("#fr-translation");
var germanText = document.querySelector("#de-translation");
var greekText = document.querySelector("#el-translation");
var italianText = document.querySelector("#it-translation");
var japaneseText = document.querySelector("#ja-translation");
var russianText = document.querySelector("#ru-translation");
var spanishText = document.querySelector("#es-translation");

let query = searchInputVal.value;

var word = query.toString();

//function printResults(locRes) {

 // console.log(locRes.translations[i].translated);

  //var resultCard = document.createElement("div");
 // resultCard.classList.add("card", "translation", "center", "blue-text", "text-lighten-2");

  //var resultBody = document.createElement("div");
 // resultBody.classList.add("card-content", "card-title", "activator", "orange-text", "text-accent-3");
 // resultCard.append(resultBody);

  //var activationIcon = document.createElement("i");
  //activationIcon.classList.add("material-icons", "right").
  // activationIcon.innerHTML = "add";
  //resultBody.append(activationIcon);

  //var titleEl = document.createElement("h3");
 // titleEl.textContent = locRes.translations[0].translated;

  //var bodyContentEl = document.createElement("div");
 // bodyContentEl.classList.add("card-reveal", "blue lighten-2")

  //var closeIcon = document.createElement("i");
  //closeIcon.classList.add("material-icons", "right")
  //closeIcon.innerHTML = "close";
  //bodyContentEl.append(closeIcon);

 // var bodyContentText = document.createElement("p");
 // bodyContentText.classList.add("white-text");
 // bodyContentText.innerHTML = "<strong>Origin: </strong>" + locRes.translations[i].translated.to + "<br/>";
 // bodyContentEl.append(bodyContentText);

 // resultBody.append(titleEl, bodyContentEl);
//}

function searchApi() {

  var cardResults = document.querySelector("#card-results");
  cardResults.setAttribute("style", "visibility:visible;");

  let query = searchInputVal.value;

  var word = query.toString();

  getArabic();


    function getArabic() {

    bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textArabic = document.querySelector("#ar-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      //body: '{"texts":["hi"],"to":["ar"],"from":"en"}'
      body: JSON.stringify(bodyQueryAr)
    };

  fetch(locQueryUrl, options)
  .then(function (response) {
    if (!response.ok) {
      throw response.json();
    }

    return response.json();
  })
  .then(function (locRes) {
    // write query to page so user knows what they are viewing
    textArabic.textContent = locRes.translations[0].translated;

    console.log(locRes.translations[0].translated);

  })
  .catch(function (error) {
    console.error(error);
  });}

}

  function getDutch() {

    dutchBtn.disabled = true;
    dutchBtn.textContent = "DUTCH";

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":["hi"],"to":["nl"],"from":"en"}'
    };

  fetch(locQueryUrl, options)
  .then(function (response) {
    if (!response.ok) {
      throw response.json();
    }

    return response.json();
  })
  .then(function (locRes) {
    // write query to page so user knows what they are viewing
    
    dutchText.textContent = locRes.translations[0].translated;

    console.log(locRes.translations[0].translated);

  })
  .catch(function (error) {
    console.error(error);
  });

}


function getFrench() {

  frenchBtn.disabled = true;
  frenchBtn.textContent = "FRENCH";

  var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

  var options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
      'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
    },
    body: '{"texts":["hi"],"to":["fr"],"from":"en"}'
  };

fetch(locQueryUrl, options)
.then(function (response) {
  if (!response.ok) {
    throw response.json();
  }

  return response.json();
})
.then(function (locRes) {
  // write query to page so user knows what they are viewing
  frenchText.textContent = locRes.translations[0].translated;

  console.log(locRes.translations[0].translated);

})
.catch(function (error) {
  console.error(error);
});

}

function getGerman() {

  germanBtn.disabled = true;
  germanBtn.textContent = "GERMAN";

  var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

  var options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
      'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
    },
    body: '{"texts":["hi"],"to":["de"],"from":"en"}'
  };

fetch(locQueryUrl, options)
.then(function (response) {
  if (!response.ok) {
    throw response.json();
  }

  return response.json();
})
.then(function (locRes) {
  // write query to page so user knows what they are viewing
  germanText.textContent = locRes.translations[0].translated;

  console.log(locRes.translations[0].translated);

})
.catch(function (error) {
  console.error(error);
});

}

function getGreek() {

  greekBtn.disabled = true;
  greekBtn.textContent = "GREEK";

  var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

  var options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
      'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
    },
    body: '{"texts":["hi"],"to":["el"],"from":"en"}'
  };

fetch(locQueryUrl, options)
.then(function (response) {
  if (!response.ok) {
    throw response.json();
  }

  return response.json();
})
.then(function (locRes) {
  // write query to page so user knows what they are viewing
  greekText.textContent = locRes.translations[0].translated;

  console.log(locRes.translations[0].translated);

})
.catch(function (error) {
  console.error(error);
});

}


function handleSearchFormSubmit(event) {
  event.preventDefault();

  var heroDisplay = document.querySelector('#hideaway');
  heroDisplay.setAttribute("style", "display=none;");

  var queryValue = searchInputVal.value;


  console.log("Text is " + queryValue);

  if (!queryValue) {
    console.error("You need a word to translate!");

  } else {

    searchApi();

  };
}


searchFormEl.addEventListener("submit", handleSearchFormSubmit);

dutchBtn.addEventListener("click", getDutch);
frenchBtn.addEventListener("click", getFrench);
germanBtn.addEventListener("click", getGerman);
greekBtn.addEventListener("click", getGreek);
//italianBtn.addEventListener("click", getItalian);
//japaneseBtn.addEventListener("click", getJapanese);
//russianBtn.addEventListener("click", getRussian);
//spanishBtn.addEventListener("click", getSpanish);
