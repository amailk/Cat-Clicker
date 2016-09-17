var clicks = [0, 0, 0 , 0 , 0];
function onClick(cat) {
  clicks[cat] += 1;
  for (i=0; i < 5; i ++) {
    var id = "counter" + i;
    document.getElementById(id).innerHTML = clicks[i];
  }
};

$(document).ready(function() {
  $('ul.list li h2').click(function() {
    console.log("Click");
    // hide all the cat photos
    $('ul.list li img').hide();
    // show the selected cat's photo
    $(this).next().show();
  });
});
