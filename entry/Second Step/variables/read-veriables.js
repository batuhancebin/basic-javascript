        //read your veriables
        //1. way with alert
        var a = prompt("1. Way: What is your name?");
        alert("1. Way: Hello " + a);
        //2. way with document.write
        var b = prompt("2. Way: What is your name?");
        document.write("2. Way: Hello " + b);
        //3. way with console.log
        var c = prompt("3. Way: What is your name?");
        console.log("3. Way: Hello " + c);
        //4. way with innerHTML
        var d = prompt("4. Way: What is your name?");
        document.getElementById("title").innerHTML = "4. Way: Hello " + d;