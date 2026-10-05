const words = ["Jupiter", "Zeus", "Aphrodite", "Vénus", "Marth", "Lucina", "Mars", "Arès", "Hades",
                              "Pluton", "Anubis", "Ra", "Mercure", "Hermès", "Athéna", "Minerve", "Minerva", "Corrin",
                              "Byleth", "Bastet", "Thor", "Odin", "Grima", "Corren", "Casper", "Oscar", "Pill", "Halt",
                              "Treaty", "Oblige", "Seth", "Théménos", "Cyrus", "Hephaïstos", "Cupidon", "Zorro",
                              "Lefantôme", "Xana", "Harry", "Potter", "Tsuki", "Onyx", "Wellan", "Nashoba", "Aelita",
                              "Rhea", "Jaden", "Yugi", "Tincel", "Einstein", "Anankos", "Flamel", "Daraen", "Ike",
                              "Vulcain", "Demeter", "Ceres", "Bioinformatique", "Carter", "Sephiroth", "Owain", "Jack", 
                              "Harikeñ", "Catasfiore", "Vaan", "Balthier", "Agnès", "Casty", "Osvald", "Muriel",
                              "Anatiel", "Zéphilia", "Tamriel", "Wuunferth", "Yann", "Aucun", "Stole", "Arthur",
                              "Apollon", "Diane", "Artemis", "Dianthus", "Jedusort", "William", "Ulrich", "Joséphiroth"
                              , "Jim", "Morales", "Makoto", "Naegi", "Celica", "Yuri", "Moon", "Bernadetta", "Seiros",
                            "Mathilda", "Python", "Java","Aiosqlite","Fortuna","Monopoly", "Roleplay","Lancer","Dévelopeur"]
//const c'est pour indiquer une constance qui va jamais changer, le type est dynamique comme en python. si ca doit changer, on utilise let
// [] déclare un Array (tableau)
//function blalba, définit une fonction blabla

const buttonValidate = document.getElementById("letter_validate");
//sélectionne l'élément html letter_validate

const responseWord = document.getElementById("mot_afficher");

const buttonRegame = document.getElementById("rejouer")

let word ="";
let masque = [];


buttonValidate.addEventListener("click", function(){
    //éxécution du code lorsque on clique
    const value = document.getElementById("input_web").value.toLowerCase();
    for(let i of findIndexs(value, word)){
        masque[i] = value;
    }
    responseWord.innerText = masque.join("");
    document.getElementById("input_web").value = ""
})

buttonRegame.addEventListener("click", function(){
    initGame();
})
function randomWords(){
    const array = new Uint32Array(1);
    //new Unin32Array(1) tableau d'entier 3é bits non signés à 1 seule case (je suppose que le 1 vient de là)
    //c'est la structure exigé pour  recevoir le nombre généré.
    window.crypto.getRandomValues(array);
    //méthode native du navigateur  qui remplit le tableau avec des octets aléatoires sécurisés. c'est l'quivalent de SecureRandom de java
    const randomIndex = array[0] % words.length;
    //accède à la premère case du table et donne le reste  pavec comme dénominateur la taille du tableau
    return words[randomIndex].toLowerCase();
    // met en inuscule toLowercase
}

function findIndexs(letter, word){
    const index = [];
    //créé un tableau vide
    for(let i = 0; i< word.length; i++){
        if(word[i] == letter) index.push(i);
        //push, l'équivent de .add en java ou de .append en python
    }
    return index;
}

function initGame(){
    word = randomWords();
    
    masque = Array(word.length).fill("-");

    responseWord.innerText = masque.join(""); //affiche des tirets dans la balise <p>
}
initGame();