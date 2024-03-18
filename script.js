//Define constants to get the elements of start page in javascript add classes to the elements
//Define constants to get the elements of the battle screen in javascript
//Define constants to get the elements of the enhancement screen
//Add classes to each elements in the start page using javascript
//Define classes for players,equipment and enemies
//add a fuction to render elements of the start page 
//add a function to render the battle screen to make enemies and player get displayed
//add a function to decide which player starts first then call a function to calculate damage dealt
//add a function to calculate the damage done by the first character
//add a function to calculate the damage done by the enemy 
//add a function to check for deathblows to enemies and call a function to render the enhancements screen
//add a function to check for deathblows to the player and call a function to render the start screen also updating the highscore 
// add a function to change equipment
//add a function to augment equipment stats on to player stats 
/*rendered start menu must have 
.Game title 
.username input field
.highscore list
.start button
*/
//add an event listener to the input field to update the username
//add an event listener to the start button in the start menu
//add an event listener to the each selection of the attack menu
//add an event listener to see equipment stats on hover   
//add an event listener to make equipment to choose between equipment or experience
const startPage=document.getElementById('start-screen')
const gameTitle=document.createElement('p')
gameTitle.classList.add('game-title')
const input=document.createElement('input')
input.type='text'
const highScore=document.createElement('p')
const highScoreList=document.createElement('ul')
highScore.appendChild(highScoreList)
const startButton=document.createElement('button')
startButton.type='button'
startButton.innerHTML="Start Game"

function onStart(){
    startPage.appendChild(gameTitle)
    gameTitle.innerHTML='Unlimita RPG'
    startPage.appendChild(input) 
    startPage.appendChild(highScore)
    startPage.appendChild(startButton)
}

class Player{
    constructor(name,level,maxHealth,currentHealth,attack,speed,turn){
        this.name=name
        this.level=level
        this.maxHealth=maxHealth
        this.currentHealth=currentHealth
        this.attack=attack
        this.speed=speed
        this.turn=turn
    }
}

class enemy{
    constructor(name,level,maxHealth,currentHealth,attack,speed,turn,species){
        this.name=name
        this.level=level
        this.maxHealth=maxHealth
        this.currentHealth=currentHealth
        this.attack=attack
        this.speed=speed
        this.turn=turn
        this.species=species
    }
}

class Inventory{

}

class weapons{
    constructor(health,attack,atkDamageModifier,dmgReductionModifier){
        this.health=health
        this.attack=attack
        this.atkDamageModifier=atkDamageModifier
        this.dmgReductionModifier=dmgReductionModifier
    }
}

class armor{
    constructor(health,attack,atkDamageModifier,dmgReductionModifier){
        this.health=health
        this.attack=attack
        this.atkDamageModifier=atkDamageModifier
        this.dmgReductionModifier=dmgReductionModifier
    }
}