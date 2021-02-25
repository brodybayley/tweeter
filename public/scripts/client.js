$(document).ready(function() {
  //call tweets when page first loads
  loadTweets();
  //creates AJAX post request and send form data to server
  $('form').on('submit', function(event) {
    event.preventDefault();
    //hides error messages
    $('#no-characters').addClass('hide');
    $('#max-characters').addClass('hide');

    const tweetBody = $('#tweet-text').val();
    //if/else statements to check for char length and empty form
    if (tweetBody.length > 140) {
      $('#max-characters').toggleClass('hide');
    } else if (tweetBody.length === 0 || tweetBody.length === null) {
      $('#no-characters').toggleClass('hide');
    } else {
      $
        .ajax({
          url: "/tweets",
          method: "POST",
          data: $(this).serialize()
        })
        .then(res => {
          return renderLastTweet();
        });
    }
  });
});


const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    //places tweet at top of list
    $('.old-tweets').prepend($tweet);
  }
};

const renderLastTweet = function() {
  $
    .ajax('/tweets')
    //user to clear form after posting tweet
    .then($('textarea').val(''))
    .then((res) => {
      return renderTweets([res[res.length - 1]]);
    })
    .catch(err => console.log(err));
};


const createTweetElement = function(tweetData) {
  const header = $(`
  <header class="tweet-header">
  <div class="user-thumbnail">
    <span><img class="avatar-image" src="${tweetData.user.avatars}"></span>
    <span>${tweetData.user.name}</span>
  </div>
  <span class="user-tagname">${tweetData.user.handle}</span>
</header>`
  );
  //function protects site from XSS
  const safeChar = $("<div>").text(tweetData.content.text);
  safeChar.addClass('tweet');

  const footer = $(`
  <footer class="tweet-footer">
  <span class="tweet-age">newDate${tweetData.created_at} days ago</span>
  <span class="links">
    <a href='#' class="tweet-icons">🏴</a>
    <a href='#' class="tweet-icons">🔁</a>
    <a href='#' class="tweet-icons">♥</a>
  </span>
</footer>
  `);

  // const $tweet = $(`<article class="tweet-container"></article>`);
  const $tweet = $("<article>");

  $tweet
    .addClass('tweet')
    .append(header)
    .append(safeChar)
    .append(footer);

  return $tweet;
};

//fetches tweets from /tweets page
const loadTweets = function() {
  $
    .ajax('/tweets')
    .then((res) => {
      return renderTweets(res);
    })
    .catch(err => console.log(err));
};