// Immediately Invoked Function Expression (IIFE) example


(function chai(){
    console.log("This function runs immediately upon definition!");
})();

// chai()

( (name) =>{
    console.log(`This arrow function also runs immediately! ${name}`);
}) ('Parth');

