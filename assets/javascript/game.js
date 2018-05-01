$( document ).ready(function(){
    var random=Math.floor(Math.random()*101+19)
    
    $("#random-number").text(random);
    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
  
  $("#numWins").text(wins);
  $("#numLosses").text(losses);
 
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        
        $("#random-number").text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $("#total").text(userTotal);
        } 
  
  function win(){
  alert("You won!");
    wins++; 
    $("#numWins").text(wins);
    reset();
  }
  
  function loss(){
  alert ("You lose!");
    losses++;
    $("#numLosses").text(losses);
    reset()
  }
  
    $("#diamond").on ('click', function(){
      userTotal = userTotal + num1;
      
      $("#total").text(userTotal); 
            
          if (userTotal == random){
            win();
          }
          else if ( userTotal > random){
            loss();
          }   
    })  
    $("#green").on ('click', function(){
      userTotal = userTotal + num2;
     
      $("#total").text(userTotal); 
          if (userTotal == random){
            win();
          }
          else if ( userTotal > random){
            loss();
          } 
    })  
    $("#multi-color").on ('click', function(){
      userTotal = userTotal + num3;
      
      $("#total").text(userTotal);
  
            if (userTotal == random){
            win();
          }
          else if ( userTotal > random){
            loss();
          } 
    })  
    $("#orange").on ('click', function(){
      userTotal = userTotal + num4;
      
      $("#total").text(userTotal); 
        
            if (userTotal == random){
            win();
          }
          else if ( userTotal > random){
            loss();
          }
    });   
});