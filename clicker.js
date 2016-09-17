var clicks = [0, 0, 0 , 0 , 0];
function onClick(cat) {
    clicks[cat] += 1;
    document.getElementById("counter1").innerHTML = clicks[0];
    document.getElementById("counter2").innerHTML = clicks[1];
    document.getElementById("counter3").innerHTML = clicks[2];
    document.getElementById("counter4").innerHTML = clicks[3];
    document.getElementById("counter5").innerHTML = clicks[4];
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
