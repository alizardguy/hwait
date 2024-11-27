console.log("start")
(async () => {
    document.getElementById('search').addEventListener('keyup', (event) => {
      const searchString = event.target.value.toLowerCase()
      const results = []
      posts.forEach((post) => {
        if (
          post.title.toLowerCase().includes(searchString) ||
          post.excerpt.toLowerCase().includes(searchString) ||
          post.keywords.toLowerCase().includes(searchString) ||
          post.tags.toLowerCase().includes(searchString)
        ) {
          results.push(`<a href="${post.url}">
            <h2>
              ${post.title}
            </h2>
            <p>
              ${post.excerpt}
            </p>
          </a>`)
        }
      })
  
      document.getElementById('results').innerHTML = results.join('')
    })
  
    const posts = await fetch('/search.json').then(res => res.json())
  })()