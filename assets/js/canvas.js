const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particulasArray;

//Get posicion mouse

let mouse = {
    x: 80,
    y: 80,
    radio: (canvas.width/80) * (canvas.height/80)
}

window.addEventListener("mousemove", 
    function(evento){
        mouse.x = evento.x;
        mouse.y = evento.y
    }
);

// crear particulas
class Particula {
    constructor(x, y, direccionX, direccionY, size, color){
        this.x = x;
        this.y = y;
        this.direccionX = direccionX;
        this.direccionY = direccionY;
        this.size = size;
        this.color = color;
    }
    //metodo para crear particulas individuales
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill()
    }
    //metodo para chequear posicion de particula, posicion del mouse, mover la particula, dibujar la particula
    update(){
        //chequear si la particula esta dentro del canvas todavia
        if(this.x > canvas.width || this.x < 0){
            this.direccionX = -this.direccionX;
        }
        if(this.y > canvas.height || this.y < 0){
            this.direccionY = -this.direccionY;
        }
        //chequear si hay colision, posicion de mouse y de particula
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distancia = Math.sqrt(dx*dx + dy*dy);
        if(distancia < mouse.radio + this.size){
            if(mouse.x < this.x && this.x < canvas.width - this.size*10){
                this.x += 10;
            }
            if(mouse.x > this.x && this.x > this.size*10){
                this.x -= 10;
            }
            if(mouse.y < this.y && this.y < canvas.height - this.size*10){
                this.y += 10;
            }
            if(mouse.y > this.y && this.y > this.size*10){
                this.y -= 10;
            }
        }
        //mover particula
        this.x += this.direccionX;
        this.y += this.direccionY;
        //dibujar particula
        this.draw();
    }

}

 //crear Array de particulas
 function init() {
    particulasArray = [];
    let numeroDeParticulas = (canvas.width * canvas.height) / 9000;
    for(let i = 0; i < numeroDeParticulas; i++){
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size*2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerWidth - size*2) - (size * 2)) + size * 2);
        let direccionX = (Math.random() *5) - 2.5;
        let direccionY = (Math.random() *5) - 2.5;
        let color = '#B800D5';

        particulasArray.push(new Particula(x, y, direccionX, direccionY, size, color))
    }    
}

// Loop de animación
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    for(let i = 0; i < particulasArray.lenth; i++){
        particulasArray[i].update();
    }
}

init();
animate();
