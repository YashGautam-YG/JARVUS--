const btn = document.querySelector('.talk')
const content = document.querySelector('.content')
var img= document.getElementById('image')



function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
    voice="alloy"
    text_speak.rate = 1;
    text_speak.volume = 20;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    if(message.includes('Good Morning')){
        speak("Good Morning Sir")
        
    }
    else if(message.includes('Good Afternoon')){
        speak("Good afternoon Sir")
    }
    else if(message.includes('Good Night')){
        speak("Good Night sir,Sweet Dreams")
    }

}

  
      

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();
recognition.start()

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

    
}
btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})
function takeCommand(message){

    if(message.includes('switch on jarvis')){
        img.src="3.gif"
        speak("switching on")

        
    }
    else if(message.includes('jarvis i am fed up of you')){
        speak("Sir, I am really sorry, I try my best ")
     
   
    }
    
    else if(message.includes('i am sorry jarvis')){
        speak("No problem Sir , always at your service")
     
   
    }
    else if(message.includes('switch on the music jarvis')){
        document.getElementById("song").play()
   
    }
    else if(message.includes('battery')){
        getBattery()
        battery="getBattery()"
        speak(getBattery())

    }
    else if(message.includes('switch off the music jarvis')){
        speak("Okay sir")
        document.getElementById("song").pause()
    }
    else if(message.includes('who are you')){
        speak("I am Jarvis, Yash's personal assistant")
    }
    else if(message.includes('good morning')){
        speak("Good Morning Sir")
        img.src="3.gif"
    }
    else if(message.includes('good afternoon')){
        speak("Good afternoon Sir")
        img.src="3.gif"
       
    }
    else if(message.includes('good night')){
        speak("Good Night sir,Sweet Dreams")
        img.src="black.webp"

    }
    else if(message.includes('hey') || message.includes('hello') || message.includes('Hello jarvis')){
        speak("Hello Yash Sir, How May I Help You?");
        img.src="3.jpg"
        recognition.start()
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes('How are you') || message.includes('how are you jarvis') || message.includes('Jarvis')){
        speak("I am fine Yash sir, How are you sir")
        recognition.start()
    }
    else if(message.includes('Thank you') || message.includes('i am fine')){
        speak("at your service, sir, how may i help you")
        recognition.start()
    }
    else if(message.includes('switch off jarvis') || message.includes('bye')){
        speak("Always at your service sir, signing off")
        img.src="black.jpeg"
    }

    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
    
    }
    
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('what is the time') || message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('https://www.google.com/search?q=calculator&rlz=1C5CHFA_enIN1036IN1036&oq=cal&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgwIAhAjGCcYgAQYigUyBggDEEUYPDIGCAQQRRhBMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTM0MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if(message.includes('play')){
        window.open(`https://www.youtube.com/results?search_query=${message}`);
        const finalText = message + " on youtube";
        speak(finalText);
    }
    else if(message.includes('open whitehat juniour')){
        window.open(`https://code.whitehatjr.com/s/dashboard`);
        speak("Opening, Whitehat Juniour");
    }

    else if(message.includes('i am tired')){
        speak("Please relax sir");
    }
    else if(message.includes('games')){
        window.open(`https://poki.com`);
    }
    else if(message.includes('i want to start a new project')){
        speak("Public file initialized")
        window.open(`https://github.com/new`)
    }
    else if(message.includes('open github')){
        speak("Opening Github")
        window.open(`https://github.com`)
    }

    else if(message.includes('weather')){
        speak("It seems sunny today sir")

    }
    else if(message.includes('should i play cricket')){
        speak("You should sir")
        
    }
    else if(message.includes('Whats the ipl score')){
        window.open(`https://www.google.com/search?q=ipl+score&rlz=1C5CHFA_enIN1036IN1036&oq=ipl+score&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIICAEQRRgnGDsyDQgCEAAYgwEYsQMYgAQyDQgDEAAYgwEYsQMYgAQyDQgEEAAYgwEYsQMYgAQyDQgFEAAYgwEYsQMYgAQyDQgGEAAYgwEYsQMYgAQyDQgHEAAYgwEYsQMYgAQyDQgIEAAYgwEYsQMYgAQyEAgJEAAYgwEYsQMYgAQYigXSAQgyNjc3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8`)
    }
    else if(message.includes('open cloud nine')){
        window.open(`https://www.gurukultheschool.com/admin/app_message_board`)
    }
    else if(message.includes('Shut down Jarvis')){
        window.close(`https://google.com/`);
        speak("Yes Sir");
    }
    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
    
}





