

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("swieta","swieta.png")
loadSprite("ludek","ludek.png")
loadSound("muzyka","cicha_noc.mp3")

add ([
    sprite("swieta"), 
    pos (0,0)
])

const ludek = add ([
    sprite("ludek"),
    pos (300,200)
])

//add ([play("muzyka")])

onKeyRelease("space", ()=> play("muzyka"))

onUpdate(()=>

{
    if(ludek.pos.x<500)
    ludek.pos.x +=1
})