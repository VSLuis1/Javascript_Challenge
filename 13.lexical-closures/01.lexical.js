// Lexical scoping
    function outer(){
        let username = "hitesh"
        console.log("OUTER", secret);
        function inner(){
            let secret = "my123"
            console.log("inner", username);
        }
        function innerTwo(){
            console.log("innerTwo", username);
            console.log(secret);
        }
        inner()
        innerTwo()

    }
    outer()
    console.log("TOO OUTER", username);

