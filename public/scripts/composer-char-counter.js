$(document).ready(function() {
  console.log('this is from script js');
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
  //displays updated count
  output.html(left);
};
