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
//add a function to change equipment
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

// 1. Declare the start page elements

const page=document.querySelector('body')
const titleScreen=document.createElement('div')
titleScreen.classList.add('title-screen')
const gameTitle=document.createElement('p')
gameTitle.classList.add('game-title')
const userNamePrompt=document.createElement('p')
userNamePrompt.classList.add('userNamePrompt')
userNamePrompt.innerHTML='click here to enter your username'
const input=document.createElement('input')
input.type='text'
input.classList.add('user-name-input')
const highScore=document.createElement('p')
const highScoreList=document.createElement('ul')
highScore.appendChild(highScoreList)
const userName=document.createElement('p')
userName.classList.add('user-name')
const startButton=document.createElement('button')
startButton.type='button'
startButton.innerHTML="Start Game"
const textBox=document.createElement('p')
textBox.classList.add('text-box')

// 2.Declare the battle page elements

//player elements
const playerContainer=document.querySelector('.player-container')  
const playerCharacter=document.createElement('div')
const playerName=document.createElement('p')
playerName.classList.add('player-name')
playerName.innerHTML='player1'
const playerHealthBar=document.createElement('p')
playerHealthBar.classList.add('player-health-bar')
const playerHealthRatio=document.createElement('p')
playerHealthRatio.classList.add('player-health-ratio')
const playerLevel=document.createElement('p')
playerLevel.classList.add('player-level')

//enemy elements
const enemyContainer=document.querySelector('.enemy-container')
const enemyName=document.createElement('p')
enemyName.classList.add('enemy-name')
const enemyHealthBar=document.createElement('p')
enemyHealthBar.classList.add('enemy-health-bar')
const enemyHealthRatio=document.createElement('p')
enemyHealthRatio.classList.add('enemy-health-ratio')
const enemyLevel=document.createElement('p')
enemyLevel.classList.add('enemy-level')

//page elements
const attackBox=document.createElement('div')
const attackList=document.createElement('ul')
attackList.classList.add('attack-list')
const attackOneName=document.createElement('li')
const attackTwoName=document.createElement('li')
const attackThreeName=document.createElement('li')
const attackFourName=document.createElement('li')
const battleInfoBox=document.createElement('p')
battleInfoBox.classList.add('display-battle-info')
const attackListArray=[fireball,heal,agility,reckless]


// 3. declare the necessary classes


class Player{
    constructor(level,maxHealth,currentHealth,attack,speed,turn,name){
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
class attack{
    constructor(name,baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd){
       this.name=name
       this.baseDmg=baseDmg
       this.selfHealthInc=selfHealthInc
       this.selfHealthDec=selfHealthDec
       this.incAtk=incAtk
       this.incSpd=incSpd          
    }   
}

// 4. make a new player from the class

const player1=new Player(1,20,20,10,10)

// 5. function for the start page

function onStart(){
    page.appendChild(titleScreen)
    titleScreen.appendChild(gameTitle)
    gameTitle.innerHTML='Unlimita RPG'
    titleScreen.appendChild(highScore)
    titleScreen.appendChild(startButton)
    titleScreen.appendChild(userNamePrompt)
}

// 6.function for the battle page 

function battleScreen(){
    page.appendChild(playerContainer)
    playerContainer.classList.add('player-character')
    playerContainer.appendChild(playerName)
    playerContainer.appendChild(playerHealthBar)
    playerContainer.appendChild(playerHealthRatio)
    playerContainer.appendChild(playerLevel)

    page.appendChild(enemyContainer)
    enemyContainer.appendChild(enemyName)
    enemyName.innerHTML=enemy1.name
    enemyContainer.appendChild(enemyHealthBar)
    enemyContainer.appendChild(enemyHealthRatio)
    enemyContainer.appendChild(enemyLevel)

    page.appendChild(attackBox)
    attackBox.appendChild(attackList)
    page.appendChild(battleInfoBox)
}
userNamePrompt.addEventListener('click',function(){
   this.remove()
   titleScreen.appendChild(input)
})
 
input.addEventListener('keydown',function(event){ 
    if(event.key==='Enter')
    {
    titleScreen.appendChild(userName)
    userName.innerHTML="welcome "+getUserName() +"! press start game to join battle"
    this.remove()
    }
})

const fireball= new attack('fireball',3)
const heal=new attack('heal',0,5)
player1.attacks=[fireball,heal]

function damageToEnemyCalc(attack,damage){
    let damageDealt=Math.floor(attack/10*damage);
    enemy1.currentHealth= enemy1.currentHealth-damageDealt;
    createEnemy()
    return damageDealt
}    
function damageToPlayerCalc(attack,damage){
    let damageDealt=Math.floor(attack/10*damage);
    player1.currentHealth= player1.currentHealth-damageDealt;
    createPlayer()
    return damageDealt
}   
function speedCheck(){
    if(player1.speed>enemy1.speed)
    {
        player1.turn=true
    }
    else
       { player1.turn=false}

    return player1.turn
}
function performAttack(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd){  
    if(speedCheck()){
      if(baseDmg!==0){
        damageToEnemyCalc(player1.attack,baseDmg)
      } 
      if(selfHealthInc!==0){
        IncreasePlayerHealth(player1.currentHealth,selfHealthInc)
      }
      if(selfHealthDec!==0){
        DecreaseToPlayerHealth(player1.currentHealth,selfHealthDec)
      }
      if(incAtk!==0){
        IncreasePlayerAttack(player1.atk,incAtk)
      }
      if(incSpd!==0){
        IncreasePlayerSpeed(player1.spd,incSpd)
      }
    }
    else{
        if(baseDmg!==0){
            damageToPlayerCalc(enemy1.attack,baseDmg)
          } 
          if(selfHealthInc!==0){
            IncreaseEnemeyHealth(enemy1.currentHealth,selfHealthInc)
          }
          if(selfHealthDec!==0){
            DecreaseEnemyHealth(enemy1.currentHealth,selfHealthDec)
          }
          if(incAtk!==0){
            IncreaseEnemyAttack(enemy1.atk,incAtk)
          }
          if(incSpd!==0){
            IncreaseEnemySpeed(enemy1.spd,incSpd)
          }
       }
    }

function getUserName(){
    player1.playerName = document.querySelector('.user-name-input').value 
    playerName.innerHTML=player1.playerName
    return player1.playerName
}
function createPlayer(){  
   playerHealthBar.innerHTML=''
   playerHealthRatio.innerHTML=`HP:${player1.currentHealth}/${player1.maxHealth}`
   playerLevel.innerHTML=`lvl:${player1.level}`
}
function makeAttackList(){
    for(i=0;i<4;i++){
        if(player1.attacks[i]){
            attackListArray[i].innerHTML=player1.attacks[i].name
            attackList.appendChild(attackListArray[i])
            attackListArray[i].addEventListener('click',function(){
                let baseDmg=attackListArray[i].baseDmg
                let selfHealthInc=attackListArray[i].selfHealthInc
                let selfHealthDec= attackListArray[i].selfHealthDec
                let incAtk= attackListArray[i].incAtk
                let incSpd= attackListArray[i].incSpd
                performAttack(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd)
            })
        }
     }
}
const enemy1= new enemy('slime',1,13,13,5,5)
const bite= new attack('bite',2)
enemy1.attacks=[bite]
function createEnemy(){  
    enemyHealthBar.innerHTML=''
    enemyHealthRatio.innerHTML=`HP:${enemy1.currentHealth}/${enemy1.maxHealth}`
    enemyLevel.innerHTML=`lvl:${enemy1.level}`
 }

 startButton.addEventListener('click',function(){
    titleScreen.remove()
    battleScreen()
    createPlayer()
    createEnemy()
    makeAttackList()
 })