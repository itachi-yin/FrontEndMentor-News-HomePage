console.log('hello');

// selectors 
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const navBarPc = document.querySelector('.navBar');



console.log(navBarPc);

// Media Queries

const width1 = window.matchMedia('(max-width: 900px)');


const widthChange = function(width) {

    if(width.matches){
        // navBarPc.classList.add('opacity-0');
        // Remove The Navbar If It Reaches The Width Below 900px
        navBarPc.remove();
    }
    else{
        // navBarPc.classList.remove('opacity-0');
        // ReAdding The Navbar If The Width Is Above 900px
        header.appendChild(navBarPc);
    }
    
}



widthChange(width1); // We Have To Run The Function For The First Time!

width1.addListener(widthChange); // It Will Work On State Changes, It Will Run After We Are Gonna Change Our Width Everytime!


// Hamburger Menu

const bars = document.querySelectorAll('.bar');
const hamburgerBar = document.getElementById('hamburgerBar');
const navBarMob = document.querySelector('.navBar-m');
const navBtnMob = document.querySelector('.nav-btn-m');



function hamburger(){

    navBtnMob.classList.toggle('opacity-0');
    hamburgerBar.classList.toggle('icon');
    

}

// When Width Is Above 901px

const width2 = window.matchMedia('(min-width: 901px)');

const widthChange2 = function(width) {

    if(width.matches){
        navBarMob.remove();
        console.log(`i have to fucking remove it now`);

    }
    else{
        console.log(`let it be there!`);
    }
    
}


widthChange2(width2);

width2.addListener(widthChange2);














