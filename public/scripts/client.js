$(document).ready(() => {
  const createTweetElement = function() {
    const $tweet = $(`<article class="tweet">Hello world</article>`);

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


  const $tweet = createTweetElement(tweetData);

  console.log($tweet);
  $('#tweet-container').append($tweet);

});

// const html = `
//     < header class="tweet-header" >
//     <div class="user-thumbnail">
//       <span><img class="avatar-image" src="/images/profile-hex.png"></span>
//       <span>Brody</span>
//     </div>
//     <span class="user-tagname">@BooBayley</span>
//   </header>
//   <div class="tweet-body">
//     <span class="tweet-content">Hello World!</span>
//   </div>
//   <footer class="tweet-footer">
//     <span class="tweet-age">10 days ago</span>
//     <span class="links">
//       <a href='#' class="tweet-icons">🏴</a>
//       <a href='#' class="tweet-icons">🔁</a>
//       <a href='#' class="tweet-icons">♥</a>
//     </span>
//   </footer>
//   `;

//     const tweetElement = $tweet.append(html);
//     return tweetElement;