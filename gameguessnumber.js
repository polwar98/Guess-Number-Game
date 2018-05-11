var numToGuess = Math.floor((Math.random() * 1000) + 1);

var turnCounter = 0;
let nrClass;

$('.logs').html(numToGuess+"<br>");

$(document).ready(function(){
   $("#guessForm").focus();
});

function isNumber()
{
    if(!isNaN(guessForm.value))
        {
        checkNumber();
        }
    else
        {
        $('.logs').append('Wprowadź prawidłową liczbę! <br>');
        }
}
function checkNumber()
{
    let guess = document.getElementById("guessForm").value;
    let difference = Math.abs(numToGuess-guess);
    let min = 0;
let max = 1001;


    colorText(difference, nrClass);
//    console.log(difference);
//    console.log(nrClass);

    
    if (numToGuess==guess)
        {
            turnCounter++;
            $('.logs').append('<a class=sq'+nrClass+'a>To twoja '+turnCounter+' próba. Gratulacje wygrałeś!</a><br>');
            $('.logs').before('<span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>');
            
        }
    else if(numToGuess>guess)
        {
            turnCounter++;
            intervalMin(min, guess);
            min = window.min;
            $('.logs').append('<a class=sq'+nrClass+'a>To twoja '+turnCounter+' próba. Jestem gdzieś tutaj '+min+'-'+max+'. To za mało! Próbuj dalej!</a><br>');
        }
    else
        {
            turnCounter++;
            intervalMax(max, guess, min);
            max = window.max;
            $('.logs').append('<a class=sq'+nrClass+'a>To twoja '+turnCounter+' próba. Jestem gdzieś tutaj '+min+'-'+max+'. To za dużo! Próbuj dalej!</a><br>');
        }
}
function colorText(difference)
{
    if(difference>500)
        {
            nrClass=0;
            return;
        }
    else if(250<difference && difference<501)
        {
            nrClass=1;
            return;
        }
    else if(120<difference && difference<251)
        {
            nrClass=2;
            return;
        }
    else if(50<difference && difference<121)
        {
            return nrClass=3;
        }
    else if(30<difference && difference<51)
        {
            return nrClass=4;
        }
    else if(15<difference && difference<31)
        {
            return nrClass=5;
        }
    else if(5<difference && difference<16)
        {
            return nrClass=6;
        }
    else if(1<difference && difference<6)
        {
            return nrClass=7;
        }
    else
        {
            nrClass=8;
            return nrClass;
        }
}
function intervalMin(min, guess, max)
{
    if (guess>min)
        {
            window.min=guess;
            console.log(min);
            return min;
        }
    else
        {
            return min;
        }
}
function intervalMax(max, guess, min)
{
    if (guess<max)
        {
            window.max=guess;
            console.log(max);
            return max;
        }
    else
        {
            return max;
        }
}

