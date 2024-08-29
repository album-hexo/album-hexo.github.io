var posts=["2024/08/29/anzhiyu主题标签/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };