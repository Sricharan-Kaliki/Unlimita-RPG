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
const titleScreen=document.querySelector('.title-screen')
const gameTitle=document.createElement('p')
gameTitle.classList.add('game-title')
const userNamePrompt=document.createElement('p')
userNamePrompt.classList.add('userNamePrompt')
userNamePrompt.innerHTML='click here to enter your username'
const input=document.createElement('input')
input.type='text'
input.placeholder='type a name and hit enter'
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
const playerName=document.createElement('p')
playerName.classList.add('player-name')
playerName.innerHTML='player1'
const playerHealthBar=document.createElement('p')
playerHealthBar.classList.add('player-health-bar')
const playerHealthRatio=document.createElement('p')
playerHealthRatio.classList.add('player-health-ratio')
const playerLevel=document.createElement('p')
playerLevel.classList.add('player-level')
const playerCharacter=document.createElement('div')
playerCharacter.classList.add('player-character','player-sprite')
const playerCharacterinfo=document.createElement('div')

const playerFace=document.createElement('div')
const playerArms=document.createElement('div')
const playersRightArm=document.createElement('div')
const playersLeftArm=document.createElement('div')
const playerBody=document.createElement('div')
const playerLegs=document.createElement('div')
const playersRightLeg=document.createElement('div')
const playersLeftLeg=document.createElement('div')

//enemy elements
const enemyName=document.createElement('p')
enemyName.classList.add('enemy-name')
const enemyHealthBar=document.createElement('p')
enemyHealthBar.classList.add('enemy-health-bar')
const enemyHealthRatio=document.createElement('p')
enemyHealthRatio.classList.add('enemy-health-ratio')
const enemyLevel=document.createElement('p')
enemyLevel.classList.add('enemy-level')
const enemyCharacter=document.createElement('div')
enemyCharacter.classList.add('enemy-character','slime')
const enemyCharacterinfo=document.createElement('div')

const enemyFace=document.createElement('div')
const enemyMouth=document.createElement('div')
const enemyEyes=document.createElement('div')
const enemyLeftEye=document.createElement('div')
const enemyRightEye=document.createElement('div')

//page elements
const battleScreen=document.createElement('div')
battleScreen.classList.add('battle-screen')
const attackBox=document.createElement('div')
const attackList=document.createElement('ul')
attackList.classList.add('attack-list')
const attackOneName=document.createElement('li')
const attackTwoName=document.createElement('li')
const attackThreeName=document.createElement('li')
const attackFourName=document.createElement('li')
const battleInfoBox=document.createElement('p')
battleInfoBox.classList.add('battle-info-box')
const attacksListArray=[attackOneName,attackTwoName,attackThreeName,attackFourName]
const leaveBattle=document.createElement('button')
leaveBattle.classList.add('leave-battle-button')
leaveBattle.innerHTML='return to title screen'
leaveBattle.addEventListener('click',function(){ 
    playerCharacter.removeChild(playerBody)
    playerCharacter.removeChild(playerLegs)
    enemyCharacter.removeChild(enemyEyes)
    enemyCharacter.removeChild(enemyFace)
    enemyCharacter.removeChild(enemyMouth)
    battleScreen.removeChild(enemyCharacter)
    battleScreen.removeChild(playerCharacter)
    page.removeChild(battleScreen)
    titleScreenPage()
})
// 3. declare the necessary classes


class Player{
    constructor(level,maxHealth,currentHealth,attack,speed,turn,name,attacks){
        this.name=name
        this.level=level
        this.maxHealth=maxHealth
        this.currentHealth=currentHealth
        this.attack=attack
        this.speed=speed
        this.turn=turn
        this.attacks=attacks
    }
}

class enemy{
    constructor(name,level,maxHealth,currentHealth,attack,speed,turn,species,attacks){
        this.name=name
        this.level=level
        this.maxHealth=maxHealth
        this.currentHealth=currentHealth
        this.attack=attack
        this.speed=speed
        this.turn=turn
        this.species=species
        this.attacks=attacks
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
player1.name='player1'

// 5. function for the start page

function titleScreenPage(){
    page.appendChild(titleScreen)
    titleScreen.appendChild(gameTitle)
    gameTitle.innerHTML='Unlimita RPG'
    titleScreen.appendChild(highScore)
    titleScreen.appendChild(startButton)
    titleScreen.appendChild(userNamePrompt)
}
// make enemy sprite

function enemyCharacterSprite(){
enemyCharacter.appendChild(enemyFace)
enemyFace.classList.add('face')
enemyCharacter.appendChild(enemyMouth)
enemyMouth.classList.add('mouth')
enemyCharacter.appendChild(enemyEyes)
enemyEyes.classList.add('eyes')
enemyEyes.appendChild(enemyLeftEye)
enemyLeftEye.classList.add('left')
enemyEyes.appendChild(enemyRightEye)
enemyRightEye.classList.add('right')
}

//make player sprite

function playerSprite(){
    playerCharacter.appendChild(playerFace)
    playerFace.classList.add('player-face')
    playerCharacter.appendChild(playerArms)
    playerArms.classList.add('player-arms')
    playerArms.appendChild(playersRightArm)
    playersRightArm.classList.add('players-right-arm')
    playerArms.appendChild(playersLeftArm)
    playersLeftArm.classList.add('players-left-arm')
    playerCharacter.appendChild(playerBody)
    playerBody.classList.add('player-body')
    playerCharacter.appendChild(playerLegs)
    playerLegs.classList.add('player-legs')
    playerLegs.appendChild(playersRightLeg)
    playersRightLeg.classList.add('players-right-leg')
    playerLegs.appendChild(playersLeftLeg)
    playersLeftLeg.classList.add('players-left-leg')
}

// 6.function for the battle page 

function battleScreenPage(){
    page.appendChild(battleScreen)
    battleScreen.appendChild(playerCharacterinfo)
    playerCharacterinfo.classList.add('player-info')
    battleScreen.appendChild(playerName)
    battleScreen.appendChild(playerHealthBar)
    battleScreen.appendChild(playerHealthRatio)
    battleScreen.appendChild(playerLevel)
    battleScreen.appendChild(playerCharacter)
    enemyName.innerHTML=enemy1.name
    battleScreen.appendChild(enemyCharacterinfo)
    enemyCharacterinfo.classList.add('enemy-info')
    battleScreen.appendChild(enemyName)
    battleScreen.appendChild(enemyHealthBar)
    battleScreen.appendChild(enemyHealthRatio)
    battleScreen.appendChild(enemyLevel)
    battleScreen.appendChild(attackList)
    battleScreen.appendChild(battleInfoBox)
    enemyCharacterSprite()
    battleScreen.appendChild(enemyCharacter)
    playerSprite()
    battleScreen.appendChild(playerCharacter)
    battleScreen.appendChild(leaveBattle)
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

const fireball= new attack('fireball',3,0,0,0,0)
const heal=new attack('heal',0,5,0,0,0)
const agility=new attack('agility',0,0,0,0,5)
const reckless=new attack('reckless',0,0,3,8,5)
const attacksArray=[fireball,heal,agility,reckless]


function damageToEnemyCalc(attack,damage){
    let damageDealt=Math.floor((attack/10)*damage);
    enemy1.currentHealth= enemy1.currentHealth-damageDealt
    if(enemy1.currentHealth<=0)
    {
        battleInfoBox.removeEventListener('click',referenceNextTurn)
        enemy1.currentHealth = 0
        createEnemy()
        attackList.classList.add('hide-attack-list')
        battleInfoBox.innerHTML=`${player1.name} has defeated the ${enemy1.name}.`
        return damageDealt
    }
    createEnemy()
    battleInfoBox.innerHTML+=`${player1.name} did ${damageDealt} damage to the ${enemy1.name}.`
}    
function damageToPlayerCalc(attack,damage){
    let damageDealt=Math.floor((attack/10)*damage)
    player1.currentHealth= player1.currentHealth-damageDealt
    if(player1.currentHealth<=0)
    {
        battleInfoBox.removeEventListener('click',referenceNextTurn)
        player1.currentHealth = 0
        createPlayer()
        attackList.classList.add('hide-attack-list')
        battleInfoBox.innerHTML=`${player1.name} has defeated the ${enemy1.name}`
        return damageDealt
    }
    createPlayer()
    battleInfoBox.innerHTML+=`${enemy1.name} did ${damageDealt} damage to ${player1.name}.`
}   
function increasePlayerHealth(selfHealthInc){
    player1.currentHealth=player1.currentHealth+selfHealthInc
    if(player1.currentHealth>player1.maxHealth)
    player1.currentHealth=player1.maxHealth
    createPlayer()
    battleInfoBox.innerHTML+=`${player1.name} healed themselves by ${selfHealthInc} points.`
}
function decreasePlayerHealth(selfHealthDec){
    player1.currentHealth=player1.currentHealth-selfHealthDec
    if(player1.currentHealth<0)
    {
        player1.currentHealth = 0
        createPlayer()
        attackList.classList.add('hide-attack-list')
        battleInfoBox.innerHTML=`${player1.name} has killed themselves.`
        return player1.currentHealth
    }
    createPlayer()
    battleInfoBox.innerHTML+=`${player1.name} hurt themselves, took ${selfHealthDec} damage.`
}
function  increasePlayerAttack(incAtk){
    player1.attack=player1.attack+incAtk
    createPlayer()
    battleInfoBox.innerHTML+=`${player1.name}  raised their by attack ${incAtk}.`  
}
function  increasePlayerSpeed(incSpd){
    player1.speed=player1.speed+incSpd
    createPlayer()
    battleInfoBox.innerHTML+=`${player1.name}'s speed increased by ${incSpd}.`  
}
function increaseEnemeyHealth(healthInc){
    enemy1.currentHealth=enemy1.currentHealth+healthInc
    if(enemy1.currentHealth>enemy1.maxHealth)
    enemy1.currentHealth=enemy1.maxHealth
    createEnemy()
    battleInfoBox.innerHTML+=`${enemy1.name}'s health recovered by ${healthInc}.`
}
function decreaseEnemyHealth(selfHealthDec){
    enemy1.currentHealth=enemy1.currentHealth-selfHealthDec
    createPlayer()
    battleInfoBox.innerHTML+=`${enemy1.name} hurt themselves, took ${selfHealthDec} damage.`
}
function  increaseEnemyAttack(incAtk){
    enemy1.attack+=enemy1.atk+incAtk
    createPlayer()
    battleInfoBox.innerHTML+=`${enemy1.name}  raised their attack by ${incAtk}.`  
}
function  increaseEnemySpeed(incSpd){
    enemy1.speed=enemy1.spd+incSpd
    createPlayer()
    battleInfoBox.innerHTML+=`${enemy1.name}'s speed increased by ${incSpd}.`
}
function nextTurn(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd){
    player1.turn= !(player1.turn)
    battleInfoBox.innerHTML=''
    performAttack(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd)
    attackList.classList.remove('hide-attack-list')
    battleInfoBox.removeEventListener('click',referenceNextTurn)
}
const referenceNextTurn=function(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd){
         nextTurn(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd)
}
function speedCheck(){
    if(player1.speed>enemy1.speed)
    {
        player1.turn=true
    }
    else
       { 
        player1.turn=false
    }
    battleInfoBox.innerHTML=''
    battleInfoBox.addEventListener('click',referenceNextTurn)
    attackList.classList.add('hide-attack-list')
}

function playerActions(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd){
    if(baseDmg!==0){
        damageToEnemyCalc(player1.attack,baseDmg)
      }  
      if(selfHealthInc!==0){
        increasePlayerHealth(selfHealthInc)
      }
      if(selfHealthDec!==0){
        decreasePlayerHealth(selfHealthDec)
      }
      if(incAtk!==0){
        increasePlayerAttack(incAtk)
      }
      if(incSpd!==0){
        increasePlayerSpeed(incSpd)
      }
}

function enemyActions(){
    let enemyChoice=Math.floor(Math.random()*enemy1.attacks.length)
    let baseDmg=enemy1.attacks[enemyChoice].baseDmg
    let selfHealthInc=enemy1.attacks[enemyChoice].selfHealthInc
    let selfHealthDec=enemy1.attacks[enemyChoice].selfHealthDec
    let incAtk=enemy1.attacks[enemyChoice].incAtk
    let incSpd=enemy1.attacks[enemyChoice].incSpd
    if(baseDmg!==0){
        damageToPlayerCalc(enemy1.attack,baseDmg)
      } 
      if(selfHealthInc!==0){
        increaseEnemeyHealth(selfHealthInc)
      }
      if(selfHealthDec!==0){
        decreaseEnemyHealth(selfHealthDec)
      }
      if(incAtk!==0){
        increaseEnemyAttack(incAtk)
      }
      if(incSpd!==0){
        increaseEnemySpeed(incSpd)
      }
}

function performAttack(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd){  
    if(player1.turn){
      playerActions(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd)
    }
    if(!(player1.turn))
    {  
       enemyActions()
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
    for(i=0;i<attacksListArray.length;i++){
            attackList.appendChild(attacksListArray[i])
            attacksListArray[i].innerHTML=attacksArray[i].name
            attacksListArray[i].addEventListener('click',function(){
                let baseDmg=attacksArray[attacksListArray.indexOf(this)].baseDmg
                let selfHealthInc=attacksArray[attacksListArray.indexOf(this)].selfHealthInc
                let selfHealthDec= attacksArray[attacksListArray.indexOf(this)].selfHealthDec
                let incAtk= attacksArray[attacksListArray.indexOf(this)].incAtk
                let incSpd= attacksArray[attacksListArray.indexOf(this)].incSpd
                speedCheck()
                performAttack(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd)
            })
        }
     }
const enemy1= new enemy('slime',1,13,13,10,9)
const bite= new attack('bite',2,0,0,0,0)
const leech=new attack('leech',3,1,0,0,0)
enemy1.attacks=[bite,leech]
function createEnemy(){  
    enemyHealthBar.innerHTML=''
    enemyHealthRatio.innerHTML=`HP:${enemy1.currentHealth}/${enemy1.maxHealth}`
    enemyLevel.innerHTML=`lvl:${enemy1.level}`
 }

startButton.addEventListener('click',function(){
    titleScreen.remove()
    battleScreenPage()
    createPlayer()
    createEnemy()
    makeAttackList()
 })