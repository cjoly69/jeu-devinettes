var question = document.getElementById('question').value;
var btn;
var reponse = document.getElementsByClassName('reponse');
var img = document.getElementsByTagName('img');

function valider() {
    reponse = document.getElementsByClassName('reponse');
    reponse[0].style.display = "none";
    reponse[1].style.display = "none";
//
    var question = document.getElementById('question').value;
    if (question.toLowerCase() === 'blanc' || question.toLowerCase() === 'blanche') {
        //j'affiche le span bravo
        reponse = document.getElementsByTagName('span')[0].style.display = "block";
    } else if (question.toLowerCase() !== 'blanc' || question.toLowerCase() !== 'blanche') {
        //j'affiche le span perdu
        reponse = document.getElementsByTagName('span')[1].style.display = "block";
        reponse = document.getElementsByTagName('span')[1].style.color = "darkred";

    }
    question = document.getElementById('question').value = "";
    return reponse;
}
