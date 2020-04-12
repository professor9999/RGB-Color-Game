var colors = [];
var select = document.querySelectorAll(".select");
var display = document.querySelector("#display");
var answer = document.querySelector("#try");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

for (var i = 0; i < select.length; i++) {
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);
    var col = "rgb(" + r + ", " + g + ", " + b + ")";
    colors.push(col);
    select[i].style.background = colors[i];
}

var picked = colors[Math.floor(Math.random() * select.length + 1)];
display.textContent = picked;

for (i = 0; i < select.length; i++) {
    select[i].addEventListener("click", function() {
        if (this.style.background !== picked) {
            this.style.background = rgba(153, 153, 153, 0.692);
            answer.textContent = "Try Again";
        } else if (this.style.background === picked) {
            for (i = 0; i < select.length; i++) {
                select[i].style.background = picked;
            }
            answer.textContent = "Correct";
        }
    });
}
reset.addEventListener('click', function() {
    answer.textContent = '__';
    for (var i = 0; i < select.length; i++) {
        var r = Math.floor(Math.random() * 255 + 1);
        var g = Math.floor(Math.random() * 255 + 1);
        var b = Math.floor(Math.random() * 255 + 1);
        var col = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        colors[i] = col;
        select[i].style.background = colors[i];
    }
    var picked = colors[Math.floor(Math.random() * 6 + 1)];
    display.textContent = picked;
    for (i = 0; i < select.length; i += 1) {
        select[i].addEventListener('click', function() {
            if (this.style.background !== picked) {
                this.style.background = 'rgb(199, 194, 194)';
                answer.textContent = 'Try Again';
            } else if (this.style.background === picked) {
                for (i = 0; i < select.length; i++) {
                    select[i].style.background = picked;
                }
                answer.textContent = 'Correct';
            }
        });
    }
});
}