let postInfo = "";

let post = [];

const createPost = () => {
  postInfo += `<div class="postWrapper">
  <h2 class="postTitle">Заголовок: ${post.title}</h2>
  <p class="postText">Статья: ${post.body}</p>
  </div>`
};

const postContainer = document.querySelector(".postContainer");

const addPost = () => {
  postContainer.innerHTML = postInfo;
}


fetch ('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {console.log(data);
  data.forEach(item => {post = item;
    createPost(item); 
    addPost()});
})
.catch(err => console.log(err));

