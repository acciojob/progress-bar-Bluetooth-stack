const circle = document.querySelectorAll('.circle');
const indigator = document.querySelector('.indigator');
const buttons = document.querySelectorAll('button');

// console.log(buttons);
// const next = document.getElementById('next');
// const prev = document.getElementById('prev');

let current = 1;

const updateStep = (e) => {
    if(e.target.id==="next"){
        current = ++current;
    }
    else{
       current = --current;
    }
    
    circle.forEach((circle, indx) => {
        if(indx<current){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    });

    indigator.style.width = `${(current-1)/(circle.length-1)*100}%`

    if(current===circle.length){
        buttons[1].disabled = true;
    }
    else if(current===1){
        buttons[0].disabled = true;
    }
    else{
        buttons.forEach((button)=>{
            button.disabled=false;
        });
    }

}

buttons.forEach((button)=>{
    button.addEventListener("click", updateStep);
});
