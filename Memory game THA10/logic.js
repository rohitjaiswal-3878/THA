const cards = document.querySelectorAll(".memory-card");
let hasflippedcard = false;
let lockboard=false;
let firstcard, secondcard;
function flipcard() {
    if(lockboard) return;
    if(this===firstcard) return;
    this.classList.toggle('flip');
    if (!hasflippedcard) {
        //first click
        hasflippedcard = true;
        firstcard = this;
        return;
        // console.log({hasflippedcard,firstcard});
    }
    //second click
    secondcard = this;
    checkformatch();



}
function checkformatch() {
    //do cards match
    if (firstcard.dataset.framework === secondcard.dataset.framework) {
        //match
        disablecards();

    }
    // console.log("funciton is executed");
    else {
        unflipcards();

    }


}
function disablecards() {
    firstcard.removeEventListener('click', flipcard);
    secondcard.removeEventListener('click', flipcard);
    resetboard();
}
function unflipcards() {
    lockboard=true;
    setTimeout(() => {
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');
        resetboard();
    }, 500);
}
function resetboard(){
    [hasflippedcard,lockboard]=[false,false];
    [firstcard,secondcard]=[null,null];

}
(function shuffle(){
    cards.forEach(card => {
        let randompos=Math.floor(Math.random()*12);
        card.style.order=randompos;
    })
})();
cards.forEach(card => card.addEventListener('click', flipcard));setTimeout(() => {
    firstcard.classList.remove('flip');
    secondcard.classList.remove('flip');
}, 510);