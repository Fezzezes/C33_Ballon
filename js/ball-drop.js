
//liste de tous les sprites sur la page
let spriteList = [];


//quand la fenetre est chargé
window.addEventListener("load", () => {
    //crée et ajoute les objets Ball
    //Les variables déclaré dans script sont globale (même si elle on été déclaré dans un autre script)
    //La const BALL_COUNT peut ainsi être utilisé ici
    for(let i = 0; i < BALL_COUNT; i++){
        spriteList.push(new Ball("ball_"+i));
    }
    //start le tick loop
    tick();
})

let lastTime = new Date().getTime();
const tick = () => {

for(let i = 0; i< spriteList.length; i++){

    const sprite = spriteList[i];
    //Pour s'assurer que chaque écran possede la même vitesse d'animation
    //calcule le delta (le lapse de temps entre chaque call)
    // let currentTime = new Date().getTime();
    // let delta = currentTime - lastTime;
    // sprite.tick(delta);
    
    //utilise le tick propre de chaque objet pour le bouger à son rythme
    sprite.tick();
}

    //se recall lui-même au 33ms
    //******************** set-Timeout est désuet... *************
    //setTimeout(tick, 33);

    //on utilise maintenant  'window.requestAnimationFrame()' pour basé l'animation sur le refresh rate de l'écran au lieu de le hardcoder
    window.requestAnimationFrame(tick);
}