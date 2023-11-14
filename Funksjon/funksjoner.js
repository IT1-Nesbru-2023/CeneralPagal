let tall = 10;
        function tilfeldigTall(min,max){
            tall = Math.ceil(Math.random()*(max-min));
            document.write("Tallet er " + tall)
        }

        tilfeldigTall(1,100);

