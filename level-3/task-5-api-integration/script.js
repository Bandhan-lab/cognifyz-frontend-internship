(() => {
  "use strict";
  const button = document.querySelector("#loadPosts");
  const status = document.querySelector("#apiStatus");
  const container = document.querySelector("#posts");
  // JSONPlaceholder gives us sample posts to practise working with an API.
  const endpoint = "https://jsonplaceholder.typicode.com/posts?_limit=6";

  function showMessage(message) {
    container.replaceChildren();
    const p = document.createElement("p");
    p.textContent = message;
    container.append(p);
  }

  // async/await lets us wait for the API response before showing the posts.
  async function loadPosts() {
    button.disabled = true;
    status.textContent = "Loading sample posts…";
    showMessage("Please wait while the API responds.");
    try {
      const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`The API returned HTTP ${response.status}.`);
      const posts = await response.json();
      if (!Array.isArray(posts)) throw new Error("The API response was not in the expected format.");
      container.replaceChildren();
      posts.forEach((post) => {
        const article = document.createElement("article");
        article.className = "post";
        const heading = document.createElement("h2");
        heading.textContent = post.title || "Untitled post";
        const paragraph = document.createElement("p");
        paragraph.textContent = post.body || "No post body provided.";
        article.append(heading, paragraph);
        container.append(article);
      });
      status.textContent = `Loaded ${posts.length} sample posts successfully.`;
    } catch (error) {
      // This message is shown if the request fails or the response is not usable.
      status.textContent = "Could not load data.";
      showMessage(`${error.message || "An unexpected error occurred."} Check your connection and try again.`);
    } finally {
      // Let the user try again after either success or failure.
      button.disabled = false;
    }
  }
  button.addEventListener("click", loadPosts);
})();