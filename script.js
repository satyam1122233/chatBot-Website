// var msgInput = document.querySelector('.msgInput');
// var chatBox=document.querySelector('.chatBox');
// var sendBtn=document.querySelector('.button');











// const question = [ 
//     ["how are you", "how is life", "how are things"],       
//     ["hi", "hey", "hello", "hlo", "good afternoon"],     
//     ["what are you doing", "what is going on", "what is up"],      
//     ["how old are you"],				
//     ["who are you", "are you human", "are you bot", "are you human or bot"]
// ];
   
  
   
//   const answers = [
//      [
//       "Fine... how are you?",
//       "Pretty well, how are you?",
//       "Fantastic, how are you?"
//     ],                                                                                  	
//     [
//       "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
//     ],						
//     [
//       "Nothing much",
//       "About to go to sleep",
//       "Can you guess?",
//       "I don't know actually"
//     ],						
//     ["I am infinite"],					
//     ["I am just a bot", "I am a bot. What are you?"],	
    
    
   
//   ];
   
   
//   const alternatives = "Try again";




// sendBtn.addEventListener('click',function(){
//     startChat();
// })


// msgInput.addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     startChat();
//   }
// });


// function startChat(){
//     var input=msgInput.value;
//     msgInput.value="";
//     generateUserOutput(input);
//     generateChatBotOutput(input);
// }


// function generateUserOutput(text){

//     var userTxtDiv=document.createElement('div');
//     userTxtDiv.classList.add('userMsg');
//     userTxtDiv.innerHTML=text;
//     chatBox.appendChild(userTxtDiv);
// }


// function generateChatBotOutput(text){

//     var flag=false;
//     for(var i=0;i<question.length;i++){
       
//         for(var j=0;j<question[i].length;j++){
//        if(question[i][j].toLowerCase()===text.toLowerCase()){
//         var chatBotTxt=document.createElement('div');
//         chatBotTxt.classList.add('chatBotMsg');
//         chatBotTxt.innerHTML=answers[i][j];
//         chatBox.append(chatBotTxt);
//         flag=true;
//         break;
         
//        }
        
//         }
//     }

//     if(!flag){
//         var chatBotTxt=document.createElement('div');
//         chatBotTxt.classList.add('chatBotMsg');
//         chatBotTxt.innerHTML=alternatives;
//         chatBox.append(chatBotTxt);
         
//     }
    
// }






// var msgInput = document.querySelector('.msgInput');
// var chatBox = document.querySelector('.chatBox');
// var sendBtn = document.querySelector('.button');

// const API_KEY = "AIzaSyBXLpt02LLTIe4l40GzzWbAfDOIYFRRGDM"; 
// const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

// sendBtn.addEventListener('click', function() {
//     startChat();
// });

// msgInput.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         startChat();
//     }
// });

// async function startChat() {
//     var input = msgInput.value;
//     if (!input) return; 
//     msgInput.value = "";
//     generateUserOutput(input);
//     await generateChatBotOutput(input);
// }

// function generateUserOutput(text) {
//     var userTxtDiv = document.createElement('div');
//     userTxtDiv.classList.add('userMsg');
//     userTxtDiv.innerHTML = text;
//     chatBox.appendChild(userTxtDiv);
// }

// async function generateChatBotOutput(userMessage) {
//     var chatBotTxt = document.createElement('div');
//     chatBotTxt.classList.add('chatBotMsg');
//     chatBotTxt.innerHTML = "Thinking...";

//     chatBox.append(chatBotTxt);
//     chatBox.scrollTop = chatBox.scrollHeight; 

//     const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//             contents: [{ 
//                 role: "user", 
//                 parts: [{ text: userMessage }] 
//             }] 
//         }),
//     };

//     try {
//         const response = await fetch(API_URL, requestOptions);
//         const data = await response.json();
//         if (!response.ok) throw new Error(data.error.message);

//         const botReply = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
//         chatBotTxt.innerHTML = botReply; 
//     } catch (error) {
//         chatBotTxt.innerHTML = "Error: " + error.message; 
//     }

//     chatBox.scrollTop = chatBox.scrollHeight; 
// }





var msgInput = document.querySelector('.msgInput');
var chatBox = document.querySelector('.chatBox');
var sendBtn = document.querySelector('.button');
var leaveBtn = document.querySelector('.leaveBtn');
var chatContainer=document.querySelector('.chatContainer');
var hisHeading=document.querySelector('.hisHeading');
var historyContainer=document.querySelector('.historyContainer');
var historyMain= document.querySelector('.historyMain');
var prevDiv=null;
var chatlog=[];
var uMsg="";
var cMsg="";
var cTime="";
var uTime="";

var uId ="";
var oldChat="";
var oldChatFlag=false;

var sendMsgIntervelId =null;

const API_KEY = "AIzaSyBXLpt02LLTIe4l40GzzWbAfDOIYFRRGDM"; 
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;




//history area

var chatHere=document.createElement('div');
chatHere.classList.add('chatHere');

chatHere.innerHTML="Chat Here";
historyContainer.appendChild(chatHere);


//history area closed

function getCurrentTime() {
    const now = new Date().toLocaleTimeString();
    return now;
}


sendBtn.addEventListener('click', function() {
    startChat();
});

msgInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        startChat();
    }
});



 function startChat() {
    var input = msgInput.value.trim();
    if (!input){
        return; 
    } 
    msgInput.value = "";
    generateUserOutput(input);
    generateChatBotOutput(input);

    chatBox.scrollTop = chatBox.scrollHeight;

    
    


}

function generateUserOutput(text) {


    var userTxtDiv = document.createElement('div');
    userTxtDiv.classList.add('userMsg');

    var iconContainer = document.createElement('div');
    iconContainer.classList.add('iconMsg');
    iconContainer.innerHTML = '<i class="fa fa-check"></i>';
    userTxtDiv.append(iconContainer);
       
    var textMsg = document.createElement('div');
    textMsg.classList.add('textMsg');
    textMsg.innerHTML = text;
    userTxtDiv.appendChild(textMsg);


    var timeDiv = document.createElement('div');
    timeDiv.classList.add('timestamp');
    timeDiv.innerHTML = getCurrentTime();
   
    userTxtDiv.appendChild(timeDiv);

    chatBox.appendChild(userTxtDiv);


    
chatlog[chatlog.length] = {
    userTime: getCurrentTime(),
    userMessage: text,
    chatBotTime: null,

    chatBotMessage: null 
};


if(oldChatFlag){
    console.log("id is:"+uId);
    oldChat={
        oldID:uId,
        newUsrMsg:text,
        newUsrTime: getCurrentTime(),
        newChatBotMessage: null,
        newChatBotTime: null

        
    }

}


    
}


function generateChatBotOutput(userMessage){
    var chatBotTxt = document.createElement('div');

    chatBotTxt.classList.add('chatBotMsg');
            chatBotTxt.innerHTML='Ruk Bhai Abhi Btata Hu....';
            chatBox.append(chatBotTxt);

      $.ajax({

        url:API_URL,
        type:"POST",
        contentType:'application/json',
        data: JSON.stringify({
            contents:[
                {
                role:"user",
                parts:[{
                    text:userMessage
                }]

            }
            ]
            
        }),
        success:function(response){
            const botReply = response.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');

            chatBotTxt.innerHTML=botReply;

            
            var timeDiv = document.createElement('div');
            timeDiv.classList.add('timestamp');
            timeDiv.innerHTML = getCurrentTime();
           
            chatBotTxt.appendChild(timeDiv);


                                                           
            chatlog[chatlog.length-1].chatBotMessage=botReply;
            chatlog[chatlog.length-1].chatBotTime=getCurrentTime();

            if(oldChatFlag){
                console.log("id is:"+uId);
                oldChat.newChatBotMessage=botReply;
                oldChat.newChatBotTime=getCurrentTime();
                uMsg[uMsg.length]=oldChat.newUsrMsg;
                uTime[uTime.length]=oldChat.newUsrTime;
                cMsg[cMsg.length]=oldChat.newChatBotMessage;
                cTime[cTime.length]=oldChat.newChatBotTime;


                $.ajax({
                    url: 'updateChat.php',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        newId: uId,
                        newUsrMsg: uMsg, 
                        newUsrTime: uTime, 
                        newChatBotMessage: cMsg,
                        newChatBotTime: cTime
                    }),
                    success: function(response) {
                        console.log("Response from server:", response);
                        
                        chatlog = [];
                    },
                    error: function(xhr, status, error) {
                        console.error('Error fetching chatbot response:', xhr.status, status, error); 
                    }
                });
                

            }


            
        },
        error: function(xhr, status, error) {

                    chatBotTxt.innerHTML=error;
                    
        }

      });
}

leaveBtn.addEventListener('click',function(){

    chatContainer.innerHTML = 'Thank You';
    chatContainer.style.fontSize = '6rem';
    chatContainer.style.display = 'flex';
    chatContainer.style.alignItems = 'center';
    chatContainer.style.justifyContent = 'center';
    
    sendMsg();
    chatlog=[];

});


//send msg intervel
sendMsgIntervelId = setInterval(sendMsg,60000);



function sendMsg() {

    $.ajax({
        url: 'getMsg.php',  
        type: "GET",
        data: {


             chatlog: JSON.stringify(chatlog) 

            }, 
        success: function(response) {
            console.log(response);  

            chatlog = [];

        },
        error: function(xhr, status, error) {
            console.error('Error fetching chatbot response:', xhr.status, status, error); 
        }
    });

}





// var ID=
setInterval(fetchHistory,1000);

function fetchHistory(){
     $.ajax({
        url:'db_data.php',
        type: 'GET',
        success:function(response){

            var jsonArrayHistory = JSON.parse(response);

            showHistory(jsonArrayHistory);
            // clearInterval(ID)
        },
        error: function(xhr, status, error) {
            console.error('no History', xhr.status, status, error); 
        }
     })
}


function showHistory(historyArr){
    
    historyContainer.innerHTML='';

    

    var chatHere=document.createElement('div');
    chatHere.classList.add('chatHere');

    chatHere.innerHTML="New Chat Here";
    historyContainer.appendChild(chatHere);


    //chathere click
chatHere.addEventListener('click',function(){

    if(oldChat){
        oldChatFlag=false;

    }

    if(!sendMsgIntervelId){
     sendMsgIntervelId = setInterval(sendMsg,60000);

    }

    chatHere.style.boxShadow='0 0 10px black';

    if(prevDiv){
        prevDiv.style.boxShadow=null;
    }

    chatBox.innerHTML = '';

    msgInput.value = '';

    chatlog = [];


   });



    historyArr.reverse().forEach(e => {
                               

    var newDiv=document.createElement('div');
    newDiv.classList.add('hisContent');
    newDiv.innerHTML=e.id;
                                      
    historyContainer.appendChild(newDiv);



    newDiv.addEventListener('click',function(){

     oldChatFlag=true;

        if(sendMsgIntervelId){
            clearInterval(sendMsgIntervelId);
        }
        if(prevDiv){
            prevDiv.style.boxShadow=null;
            console.log('clclcick');
        }

        
        newDiv.style.boxShadow='0 0 6px red';
        chatHere.style.boxShadow='';
        
        prevDiv=newDiv;
         
        chatBox.innerHTML = '';   
        msgInput.value = '';


        
         uId = e.id;
         uMsg=e.userMsg.split("||");
         cMsg=e.botMsg.split("||");
         cTime=e.chatBotTime.split("||");
         uTime=e.time.split("||");



        for(var i=0;i<cMsg.length;i++){
 

            var userTxtDiv = document.createElement('div');
            userTxtDiv.classList.add('userMsg');
 
                                        
            //icon
            var iconContainer = document.createElement('div');
            iconContainer.classList.add('iconMsg');
            iconContainer.innerHTML = '<i class="fa fa-check"></i>';
            userTxtDiv.append(iconContainer);
               


            //usermsg
            var textMsg = document.createElement('div');
            textMsg.classList.add('textMsg');
            textMsg.innerHTML = uMsg[i];
            userTxtDiv.appendChild(textMsg);
        
        
            //userTIme
            var userTimeDiv = document.createElement('div');
            userTimeDiv.classList.add('timestamp');
            userTimeDiv.innerHTML = uTime[i];
            userTxtDiv.appendChild(userTimeDiv);
            chatBox.appendChild(userTxtDiv);
            


            //chatBot MSg
            var chatBotTxt = document.createElement('div');
            chatBotTxt.classList.add('chatBotMsg');
            chatBotTxt.innerHTML=cMsg[i];
            chatBox.append(chatBotTxt);
                                                
                                                                   
                                           

            
            //botTime
            var timeDiv = document.createElement('div');
            timeDiv.classList.add('timestamp');
            timeDiv.innerHTML = cTime[i];
            chatBotTxt.appendChild(timeDiv);



        }


        
        
       
    });




    });


}



hisHeading.addEventListener('click',function(){


    historyContainer.classList.toggle('toggle');
    historyMain.classList.toggle('toggle2');
    chatContainer.classList.toggle('toggle3');

     

});