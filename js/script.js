$(document).ready(function() {

	function efeito(){

		var posicaoTop = [];
		var posicaoLeft = [];
		var imgs = $('.galeria .col').length;

		$('.galeria .col').each(function(index, el) {
			var originalTop = $(this).position().top;
			var originalLeft = $(this).position().left;

			posicaoTop.push(originalTop);
			posicaoLeft.push(originalLeft);
		});

		var altura = $('.galeria').innerHeight();
		var metadeTop = altura/100;
		var totalTop = altura-(50*metadeTop);

		var largura = $('.galeria').innerWidth();
		var metadeLeft = largura/100;
		var totalLeft = largura-(50*metadeLeft);

		var divLargura = $('.galeria .col').innerWidth();
		var metadeDiv = divLargura/100;
		var totalDiv = divLargura-(50*metadeDiv);

		var divAltura = $('.galeria .col').innerHeight();
		var metadeDivTop = divAltura/100;
		var totalDivTop = divLargura-(50*metadeDivTop);

		var posicaoInicialTop = totalTop - totalDivTop;
		var posicaoInicialLeft = totalLeft - totalDiv;

		$('.galeria').css('height', altura);

		$('.galeria .col').css({
			position: 'absolute',
			top: posicaoInicialTop,
			left: posicaoInicialLeft,
			transition: 'all 2s',
			padding: '0 2em'
		});

		setTimeout(function() {

			var box = [];

			for (var i = 0; i < imgs; i++) {
				var num = { 
					id: i
				}; 
				box.push(num); 
				original(); 
			}

			function original() {
				$('.galeria .col:nth-of-type(' + (parseInt([i]) + parseInt(1)) + ')').css({	
					top: posicaoTop[i],
					left: posicaoLeft[i]
				});
			}

		}, 2000);

	}

	efeito();

	$('.btn').click(function(event) {
		efeito();
	});

	$(function () {
		$('.galeria').lightGallery({
			thumbnail: true,
			selector: 'a'
		});
	});

});
