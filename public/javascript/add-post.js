async function newFormHandler(event) {
  event.preventDefault();
//  TODO: WHAT TO DO ABOUT POST_URL  
  const title = document.querySelector('input[name="post-title"]').value;
  const post_contents = document.querySelector('input[name="post-contents"]').value;
//  TODO: WHAT TO DO ABOUT POST_URL  
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_contents
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
