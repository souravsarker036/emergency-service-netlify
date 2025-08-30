const Heart=document.getElementById("heart");
const Credit = document.getElementById("credit");
const History = document.getElementById("history");
const Copy = document.getElementById("copy");
const getCurrentTime = () => {
  return new Date(Date.now()).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
}

let count = 0;
const heartCount =()=>{
    count++;
    console.log(count);
    Heart.innerHTML=count;
}

let credit = 100;
let profile = "";
let number = "";
const HistoryList = [];

const callAlert = (no) => {
    if(no==1){
        profile="National Emergency Number";
        number = 999;
        if(credit>=20){
            alert(`Calling ${profile} ${number}... `);

            credit=credit-20;
            Credit.innerHTML=credit;
            HistoryList.push({serviceName:profile, number:number, time:getCurrentTime()});
            showHistory();
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

            HistoryList.push({serviceName:profile, number:number, time:getCurrentTime()});
            showHistory();
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

            HistoryList.push({serviceName:profile, number:number, time:getCurrentTime()});
            showHistory();
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

            HistoryList.push({serviceName:profile, number:number, time:getCurrentTime()});
            showHistory();
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

            HistoryList.push({serviceName:profile, number:number, time:getCurrentTime()});
            showHistory();
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

            HistoryList.push({serviceName:profile, number:number, time:getCurrentTime()});
            showHistory();
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

            HistoryList.push({serviceName:profile, number:number, time:getCurrentTime()});
            showHistory();
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

            HistoryList.push({serviceName:profile, number:number, time:getCurrentTime()});
            showHistory();
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

            HistoryList.push({serviceName:profile, number:number, time:getCurrentTime()});
            showHistory();
        } else{
            alert("You don't have sufficient coin...");
        }
    }
} 


const showHistory = () => {
    let historyDiv = document.getElementById('history');
    if (!HistoryList || HistoryList.length === 0) {
        return;
    }
    let item = HistoryList[HistoryList.length - 1];

    let itemDiv = document.createElement("div");
    itemDiv.className = "flex justify-between items-center bg-[#F5FFF6] rounded p-2 my-2";

    itemDiv.innerHTML = `
        <div>
            <h2>${item.serviceName}</h2>
            <span>${item.number}</span>
        </div>
        <div>${item.time}</div>
    `;
    historyDiv.appendChild(itemDiv);
};

const clearHistory = () =>{
    let historyDiv = document.getElementById('history');
    historyDiv.innerHTML = "";

}


let copyCount = 0;
const copyToClipboard = (v) => {
    if(v===1){
        number=999;
        navigator.clipboard.writeText(number).then(() => {
    console.log("Copied: " + number);
    alert(`Copied Number ${number}`)
    copyCount++;
    Copy.innerHTML=copyCount;
  });
}
    if(v===2){
        number=100;
        navigator.clipboard.writeText(number).then(() => {
    console.log("Copied: " + number);
    alert(`Copied Number ${number}`)
    copyCount++;
    Copy.innerHTML=copyCount;
  });
}
    if(v===3){
        number=199;
        navigator.clipboard.writeText(number).then(() => {
    console.log("Copied: " + number);
    alert(`Copied Number ${number}`)
    copyCount++;
    Copy.innerHTML=copyCount;
  });
}
    if(v===4){
        number=1994-999999;
        navigator.clipboard.writeText(number).then(() => {
    console.log("Copied: " + number);
   alert(`Copied Number ${number}`)
    copyCount++;
    Copy.innerHTML=copyCount;
  });
}
    if(v===5){
        number=109;
        navigator.clipboard.writeText(number).then(() => {
    console.log("Copied: " + number);
    alert(`Copied Number ${number}`)
    copyCount++;
    Copy.innerHTML=copyCount;
  });
}
    if(v===6){
        number=106;
        navigator.clipboard.writeText(number).then(() => {
    console.log("Copied: " + number);
    alert(`Copied Number ${number}`)
    copyCount++;
    Copy.innerHTML=copyCount;
  });
}
    if(v===7){
        number=16216;
        navigator.clipboard.writeText(number).then(() => {
    console.log("Copied: " + number);
    alert(`Copied Number ${number}`)
    copyCount++;
    Copy.innerHTML=copyCount;
  });
}
    if(v===8){
        number=16445;
        navigator.clipboard.writeText(number).then(() => {
    console.log("Copied: " + number);
    alert(`Copied Number ${number}`)
    copyCount++;
    Copy.innerHTML=copyCount;
  });
}
    if(v===9){
        number=163;
        navigator.clipboard.writeText(number).then(() => {
    console.log("Copied: " + number);
    alert(`Copied Number ${number}`)
    copyCount++;
    Copy.innerHTML=copyCount;
  });
}
}