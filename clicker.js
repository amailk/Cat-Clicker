var clicks = [0];
function onClick(cat) {
    clicks[cat] += 1;

    document.getElementById("counter").innerHTML = clicks[0];

};
