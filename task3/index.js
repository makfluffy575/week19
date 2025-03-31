const inputTitle = document.querySelector(".inputTitlePost");

const inputText = document.querySelector(".inputTextPost");

let postInfo = "";

let post = [];

const createPost = () => {
  postInfo += `<div class="postWrapper">
  <h2 class="postTitle">Заголовок: ${post.title}</h2>
  <p class="postText">Статья: ${post.text}</p>
  </div>`
};

const postContainer = document.querySelector(".postContainer");

const addPost = () => {
  postContainer.innerHTML = postInfo;
}

document.querySelector(".btn").addEventListener("click", () => {
  class Post {
    constructor (title, text) {
      this.title = title;
      this.text = text;
    }
  }
  
  const postData = new Post();
  postData.title = inputTitle.value;
  postData.text = inputText.value;
  

inputText.value = "";
inputTitle.value = "";

  

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then(response => response.json())
.then(data => {console.log(data);
  post = data;
    createPost(); 
    addPost();
})
.catch(err => console.log(err))
});