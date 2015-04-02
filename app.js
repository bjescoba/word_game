var main = function() {
    $('.word-box').on('keypress', function(e) {
    if(e.keyCode == 13){
        var word = $('.word-box').val();
        if(word.length === randomN && word[0] === randomL){
                $('.word-bank').append('<li>'+word+'</li>');
                $('.word-box').val('');
        } else if(word.length !== randomN && word[0] !== randomL){
            alert('Must be ' + randomN + ' characters long and begin with the letter \"' + randomL + '.\"');
            $('.word-box').val('');
        } else if(word.length !== randomN){
            alert('Must be ' + randomN + ' characters long.');
            $('.word-box').val('');
        } else{
            alert('Must begin with the letter \"' + randomL + '.\"');
            $('.word-box').val('');
        }
    }
});

	$('#start_button').click(function(){
		countdown;
		setInterval(countdown, 1000);
		$('#start_button').prop('disabled', true);
		$('.word-box').prop('disabled', false);
		$('.word-box').focus();
        	$('#restrictions').append(randomN + "-letter word starting with the letter \"" + randomL + ".\"")
	});

	$('.btn').addClass('disabled');
};

	//timer
var countdown = function() {
	$('.timer').each(function() {
		var time = parseInt($(this).html());
		if(time !== 0) {
			$(this).html(time - 1);
		} else {
			$('#start_button').prop('disabled', false);
			$('.word-box').prop('disabled', true);
		}
	});
};

$(document).ready(main);