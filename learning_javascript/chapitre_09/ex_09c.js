(
    function () {
        var i = 0
        var demo = function (){
            console.log(i++)
        }
        
        //window.setInterval(demo,1000)
        window.setTimeout(demo,1000)
    }


)()