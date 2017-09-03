window.onload=function(){
  let $homeBtn=$('#homeBtn');
  let $aboutBtn=$('#aboutBtn');
  let $workBtn=$('#workBtn');
  let $contactBtn=$('#contactBtn');

  $homeBtn.click(function(){
    $('html,body').animate({'scrollTop':$('html,body').scrollTop()+0});
  })
  $aboutBtn.click(function(){
    $('html,body').animate({'scrollTop':$('html,body').scrollTop()+780});
  })
  $workBtn.click(function(){
    $('html,body').animate({'scrollTop':$('html,body').scrollTop()+1530});
  })
  $contactBtn.click(function(){
    $('html,body').animate({'scrollTop':$('html,body').scrollTop()+2500});
  })










}
