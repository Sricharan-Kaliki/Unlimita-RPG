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