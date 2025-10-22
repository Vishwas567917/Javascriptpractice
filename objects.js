// singleton


// object literal

const mysym = Symbol("mySymbol")
const objects = {
    // add your objects here
    player: {
        name: "Player",
        health: 100,
        position: { x: 0, y: 0 },
        // mysym: "mysym",
        [mysym]: "This is a symbol property",
        inventory: []
    },
    
    enemy: {
        name: "Enemy",
        health: 50,
        position: { x: 10, y: 10 }
    },
    
    item: {
        name: "Health Potion",
        effect: "Restores 20 health",
        position: { x: 5, y: 5 }
    }
}

// console.log(objects["player"])


// objects.enemy = "New Enemy"
// Object .freeze(objects)

objects.greeting = function(){
    console.log("Hello, World!")
}

console.log(objects.greeting());
