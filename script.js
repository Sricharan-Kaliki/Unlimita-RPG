
// Declare the start page elements

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
const highScoreList=document.createElement('ul')
highScoreList.classList.add('high-score-list')
const highScoreLi=document.createElement('li')
highScoreList.appendChild(highScoreLi)
const userName=document.createElement('p')
userName.classList.add('user-name')
const startButton=document.createElement('button')
startButton.classList.add('start-button')
startButton.type='button'  
startButton.innerHTML="Start Game"
const textBox=document.createElement('p')
textBox.classList.add('text-box')

//Declare the battle page elements

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

//level up screen elements
const levelUpScreen=document.createElement('div')
levelUpScreen.classList.add('level-up-screen')
const totalPoints=document.createElement('p')
totalPoints.classList.add('total-points')
totalPoints.innerHTML='Total Points'
const totalPointsNum=document.createElement('p')
totalPointsNum.classList.add('total-points-number')
let totalPointsNumber
const attackPoints=document.createElement('p')
attackPoints.classList.add('attack-points')
attackPoints.innerHTML='Attack Points'
const attackPointsNum=document.createElement('p')
attackPointsNum.classList.add('attack-points-number')
let attackPointsNumber
const healthPoints=document.createElement('p')
healthPoints.classList.add('health-points')
healthPoints.innerHTML='Health Points'
const healthPointsNum=document.createElement('p')
healthPointsNum.classList.add('health-points-number')
let healthPointsNumber
const speedPoints=document.createElement('p')
speedPoints.classList.add('speed-points')
speedPoints.innerHTML='Speed Points'
const speedPointsNum=document.createElement('p')
speedPointsNum.classList.add('speed-points-number')
let speedPointsNumber
const distributePoints=document.createElement('button')
distributePoints.classList.add('distribute-points-button')
distributePoints.innerHTML='Enter' 

const attackUpButton=document.createElement('button')
attackUpButton.classList.add('attack-up-button')
const attackDownButton=document.createElement('button')
attackDownButton.classList.add('attack-down-button')
const speedUpButton=document.createElement('button')
speedUpButton.classList.add('speed-up-button')
const speedDownButton=document.createElement('button')
speedDownButton.classList.add('speed-down-button')
const healthUpButton=document.createElement('button')
healthUpButton.classList.add('health-up-button')
const healthDownButton=document.createElement('button')
healthDownButton.classList.add('health-down-button')
const leaveBattle=document.createElement('button')
leaveBattle.classList.add('leave-battle-button')
leaveBattle.innerHTML='return to title screen'
leaveBattle.addEventListener('click',returnToTitleScreen)


// declare the necessary classes


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

// make a new player from the class

const player1=new Player(1,20,20,10,20)
player1.name='player1'
let currentAttack=player1.attack
let currentMaxHealth=player1.maxHealth
let currentSpeed=player1.speed

// 

function returnToTitleScreen(){
    battleScreen.removeChild(enemyCharacter)
    battleScreen.removeChild(playerCharacter)
    page.removeChild(battleScreen)
    titleScreenPage()
    titleScreen.appendChild(highScoreList)
    highScoreLi.innerHTML= `HighScore: ${player1.level}` 
}
//  function for the start page

function titleScreenPage(){
    page.appendChild(titleScreen)
    titleScreen.appendChild(gameTitle)
    gameTitle.innerHTML='Unlimita RPG'
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

// function for the battle page 

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
 
//function for the level up screen

function displayLevelUp(){

battleScreen.appendChild(levelUpScreen)
levelUpScreen.appendChild(totalPoints)
levelUpScreen.appendChild(totalPointsNum)
levelUpScreen.appendChild(attackPoints)
levelUpScreen.appendChild(attackPointsNum)
levelUpScreen.appendChild(healthPoints)
levelUpScreen.appendChild(healthPointsNum)
levelUpScreen.appendChild(speedPoints)
levelUpScreen.appendChild(speedPointsNum)
levelUpScreen.appendChild(attackUpButton)
levelUpScreen.appendChild(attackDownButton)
levelUpScreen.appendChild(healthUpButton)
levelUpScreen.appendChild(healthDownButton)
levelUpScreen.appendChild(speedUpButton)
levelUpScreen.appendChild(speedDownButton)
levelUpScreen.appendChild(distributePoints)
levelUpScreen.classList.remove('hide-level-up-screen')
}


input.addEventListener('keydown',function(event){ 
    if(event.key==='Enter')
    {
    titleScreen.appendChild(userName)
    userName.innerHTML="welcome "+getUserName() +"! press start game to join battle"
    this.remove()
    }
})

distributePoints.addEventListener('click',function(){
    if(totalPointsNumber==0){
    player1.attack+=attackPointsNumber
    currentAttack=player1.attack
    player1.maxHealth+=healthPointsNumber
    player1.currentHealth=player1.maxHealth
    player1.speed+=speedPointsNumber
    currentSpeed=player1.speed
    player1.level+=1
    enemy1.level+=1
    enemy1.attack=Math.floor((enemy1.attack)*1.1)
    enemy1.maxHealth=Math.floor((enemy1.maxHealth*1.1))
    enemy1.speed=Math.floor((enemy1.speed*1.1))
    enemy1.currentHealth=enemy1.maxHealth
    levelUpScreen.classList.add('hide-level-up-screen')
    battleInfoBox.innerHTML='congrats you leveled up'
    attackList.classList.remove('hide-attack-list')
    battleScreen.appendChild(enemyCharacter)
    battleScreen.appendChild(enemyCharacterinfo)
    battleScreen.appendChild(enemyName)
    battleScreen.appendChild(enemyLevel)
    battleScreen.appendChild(enemyHealthRatio)
    createEnemy()
    createPlayer()
    }
})

attackUpButton.addEventListener('click',function(){
    if(totalPointsNumber>0){
    totalPointsNumber-=1;
    attackPointsNumber+=1;
    }
    updateLevelUpScreen()
})
attackDownButton.addEventListener('click',function(){
    if(totalPointsNumber<6 && attackPointsNumber>0){
    totalPointsNumber+=1;
    attackPointsNumber-=1;
    }
    updateLevelUpScreen()
})
healthUpButton.addEventListener('click',function(){
    if(totalPointsNumber>0){
    totalPointsNumber-=1;
    healthPointsNumber+=1;
    }
    updateLevelUpScreen()
})
healthDownButton.addEventListener('click',function(){
    if(totalPointsNumber<6 && healthPointsNumber>0){
    totalPointsNumber+=1;
    healthPointsNumber-=1;
    }
    updateLevelUpScreen()
})

speedUpButton.addEventListener('click',function(){
    if(totalPointsNumber>0){
    totalPointsNumber-=1;
    speedPointsNumber+=1;
    }
    updateLevelUpScreen()
})
speedDownButton.addEventListener('click',function(){
    if(totalPointsNumber<6 && speedPointsNumber>0){
    totalPointsNumber+=1;
    speedPointsNumber-=1;
    }
    updateLevelUpScreen()
})

function updateLevelUpScreen(){
    totalPointsNum.innerHTML=`${totalPointsNumber}`
    attackPointsNum.innerHTML=`${attackPointsNumber}`
    healthPointsNum.innerHTML=`${healthPointsNumber}`
    speedPointsNum.innerHTML=`${speedPointsNumber}`
}

const fireball= new attack('fireball',3,0,0,0,0)
const heal=new attack('heal',0,5,0,0,0)
const agility=new attack('agility',0,0,0,0,5)
const reckless=new attack('reckless',0,0,3,8,5)
const attacksArray=[fireball,heal,agility,reckless]


function damageToEnemyCalc(currentAttack,damage){
    let damageDealt=Math.floor((currentAttack/10)*damage)
    enemy1.currentHealth= enemy1.currentHealth-damageDealt
    if(enemy1.currentHealth<=0)
    {
        battleInfoBox.removeEventListener('click',referenceNextTurn)
        enemy1.currentHealth = 0
        createEnemy()
        battleScreen.removeChild(enemyCharacter)
        battleScreen.removeChild(enemyName)
        battleScreen.removeChild(enemyLevel)
        battleScreen.removeChild(enemyHealthRatio)
        battleScreen.removeChild(enemyCharacterinfo)
        totalPointsNumber=5
        attackPointsNumber=0
        healthPointsNumber=0
        speedPointsNumber=0
        updateLevelUpScreen()
        displayLevelUp()
        attackList.classList.add('hide-attack-list')
        battleInfoBox.innerHTML=`${player1.name} has defeated the ${enemy1.name}.`
        return damageDealt
    }
    createEnemy()
    battleInfoBox.innerHTML+=`${player1.name} did ${damageDealt} damage to the ${enemy1.name}.`
}    
function damageToPlayerCalc(currentAttack,damage){
    let damageDealt=Math.floor((currentAttack/10)*damage)
    player1.currentHealth= player1.currentHealth-damageDealt
    if(player1.currentHealth<=0)
    {
        battleInfoBox.removeEventListener('click',referenceNextTurn)
        player1.currentHealth = 0
        createPlayer()
        attackList.classList.add('hide-attack-list')
        battleInfoBox.innerHTML=`${player1.name} has been defeated click return to title screen`
        return damageDealt
    }
    createPlayer()
    battleInfoBox.innerHTML+=`${enemy1.name} did ${damageDealt} damage to ${player1.name}.`
}   
function increasePlayerHealth(selfHealthInc){
    player1.currentHealth=player1.currentHealth+selfHealthInc
    if(player1.currentHealth>currentMaxHealth)
    player1.currentHealth=currentMaxHealth
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
    currentAttack=currentAttack+incAtk
    createPlayer()
    battleInfoBox.innerHTML+=`${player1.name}  raised their by attack ${incAtk}.`  
}
function  increasePlayerSpeed(incSpd){
    currentSpeed=currentSpeed+incSpd
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
    console.log(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd)
         nextTurn(baseDmg,selfHealthInc,selfHealthDec,incAtk,incSpd)
}
function speedCheck(){
    if(currentSpeed>enemy1.speed )
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
        damageToEnemyCalc(currentAttack,baseDmg)
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
const enemy1= new enemy('slime',1,10,10,10,10)
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