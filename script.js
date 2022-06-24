







//----- Siderbar work -----

//Call dark area and sidebar
function callSideBar(element){
    let darkArea = document.querySelector(".darkArea")
    let sidebar = darkArea.querySelector(".sideBar")
    
    sidebar.classList.add("sideBarCall")
    darkArea.classList.add("darkAreaCall")
}

//Close dark area and sidebar
function closeSideBar(element){
    let darkArea = document.querySelector(".darkArea")
    let sidebar = darkArea.querySelector(".sideBar")

    darkArea.classList.remove("darkAreaCall")
    sidebar.classList.remove("sideBarCall")
}

//Select contats for message

function checkContat (element){
    let checked = element.querySelector('.msgType .notcheck') //apenas os not check dentro do msgtype
    let active = document.querySelector('.msgType .check')
    if (active !== null){
        active.classList.remove('check')
    }
    checked.classList.add('check')
}

function checkVisibility (element){
    let checked = element.querySelector('.visibilityType .notcheck') //apenas os not check dentro do visibilityType
    let active = document.querySelector('.visibilityType .check')
    if (active !== null){
        active.classList.remove('check')
    }
    checked.classList.add('check')
}

//padlock

let secondLock = null;
function padlockOpen(element){
    let lock = element.querySelector('.visibilityType .padlock')
    let name = lock.getAttribute('name')
    if(secondLock !== null){
        if(name === "lock-closed"){
            lock.setAttribute("name", "lock-open")
            secondLock.setAttribute("name", "lock-closed")
            console.log("funcionou! open")
        }
        else{
            lock.setAttribute("name", "lock-closed")
            secondLock.setAttribute("name", "lock-open")
            console.log("funcionou! close")
        }
    }
    secondLock = lock;
}