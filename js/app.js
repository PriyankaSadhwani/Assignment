		$(document).ready(function() {
			$('#myCarousel').carousel({
			interval: 10000
			});
			
			$('[data-toggle="popover"]').popover(); 
			
			$('.carousel-inner .item .row .col-custom-2').click(function(event){

				var positionNew = event.clientX - $(this).width();
				$('<style>#box::before{left:'+positionNew+'px}</style>').appendTo('head');
				//$('#box').toggleClass('box-inner-toggle');
				
			});
			
			$(".custom-sub-image").click(function(event){
					$(".custom-image").attr("src",$(this).attr("src").replace('small',''));
					$(".custom-image-subbox").css('border','1px solid lightgrey');
					$(this).parent('div').css('border','2px solid rgb(74, 224, 74)');
			});
			
			$(".custom-image-subbox").hover(
			function(){
				$(this).css('border','2px solid rgb(74, 224, 74)');}
			,function(){$(this).css('border','1px solid lightgrey');});
			});
			
			$(function () {
            				$("#zoom").anythingZoomer();
        	});
