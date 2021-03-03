const box1 = document.querySelector("#box-1");
const box2 = document.querySelector("#box-2");
const box3 = document.querySelector("#box-3");
const box = document.querySelectorAll(".box");

document.addEventListener('click', function(e) {
    removeActive();
    e.target.classList.add("active");
    if(box1.classList.contains("active")){
        box2.classList.add('left');
        box2.classList.remove('middle');
    }
    if(box3.classList.contains("active")){
        box2.classList.add('right');
        box2.classList.remove('middle');
    }
})

function removeActive(){
    box.forEach( (boxes) => {
        boxes.classList.remove("active");
        console.log(boxes);
    })
} 
