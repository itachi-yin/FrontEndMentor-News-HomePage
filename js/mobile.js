console.log('hello');

// selectors 

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

const navBarMob = document.querySelector('.navBar-m');
const navBtnMob = document.querySelector('.nav-btn-m');



function hamburger(){

    navBtnMob.classList.toggle('opacity-0');

    

}
















