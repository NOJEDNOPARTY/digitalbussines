
$(window).on('load', function () {
	setTimeout(function(){
		$('#mainPreload').addClass('close-preload');
	}, 300);
	setTimeout(function(){
		$('body').removeClass('notload');
	}, 1800);
});

var common = {
	init: function() {
		common.main();
		common.popup();
		common.animate();
		common.animation();
	},
	animate: function() {

		function animateBlock(el) {
			var s_top = $(document).scrollTop() + $(window).height();
			var yes = $(el).offset().top;
			if(s_top > yes){
				if(!$(el).hasClass('animate')) {
					setTimeout(function(){
						$(el).addClass('animate');
					}, 200);
				}
			}
		};
		
		function results() {
			$('.result-row').each(function(index){
				$(this).attr('id', ('result' + (index + 1)));
				var resultID = "#" + $(this).attr('id');
				animateBlock(resultID);
			});
		};
		
		function wayColumn() {
			$('.way-column').each(function(index){
				$(this).attr('id', ('wayColumn' + (index + 1)));
				var wayColumnID = "#" + $(this).attr('id');
				animateBlock(wayColumnID);
			});
		};

		function programRow() {
			$('.program-row').each(function(index){
				$(this).attr('id', ('programRow' + (index + 1)));
				var programRowID = "#" + $(this).attr('id');
				animateBlock(programRowID);
			});
		};

		function processColumn() {
			$('.process-column').each(function(index){
				$(this).attr('id', ('processColumn' + (index + 1)));
				var processColumnID = "#" + $(this).attr('id');
				animateBlock(processColumnID);
			});
		};

		function callAllAnimations(){
			animateBlock('#video');
			animateBlock('#authorsBlk');
			animateBlock('#authorsCnt');
			animateBlock('#authorsBanner');
			animateBlock('#systemBlk');
			animateBlock('#wayBlk');
			animateBlock('#moveBlk');
			animateBlock('#warrantyInfo');
			animateBlock('#warrantyImages');
			animateBlock('#programBlk');
			animateBlock('#programProcess');
			animateBlock('#game');
			animateBlock('#chooseBlk');
			animateBlock('#chooseForm');
			results();
			wayColumn();
			programRow();
			processColumn();
		}

		
		callAllAnimations();

		$(document).scroll(function () {
			callAllAnimations();
			results();
		});

	},
	popup: function() {


		$('.btn-show-programm').click(function(event){
			event.preventDefault();
			var popupID = '#' + $(this).attr('data-id');
			$(popupID).addClass('active');
		});


		$('.p-info-trigger').click(function() {
			$(this).parent().toggleClass('active');
		});

		$('.popup-close').click(function(){
			$('.popup-wrapper').removeClass('active');
		});

	},
	main: function() {

		$(".btn:not(.btn-show-more, .btn-show-programm)").click(function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});

		$('.conmpany').each(function(index){
			var i = index++ + 1;
			$('.how-many').text(i);
		});

		function showResultBlocks() {
			let resultIndex = 1;
			let resultIndex2 = 1;
			for(let i = 0; i < $('.result-row-c').length; i++){
	
				if( $('.result-row-c:eq(' + i + ')').css('display') == 'flex' ) {
					let resultIndexShowed = resultIndex++;
					$('.how-many-show').text(resultIndexShowed);
				}
				if ($('.result-row-c:eq(' + i + ')').css('display') == 'none') {
					let resultIndexShowed2 = resultIndex2++;
					$('.btn-show-more span').text(resultIndexShowed2);
				}
	
			};
		}

		showResultBlocks();


		var textSave = $('.btn-show-more').text();
		$('.btn-show-more').click(function(e){
			e.preventDefault();
			$('.results').toggleClass('show');

			if($('.results').hasClass('show')) {
				showResultBlocks();
				$(this).text('Скрыть')
			}else {
				showResultBlocks();
				$(this).text(textSave);
			}

		});

		$('.btn-90').click(function(e){
			e.preventDefault();
			$('#Bussines90').prop('checked', true); 
			$('#Bussines365').prop('checked', false); 
		});

		$('.btn-365').click(function(e){
			e.preventDefault();
			$('#Bussines90').prop('checked', false); 
			$('#Bussines365').prop('checked', true); 
		});
	},
	animation: function() {

		function columns() {
		
			var openColumns = "M400 0H470V81H400V0ZM0 43H70V85H0V43ZM100 317H170V359H100V317ZM370 108H300V196H370V108ZM570 196H500V358H570V196ZM700 227H770V669H700V227ZM870 96H800V669H870V96Z";

			const timeline = anime.timeline({
				duration: 1200,
				easing: 'linear'
			});
		
			timeline.add({
				targets: "#columns",
				d: [{value: openColumns}]
			});
		}
		
		setTimeout(function(){
			columns();
		}, 2300)
		
	}
};

(function() {
	common.init();
}());
