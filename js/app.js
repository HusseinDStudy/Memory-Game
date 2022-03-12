document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'DragonD',
            img: 'images/DragonD.jpg'
        }, 
        {
            name: 'DragonD',
            img: 'images/DragonD.jpg'
        }, 
        {
            name: 'DragonGRP',
            img: 'images/DragonGRP.jpg'
        }, 
        {
            name: 'DragonGRP',
            img: 'images/DragonGRP.jpg'
        }, 
        {
            name: 'DragonMecha',
            img: 'images/DragonMecha.jpg'
        }, 
        {
            name: 'DragonMecha',
            img: 'images/DragonMecha.jpg'
        }, 
        {
            name: 'DragonR',
            img: 'images/DragonR.jpg'
        }, 
        {
            name: 'DragonR',
            img: 'images/DragonR.jpg'
        }, 
        {
            name: 'DragonSteel',
            img: 'images/DragonSteel.jpg'
        }, 
        {
            name: 'DragonSteel',
            img: 'images/DragonSteel.jpg'
        }, 
        {
            name: 'DragonW',
            img:'images/DragonW.jpg'
        }, 
        {
            name: 'DragonW',
            img:'images/DragonW.jpg'
        }
    ]

cardArray.sort(()=> 0.5 - Math.random())

const grid=document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen=[]
var cardsChosenId=[]
var cardsWon=[]

//creation de table de jeux
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/Caty.gif')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}
//check for match
function checkForMatch(){
    var cards=document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/Caty.gif')
        cards[optionTwoId].setAttribute('src', 'images/Caty.gif')
        alert('You have clicked the same image!')
    }else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click',flipcard)
        cards[optionTwoId].removeEventListener('click',flipcard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src','images/Caty.gif')
        cards[optionTwoId].setAttribute('src','images/Caty.gif') 
        alert('Not Matched')
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent=cardsWon.length
    if(cardsWon.length===cardArray.length/2){
        resultDisplay.textContent='Congratulation you found them all'
    }
}
//flip card
function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch, 500)
    }
}
createBoard()
})