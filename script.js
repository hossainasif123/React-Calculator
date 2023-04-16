
        var k=0;
        function Ac(){

            var input = document.getElementById("MyResult");
    input.value = input.value.substring(0, input.value.length - 1);
        }
        function DeleteMe() {
            document.getElementById("MyResult").value = ""  ; 

      }

        function calculator(NewValue){
           
            if(k==1)
            {
                document.getElementById("MyResult").value = "";  
            
                k=0; 
                document.getElementById("MyResult").value += NewValue;
            }
            else {
                document.getElementById("MyResult").value += NewValue;
            }
        
           
          
            
           
        }

    function Answer() {
        
        var a = document.getElementById("MyResult").value ; 
        var b = eval(a);
        document.getElementById("MyResult").value = b;
        k=1;
        
        

    }