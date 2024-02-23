//written by God Bennett


var musicTitles = 
					[ 
						"zelante_mattia_strings",
						"zelante_mattia_strings", 
						"zelante_mattia_strings"
					];

var AUDIOTAGJS_AMBIENT_AUDIO = document.createElement('audio'); //needs to be global, so as to be controllable outside and beyond
var RANDOM_STARTUP_TITLE;
var USER_GESTURE_FLAG = false;

var AUDIOTAGJS_APP_EFFECT_AUDIO_SEND_KUDOS = document.createElement('audio'); //needs to be global, so as to be controllable outside and beyond
var AUDIOTAGJS_APP_EFFECT_AUDIO_OKAY = null;

$(document).ready(function() 
{
	//establish employme voice welcome element
	
	RANDOM_STARTUP_TITLE = musicTitles [ getRandomValueBasedOnArraySize ( musicTitles ) ];
	AUDIOTAGJS_AMBIENT_AUDIO.setAttribute('src', 'data/audios/'+ RANDOM_STARTUP_TITLE + '.mp3' );
	AUDIOTAGJS_AMBIENT_AUDIO.load();
	AUDIOTAGJS_AMBIENT_AUDIO.addEventListener("load", function() { 
	
		AUDIOTAGJS_AMBIENT_AUDIO.play(); 
		$(".duration span").html(AUDIOTAGJS_AMBIENT_AUDIO.duration);
		$(".filename span").html(AUDIOTAGJS_AMBIENT_AUDIO.src);
	}, false);
	
	AUDIOTAGJS_APP_EFFECT_AUDIO_SEND_KUDOS.setAttribute('src', 'data/audios/SendKudos.mp3' );
	AUDIOTAGJS_APP_EFFECT_AUDIO_SEND_KUDOS.load();
	
	AUDIOTAGJS_APP_EFFECT_AUDIO_OKAY = AUDIOTAGJS_APP_EFFECT_AUDIO_SEND_KUDOS;
	
	
	
	swal
	(
		{
				title: "",text: "Welcome to iGod Collective. \"iGod\" is a Jamaican based Ai collective with the goal to turn Ja in to an Ai ecosystem through education and technology application.\n\nWe consider Ai as \"fabric Neuroverse\" Embodied (Ai Imbued Hardware Niche → such as The Association's self driving car, or drone harvestor) and \"fabric Neuroverse\" Embedded (Ai Software → such as Ai Disease Diagnosis software). ________The space time fabric of Ai, is reasonably malleable; as depicted by the hand containing a cross section of the cosmos!", imageUrl: 'data/images/logoMain.png', html: true, showCancelButton: false,
				confirmButtonColor: "#fff",
				confirmButtonText: 'Go!',
				cancelButtonText: "",
				closeOnConfirm: true,
				closeOnCancel: false
		},
		function(isConfirm)
		{
			if (isConfirm)
			{
				USER_GESTURE_FLAG = true;
				AUDIOTAGJS_AMBIENT_AUDIO.play ();
			} 
		}
	);
	

	
});


function getRandomValueBasedOnArraySize ( value )
{//0-len(value)-1
	return Math.floor ( ( Math.random ( ) * ( value.length - 1 ) ) + 0 );
}


