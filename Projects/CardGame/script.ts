/* CLASS DECLARATION */ 
//Card
class Card{
    private iD:number
    private attackDMG:number
    private imgUrl:string

    constructor(iD:number, attack:number){
        
        this.iD=iD
        this.attackDMG=attack
        this.imgUrl= "CardIcons/"+ Math.floor(Math.random() * 70+1) +".jpg"
    }

    get toString(){
        return "ID = " + this.iD +", attackDMG = " + this.attackDMG + ", Health = " + ", imgURL = " + this.imgUrl
    }

    get getID() : number{
        return this.iD
    }

    get getAttackDMG(){
        return this.attackDMG
    }

    get getImgUrl(){
        return this.imgUrl
    }
}
/* CLASS DECLARATION */ 
//Deck
class Deck{

    deck: Card[];

    /* Constructor which generates a random DECK object with a size of 7 !!!!IF THE PARAMETER IS ANYTHING ELSE THAN 0, THEN IT WILL CREATE AN ENEMY DECK!!!!!*/ 
    constructor(type:number){
        if (type==0) {
            this.deck=[]
                for (let i = 0; i < 7; i++) {
                    this.deck[i]= new Card(i,Math.floor(Math.random() * 10+1));
                }
        } else {
            this.deck=[];
            this.deck[0]= new Card(0,Math.floor(Math.random() * 20+5));
        } 
    }
    
    public resetEnemyDeck(lvl:number){
        this.deck[0]= new Card(0,Math.floor(Math.random() * 20+5+lvl));
    }
    
    public get getDeckArray() :  Card[] {
        return this.deck
    }
    
    public removeCardAtIndex(index:number){
        for (let i = 0; i < this.deck.length; i++) {
            
            if (this.deck[i].getID == index) {
                this.deck.splice(i, 1);
            }
        }
    }
        
    public convertIdtoIndex(id:number) : number{
            let index=0;
            for (let i = 0; i < this.deck.length; i++) {
                if (this.deck[i].getID == id ) {
                    index=i
                }
            }
            return index
        
    }

    public getCardAt(index:number) : Card{
        return this.deck[this.convertIdtoIndex(index)]
    }
    

    public addCard(card:Card){
        if (card!==undefined) {
            this.deck[this.deck.length] = card;
        }
        
    }
}
    /*MAIN*/
    /* Start Events */
    /* Variable Declaration*/
    let level = 0;
    let gold = 0;
    let score= 0; 
    let deckPlayer = new Deck(0);
    let deckEnemy = new Deck(1);
    let deckShop = new Deck(1);
    deckShop.removeCardAtIndex(0)
    /* Variable Declaration*/ 
    /* Animate StartScreen */
    let StartScreen = document.querySelector('.StartScreen') as HTMLDivElement;
    if (StartScreen){
        StartScreen.style.transform="scale(1)";
    }
    /* Start Events */

    /* Startscreen: StartButton generates the player's deck when clicked */

    let startButton = document.querySelector('.StartButton');
    if (startButton) {
    startButton.addEventListener("click", function() {
        deckPlayer = new Deck(0);
        console.log(deckPlayer);
        /* hide StartScreen  */
        let startScreen = document.querySelector('.StartButton') as HTMLDivElement;
        if (startScreen) {
        startScreen.style.opacity = '0';
        startScreen.style.visibility = 'hidden';
        /* Show Deck after Startscreen closes */
        showDeck();
        /* Show Deck after Startscreen closes */
        }
    });
    } else {
    console.error("Start button not found");
    }
    /* Startscreen */

    /* Startscreen: Button disappears, deck appears */
    function showDeck(){
        let showDeck = document.querySelector('.StartScreen') as HTMLDivElement;
            if (showDeck) {
                
                /* reset div and create ContinueButton to center items*/ 
                showDeck.innerHTML = "<button class='ContinueButton'>CONTINUE</button>";
                /* reset div and create ContinueButton to center items*/ 
                /* show card deck */ 
                    for (let i = 0; i < deckPlayer.getDeckArray.length; i++) {
                        
                        showDeck.innerHTML += "<div class='Card' data-index='"+ i +"'><span class='Stats'>"
                                            +deckPlayer.getCardAt(i).getAttackDMG 
                                            +"</span></div>";
                        let setcardimg = document.querySelector(`.Card[data-index='${i}']`) as HTMLDivElement;
                        setcardimg.style.backgroundImage= `url(${deckPlayer.getCardAt(i).getImgUrl})`;
                        
                    }
                /* show card deck */ 
                /* show ContinueButton */
                let continueButton = document.querySelector('.ContinueButton') as HTMLDivElement;
                if(continueButton){
                    continueButton.style.display = "block";
                        /* ContinueButton removes StartScreen and spawns playerdeck in tile2*/
                        continueButton.addEventListener("click", function() {
                            showDeck.style.display= "none";
                            let playerDeckTile2 = document.querySelector('.tile2') as HTMLDivElement;
                            let goldmenu = document.querySelector('.menuborder') as HTMLDivElement;
                            let fightbuttton = document.querySelector('.fightButton') as HTMLDivElement;
                            let shopButtton = document.querySelector('.shop') as HTMLDivElement;
                            let highscore = document.querySelector('.highscore') as HTMLDivElement;
                            
                                if (highscore) {
                                    highscore.style.opacity = "1";
                                } else {
                                    console.log("highscore is null");
                                }

                                if (goldmenu) {
                                    goldmenu.style.opacity = "1";
                                } else {
                                    console.log("goldmenu is null");
                                }

                                if (fightbuttton) {
                                    fightbuttton.style.opacity="1";
                                } else {
                                    console.log("fightbuttton is null");
                                }
                                
                                if (shopButtton) {
                                    shopButtton.style.opacity="1";
                                } else {
                                    console.log("shopButtton is null")
                                }
                                

                                if (playerDeckTile2) {
                                    /* show card deck */ 
                                    for (let i = 0; i < deckPlayer.getDeckArray.length; i++) 
                                    {//onclick='fightFunction()'
                                        playerDeckTile2.innerHTML += "<div class='Card'  data-index='"+ i +"'><span class='Stats'>"
                                                                    +deckPlayer.getCardAt(i).getAttackDMG 
                                                                    +"</span></div>";
                                        let setcardimg = document.querySelector(`.Card[data-index='${i}']`) as HTMLDivElement;
                                        setcardimg.style.backgroundImage= `url(${deckPlayer.getCardAt(i).getImgUrl})`;
                                    }
                                    /* show card deck */ 
                                } else {
                                    
                                }
                            enemyCard(deckEnemy);
                        });
                        /* ContinueButton removes StartScreen and spawns playerdeck in tile2*/
                }else{
                    console.log("continueButton is null")
                }
                /* show ContinueButton */
            }
            else{
                console.log("showDeck is null")
            }
    }


    //FIGHT BUTTON
    function fightFunction() {
        let cardFightSection = document.querySelector('.playerCard') as HTMLDivElement;
        let enemyCardSection = document.querySelector('.enemyCard') as HTMLDivElement;
        let goldcounter = 0;
            //check if fightsection is empty
            if (cardFightSection && cardFightSection.childElementCount === 0) {
                console.log("cardFightSection has no child elements");
            } else {
                if (cardFightSection) {
                    //variables
                    var enemyCardDamage=0;
                    var combinedPower= 0;
                    for (let i = 0; i < cardFightSection.children.length; i++) {
                      //generate 4 gold for each card
                      goldcounter+=4
                      //get Cards by dataindex
                      const child = cardFightSection.children[i];
                      const dataIndex = child.getAttribute("data-index");
                      if (dataIndex) {
                        //calculate combinedpower
                        combinedPower+=getCardbyID(parseInt(dataIndex,10),deckPlayer).getAttackDMG
                                //START ANIMATION
                                if (cardFightSection) {
                                    if (enemyCardSection && child) {
                                        //Responsive calculation for the enemy Card's koordinates 
                                        const endPositiony = enemyCardSection.getBoundingClientRect().height;
                                        const Cardpostionx = child.getBoundingClientRect().x;
                                        const playerCardSectionx = cardFightSection.getBoundingClientRect().x;
                                        var x=(playerCardSectionx+cardFightSection.getBoundingClientRect().width/2-child.getBoundingClientRect().width/2-Cardpostionx);

                                        //animation
                                        const animation = child.animate(
                                            [
                                            { transform: `translate(`+ x +`px,${-1*endPositiony}px)`},
                                            //{ transform: `translate(${-1.1*endPositiony}px,${-1.1*endPositiony}px)`},
                                            ],
                                            { duration: 900}
                                        );
                                        //on finish delete cards
                                        animation.onfinish = () => {
                                            
                                            cardFightSection.innerHTML = "";   
                                        };
                                            
                                    }            
                                } else {
                                console.log("cardfightsection is null")
                                }
                     } 
                    }
                    //Calculation of the enemy's Damage
                    var enemyCardDamage=0;
                            if (enemyCardSection) {
                                for (let i = 0; i < enemyCardSection.children.length; i++) {
                                    const child = enemyCardSection.children[i];
                                    const enemyDataIndex = child.getAttribute("data-index");
                                    if (enemyDataIndex) {
                                    enemyCardDamage+=getCardbyID(parseInt(enemyDataIndex,10),deckEnemy).getAttackDMG
                                    } 
                                }          
                            }
                    //Check if the players power is as powerful or greater than the enemy's power 
                    if (combinedPower>=enemyCardDamage) {
                        //if player wins he receives gold, scorepoints, new cards in the shop, and a new foe to face
                        level++
                        gold+=goldcounter
                        score+=enemyCardDamage
                        deckEnemy.resetEnemyDeck(level)
                        enemyCard(deckEnemy);
                        deckShop = refreshShopCards(level)
                        scoreFunction(score)
                        let goldSection = document.querySelector('.gold') as HTMLDivElement;                        
                            if (goldSection) {
                                    goldSection.innerHTML = gold.toString()
                            } else {
                                 console.log("GoldSection is null")
                            }                     
                        } else {
                            //if he dies the game restarts
                            alert("YOU DIED")
                            setTimeout(() => {
                               window.location.href = 'index.html'; 
                            },);
                        }
                }
            }
    }
    //shows enemy card on the screen function requires a Deck as param
    function enemyCard(enemyDeck:Deck) {
        let enemyCard = document.querySelector('.enemyCard') as HTMLDivElement;
        if (enemyCard) {
                    enemyCard.innerHTML = "<div class='Cardenemy' data-index='0'><span class='Stats'>"
                                        +enemyDeck.getCardAt(0).getAttackDMG 
                                        +"</span></div>";
                    let setcardimg = document.querySelector(`.Cardenemy[data-index='0']`) as HTMLDivElement;
                    setcardimg.style.backgroundImage= `url(${enemyDeck.getCardAt(0).getImgUrl})`;
        } else {
                console.log("enemyCard is null")
        }
    }
    //ANIMATION ON CLICKED CARD
    let cardContainer = document.querySelector('.tile2') as HTMLDivElement;
    if (cardContainer) {
        cardContainer.addEventListener('click', (event) => {
            const clickedCard = event.target as HTMLDivElement;
            if (clickedCard.dataset.index !== undefined) {
                let playerCardSection = document.querySelector('.playerCard') as HTMLDivElement;

                    if (playerCardSection) {
                        //START ANIMATION
                        if (playerCardSection && clickedCard) {
                            //Calculate postion
                            const endPositiony = playerCardSection.getBoundingClientRect().y;
                            const Cardpostionx = clickedCard.getBoundingClientRect().x;
                            const playerCardSectionx = playerCardSection.getBoundingClientRect().x;
                            var x=(playerCardSectionx+playerCardSection.getBoundingClientRect().width/2-clickedCard.getBoundingClientRect().width/2-Cardpostionx);


                            const animation = clickedCard.animate(
                                [
                                { transform: `translate(`+ x +`px,${-1*endPositiony}px)`},
                                ],
                                { duration: 600}
                            );
                            //append to fightsection div
                            animation.onfinish = () => {
                                playerCardSection.appendChild(clickedCard);
                            };
                        }            
                    } else {
                    console.log("playerCard is null")
                    }
        }
        });
    } else {
        console.log("cards is null")
    }
    //static function to get a card objet
    function getCardbyID(index:number, deck: Deck) {
        return deck.getCardAt(index);
    }
    //MARKETPLACE
    let shopcards = document.querySelector('.shopMenu') as HTMLDivElement;
    let playerDeckTile2 = document.querySelector('.tile2') as HTMLDivElement;
                if (shopcards) {
                    shopcards.addEventListener('click', (event) => {
                        const clickedCard = event.target as HTMLDivElement;
                        if (clickedCard.dataset.index !== undefined) {
                            //Card costs 5 gold
                            if (gold - 5 >= 0) {
                                gold-=5
                                const index = parseInt(clickedCard.dataset.index, 10);
                                console.log(index)
                                deckPlayer.addCard(getCardbyID(index, deckShop));
                                playerDeckTile2.appendChild(clickedCard);
                                deckShop.removeCardAtIndex(index)
                                let goldSection = document.querySelector('.gold') as HTMLDivElement;                        
                                    if (goldSection) {
                                        goldSection.innerHTML = gold.toString()
                                    } else {
                                        console.log("GoldSection is null")
                                    }
                            }
                            else{
                                alert("5 Gold needed")
                            }
                        }
                    });
                } else {
                    console.log("cards is null")
                }
    //CLOSE BUTTON
    function closeShopFunction() {
        let shopMenu = document.querySelector('.shopMenu') as HTMLDivElement;
        shopMenu.style.display = "none"
        shopMenu.style.transform = "scale(0)"
    }
    //SHOW CARDS IN SHOP
    function shopFunction() {
        let shopMenu = document.querySelector('.shopMenu') as HTMLDivElement;
        shopMenu.innerHTML = "<button class='closeShopButton' onclick='closeShopFunction()'>CLOSE</button>"
        shopMenu.style.display = "flex"
        shopMenu.style.transform = "scale(1)"
         for (let i = 0; i < deckShop.getDeckArray.length; i++) {
             shopMenu.innerHTML += "<div class='Card' data-index='" +deckShop.getDeckArray[i].getID + "'><span class='Stats'>"
                                 +deckShop.getDeckArray[i].getAttackDMG 
                                 +"</span></div>";
            let setcardimg = document.querySelector(`.Card[data-index='${deckShop.getDeckArray[i].getID}']`) as HTMLDivElement;
            setcardimg.style.backgroundImage= `url(${deckShop.getCardAt(deckShop.getDeckArray[i].getID).getImgUrl})`;
         }
    }
    //GENERATE NEW SHOP CARD BY WINNING A ROUND
    function refreshShopCards(lvl:number) {
        const shop = new Deck(1)
        for (let i = 0; i < 4; i++) {
             shop.getDeckArray[i] = new Card(Math.floor(Math.random() * 12000+4000),Math.floor(Math.random() * 12+10+lvl));
        }
        return shop;
    }
    //SCORE
    function scoreFunction(scoreNumber:number) {
        let score = document.querySelector('.score') as HTMLDivElement;
        score.innerHTML = scoreNumber.toString()
    }
    //EXIT TO HOME
    document.querySelector('.closeGame')?.addEventListener('click', (event) =>{
        window.location.href = '/Portfolio/home.html#Projects';
    })

