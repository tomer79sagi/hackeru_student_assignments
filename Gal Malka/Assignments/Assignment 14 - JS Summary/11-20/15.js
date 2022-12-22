let cube = document.getElementById('cube')
let colorList = ['#FF0000','#FF1493','#FF4500','#FFFF00','#663399','#32CD32']
function changeColor(){
    setTimeout(function(){
    let random = Math.floor(Math.random() * colorList.length)
    cube.style.backgroundColor = colorList[random]
    changeColor()
    },1000)
    
}

changeColor()