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

