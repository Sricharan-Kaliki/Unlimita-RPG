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
const playerCharacter=document.createElement('div')
const playerName=document.createElement('p')
const playerHealthBar=document.createElement('p')
const playerHealthRatio=document.createElement('p')
const playerLevel=document.createElement('p')
const enemyCharacter=document.createElement('div')
const enemyName=document.createElement('p')
const enemyHealthBar=document.createElement('p')
const enemyHealthRatio=document.createElement('p')
const enemyLevel=document.createElement('p')
const attackBox=document.createElement('div')
const attackList=document.createElement('ul')
attackList.classList.add('attack-list')
const attackOneName=document.createElement('li')
const attackTwoName=document.createElement('li')
const attackThreeName=document.createElement('li')
const attackFourName=document.createElement('li')
const battleInfoBox=document.createElement('p')
const attackListArray=[attackOneName,attackTwoName,attackThreeName,attackFourName]

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
    constructor(name,baseDmg,selfHealthInc,selfHealthdec,incAtk,incSpd){
       this.name=name
       this.baseDmg=baseDmg
       this.selfHealthInc=selfHealthInc
       this.selfHealthdec=selfHealthdec
       this.incAtk=incAtk
       this.incSpd=incSpd          
    }   
}

const player1=new Player(1,20,20,10,10)

function onStart(){
    page.appendChild(titleScreen)
    titleScreen.appendChild(gameTitle)
    gameTitle.innerHTML='Unlimita RPG'
    titleScreen.appendChild(highScore)
    titleScreen.appendChild(startButton)
    titleScreen.appendChild(userNamePrompt)
    titleScreen.appendChild(userName) 
}
function battleScreen(){
    page.appendChild(playerCharacter)
    playerCharacter.classList.add('player-character')
    playerCharacter.appendChild(playerName)
    playerName.classList.add('player-name')
    playerCharacter.appendChild(playerHealthBar)
    playerHealthBar.classList.add('player-health-bar')
    playerCharacter.appendChild(playerHealthRatio)
    playerHealthRatio.classList.add('player-health-ratio')
    playerCharacter.appendChild(playerLevel)
    playerLevel.classList.add('player-level')
    page.appendChild(enemyCharacter)
    enemyCharacter.appendChild(enemyName)
    enemyLevel.classList.add('enemy-name')
    enemyCharacter.appendChild(enemyHealthBar)
    enemyLevel.classList.add('enemy-health-bar')
    enemyCharacter.appendChild(enemyHealthRatio)
    enemyLevel.classList.add('enemy-health-ratio')
    enemyCharacter.appendChild(enemyLevel)
    enemyLevel.classList.add('enemy-level')
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
function performAttack(){  
    if(speedCheck()){
       let dmgToEnemy
       dmgToEnemy=damageToEnemyCalc(player1.attack,5)
       battleInfoBox.innerHTML=`you did ${dmgToEnemy} to the enemy`
       attackList.classList.add('hide-attack-list')
       battleInfoBox.addEventListener('click',function(){
        let dmgToPlayer
        dmgToPlayer=damageToPlayerCalc(enemy1.attack,3)
        battleInfoBox.innerHTML=`The enemy did ${dmgToPlayer} damage to you`
        attackList.classList.remove('hide-attack-list')
       })
    }
    else{
       let dmgToPlayer
       dmgToPlayer=damageToPlayerCalc(enemy1.attack,3)
       battleInfoBox.innerHTML=`The enemy did ${dmgToPlayer} damage to you`
       attackList.classList.remove('hide-attack-list')
       battleInfoBox.addEventListener('click',function(){
            let dmgToPlayer
            dmgToPlayer=damageToPlayerCalc(enemy1.attack,3)
            attackList.classList.add('hide-attack-list')
            battleInfoBox.innerHTML=`The enemy did ${dmgToPlayer} damage to you`
           })     
       }
       if (player1.currentHealth<0){
        battleInfoBox.innerHTML='you lost'
        player1.currentHealth=0
    }
        if (enemy1.currentHealth<0){
        battleInfoBox.innerHTML='you won'
        enemy1.currentHealth=0
        
    }
    }

function getUserName(){
    player1.playerName = document.querySelector('.user-name-input').value 
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
                performAttack()
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

