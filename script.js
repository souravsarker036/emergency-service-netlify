const Heart=document.getElementById("heart");
const Credit = document.getElementById("credit");
let count = 0;
const heartCount =()=>{
    count++;
    console.log(count);
    Heart.innerHTML=count;
}

let credit = 100;

let profile = "";
let number = "";

const callAlert = (no) => {
    if(no==1){
        profile="National Emergency Number";
        number = 999;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
        } else{
            alert("You don't have sufficient coin...");
        }
    }
    if(no==2){
        profile="Emergency Police Service";
        number = 100;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
        } else{
            alert("You don't have sufficient coin...");
        }
    }
    if(no==3){
        profile="Emergency Fire & Rescue";
        number = 199;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
        } else{
            alert("You don't have sufficient coin...");
        }
    }
    if(no==4){
        profile="Emergency Ambulance Service";
        number = 1994-999999;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
        } else{
            alert("You don't have sufficient coin...");
        }
    }
    if(no==5){
        profile="Emergency Women & Child Helpline";
        number = 109;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
        } else{
            alert("You don't have sufficient coin...");
        }
    }
    if(no==6){
        profile="Anti-Corruption Helpline";
        number = 106;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
        } else{
            alert("You don't have sufficient coin...");
        }
    }
    if(no==7){
        profile="Electricity Helpline";
        number = 16216;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
        } else{
            alert("You don't have sufficient coin...");
        }
    }
    if(no==8){
        profile="Brac Helpline";
        number = 16445;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
        } else{
            alert("You don't have sufficient coin...");
        }
    }
    if(no==9){
        profile="Bangladesh Railway Helpline";
        number = 163;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
        } else{
            alert("You don't have sufficient coin...");
        }
    }
} 