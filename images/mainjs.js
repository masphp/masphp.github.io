/*MASPHP.Com written Copyright 2012 */

/*nav_menu----------------------------------------------------------------*/
$(document).ready(function(){
	$('div#nav_menu >ul>li>a').append('<span class="ap_span_1"></span><span class="ap_span_2"></span>');
	$('div#nav_menu >ul>li').hover(
	function(){
		$(this).find('>a').not('.active').addClass('hover').animate({marginTop:'0px',paddingBottom:'10px'}, 200);
		$(this).find('>ul').stop(true,true).css( "top","+=30" ).animate({"opacity": "show","top":"-=30"},300);
	},function(){
		$(this).find('>a').not('.active').stop(true,true).removeClass('hover').animate({marginTop:'10px',paddingBottom:'0px'}, 200);
		$(this).find('>ul').stop(true,true).animate({"opacity": "hide","top":"+=30"},300,null,function(){$(this).css( "top","33px" );});
	});
});

/*usermenu_info----------------------------------------------------------------*/
$(document).ready(function(){
	$('div#usermenu_info >ul>li').hover(
	function(){
		$(this).find('>a').not('.active').addClass('hover').animate({marginRight:'0px',paddingleft:'20px'}, 200);
	},function(){
		$(this).find('>a').not('.active').stop(true,true).removeClass('hover').animate({marginRight:'10px',paddingleft:'10px'}, 200);
	});
});

/*form fields----------------------------------------------------------------*/
$(document).ready(function(){
	$('input[type=text],input[type=password],textarea,select').addClass('formtextfield').hover(
	function(){
		$(this).addClass('formtextfield_hov');
	},function(){
		$(this).removeClass('formtextfield_hov');
	}).focus(function(){
		$(this).addClass('formtextfield_foc').removeClass('formtextfield_error');
	}).blur(function(){
		$(this).removeClass('formtextfield_foc');
	});
	
	$('textarea').addClass('formtextfield_textarea');
		
	$('input[type=submit],input[type=button]').addClass('formbutton').hover(
	function(){
		$(this).addClass('formbutton_hov');
	},function(){
		$(this).removeClass('formbutton_hov');
	});
	
});

/*form check----------------------------------------------------------------*/
$(document).ready(function(){
	$('input[type=text],input[type=password],textarea').filter('.i_txt_mand').after(' (اجباری) ');
	
	
	$('form.form_precheck').submit(function(){
		var f_list=$(this).find('input[type=text],input[type=password],textarea');
		
		for(var i=0;i<f_list.length;i++){
			if($(f_list[i]).hasClass('i_txt_mand') && f_list[i].value==''){
				$(f_list[i]).addClass('formtextfield_error');	
			}else{
				$(f_list[i]).removeClass('formtextfield_error');
			}
		}
		
		if($(this).find('.formtextfield_error').length>0){
			alert('موارد مشخص شده بایستی پر شوند');
			return false;
		}
        
	});
	//
	$('form.form_precheck_pwd').submit(function(){
		var f_list=$(this).find('input[type=password]');
		if(f_list.length==2){
			if(f_list[0].value!=f_list[1].value&&f_list[0].value!=''){
				$(f_list[0]).addClass('formtextfield_error');
				$(f_list[1]).addClass('formtextfield_error');	
				alert('کلمه عبور ورودی با فیلد تکرار آن برابر نیست');
				return false;
			}
		}
	});
	//check post
	$('.confirm_post').click(
	function(){
		if(confirm('آیا مطمئن به '+$(this).val()+' هستید'))return true
		else return false;
	});

});

/* news list -------------------------------------*/
$(document).ready(function(){
	$('ul.news_list li:nth-child(3n-2)').addClass('fst');
	$('ul.news_list li:nth-child(3n-1)').addClass('mid');
	$('ul.news_list li:nth-child(3n)').addClass('lst');
	$('ul.news_list li:last').addClass('llst');
});


/* addons_detail_row -------------------------------------*/
$(document).ready(function(){
	$('td.addons_detail_row').wrapInner('<div class="addons_detail_div" />');
	$('a.sh_hi_addons_detail_row').click(function(){
		if($(this).hasClass('sh_hi_addons_detail_row_on')){
			$(this).removeClass('sh_hi_addons_detail_row_on');
			$(this).closest('tr').next().find('div.addons_detail_div').animate({height: 'hide',opacity: 0}, 200);
		}else{
			$(this).addClass('sh_hi_addons_detail_row_on');
			$(this).closest('tr').next().find('div.addons_detail_div').animate({height: 'show',opacity: 1}, 200);
		}
		
	});
});


$(document).ready(function(){
	$('div#side_bar_val a img').css('opacity',0.75);
	$('div#side_bar_val a img').hover(
	function(){
		$(this).animate({'opacity':1}, 300);
	},function(){
		$(this).animate({'opacity':0.75}, 200);
	});
});









/*---- master menu hltr -----------------------------------*/
function nav_menu_hltr(left,width){
	$('#nav_menu_hltr').stop(true,false).delay(100).animate({'left':left , 'width':width},500);
}
function nav_menu_hltr_fpr(){
	if($('div#nav_menu >ul >li.active')[0]){
		var position = $('div#nav_menu >ul >li.active').position();
		nav_menu_hltr(position.left+parseInt($('div#nav_menu >ul >li.active').css('padding-left')),$('div#nav_menu >ul >li.active').width());
	}else{
		nav_menu_hltr(0,0);
	}
}


/*--- jquery ----------------------*/
$(document).ready(function(){
	//--- window min size
	//$('div#bodycontainer').css({'min-height':$(window).height()-100}); 
	//alert($(window).height());
	//---- master menu
	/*$('div#nav_menu a.active').closest('li').addClass('active');
	$('div#nav_menu li ul').closest('li').addClass('haschild');
	$('div#nav_menu ul li').hover(
	function(){
		$(this).find('>ul').stop(true,true).animate({"opacity": "show"},300);
		$(this).addClass('hover').find('>a').addClass('hover');
	},function(){
		$(this).find('>ul').stop(true,true).animate({"opacity": "hide"},300);
		$(this).removeClass('hover').find('>a').removeClass('hover');
	});*/
	//---- master menu hltr 
	/*nav_menu_hltr_fpr();
	$('div#nav_menu >ul >li').hover(
	function(){
		$(this).find('>ul').animate({"opacity": "hide"},0).stop(false,true).delay(300).animate({"opacity": "show"},300);
		var position = $(this).position();
		nav_menu_hltr(position.left+parseInt($(this).css('padding-left')),$(this).width());
	},nav_menu_hltr_fpr);
	*/
	//---- user menu
	/*$('div#usermenu_info >ul >li >ul').closest('li').find('>a').addClass('haschild');
	$('div#usermenu_info ul li').hover(
	function(){
		$(this).find('>ul').animate({"opacity": "show"},300);
		$(this).addClass('hover').find('>a').addClass('hover');
	},function(){
		$(this).find('>ul').animate({"opacity": "hide"},300);
		$(this).removeClass('hover').find('>a').removeClass('hover');
	});*/
	
	/*setInterval(function(){
	$('div#usermenu_info ul li a.active_state').toggleClass('active_state_tg');
	},500);*/
	
	
	
	//--- contactus form
	
	
	//
	$('p.master_box_inform').delay(6000).slideUp(400);
	
	//prod_listofincat 
	$('ul#prod_listofincat li').hover(function(){$(this).addClass('hover');},function(){$(this).removeClass('hover');});
	//prod_itemlist 
	$('ul#prod_itemlist li').hover(function(){$(this).addClass('hover');},function(){$(this).removeClass('hover');});
	
	
	

});


//----pagemkr_mvr
$(document).ready(function(){
	if($('div#pagemkr_mvr')[0]){
		$('div#pagemkr_mvr_frame ul li').hover(function(){$(this).addClass('hover');},function(){$(this).removeClass('hover');});
		//values
		pagemkr_mvr_frame_width=$('div#pagemkr_mvr_frame').width();
		pagemkr_mvr_cnt_li=$('div#pagemkr_mvr_frame li').length;
		pagemkr_mvr_cnt_div=$('div#pagemkr_mvr_frame ul').length;
		pagemkr_mvr_each_divli=$('div#pagemkr_mvr_frame div#pagemkr_mvr_p0 li').length;
		if($('div#pagemkr_mvr_frame li.active')[0])pagemkr_mvr_current_div=parseInt($('div#pagemkr_mvr_frame li.active').closest('div.pagemkr_mvr_p')[0].id.match(/[0-9]+/)); 
		else pagemkr_mvr_current_div=0;
		//
		$('div#pagemkr_mvr').prepend('<a href="javascript:;" id="pagemkr_mvr_bnext"></a>').prepend('<a href="javascript:;" id="pagemkr_mvr_bback"></a>');
		$('div.pagemkr_mvr_p').css('right',pagemkr_mvr_frame_width);
		$('div#pagemkr_mvr_p'+pagemkr_mvr_current_div).css('right',0);
		pagemkr_mvr_btstatus();
		//
		$('a#pagemkr_mvr_bnext').click(function(){
			if(pagemkr_mvr_current_div>=(pagemkr_mvr_cnt_div-1))return false;
			$('div.pagemkr_mvr_p').stop( false, true );
			$('div#pagemkr_mvr_p'+pagemkr_mvr_current_div).animate({'right':(pagemkr_mvr_frame_width*-1)},800);
			$('div#pagemkr_mvr_p'+(pagemkr_mvr_current_div+1)).css('right',pagemkr_mvr_frame_width).animate({'right':0},800);
			pagemkr_mvr_current_div++;
			pagemkr_mvr_btstatus();
		});
		$('a#pagemkr_mvr_bback').click(function(){
			if(pagemkr_mvr_current_div<=0)return false;
			$('div.pagemkr_mvr_p').stop( false, true );
			$('div#pagemkr_mvr_p'+pagemkr_mvr_current_div).animate({'right':pagemkr_mvr_frame_width},800);
			$('div#pagemkr_mvr_p'+(pagemkr_mvr_current_div-1)).css('right',(pagemkr_mvr_frame_width*-1)).animate({'right':0},800);
			pagemkr_mvr_current_div--;
			pagemkr_mvr_btstatus();
		});
	}
});

function pagemkr_mvr_btstatus(){
	if(pagemkr_mvr_current_div>=(pagemkr_mvr_cnt_div-1))$('a#pagemkr_mvr_bnext').addClass('inactive'); else $('a#pagemkr_mvr_bnext').removeClass('inactive');
	if(pagemkr_mvr_current_div<=0)$('a#pagemkr_mvr_bback').addClass('inactive'); else $('a#pagemkr_mvr_bback').removeClass('inactive');
}

