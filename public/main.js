const urlCopy = 'https://us-central1-omg-codemygear.cloudfunctions.net/comments/darby';
const message = document.getElementById('message');
const email = document.getElementById('email');

var commentList = document.getElementById('comments');
async function getComments() {
  var response = await fetch(urlCopy);
  var comments = await response.json();
  var listItems = "";
  comments.forEach(function(comment) {
    var listItem = `<li><strong>${comment.message}</strong> <div>By: ${comment.email}</div></li>`;
    listItems = listItems + listItem;
  });
  commentList.innerHTML = listItems;
}
getComments();

async function postComment() {
  var comment = {
    message: document.getElementById('message').value,
    email: document.getElementById('email').value,
  };
  try {
    var response = await fetch(urlCopy, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment),
    });
  } catch(e) {
    console.log(e);
  }
  getComments();
}
