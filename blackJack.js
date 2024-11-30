/**********************************************************
 * Author: Aubrey Whiteman
 * Version: 1.0
 * Date: 04/11/2024
 * File: blackJack.js
 * Note: A game of blackJack
 */

// Wait for page to load
window.onload = function() {

    // Declare variables
    const startGamebtn = document.getElementById("btn_start")
    const playercard1 = document.getElementById("playercard1")
    const playercard2 = document.getElementById("playercard2")
    const computerCard1 = document.getElementById("computerCard1")
    const computerCard2 = document.getElementById("computerCard2")
    const hitButton = document.getElementById("btn_hit")
    const standButton = document.getElementById("btn_stand")
    const nextButton = document.getElementById("btn_next")
    otherCardPosition = 0
    currentComputerCard = 0
    otherComputerCard = 0
    numberOfAces = 0
    currentCardPosition = 0
    let playerCardValue = 0
    let numberOfPlayerCards = 3
    let numberOfComputerCards = 3
    let playerHand
    let computerHand
    let computerCardValue = 0
    let isPlayerTurn = true

    //Remember that first card position is needed to evaluate cards
    
    // Create click listener for start game button - call startGame
    startGamebtn.addEventListener("click", startGame)
    hitButton.addEventListener("click", function(){
        console.log(currentCardPosition + "visual")
        console.log(otherCardPosition + "internal")
        switch (numberOfPlayerCards) {
            case 3:
                otherCardPosition+=1
                currentCardPosition+=1
                playercard3.src = playerHand[currentCardPosition].source
                playercard3.hidden = false
                numberOfPlayerCards+=1
                checkPlayerCardValue()
                break;
        
            case 4:
                otherCardPosition+=1
                currentCardPosition+=1
                playercard4.src = playerHand[currentCardPosition].source
                playercard4.hidden = false
                checkPlayerCardValue()
                break;
            
            case 5:
                otherCardPosition+=1
                alert("you win")
        }
    })

    standButton.addEventListener("click", computerTurn)

    nextButton.addEventListener("click", nextHand)
    
    function startGame() {
       let [generatedPlayerHand, generatedComputerHand] = shuffleCards()
       
       console.log(generatedPlayerHand)
       console.log(generatedComputerHand)
       console.log(generatedPlayerHand[0].source)
       playercard1.src = generatedPlayerHand[currentCardPosition].source
       currentCardPosition+=1
       playercard2.src = generatedPlayerHand[currentCardPosition].source
       startGamebtn.hidden =true;
       playerHand = generatedPlayerHand
       computerHand = generatedComputerHand
       
       playerCardValue+=playerHand[otherCardPosition].value
       otherCardPosition+=1
       if (playerCardValue == 11) {
        numberOfAces+=1
       }
       playerCardValue+=playerHand[otherCardPosition].value
       console.log(playerCardValue)
       console.log(numberOfAces)
       // doc.getElementID(card1).src = playerHand[0].source
    }

    function checkPlayerCardValue () {
        playerCardValue+=playerHand[otherCardPosition].value
        console.log(playerCardValue)
        if (playerCardValue > 21 && numberOfAces > 1000000000) {
            playerCardValue = playerCardValue - (10 * numberOfAces)
        }
        else if (playerCardValue > 21) {
            
            alert("you failed")
            resetCards()
        }
    }
    
    function computerTurn() {
         computerCard1.src = computerHand[currentComputerCard].source
         checkComputerCardValue()
         currentComputerCard+=1
         computerCard2.src = computerHand[currentComputerCard].source
         checkComputerCardValue()
         while (computerCardValue < 17) {
            switch (numberOfComputerCards) {
                case 3:
                    otherComputerCard+=1
                    currentComputerCard+=1
                    computerCard3.src = playerHand[currentCardPosition].source
                    computerCard3.hidden = false
                    numberOfPlayerCards+=1
                   
                case 4:
                    otherComputerCard+=1
                    currentComputerCard+=1
                    computerCard4.src = playerHand[currentCardPosition].source
                    computerCard4.hidden = false
                    numberOfPlayerCards+=1
                    setTimeout(1000)
                    checkComputerCardValue()

                
                
                    
            }
            
         }
         if (playerCardValue > computerCardValue) {
            alert("you win")
            resetCards()
        }
        else if (computerCardValue > 21) {
            alert("dealer is bust")
            resetCards()
        }
        else {
            alert("you failed")
            resetCards()
        } 


    }
    
    function resetCards() {
        playercard3.hidden = true
        playercard4.hidden = true
        playercard5.hidden = true
        playercard1.src = "PNG/cardBack.png"
        playercard2.src = "PNG/cardBack.png"
        computerCard1.src = "PNG/cardBack.png"
        computerCard2.src = "PNG/cardBack.png"
        computerCard3.hidden = true
        
        playerCardValue = 0
        computerCardValue = 0
        nextButton.hidden = false
        numberOfPlayerCards = 3
    }

    function checkComputerCardValue() {
        computerCardValue+= computerHand[otherComputerCard].value
        otherComputerCard+=1
        console.log(computerCardValue + "computer")
        
    }

    function nextHand () {
        nextButton.hidden = true
        
        playerCardValue+=playerHand[otherCardPosition].value
        otherCardPosition+=1
        playerCardValue+=playerHand[otherCardPosition].value



        playercard1.src = playerHand[currentCardPosition].source
        currentCardPosition+=1

        playercard2.src = playerHand[currentCardPosition].source

       
       

    }
    //Generate array of cards for player and computer
    function shuffleCards() {
        // Array that contains every card in a pack and if that card has been selected by the shuffle algorithm + its value
        packOfCards = [
            {selected :0, source:"PNG/2C.png", position:0 ,value:2},
            {selected :0, source:"PNG/2D.png", position:1, value:2},
            {selected :0, source:"PNG/2H.png", position:2, value:2},
            {selected :0, source:"PNG/2S.png", position:3, value:2},
            {selected :0, source:"PNG/3C.png", position:4, value:3},
            {selected :0, source:"PNG/3D.png", position:5, value:3},
            {selected :0, source:"PNG/3H.png", position:6, value:3},
            {selected :0, source:"PNG/3S.png", position:7, value:3},
            {selected :0, source:"PNG/4C.png", position:8, value:4},
            {selected :0, source:"PNG/4D.png", position:9, value:4},
            {selected :0, source:"PNG/4H.png", position:10, value:4},
            {selected :0, source:"PNG/4S.png", position:11, value:4},
            {selected :0, source:"PNG/5C.png", position:12, value:5},
            {selected :0, source:"PNG/5D.png", position:13, value:5},
            {selected :0, source:"PNG/5H.png", position:14, value:5},
            {selected :0, source:"PNG/5S.png", position:15, value:5},
            {selected :0, source:"PNG/6C.png", position:16, value:6},
            {selected :0, source:"PNG/6D.png", position:17, value:6},
            {selected :0, source:"PNG/6H.png", position:18, value:6},
            {selected :0, source:"PNG/6S.png", position:19, value:6},
            {selected :0, source:"PNG/7C.png", position:20, value:7},
            {selected :0, source:"PNG/7D.png", position:21, value:7},
            {selected :0, source:"PNG/7H.png", position:22, value:7},
            {selected :0, source:"PNG/7S.png", position:23, value:7},
            {selected :0, source:"PNG/8C.png", position:24, value:8},
            {selected :0, source:"PNG/8D.png", position:25, value:8},
            {selected :0, source:"PNG/8H.png", position:26, value:8},
            {selected :0, source:"PNG/8S.png", position:27, value:8},
            {selected :0, source:"PNG/9C.png", position:28, value:9},
            {selected :0, source:"PNG/9D.png", position:29, value:9},
            {selected :0, source:"PNG/9H.png", position:30, value:9},
            {selected :0, source:"PNG/9S.png", position:31, value:9},
            {selected :0, source:"PNG/10C.png", position:32, value:10},
            {selected :0, source:"PNG/10D.png", position:33, value:10},
            {selected :0, source:"PNG/10H.png", position:34, value:10},
            {selected :0, source:"PNG/10S.png", position:35, value:10},
            {selected :0, source:"PNG/AC.png", position:36, value:11},
            {selected :0, source:"PNG/AD.png", position:37, value:11},
            {selected :0, source:"PNG/AH.png", position:38, value:11},
            {selected :0, source:"PNG/AS.png", position:39, value:11},
            {selected :0, source:"PNG/JC.png", position:40, value:10},
            {selected :0, source:"PNG/JD.png", position:41, value:10},
            {selected :0, source:"PNG/JH.png", position:42, value:10},
            {selected :0, source:"PNG/JS.png", position:43, value:10},
            {selected :0, source:"PNG/KC.png", position:44, value:10},
            {selected :0, source:"PNG/KD.png", position:45, value:10},
            {selected :0, source:"PNG/KH.png", position:46, value:10},
            {selected :0, source:"PNG/KS.png", position:47, value:10},
            {selected :0, source:"PNG/QC.png", position:48, value:10},
            {selected :0, source:"PNG/QD.png", position:49, value:10},
            {selected :0, source:"PNG/QH.png", position:50, value:10},
            {selected :0, source:"PNG/QS.png", position:51, value:10},
            
        ]
        playerCards = []
        computerCards = []
        // Generates player hand
        for(let i = 0; i < 26; i++) {
           cardSelect = Math.floor(Math.random() * 52)
           hasCardSelected = packOfCards[cardSelect].selected
           
           
            while(hasCardSelected == 1) {
                cardSelect = Math.floor(Math.random()*52)
                hasCardSelected = packOfCards[cardSelect].selected
            }
           
           
           packOfCards[cardSelect].selected = 1
           console.log(packOfCards[cardSelect].selected)
           playerCards.push(packOfCards[cardSelect])
           
        }
        console.log("Player hand generated")
        
        
        //Generates Computer hand
        for(let i = 0; i < 26; i++) {
            cardSelect = Math.floor(Math.random() * 52)
            hasCardSelected = packOfCards[cardSelect].selected
            
            
             while(hasCardSelected == 1) {
                 cardSelect = Math.floor(Math.random()*52)
                 hasCardSelected = packOfCards[cardSelect].selected
             }
            
            
             packOfCards[cardSelect].selected = 1
            console.log(packOfCards[cardSelect].selected)
            computerCards.push(packOfCards[cardSelect])
           
        }
        console.log("Computer hand generated")
        return [playerCards, computerCards]
    }

    
    }