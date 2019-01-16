$(document).ready(() => {
  $('.menu').on('mouseover', () => {
    $('.nav-menu').show().on('mouseleave', () => {
    $('.nav-menu').hide();
    })
  });

  $('.btn').on('mouseover', event => {
    $(event.currentTarget).addClass('btn-hover').on('mouseleave', event => {
    $(event.currentTarget).removeClass('btn-hover')
    });
  });

  $('.postText').on('keyup', event => {
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
      if(remaining <= 0){
        $('.wordcount').addClass('red')
      } else { (remaining > 0)
        $('.wordcount').removeClass('red')
      }
    $('.characters').html(remaining)
  });
    $('.postText').focus();

});
