
// jQuery for side bar



// jQuery for select options in form

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

var typed = new Typed(".auto-type", {
  strings: ["brand names", "product names", "copy writing", "campaigns", "art projects"],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true
});

// Random Word fact API 

var randomWordEl = $('#randomWord')
var randomWordSide = $('#randomWord-text')
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
          $(randomWordSide).html(word);

        })
      }
    })
}

$("#random-button").on("click", getRandomWord);


// Search Results

// Buttons for when translations were prompted by user
var searchInputVal = document.querySelector("#search-input");
var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");
var recent = document.querySelector("#recent");
var recentText = document.querySelector("#recent-text");
var searchList = document.getElementById("search-list");

//var dutchBtn = document.querySelector("#nl-button");
//var frenchBtn = document.querySelector("#fr-button");
//var germanBtn = document.querySelector("#de-button");
//var greekBtn = document.querySelector("#el-button");
//var italianBtn = document.querySelector("#it-button");
//var japaneseBtn = document.querySelector("#ja-button");
//var russianBtn = document.querySelector("#ru-button");
//var spanishBtn = document.querySelector("#es-button");
//var dutchText = document.querySelector("#nl-translation");
//var frenchText = document.querySelector("#fr-translation");
//var germanText = document.querySelector("#de-translation");
//var greekText = document.querySelector("#el-translation");
//var italianText = document.querySelector("#it-translation");
//var japaneseText = document.querySelector("#ja-translation");
//var russianText = document.querySelector("#ru-translation");
//var spanishText = document.querySelector("#es-translation");

// User input for translation

let query = searchInputVal.value;
var searches = [];
var queryValue = searchInputVal.value;


var word = JSON.stringify(query);

// Render results to generated cards - changed to hidden card display

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

// Translation API via Lecto

function searchApi() {

  // Show result cards

  var cardResults = document.querySelector("#card-results");
  cardResults.setAttribute("style", "visibility:visible;");

  let query = searchInputVal.value;

  var word = JSON.stringify(query);


  //Time delay to work within the confines of the api subscription which only allows one call per second
  getArabic();
  setTimeout(getDutch, 2000);
  setTimeout(getFrench, 4000);
  setTimeout(getGerman, 6000);
  setTimeout(getGreek, 8000);
  setTimeout(getItalian, 10000);
  setTimeout(getJapanese, 12000);
  setTimeout(getRussian, 14000);
  setTimeout(getSpanish, 16000);

  //Individual parallel translation functions of top 10 languages - done as per api limitations

  function getArabic() {

    //bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textArabic = document.querySelector("#ar-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":[' + word + '],"to":["ar"],"from":"en"}'
      //body: JSON.stringify(bodyQueryAr)
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
      });
  }



  function getDutch() {

    //bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textDutch = document.querySelector("#nl-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":[' + word + '],"to":["nl"],"from":"en"}'
      //body: JSON.stringify(bodyQueryAr)
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
        textDutch.textContent = locRes.translations[0].translated;

        console.log(locRes.translations[0].translated);

      })
      .catch(function (error) {
        console.error(error);
      });

  }




  function getFrench() {

    //bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textFrench = document.querySelector("#fr-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":[' + word + '],"to":["fr"],"from":"en"}'
      //body: JSON.stringify(bodyQueryAr)
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
        textFrench.textContent = locRes.translations[0].translated;

        console.log(locRes.translations[0].translated);

      })
      .catch(function (error) {
        console.error(error);
      });

  }

  function getGerman() {

    //bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textGerman = document.querySelector("#de-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":[' + word + '],"to":["de"],"from":"en"}'
      //body: JSON.stringify(bodyQueryAr)
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
        textGerman.textContent = locRes.translations[0].translated;

        console.log(locRes.translations[0].translated);

      })
      .catch(function (error) {
        console.error(error);
      });

  }

  function getGreek() {

    //bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textGreek = document.querySelector("#el-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":[' + word + '],"to":["el"],"from":"en"}'
      //body: JSON.stringify(bodyQueryAr)
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
        textGreek.textContent = locRes.translations[0].translated;

        console.log(locRes.translations[0].translated);

      })
      .catch(function (error) {
        console.error(error);
      });

  }

  function getItalian() {

    //bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textItalian = document.querySelector("#it-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":[' + word + '],"to":["it"],"from":"en"}'
      //body: JSON.stringify(bodyQueryAr)
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
        textItalian.textContent = locRes.translations[0].translated;

        console.log(locRes.translations[0].translated);

      })
      .catch(function (error) {
        console.error(error);
      });

  }

  function getJapanese() {

    //bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textJapanese = document.querySelector("#ja-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":[' + word + '],"to":["ja"],"from":"en"}'
      //body: JSON.stringify(bodyQueryAr)
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
        textJapanese.textContent = locRes.translations[0].translated;

        console.log(locRes.translations[0].translated);

      })
      .catch(function (error) {
        console.error(error);
      });

  }

  function getRussian() {

    //bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textRussian = document.querySelector("#ru-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":[' + word + '],"to":["ru"],"from":"en"}'
      //body: JSON.stringify(bodyQueryAr)
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
        textRussian.textContent = locRes.translations[0].translated;

        console.log(locRes.translations[0].translated);

      })
      .catch(function (error) {
        console.error(error);
      });

  }

  function getSpanish() {

    //bodyQueryAr = "'" + "{" + '"' + "texts" + '":' + "[" + '"' + word + '"' + "]," + '"' +  "to" + '":' + "[" + '"ar"' + '],"from":"en"}' + "'";

    var textSpanish = document.querySelector("#es-translation");

    var locQueryUrl = "https://lecto-translation.p.rapidapi.com/v1/translate/text";

    var options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'be700dc170msh185422a953a88bdp187f43jsn89ed7693a79b',
        'X-RapidAPI-Host': 'lecto-translation.p.rapidapi.com'
      },
      body: '{"texts":[' + word + '],"to":["es"],"from":"en"}'
      //body: JSON.stringify(bodyQueryAr)
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
        textSpanish.textContent = locRes.translations[0].translated;

        console.log(locRes.translations[0].translated);

      })
      .catch(function (error) {
        console.error(error);
      });

  }
}

// Event listener function for translation button

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var queryValue = searchInputVal.value;

  var searchesText = {
    queryValue: queryValue.trim()
  };

  if (searchesText === "") {
    return;
  }

  searches.push(searchesText);
  

  storeSearches();
  console.log(searches);

  var heroDisplay = document.querySelector('#hideaway');
  heroDisplay.setAttribute("style", "display=none;");



  


  console.log("Text is " + queryValue);

  if (!queryValue) {
    console.error("You need a word to translate!");

  } else {

    searchApi();
    renderSearches();

  };
}

// Event listener for button
searchFormEl.addEventListener("submit", handleSearchFormSubmit);

// Previous user-activated translation functionality

//dutchBtn.addEventListener("click", getDutch);
//frenchBtn.addEventListener("click", getFrench);
//germanBtn.addEventListener("click", getGerman);
//greekBtn.addEventListener("click", getGreek);
//italianBtn.addEventListener("click", getItalian);
//japaneseBtn.addEventListener("click", getJapanese);
//russianBtn.addEventListener("click", getRussian);
//spanishBtn.addEventListener("click", getSpanish);

// Storing search history

// Retrive stored history on load
function init() {
  var storedSearches = JSON.parse(localStorage.getItem("searches"));

  if (storedSearches !== null) {
    searches = storedSearches;
  }

  renderSearches()
}

// Save searches
function storeSearches() {
  // Stringify and set key in localStorage to searches array
  localStorage.setItem("searches", JSON.stringify(searches));
}

// Render searches
function renderSearches() {
  // Update text content of search history
  recentText.textContent = "Recent Searches";

  // Add scores to recent searches and clear score list content
  
  searchList.innerHTML = '';

  recent.appendChild(searchList);
  
  // Create for loop to render each score result to a new line item
  for(var i = 0; i < searches.length; i++) {
    var search = searches[i];

    var searchLi = document.createElement("li");
    searchLi.setAttribute("id", "recent");

    searchLi.textContent = search.queryValue;
    searchList.setAttribute("data-index", i);

    searchList.appendChild(searchLi);
    }
}

init();

