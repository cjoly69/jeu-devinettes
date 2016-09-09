/*var question = document.getElementById('question').value;*/
var btn;
var img = document.getElementsByTagName('img');

var indexQuestion = 0;
var listeQuestions = [{
    texte: "De quelle couleur est le cheval blanc d'Henri IV ?",
    reponse: "blanche"
}, {
    texte: "Combien y a-t-il de nains avec Blanche-Neige ? (chiffre)",
    reponse: "7"
}];

function poseQuestion() {
    var questionEnCours = listeQuestions[indexQuestion];

    document.getElementById('question').innerText = questionEnCours.texte;
    document.getElementById('reponse').value = "";

}

function valider() {

    var reponse = document.getElementById('reponse').value;
    console.log(reponse);
    var reponseJuste = listeQuestions[indexQuestion].reponse;
    if (reponse.toLowerCase() == reponseJuste.toLowerCase()) {
        indexQuestion += 1;
        if (listeQuestions.length > indexQuestion) {
            refresh();
            //j'affiche le span bravo
            reponse = document.getElementsByTagName('span')[0].style.display = "block";
            poseQuestion();

        } else {
            refresh();
            //j'affiche le span bravo terminé
            reponse = document.getElementsByTagName('span')[2].style.display = "block";
        }
    } else {

        //j'affiche le span perdu
        reponse = document.getElementsByTagName('span')[1].style.display = "block";
        reponse = document.getElementsByTagName('span')[1].style.color = "darkred";
    }
}
// function refresh() pour nettoyer les span
function refresh() {
  var span = document.getElementsByTagName('span');
  for (var i = 0; i < span.length; i++) {
    var fresh = span[i].style.display = "none";
  }

}
