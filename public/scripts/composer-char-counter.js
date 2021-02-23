$(document).ready(() => {
  console.log('this is from script js');
  $('#tweet-text').on('keyup', onKeyUp);
});

const onKeyUp = function() {
  const text = $(this).val();
  const count = text.length;
  console.log(count);
  const output = $('.counter');
  console.log(output);
  const left = 140 - count;
  output.html(left);
};