// vanilla javascript document ready equivalent
var ready = function ( fn ) {
    if ( typeof fn !== 'function' ) return;
    if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
        return fn();
    }
    document.addEventListener( 'DOMContentLoaded', fn, false );
};

ready(function() {
    // all variables that need to be global accessible
    let $QSA = (elem) => document.querySelectorAll(elem),
        $QS = (elem) => document.querySelector(elem),
        $ID = (elem) => document.getElementById(elem),
        $Arr = (elem) => Array.from(elem),
        animalCounter,
        chosenAnimals = [],
        animalsArr = [],
        feedback = [
            "Good. Next round.",
            "Yeah. Next round.",
            "Keep going. Next round.",
            "Good job. Next round.",
            "Hurra. Next round.",
            "Super. Next round.",
            "Well done. Next round.",
            "You rock. Next round."            
        ],
        playerCounter,
        attempts,
        moveCounter,
        lastRandomNum;
    
    // start
    init();
    
    function init() {
        animalCounter = 4;
        playerCounter = 0;
        $ID("countleft").innerText = animalCounter;
        $ID("playercounter").innerText = playerCounter;
        $QSA("#selection .animal").forEach(elem => elem.addEventListener("click", selectAnimal, false));
    };
    
    // HELPER FUNCTIONS
    // get random integer within range min max INCLUDING max and OPTIONAL WITHOUT same number twice in a row (repeat)
    function getRandomInt(min, max, repeat) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        if(repeat) {
            return num;
        } else {
            return num !== lastRandomNum ? num : getRandomInt(min, max);
        }
    }
    
    // --- CHOOSE INTRO --- User needs to select 4 animals to play with
    function selectAnimal() {
        let animal = this.querySelector("img");
        // enable deselection of a selected animal 
        if(animal.classList.contains("active")) {
            animal.classList.remove("active");
            animalCounter++;
            $ID("countleft").innerText = animalCounter;
        }
        // select animal
        else {
            animal.classList.add("active");
            this.querySelector("audio").play();
            animalCounter--
            $ID("countleft").innerText = animalCounter;
            // if 4 animals have been chosen
            if(animalCounter === 0) {
                $QSA("#selection .animal").forEach(elem => elem.removeEventListener("click", selectAnimal, false));
                // give user option to redo choice or play
                $QSA(".confirm-choice").forEach(elem => {
                    elem.classList.remove("confirm-choice-hide");
                    elem.classList.add("confirm-choice-show");
                });
                // choice = rechoose
                $QS(".confirm-choice .rechoose").addEventListener("click", function rechoose() {
                    $QSA(".confirm-choice").forEach(elem => {
                        elem.classList.remove("confirm-choice-show");
                        elem.classList.add("confirm-choice-hide");
                    });
                    $QSA("#selection .animal img").forEach(elem => elem.classList.remove("active"));
                    init();
                });
                // choice = play
                $QSA(".confirm-choice .play").forEach(elem => elem.addEventListener("click", function() {
                    
                    // find out which mode is played
                    let playmode = this.getAttribute("data-playtype");
                    if(playmode === "normal") {
                        $QS(".playmode-normal").classList.remove("hide");
                        attempts = 3;
                    } else {
                        $QS(".playmode-hard").classList.remove("hide");
                        attempts = 1;
                    }
                    
                    // necessary to check because function can get added multiple times
                    if(chosenAnimals.length === 0) {
                        $Arr($QSA("#selection .animal")).filter(item => {
                            if(item.querySelector("img").classList.contains("active")) {
                                chosenAnimals.push(item.id);   
                            } else {
                                item.remove();
                            }
                        });
                        
                        // stylings that needed to be adjusted for the game start
                        $QS(".confirm-choice").classList.remove("confirm-choice-show");
                        
                        $QS("#selection h2").classList.add("hide");
                        
                        $QSA("#selection .animal").forEach(elem => {
                            elem.querySelector("img").classList.remove("active");
                            elem.classList.remove("preselection");
                            elem.removeEventListener("click", selectAnimal)
                        });
                        
                        $QSA(".selection-wrapper").forEach(elem => {
                            elem.classList.remove("choice-grid");
                            elem.classList.add("game-grid");
                        });
                        
                        $QSA("#control").forEach(elem => {
                            elem.classList.remove("control-hide");
                            elem.classList.add("control-show");
                        });
                                                 
                        $ID("start").addEventListener("click", startGame, false);
                        $ID("reset").addEventListener("click", reset, false);
                        $QSA(".selection-wrapper .animal").forEach(elem => {
                            elem.addEventListener("click", function() {
                                playerMove.call(this);
                            });   
                        });
                        // attach reset func
                        $QSA(".playagain").forEach(elem => elem.addEventListener("click", reset, false));    
                    }
                }));
            }
        }    
    }
    
    
    // ---- GAMEPLAY --- GAME
    
    function startGame() {
        $ID("start").removeEventListener("click", startGame, false);
        $ID("start").classList.add("inactive");
        $ID("playercounter").classList.remove("inactive");
        $ID("playercounter").innerText = ++playerCounter;
        computerAddMove();
    }
    
    function reset() {
        window.location.href = window.location.href;
    }
    
    function getRandomFeedback() {
        let feedbackLength = feedback.length - 1,
            randomNum = getRandomInt(0, feedbackLength, true);
        $QSA("#feedback").forEach(elem => {
            elem.innerText = feedback[randomNum];
            elem.classList.remove("hidden");
        });
        $ID("playercounter").classList.add("highlight");
        setTimeout(() => {
            $ID("playercounter").classList.remove("highlight");
        }, 1500);
    }
    
    function notify(text) {
        $ID("feedback").classList.remove("hidden");
        $ID("feedback").innerText = text;
        setTimeout(() => {
            $ID("feedback").classList.add("hidden");
        }, 1000);
    }
    
    function computerAddMove() {
        let randomNum = getRandomInt(0, 3, false),
            randomAnimal = chosenAnimals[randomNum];
            lastRandomNum = randomNum; // update outer num to to avoid same num twice
            animalsArr.push(randomAnimal);
            computerReplayMoves();
    }
    
    function computerReplayMoves() {
        let i = 0,
            showAnimal = () => {
                return setTimeout(() => {
                    if(i < animalsArr.length) {
                        $ID(animalsArr[i]).querySelector("audio").play();
                        $ID(animalsArr[i]).querySelector("img").classList.remove("nobg");
                        ++i;
                        hideAnimal();
                    } 
                    else {
                        notify("Your turn.")
                        // re-enable user clicking
                        $QSA(".selection-wrapper .animal").forEach(elem => elem.classList.remove("no-click"));
                    }
                }, 1000)
            },
            hideAnimal = () => {
                return setTimeout(() => {
                    $ID(animalsArr[i-1]).querySelector("img").classList.add("nobg");
                    showAnimal();
                }, 1000);
            };
        
        // start
        showAnimal();
        // reset move counter
        moveCounter = 0;
        // prevent user clicking
        $QSA(".selection-wrapper .animal").forEach(elem => elem.classList.add("no-click"));
    }
    
    function playerMove() {
        let animalsArrLength = animalsArr.length;

        // user repeats all animals in the same order
        if(moveCounter < animalsArrLength) {
            if(this.id === animalsArr[moveCounter]) {
                this.querySelector("audio").play();
                this.querySelector("img").classList.remove("nobg");
                moveCounter++;
                setTimeout(() => {
                    this.querySelector("img").classList.add("nobg");
                }, 1000);
            }
            // if user makes a mistake
            else {
                notify("Wrong animal.")
                // prevent user clicking
                $QSA(".selection-wrapper .animal").forEach(elem => elem.classList.add("no-click"));
                // add error class to the wrongly clicked animal
                this.querySelector("img").classList.add("error");
                // show which animal would have been correct
                $ID(animalsArr[moveCounter]).querySelector("img").classList.remove("nobg");
                setTimeout(() => {
                    this.querySelector("img").classList.remove("error");
                    $ID(animalsArr[moveCounter]).querySelector("img").classList.add("nobg");
                }, 1000);
                // deduct attempt
                $QS(".playmode-counter").innerText = --attempts;
                // based on the amount of attempts game continues or game over
                if(attempts > 0) {
                    setTimeout(() => {
                        notify("Once again.");
                    }, 1000);
                    setTimeout(() => {
                        computerReplayMoves();
                    }, 2000);
                } 
                else {
                    // show gameover popup
                    $QS(".gameover").classList.add("gameover-show");
                }
            }
            // if all animals are repeated in the correct order
            if(moveCounter === animalsArrLength) {
                // win if level 20 is reached
                if(playerCounter === 20) {
                    $QS(".win").classList.add("win-show");
                } else {
                    $ID("playercounter").innerText = ++playerCounter;
                    getRandomFeedback();
                    setTimeout(() => {
                        $ID("feedback").classList.add("hidden");
                    }, 1500);  
                    setTimeout(() => {
                        computerAddMove();
                    }, 2000);   
                } 
            }
        }
    }
    
// end document ready
});