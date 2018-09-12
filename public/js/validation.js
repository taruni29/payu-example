$(document).ready(function(){
    $flag=1;

      $("#name").focusout(function(){

        // Checks name field is empty or not.
        if($(this).val()==''){
            $(this).css("border-color", "#FF0000");
              $('#submit').attr('disabled',true);
               $("#error_name").text("* You have to enter your name!");
          }

          else{
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled',false);
            $("#error_name").text("");
          }

       });

        $("#email").focusout(function(){
        var email =$("#email").val();
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        // Checks email field is empty or not.
        if($(this).val()=="")
        {
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_email").text("* You have to enter your email!");
        }

        // Checks email pattern for  email field.
        else if(!pattern.test(email))
        {
            $(this).css("border-color", "#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_email").text("* Please enter valid email");
        }

        else{
        console.log("success");
        $(this).css({"border-color":"#2eb82e"});
        $('#submit').attr('disabled',false);
        $("#error_email").text("");
        }

        });

        $("#phone").focusout(function(){
        mobile=$("#phone").val();

        // Checks mobile number field is empty or not.
        if ($("#phone").val() == '') {
            $("#phone").css("border-color", "#FF0000");
            $("#error_phone").text("* You have to enter your mobile number!");
            passedValidation = false;
        }

        // Checks the mobile number field is numbers or not.
        else if(isNaN(mobile) ){
            $("#phone").css("border-color", "#FF0000");
            $("#error_phone").text("*You have to enter digits only!");
            passedValidation = false;
         }

        // Checks the  mobile number length is 10 digits or not.
        else if($("#phone").val().length!=10 ){
            $("#phone").css("border-color", "#FF0000");
            $("#error_phone").text("*You have to enter valid mobile number!");
            passedValidation = false;
         }

         else
         {
            $(this).css({"border-color":"#2eb82e"});
            $('#submit').attr('disabled',false);
            $("#error_phone").text("");
         }
        });

        $("#password").focusout(function(){
        var pass =$("#password").val();

        // Checks password field is empty or not.
        if(pass==''){
            $(this).css("border-color","#FF0000");
              $('#submit').attr('disabled',true);
              $("#error_password").text("* You have to enter your password !");
          }

          else
          {
                  $(this).css({"border-color":"#2eb82e"});
                  $('#submit').attr('disabled',false);
                  $("#error_password").text("");
          }
            });

             $("#cpassword").focusout(function(){
             cpass =$("#cpassword").val();
             pass =$("#password").val();

        // Checks password field is empty or not.
        if(cpass=='')
        {
            $(this).css("border-color","#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_cpassword").text("* You have to re-enter your password !");
        }

        // Validates the both passwords matched or not.
        else if(pass!=cpass)
        {
            $(this).css("border-color","#FF0000");
            $('#submit').attr('disabled',true);
            $("#error_cpassword").text("* Password mismatched !");
        }
        else{
            $(this).css({"border-color":"#2eb82e"});
            $('#submit').attr('disabled',false);
            $("#error_cpassword").text("");
        }

      });

      $("#submit").click(function() {
        var passedValidation = true;

        // Checks name field is empty or not.
        if ($("#name").val() == '') {
            $("#name").css("border-color", "#FF0000");
            $("#error_name").text("* You have to enter your name!");
            passedValidation = false;
        }
        else
        {
        passedValidation = true;
        }
         mobile=$("#phone").val();

        // Checks mobile number field is empty or not.
        if ($("#phone").val() == '')
        {
          $("#phone").css("border-color", "#FF0000");
          $("#error_phone").text("* You have to enter your mobile number!");
          passedValidation = false;
        }

        // Checks the mobile number field is numbers or not.
        else if(mobile.length!=10 && isNaN ){
           $("#phone").css("border-color", "#FF0000");
           $("#error_phone").text("*You have to enter valid mobile number!");
           passedValidation = false;
         }
         else
         {
            passedValidation = true;
         }
        var email =$("#email").val();
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        // Checks email field is empty or not.
        if ($("#email").val() == '') {
            $("#email").css("border-color", "#FF0000");

            $("#error_email").text("* You have to enter your email!");
            passedValidation = false;
        }

        // Checks email pattern for  email field.
        else if(!pattern.test(email))
        {
            $("#email").css("border-color", "#FF0000");

            $("#error_email").text("* Please enter valid email");
            passedValidation = false;
        }
        else
        {
            passedValidation = true;
        }
        var strength=0;
        pass =$("#password").val()

        // Checks password field is empty or not.
        if ($("#password").val() == '') {
            $("#password").css("border-color", "#FF0000");

            $("#error_password").text("* You have to enter your password!");
            passedValidation = false;
        }

        else
        {
            passedValidation = true;
        }

        // Checks confirm password field is empty or not.
        if ($("#cpassword").val() == '') {
            $("#cpassword").css("border-color", "#FF0000");

            $("#error_cpassword").text("* You have to re-enter your password!");
            passedValidation = false;
        }

        // Validates the both passwords are matched or not.
        else if($("#password").val()!=$("#cpassword").val())
        {
            $("#cpassword").css("border-color", "#FF0000");

            $("#error_cpassword").text("* Password mismatched !");
            passedValidation = false;
        }
        else
        {
            passedValidation = true;
        }

        return passedValidation;
    });
});
