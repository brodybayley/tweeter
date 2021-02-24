$(document).ready(function() {
  const $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('.old-tweets').append($tweet);
});

const createTweetElement = function(tweetData) {
  const $tweet = $(`
  <section class="old-tweets">
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
    </section>
`);
  return $tweet;
};

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};



