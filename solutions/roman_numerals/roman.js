    var roman = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };
    
    var num = 526;
    var str = ''; //output
    for(var letter in roman){
        var dummy = Math.floor(num/roman[letter])
        if(dummy > 0){
            for(var i = 1; i <= dummy; i++){
                str += letter;
                num -= roman[letter];
            };
        };
    };
console.log(str);