document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height= "350px";

});

    document.getElementById("blueBtn").addEventListener("click", function(){

        document.getElementById("box").style.backgroundColor= "Blue";

});

    document.getElementById("fadeBtn").addEventListener("click", function(){

        document.getElementById("box").style.transition= "opacity 0.5s linera 0s";
        document.getElementById("box").style.opacity= 0;

});

    document.getElementById("resetBtn").addEventListener("click", function(){

        document.getElementById("box").style.height= "150px";
        document.getElementById("box").style.backgroundColor= "Orange";
        document.getElementById("box").style.opacity= 100;

});



