class Carousel {
    constructor(element){
        this.element = element;
        this.imgs = this.element.querySelectorAll('img');
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.index = 0;
        this.imgs[0].style.display = 'block'
        // console.log()
        // 
        this.leftButton.addEventListener('click', () => this.backward());
        this.rightButton.addEventListener('click', () => this.forward());
        // console.log(this.imgData);
    }

    forward(){
        this.imgs[this.index].style.display = 'none'
        if(this.index === this.imgs.length - 1){
            this.index = 0
        } else {
            this.index = this.index + 1
        }
        this.imgs[this.index].style.display = 'block'
        
    }
    
    backward(){
        this.imgs[this.index].style.display = 'none'
        if(this.index === 0){
            this.index = this.imgs.length-1
        } else {
            this.index = this.index - 1
        }
        this.imgs[this.index].style.display = 'block'

    }
}

let carousel = document.querySelector('.carousel');
// console.log(carousel);

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/