fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))

// то такой запрос вернёт
{
id: 101,
title: 'foo',
body: 'bar',
userId: 1
}