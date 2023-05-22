function randmInt()
{
    var dice1 = Math.ceil(Math.random() *6);
    var diec2 = Math.ceil(Math.random() *6);
    var sum = dice1 + dice2;

    document.getElementById("dice1Res").innerHTML = "dice 1 = " +  dice1;
    document.getElementById("dice2Res").innerHTML = "dice 2 = " +  dice2;
    document.getElementById("sumOfDice").innerHTML = "sum = " + sum;

    if (sum == 7 ||sum == 11)
    {
        document.getElementById("results").innerHTML = "CRAPS";
    
    }
    else
{
    document.getElementById("results").innerHTML = "you win";
} 
    
    
}