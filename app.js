//DOM Manipulation

//event listeners

//element to which we want to add the event to
//element.addEventListener("click",function,true/false)
//by default its false so not discussing now

const buttonTwo=document.querySelector('.btn-2')
function alertBtn(){
    alert('I also Love javascript');
};

buttonTwo.addEventListener("click",alertBtn);

// Mouse over

const newBackgroundColor=document.querySelector(".box-3");
function changeBgColor(){

    newBackgroundColor.style.backgroundColor="blue";

}
newBackgroundColor.addEventListener("mouseover",changeBgColor);

//reveal event ,,so that the constent is revealed  
//when we click on it

const revealBtn=document.querySelector(".reveal-btn");

//start from here
const hiddenContent=document.querySelector(".hidden-content");

function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
       hiddenContent.classList.remove('reveal-btn');        
    }
    else{
       hiddenContent.classList.add('reveal-btn'); 
    }
}
revealBtn.addEventListener("click", revealContent);
