class Carousel {
    constructor(element){
        this.element = element;
        this.imgs = this.element.querySelectorAll('img');
        this.btns = this.element.querySelectorAll('div');

        // console.log(this.element);
        // console.log(this.imgs);
        // console.log(this.btns);

        this.imgCon = new Images(this.imgs);
        this.btnCon = new Button(this.btns);
        
    }

    // Methods
}

class Images {
    constructor(images){

        this.images = images;

        // console.log(this.images);
        this.images.forEach((image, index = 0) => {
            if(image.dataset.slide === 0){
                image.style.display = 'block';
            }
        })
    }
    // Methods
}

class Button {
    constructor(buttons){
        this.buttons = buttons;
        // console.log(this.buttons);
    }
    // Methods
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