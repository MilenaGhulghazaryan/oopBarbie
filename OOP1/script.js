const background = document.querySelector('.background')
class Barbie {
    constructor(src) {
        let left = 0;
        const img = document.createElement('img')
        img.className = "imgBarbie"
        img.src = src
        background.append(img)
        this.moveRight = () => {
            left += 5
            img.style.left = left + 'px'
        }
        this.moveLeft = () => {
            left -= 5
            img.style.left = left + 'px'
        }
    }
}

const barbie = new Barbie('./image/pottery-barn-kidsc2ae-barbiec2ae-doll.webp')
class Dog {
    constructor(link) {
        let left = 0;
        const imgDog = document.createElement('img')
        imgDog.className = "imgDog"
        imgDog.src = link
        background.append(imgDog)
        this.Right = () => {
            left += 5
            imgDog.style.left = left + 'px'
        }
        this.Left = () => {
            left -= 5
            imgDog.style.left = left + 'px'
        }
    }
}

const dog = new Dog('./image/1683060497Chibi Cat with Yarn.png')

window.onkeydown = (e) => {
    if (e.code === "KeyD") {
        dog.Right()
    }
    if (e.code === "KeyA") {
        dog.Left()
    }
    if (e.code === "ArrowRight") {
        barbie.moveRight()
    }
    if (e.code === "ArrowLeft") {
        barbie.moveLeft()
    }
}

