window.onload = function(){
    let $homeBtn = $('#homeBtn');
    let $aboutBtn = $('#aboutBtn');
    let $workBtn = $('#workBtn');
    let $contactBtn = $('#contactBtn');

    $homeBtn.click(function(){
        $('html,body').animate({'scrollTop': $('.home').offset().top}, 600);
    });
    $aboutBtn.click(function(){
        $('html,body').animate({'scrollTop': $('.about-spacer').offset().top}, 600);
    });
    $workBtn.click(function(){
        $('html,body').animate({'scrollTop': $('.work-spacer').offset().top}, 600);
    });
    $contactBtn.click(function(){
        $('html,body').animate({'scrollTop': $('.contact-spacer').offset().top}, 600);
    });

    let $paragraph = $('.paragraphs');
    let $scroll = $('.scroll');
    
    $paragraph.click(function(){
        let $this = $(this);
        let p = $this.attr('id');
        $(`#${p}`).toggleClass('selection');
        if($(window).width() < 1200){
          if ($(`#${p}`).hasClass('selection')){
              $(`.scroll-${$this.attr('id')}`).addClass('scroll-show');
          } else if(!$(`#${p}`).hasClass('selection')){
              $(`.scroll-${$this.attr('id')}`).removeClass('scroll-show');
          };
        }else{
          $(`.title-${p}`).toggleClass('title-hide');
          $(`.single-${p}`).toggleClass('paragraph-show');
        }
    });

    let $projectPic = $('.project-pic');
    let $techUsed = $('.tech-used');

    $projectPic.hover(function(){
        let $this = $(this);
        let index = $projectPic.index($this);
        if($techUsed.hasClass(`tech-${index+1}`)){
            $(`.tech-${index+1}`).toggleClass('show-tech');
        }
    });

    let $skillSingle = $('.skill-single');
    let $skillName = $('.skill-name');

    $skillSingle.click(function(){
        let $this = $(this);
        if($(window).width() < 1200){
          $this.toggleClass('skillbackground-show');
        }
    })

    $skillName.click(function(){
        let $this = $(this);
        if($(window).width() < 1200){
          $this.toggleClass('skillname-show');
        }
    })






}
