class player {
    constructor(){

    }
    getCount() {
        var playerCountreff=database.ref('playerCount')
        playerCountreff.on("value",function(data){
            playerCount=data.val()
        })
    }  
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(name){
        var playerindex="player"+playerCount
        database.ref(playerindex).set({
            name:name
        })

    }
    }
