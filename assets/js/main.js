var depositBtn = document.getElementById("moneyDeposit");
depositBtn.addEventListener("click",function(){
    var depositmoney = document.getElementById("depositDoller").value;
    var dipositAmount = parseFloat(depositmoney);
    
    //  var currentDeposit = document.getElementById("currentDeposit").innerText;
    //  var currentDepositNumber = parseFloat(currentDeposit);
    //  var totalDepositAmount = dipositAmount+currentDepositNumber;
    //  document.getElementById("currentDeposit").innerText = totalDepositAmount;

     document.getElementById("depositDoller").value = "";

     updateAmount("BallanceId", dipositAmount);
     updateAmount("currentDeposit", dipositAmount);

    function updateAmount(id ,dipositAmount ){

     var current = document.getElementById(id).innerText;
     var currentNumber = parseFloat(current);  
     var totalAmount = dipositAmount+currentNumber;
     document.getElementById(id).innerText = totalAmount;

    }
     
     

     
});

/*End Deposit Action Button*/

var withdrawButton = document.getElementById("moneyWithdraw");
withdrawButton.addEventListener("click",function(){

    var withdrawvalue = document.getElementById("withdrawAmount").value;
    var withdrawAmount = parseFloat(withdrawvalue);

    var currentWithdrawAmount = document.getElementById("currentWithdraw").innerText;
    var currentWithdrawNumber = parseFloat(currentWithdrawAmount);
    var totalWithdrawAmount = withdrawAmount+currentWithdrawNumber;
    document.getElementById("currentWithdraw").innerText = totalWithdrawAmount;

    document.getElementById("withdrawAmount").value = "";


    var ballanceId = document.getElementById("BallanceId").innerText;
    var ballanceAmount = parseFloat(ballanceId); 
    var totalBallance = ballanceAmount-withdrawAmount;
    document.getElementById("BallanceId").innerText = totalBallance;

    
    


});