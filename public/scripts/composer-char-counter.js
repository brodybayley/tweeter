$(document).ready(function() {
  //produces an event whenever user types in tweet box
  $('#tweet-text').on('keyup', onKeyUp);
});

const onKeyUp = function() {
  const text = $(this).val();
  const count = text.length;
  //locates counter within index.html
  const output = $(this).parent().find('.counter');
  //subtracts user input from count
  const left = 140 - count;
  //displays red if count below 0 and reg font otherwise
  if (left < 0) {
    output.html(left).addClass('redClass');
  } else {
    output.html(left).removeClass('redClass');
  }
};
