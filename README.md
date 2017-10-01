# Mark Zheng Ma

### Screenshots

![Image of home page](./readMe/personal_website.png)

### Technologies Used

* HTML5
* CSS3
* Javascript (jQuery)

### Sample Code

````Javascript
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
      if ($(`#${p}`).hasClass('selection')){
        $(`.scroll-${$this.attr('id')}`).addClass('scroll-show');
      } else if(!$(`#${p}`).hasClass('selection')){
        $(`.scroll-${$this.attr('id')}`).removeClass('scroll-show');
      };
  });
````

### Author

Mark Zheng Ma
