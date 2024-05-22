const blocksDiv = document.querySelector('.blocks')
const blocks = document.querySelectorAll('.block')

var running = -1


const whileDown = (el) => {
    console.log(el)
        el.style.transform = 'translateX(10px)'
}

const run = (el) => { 
    if(running = -1){
        running = setInterval(whileDown(el), 100)
    }
}

const whileUp = () => {
    if(running!=-1) {  //Only stop if exists
        clearInterval(running);
        running=-1;
      }
}

Array.from(blocks).forEach(b => {
    b.addEventListener('mousedown', () => run(b))

    b.addEventListener('mouseup', () => whileUp())
    b.addEventListener('mouseout', () => whileUp())
})