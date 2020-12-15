class form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html('car racing')
        title.position(132,0)
        var input=createInput('name')
        input.position(120,160)
        var button =createButton('play')
       button.position(250,200) 
       var greeting=createElement('h3')
       button.mousePressed(function(){
           input.hide()
           button.hide()
           var name=input.value()
           playerCount++
           player.update(name)
           player.updateCount(playerCount)
           greeting.html('hello '+name)
           greeting.position(130,160)
       })
    }
}