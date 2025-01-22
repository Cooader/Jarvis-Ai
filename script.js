const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
        
    } else {
        speak("Good Evening sir...");
    }
}


/*window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});*/
window.addEventListener('load', () => {
    if (!sessionStorage.getItem('jarvisInitialized')) {
        speak("Initializing GYAAN BOT...");
        wishMe();
        sessionStorage.setItem('GYANN BOT Initialized', 'true');
    }
});



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://www.youtube.com/", "_blank");
        speak("Opening Youtube...");
    }else if (message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com/", "_blank");
        speak("Opening whatsapp...");
    }else if (message.includes("chat with mom")) {
        window.open("https://wa.me/916232899904", "_blank"); 
        speak("Opening chat with Mom...");
    }else if (message.includes("chat with aditya")) {
        window.open("https://wa.me/918839076135", "_blank"); 
        speak("Opening chat with aditya...");
    }else if (message.includes("chat with satyapal")) {
        window.open("https://wa.me/919302781206", "_blank"); 
        speak("Opening chat with satyapal...");
    }
    else if (message.includes("open github")) {
        window.open("https://github.com/Anshraj11111", "_blank");
        speak("Opening github...");
    } else if (message.includes("open my channel")) {
        window.open("https://youtube.com/@keystrokescoffee?si=q1ovNa5UyW87GknN", "_blank");
        speak("Opening my channel...");
    } else if (message.includes("open my channel")) {
        window.open("UCuW67DFguemJ2jc3ZkIKlCg", "_blank");
        speak("Opening my channel...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    }else if (message.includes("go back")) {
        window.location.href.includes("https://web.whatsapp.com/")
        window.location.href = "indexx.html"; // Replace with the actual URL of your bot's main page
        speak("Going back to the main page...");
    }
     else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}






