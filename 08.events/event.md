Event Types: These are like the different types of parties or occasions your code can pay attention to. Here are a few examples:


// Listening for a click event
element.addEventListener("click", function(event) {
    // Code to run when the element is clicked
});

// Listening for a keydown event
document.addEventListener("keydown", function(event) {
    // Code to run when a key is pressed
});



#1  ------ timeStamp: This is like noting the time when something happens, just like you might look at the clock during a party to see when certain things happen.

element.addEventListener("click", function(event) {
    console.log(event.timeStamp); // Prints the time when the click happened
});


#2  ------ defaultPrevented: This is like checking if someone stopped a game or activity from happening at a party.

element.addEventListener("click", function(event) {
    if (event.defaultPrevented) {
        console.log("Default action prevented");
    } else {
        console.log("Default action allowed");
    }
});


#3  ------ target, toElement, srcElement, currentTarget: These are like identifying who or what the event is about at the party.

element.addEventListener("click", function(event) {
    console.log(event.target); // Element that was actually clicked
    console.log(event.currentTarget); // Element that the event listener is attached to
});


#4  ------ clientX, clientY, screenX, screenY: These are like figuring out where things are happening at the party.


element.addEventListener("mousemove", function(event) {
    console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
    console.log(`Mouse position on screen: X=${event.screenX}, Y=${event.screenY}`);
});


#5  ------ altKey, ctrlKey, shiftKey: These are like knowing if someone is holding a special item at the party, like a balloon or a snack.

document.addEventListener("keydown", function(event) {
    if (event.altKey && event.key === "a") {
        console.log("Alt + A was pressed");
    }
});


#6  ------ keyCode: This is like reading a secret code for a game being played at the party.

document.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
    console.log(`Key code: ${event.keyCode}`);
});