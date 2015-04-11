var openEndText = true;
var numWords = 0;

var main = function() {
    if(numWords === 0)
        $('#score').append('0');
    $('.word-box').on('keypress', function(e) {
    $('#errors').empty();
    if(e.keyCode == 13){
        var word = $('.word-box').val();
        word = word.toLowerCase();
        if(word.length === randomN && word[0] === randomL){
    		$('.word-bank').append('<li>'+word+'</li>');
    		$('.word-box').val('');
            numWords++;
            score = addScore();
            $('#score').empty();
            $('#score').append(score);
            console.log('score = ' + score + ', numWords = ' + numWords);
        } else if(word.length !== randomN && word[0] !== randomL){
            $('#errors').append('Error: Must be ' + randomN + ' characters long and begin with the letter \"' + randomL + '.\"');
            $('.word-box').select();
        } else if(word.length !== randomN){
            $('#errors').append('Error: Must be ' + randomN + ' characters long.');
            $('.word-box').select();
        } else{
            $('#errors').append('Error: Must begin with the letter \"' + randomL + '.\"');
            $('.word-box').select();
        }
    }
});

	$('#start_button').click(function(){
		$('#restrictions').empty();
		countdown;
		setInterval(countdown, 1000);
		$('#start_button').prop('disabled', true);
		$('.word-box').prop('disabled', false);
		$('.word-box').focus();
        $('#restrictions').append(randomN + "-letter word starting with the letter \"" + randomL + ".\"");
	});

	$('#how_to_play').click(function() {
		$('#instructions').toggle();
	//	$('#instructions').popover();
	});
};

	//timer
var countdown = function() {
	$('.timer').each(function() {
		var time = parseInt($(this).html());
		if(time !== 0) {
			$(this).html(time - 1);
            if (time <= 10) {
                $('.timer').css('color', '#FF0000');
                $(this).html(time-1);
            }
        } else {
			$('#start_button').prop('disabled', false);
			$('.word-box').prop('disabled', true);
            if(openEndText)
                gameOverText();
            openEndText = false;
		}
	});
};

function addScore() {
    var points = randomN*numWords;
    return points;
};

function gameOverText() {
    $('#dialog-box').dialog({
        resizable: false,
        minHeight: 140,
        modal: true,
        closeOnEscape: true,
        open: function(event, ui) {
            $('.ui-dialog-titlebar-close').hide();
        },
        buttons: {
            "Back to Game": function() {
                $(this).dialog('close');
                openEndText = false;
            },
            "New Game": function() {
                $(this).dialog('close');
                window.location.reload();
                openEndText = false;
            }
        }
    });
    $('#dialog-text').append('Score: ' + score + '<br />Total Words: ' + numWords);
};

$(document).ready(main);
