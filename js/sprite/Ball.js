class Ball{

    constructor(id){
        //va chercher le noeud lié à cet id
        this.node = document.querySelector("#"+id)
        //donne un 'x' et un 'y' de départ aléatoire
        this.node.style.top = Math.random()*40+"px";
        this.node.style.left = Math.random()*400+"px";

        //une vitesse constante
        this.speedY = 2;
        this.velocityY = 0.5; //acceleration ou gravité

        this.node.onmousemove = ()=>{
            //la vitesse devient négative, donc le ballon bouge vers le haut
            this.speedY = -10;
        }
    }

    //le sprite.tick() dans ball-drop.js
    tick(){
        //la vitesse sera augmente à chaque call avec la gravité
        this.speedY += this.velocityY;
        //offsetTop donne la position par rapport au parent
        let posY = this.node.offsetTop
        //incremente la position avec la vitesse
        posY += this.speedY;

        if(posY > 220){
            posY=220;
            //inverse la direction quand l'objet atteint un Y de 220
            //perd 1.5 de vitesse par bond
            this.speedY = -this.speedY/1.5;
        }
        //bouge notre objet vers le bas
        this.node.style.top = posY+"px";
    }

    
}