let input=document.getElementById('output');
        function display(num)
        {
            input.value+=num;
        }
        function ans()
        {
            try{
                input.value=eval(input.value);
            }
            catch(err)
            {
                alert("invalid");
            }
        }
        function last()
        {
            input.value=input.value.slice(0,-1);
        }
        function clears()
        {
            input.value="";
        }