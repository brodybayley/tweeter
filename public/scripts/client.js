$(document).ready(function () {
  //call tweets when page first loads
  loadTweets();
  //creates AJAX post request and send form data to server
  $('form').on('submit', function (event) {
    event.preventDefault();
    const tweetBody = $('#tweet-text').val();
    //if/else statements to check for char length and empty form
    if (tweetBody.length > 140) {
      return alert('Tweet content too long!');
    } else if (tweetBody.length === 0 || tweetBody.length === null) {
      return alert('No content present!');
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


const renderTweets = function (tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.old-tweets').append($tweet);
  }
};

const renderLastTweet = function () {
  $
    .ajax('/tweets')
    .then((res) => {
      return renderTweets([res[res.length - 1]]);
    })
    .catch(err => console.log(err));
};


const createTweetElement = function (tweetData) {
  const $tweet = $(`
      <article class="tweet-container">
      <header class="tweet-header">
  <div class="user-thumbnail">
    <span><img class="avatar-image" src="${tweetData.user.avatars}"></span>
    <span>${tweetData.user.name}</span>
  </div>
  <span class="user-tagname">${tweetData.user.handle}</span>
</header>
<div class="tweet-body">
  <span class="tweet-content">${tweetData.content.text}</span>
</div>
<footer class="tweet-footer">
  <span class="tweet-age">newDate${tweetData.created_at} days ago</span>
  <span class="links">
    <a href='#' class="tweet-icons">🏴</a>
    <a href='#' class="tweet-icons">🔁</a>
    <a href='#' class="tweet-icons">♥</a>
  </span>
</footer>
</article>
`);
  return $tweet;
};

//fetches tweets from /tweets page
const loadTweets = function () {
  $
    .ajax('/tweets')
    .then((res) => {
      return renderTweets(res);
    })
    .catch(err => console.log(err));
};