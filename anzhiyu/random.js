var posts=["2024/08/15/daily_photo/","2024/08/11/try/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };