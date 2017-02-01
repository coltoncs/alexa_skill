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

var salutations = function() {
    this.emit(":tell", "Thanks for entertaining me, it was getting boring just sitting here on this table. ");
    this.emit(":tell", "Now I'm going to turn it over to these humans. ");
    this.emit(":tell", "I've educated them on how customers want to engage and they will be the best to help you based on your answers. ");
    this.emit(":tell", "Have a great day!");  
};

//'Handlers' that control responses to user inquiry.
//Each key represents an user 'intent', with the value being the response that is triggered.
var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');    //trigger SayHello intent
        counter = 0;              //reset question counter on restart
    },
    'StartIntent': function () {
        this.emit(':ask','Hi, Welcome to the 2017 Partner NEXT Event ' +
                    "I'm going to ask you a series of yes or no questions, are you ready? ", "May I begin? ");
    },
    'YesIntent': function(){
        counter++;
        switch (counter){
            case 1:
                this.emit(":tell", "Great! ");
                this.emit(":ask", "Do you have a mobile presence? ");
                break;
            case 2:
                this.emit(":tell", "Great, people have their phones with them all the time. ");
                this.emit(":tell", "This gives you the ability to reach customers at a moments notice, which is a great opportunity to engage. ");
                this.emit(":ask", "Do you have a web presence? ");
                break;
            case 3:
                this.emit(":tell", "Great because websites are so 1998. ");
                this.emit(":ask", "Do you have a social presence? ");
                break;
            case 4:
                this.emit(":tell", "I knew that you were smart when I heard your voice. ");
                this.emit(":tell", "If anyone here hasn't engaged with social because they don't think their customers are using it, let's have a conversation at the genius bar tomorrow. ");
                this.emit(":ask", "Anyways, do you have a strategy for chatbots, virtual reality, and voice? ")
                break;
            case 5:
                this.emit(":tell", "You are a future thinker. ");
                this.emit(":tell", "But seriously, having a plan for chatbots, virtual reality, and voice is critical to staying ahead of changes to customer engagement. ");
                this.emit(":ask", "Do you currently have a multi-channel strategy? ");
                break;
            case 6:
                this.emit(":tell", "Great, I'm glad that you get the importance of reach of your audience when they want, where they want, and how they want. "); 
                salutations();
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
                this.emit(":tell", "I guess you don't want to see something cool. Anyone else? ");
                this.emit(":ask", "Do you have a mobile presence? ");
                break;
            case 2:
                this.emit(":tell", "If your business doesn't already have a mobile experience, you are running the risk of falling behind competition. ");
                this.emit(":ask", "Do you have a web presence? ");
                break;
            case 3:
                this.emit(":tell", "What?! Okay, you are still in the caveman days, let me talk to another volunteer. ");
                this.emit(":ask", "Do you have a social presence? ");
                break;
            case 4:
                this.emit(":tell", "I get it. You are saying that your customers aren't using social. Well you are wrong. We need to get you a plan on social. ");
                this.emit(":ask", "Do you have a strategy for chatbots, virtual reality, and voice? ")
                break;
            case 5:
                this.emit(":tell", "Remember when smartphones were the next big thing? Well these are the new engagement methods of the future.");
                this.emit(":tell", "Advancements in artificial intelligence, coupled with the proliferation of messaging apps, are fueling the development of new customer dynamics. ");
                this.emit(":ask", "Do you currently have a multi-channel strategy? ");
                break;
            case 6:
                this.emit(":tell", "Did you say no because you don't know what mulit-channel is? The last person tried to hide that from me. ");
                this.emit(":tell", "Multi-channel engagement is an ongoing conversation with a customer in places and points of time relative to that individual. ");
                salutations();
                break;
            default:
                this.emit(":tell", "There was an error somewhere! Let's start over.");
                break;
        }
    },
    'StopIntent': function () {
        this.emit(':ask','Are you sure?');
    },
    Unhandled() {
        this.emit(':ask', "Sorry, I couldn't understand that.", "What was that?");
    },
    "SessionEndedRequest": function () {
        console.log("Session ended in help state: " + this.event.request.reason); 
    }
};
