const post = document.querySelector("#post");
  const form = document.querySelector("form[data-create-post]");
  const postTime = document.querySelectorAll("div[data-post-trim]");
  form.addEventListener("submit", (e) => {
    if (post.value == "") {
      e.preventDefault();
      console.log("Fill the post first");
    }
  });
  postTime.forEach((post) => {
    post.innerHTML = post.innerHTML.slice(0, 25);
  });