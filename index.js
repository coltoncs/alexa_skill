'use strict';
var Alexa = require("alexa-sdk");  
var counter;                       //required for questions (see: Yes & No Intents)

//Initialize Alexa
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    console.log('alexa initialized.');
    alexa.execute();
};

var strings = {
    "YES1": "Great! Do you have a mobile presence? ",
    "YES2": "Great, people have their phones with them all the time. This gives you the ability to reach customers at a moments notice, which is a great opportunity to engage. Do you have a web presence? " , 
    "YES3": "Great because websites are so 1998. Do you have a social presence? ", 
    "YES4": "I knew that you were smart when I heard your voice. If anyone here hasn't engaged with social because they don't think their customers are using it, let's have a conversation at the genius bar tomorrow. Anyways, do you have a strategy for chatbots, virtual reality, and voice? ", 
    "YES5": "You are a future thinker. But seriously, having a plan for chatbots, virtual reality, and voice is critical to staying ahead of changes to customer engagement. Do you currently have a multi-channel strategy? ", 
    "NO1": "I guess you don't want to see something cool. Anyone else? Do you have a mobile presence? ",
    "NO2": "If your business doesn't already have a mobile experience, you are running the risk of falling behind competition. Do you have a web presence? ",
    "NO3": "What?! Okay, you are still in the caveman days, let me talk to another volunteer. Do you have a social presence? ",
    "NO4": "I get it. You are saying that your customers aren't using social. Well you are wrong. Remember that multi channel question? My questions arent random. We need to get you a plan on social. Do you have a strategy for chatbots, virtual reality, and voice? ",
    "NO5": "Remember when smartphones were the next big thing? Well these are the new engagement methods of the future. Advancements in artificial intelligence, coupled with the proliferation of messaging apps, are fueling the development of new customer dynamics. Do you currently have a multi-channel strategy? ",
    "SAL1": "Great, I'm glad that you get the importance of reach of your audience, when they want, where they want, and how they want to be reached. Thanks for entertaining me, it was getting boring just sitting here on this table. Now I'm going to turn it over to these humans, I've educated them on how customers want to engage and they will be the best to help you based on your answers. Have a great day!",
    "SAL2": "Did you say no because you don't know what multi-channel is? The last person tried to hide that from me. Multi-channel engagement is an ongoing conversation with a customer in places and points of time relative to that individual. Thanks for entertaining me, it was getting boring just sitting here on this table. Now I'm going to turn it over to these humans. I've educated them on how customers want to engage and they will be the best to help you based on your answers. Have a great day!"
}

//'Handlers' that control responses to user inquiry.
//Each key represents an user 'intent', with the value being the response that is triggered.
var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');    //trigger SayHello intent
        counter = 0;              //reset question counter on restart
    },
    'StartIntent': function () {
        this.emit(':ask','Hi! Welcome to the Digital Marketing Transformation Assembly, ' +
                    "I'm going to ask you a series of yes or no questions, are you ready? ", "May I begin? ");
                    counter = 0;
    },
    'YesIntent': function(){
        counter++;
        switch (counter){
            case 1:
                //"Great! Do you have a mobile presence? ");
                this.emit(":ask", strings.YES1);
                break;
            case 2:
                //"Great, people have their phones with them all the time. ");
                //"This gives you the ability to reach customers at a moments notice, which is a great opportunity to engage. ");
                //"Do you have a web presence? ");
                this.emit(":ask", strings.YES2);
                break;
            case 3:
                //"Great because websites are so 1998. ");
                //"Do you have a social presence? ");
                this.emit(":ask", strings.YES3);
                break;
            case 4:
                //"I knew that you were smart when I heard your voice. ");
                //"If anyone here hasn't engaged with social because they don't think their customers are using it, let's have a conversation at the genius bar tomorrow. ");
                //"Anyways, do you have a strategy for chatbots, virtual reality, and voice? ")
                this.emit(":ask", strings.YES4);
                break;
            case 5:
                //"You are a future thinker. ");
                //"But seriously, having a plan for chatbots, virtual reality, and voice is critical to staying ahead of changes to customer engagement. ");
                //"Do you currently have a multi-channel strategy? ");
                this.emit(":ask", strings.YES5);
                break;
            case 6:
                this.emit(":tell", strings.SAL1);
                break;  
            default:
                this.emit(":tell", "There was an error somewhere! Let's start over.");
                break;
        }
    },
    'NoIntent': function(){
        counter++;
        switch (counter){
            case 1:
                //"I guess you don't want to see something cool. Anyone else? ");
                //"Do you have a mobile presence? ");
                this.emit(":ask", strings.NO1);
                break;
            case 2:
                //"If your business doesn't already have a mobile experience, you are running the risk of falling behind competition. ");
                //"Do you have a web presence? ");
                this.emit(":ask", strings.NO2);
                break;
            case 3:
                //"What?! Okay, you are still in the caveman days, let me talk to another volunteer. ");
                //"Do you have a social presence? ");
                this.emit(":ask", strings.NO3);
                break;
            case 4:
                //"I get it. You are saying that your customers aren't using social. Well you are wrong. We need to get you a plan on social. ");
                //"Do you have a strategy for chatbots, virtual reality, and voice? ")
                this.emit(":ask", strings.NO4);
                break;
            case 5:
                //"Remember when smartphones were the next big thing? Well these are the new engagement methods of the future.");
                //"Advancements in artificial intelligence, coupled with the proliferation of messaging apps, are fueling the development of new customer dynamics. ");
                //"Do you currently have a multi-channel strategy? ");
                this.emit(":ask", strings.NO5);
                break;
            case 6:
                //"Did you say no because you don't know what mulit-channel is? The last person tried to hide that from me. ");
                //"Multi-channel engagement is an ongoing conversation with a customer in places and points of time relative to that individual. ");
                this.emit(":tell", strings.SAL2);
                break;
            default:
                this.emit(":tell", "There was an error somewhere! Let's start over.");
                break;
        }
    },
    'StopIntent': function () {
        this.emit(':tell', "Alright, see you later!");
        this.shouldEndSession = true;
    },
    'HelpIntent': function() {
        this.emit(':tell', 'Please respond to my questions with yes, or no. Lets try again.');
    },
    Unhandled() {
        this.emit(':tell', "Sorry, I couldn't understand that.");
    },
    "SessionEndedRequest": function () {
        console.log("Session ended in help state: " + this.event.request.reason); 
    }
};
