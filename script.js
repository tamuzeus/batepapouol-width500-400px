// ---- variaveis ----
let nome;
let objectname;

//---- Login ----

function login (){
    nome = document.querySelector(".textLogin").value
    objectname = {
        name: nome
      }
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", objectname)
    if(nome === ""){
        alert("Digite um nome para entrar na sala!")
    }  
    else{
        promise.catch(loginNegate)
        promise.then(loginOk)
    }
}

function loginOk(){
    console.log('Logou')
    const loginArea = document.querySelector(".LoginArea")
    loginArea.classList.remove("backLogin")
    setInterval(connectStatus,4000)
    setInterval(getMessages,4000)
}

function loginNegate(){
    console.log('Já tem alguém na sala com este nome, tente outro!')
}

function connectStatus (){
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/status", objectname)
    
}

//---- Recive message ----

function getMessages(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    promise.catch(erroMessage)
    promise.then(viewMessage)
}

function viewMessage(element){
    let msgsArea = document.querySelector(".msgsArea")

    for(let i = 0 ; i < element.data.length ; i++){

        switch(element.data[i].type){
            case "status":
                msgsArea.innerHTML += `
                <div class="enterorleftroom">
                    <div class="msg">
                        <p><span class="hours"> ${element.data[i].time} </span> <span class="name"> ${element.data[i].from} </span> ${element.data[i].text}</p> 
                    </div>
                </div>
                `
                break;

            case "message":
                msgsArea.innerHTML += `
                <div class="comummsg">
                    <div class="msg">
                        <p><span class="hours"> ${element.data[i].time} </span> <span class="name"> ${element.data[i].from} </span> para <span class="all"> ${element.data[i].to} </span>: ${element.data[i].text}</p>
                    </div>
                </div>
                `
                break;

            case nome === element.data[i], element.data.from && "private_message":
                msgsArea.innerHTML += `
                <div class="privatemsg">
                    <div class="msg">
                        <p><span class="hours"> ${element.data[i].time} </span> <span class="name"> ${element.data[i].from} </span> reservadamente para <span class="namePrivate"> ${element.data[i].to} </span>: ${element.data[i].text}</p>
                    </div>
                </div>
                `
                break;
        }
    }

    let msg = document.querySelectorAll(".msg")
    last = msg[msg.length-1]
    last.scrollIntoView()
}

function erroMessage(){
    console.log('Erro em receber a mensagem')
    window.location.reload()
}

///----- Send message -----



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