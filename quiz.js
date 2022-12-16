// tour de jeu : déclaration d'un tableau avec id,question,reponse,bonneReponse

const quizz = [{
        question: "De quelle couleur est le ciel ?",
        reponse: ["1", "bleu", "3", "4"],
        bonneReponse: "bleu"
    },
    {
        question: "De quelle couleur est le feu ?",
        reponse: ["1", "2", "rouge", "3"],
        bonneReponse: "rouge"
    }
]

let count = 0
let countScore = 0
//appeler la div container
const displayTurn = () => {

    /**********************generer un tour***********************/

    const newTurn = `
    <p></p>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    `;
    const divTurn = document.createElement("div")
    divTurn.innerHTML = newTurn
    divTurn.setAttribute("id", count)

    const questionContent = divTurn.getElementsByTagName("p")[0]
    const answerContent = divTurn.getElementsByTagName("button")

    //Il nous reste a lié la question au 4 réponses
    questionContent.innerText = quizz[count].question

    for (let i = 0; i < answerContent.length; i++) {
        answerContent[i].innerText = quizz[count].reponse[i]
    }
    const divtoReplace = document.getElementById(0)
    divtoReplace.replaceWith(divTurn)
    

    /************check la réponse utilisateur*********************/

    //récuperer la valeur du bouton où utilisateur clique
    Array.from(answerContent).forEach(button => {
        button.addEventListener('click', () => {
            const buttonContentCliked = button.innerText
            //comparer cette valeur avec la valeur de la bonneReponse de l'objet courant
            const pAnswer = document.createElement("p")

            if (buttonContentCliked === quizz[count].bonneReponse) {
                const score = document.getElementById("score")
                score.innerText = `Score: ${++countScore}`
                pAnswer.innerText = `Vous avez choisi la bonne réponse!!!!!!! Bravo connard`
            }
            else {
            pAnswer.innerText=`Vous avez choisi la mauvaise réponse!!!!!!! Patate!!!!!!!!! La bonne réponse était : ${quizz[count].bonneReponse}`
            }
            divTurn.append(pAnswer)
            count++
        })
    })

    //afficher bonne réponse ou mauvaise réponse dans une balise a la fin de notre div
    //gerer le score dynamiquement si c'est une bonne réponse

}


document.addEventListener("DOMContentLoaded", () => {
    //récuperer le btn dans le HTML qui gère le tour suivant
    const btnNextturn = document.getElementsByTagName("button")[0]
    btnNextturn.addEventListener('click', displayTurn)
})
