const numToGuess = Math.floor((Math.random() * 1000) + 1);

let turnCounter = 0;
let nrClass;

let min = 0;
let max = 1001;

// $('.logs').html(numToGuess+"<br>");

$(document).ready(function()
{
   $("#guessForm").focus();
})

function isNumber()
{
    if(!isNaN(guessForm.value))
        {
        checkNumber();
        }
    else
        {
        $('.logs').append('Wprowadź prawidłową liczbę! <br>');
        scrollBottom();
        }
}
function checkNumber()
{
    let guess = document.getElementById("guessForm").value;
    let difference = Math.abs(numToGuess-guess);



    colorText(difference, nrClass);

    if (guess > 1000 || guess < 1)
    {
        $('.logs').append('Wprowadź prawidłową liczbę z zakresu 1-1000! <br>');
        scrollBottom();
    }
    else if (numToGuess==guess)
    {
        turnCounter++;
        $('.logs').append('<a class=sq'+nrClass+'a>To twoja '+turnCounter+' próba. Gratulacje wygrałeś!</a><br>');
        $('.logs').before('<span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>');
        $('.form').hide();
        scrollBottom();
    }
    else if(numToGuess>guess)
    {
        turnCounter++;
        intervalMin(min, guess);
        min = window.min;
        let nrClassAdd1 = nrClass + 1;
        $('.logs').append('<a class=sq'+nrClass+'a>'+nrClassAdd1+'. To twoja '+turnCounter+' próba. To za mało! Jestem gdzieś tutaj '+min+'-'+max+'. Próbuj dalej!</a><br>');
        scrollBottom();
    }
    else
    {
        turnCounter++;
        intervalMax(max, guess);
        max = window.max;
        let nrClassAdd1 = nrClass + 1;
        $('.logs').append('<a class=sq'+nrClass+'a>'+nrClassAdd1+'. To twoja '+turnCounter+' próba. To za dużo! Jestem gdzieś tutaj '+min+'-'+max+'. Próbuj dalej!</a><br>');
        scrollBottom();
    }
}
function scrollBottom()
{
var mydiv = $(".logs");
mydiv.scrollTop(mydiv.prop("scrollHeight"));
}
function intervalMin(min, guess)
{
    if (guess>min)
    {
        window.min=guess;
        return min;
    }
}
function intervalMax(max, guess)
{
    if (guess<max)
    {
        window.max=guess;
        return max;
    }
}
function colorText(difference)
{
    if(difference>250)
    {
        return nrClass=0;
    }
    else if(121<=difference && difference<=250)
    {
        return nrClass=1;
    }
    else if(61<=difference && difference<=120)
    {
        return nrClass=2;
    }
    else if(26<=difference && difference<=60)
    {
        return nrClass=3;
    }
    else if(11<=difference && difference<=25)
    {
        return nrClass=4;
    }
    else if(5<=difference && difference<=10)
    {
        return nrClass=5;
    }
    else if(1<=difference && difference<=4)
    {
        return nrClass=6;
    }
    else 
    {
        return nrClass=7;
    }

}
