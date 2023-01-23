import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("background","pocztowka.png")
loadSprite("gwiazda","gwiazdeczka.png")
loadSound("muzyka","DO_SZOPY_HEJ_PASTEZE.mp3")


add([
    sprite("background"),
    pos(0, 0),
]);

const gwiazda = add([
    sprite("gwiazda"),
    pos(50, 10),
]);

onUpdate(()=>{
        gwiazda.moveTo(gwiazda.pos.x+4,gwiazda.pos.y)

        if(gwiazda.pos.x>630)

        {
            gwiazda.pos.x=0
            gwiazda.pos.y=50

        }

})

onKeyPress("space", ()=>{
    play("muzyka")
})

    



