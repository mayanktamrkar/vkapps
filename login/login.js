$(document).ready(function () 
{
    $('#form').submit(function(e)
    {
        let user=$('#user').val()
        let pass=$('#pass').val()
        if(user=="" || pass==""){
            $('#o').show().html('pls enter user and pass')
            
            
            e.preventDefault();
            
        }else if(pass.length<5 || pass.length>10){
            $('#o').show().html("pls enter min 5 ,max 10 length pass")
            e.preventDefault();

        }else{
            $('#o').show().html('submitted')
            alert('form is submitted')
            location.reload()

        }

        e.preventDefault();

    })
})