
let num=[1,2,3,4,5]
            function MultiplicationNumbersInAnArray () {
                let multiply=1;
    
                for(let i=0; i < num.length;i++ ) {
                        multiply=multiply * num[i] };
                    
                        return multiply;};

const totalMultiplicationOfArray= MultiplicationNumbersInAnArray(num);
console.log(totalMultiplicationOfArray);