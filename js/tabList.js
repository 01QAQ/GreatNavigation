$(function() {
	$('.tabList-box').children().css({
		width: '120px',
		height: '50px',
		display: 'flex',
		marginLeft: '5px',
		justifyContent: 'center',
		alignItems: 'center'
	})

	$('.tabBtn').each(function(index, element) {
		//鼠标移入时
		$(element).mouseover(function() {
			$(this).css({

				borderBottom: '1px solid #1e50ae'
			})
			$(this).children().css({
				color: '#1e50ae',
			})
		})
		//鼠标移出时
		$(element).mouseout(function() {
			$(this).css({
				borderBottom: 'none'
			})
			$(this).children().css({
				color: '#4c4c4c'
			})
		})
	})
	// 鼠标经过第二个tabBtn
	$('.tabList-box').children().eq(1).mouseover(function() {
		$('.filmCaseList').css({
			display: 'block'
		})
	})
	 $('.tabList-box').children().eq(1).mouseout(function() {
		$('.filmCaseList').css({
			display: 'none'
		})
	})
	$('.filmCaseList').mouseover(function() {
		$('.filmCaseList').css({
			display: 'block'
		})
	})
	$('.filmCaseList').mouseout(function() {
		$('.filmCaseList').css({
			display: 'none'
		})
	})
})
