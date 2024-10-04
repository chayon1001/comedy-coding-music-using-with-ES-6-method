const allPostLoad = async (category) => {


    // console.log(`https://openapi.programming-hero.com/api/retro-forum/posts${category? `?category=${category}`:''}`)
    // if(category){
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts?category= ${category}`)
    // }
    // else{
    //     console.log(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    // }


    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`);
    const data = await res.json();
    displayAllPost(data.posts)
}

const displayAllPost = (posts) => {
    console.log(posts)

    const showPost = document.getElementById("post-container");

    posts.forEach((post) => {
        const div = document.createElement('div');
        div.innerHTML = `

              <div class="bg-white rounded-lg shadow-2xl p-6 w-full ">
              <!-- Image section -->
              <div class="flex items-center mb-4">
                <img src= ${post.image} alt="Card Image" class="w-16 h-16 rounded-full">
                <div class="ml-4">
                  <span class="text-gray-500 text-sm"># ${post.category}</span><br>
                  <span class="text-gray-700 font-bold text-sm">Author: ${post.author.name}</span>
                </div>
              </div>
              <!-- Title -->
              <h2 class="text-gray-800 text-lg font-semibold mb-2">${post.title}</h2>
              <!-- Description -->
              <p class="text-gray-500 text-sm mb-4">${post.description}</p>
              <!-- Stats Section -->
              <div class="flex items-center text-gray-400 text-sm">
                <div class="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="w-5 h-5 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h2M12 2v4m0 4a2 2 0 100-4 2 2 0 100 4z" />
                  </svg>
                  <span>${post.comment_count}</span>
                </div>
                <div class="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="w-5 h-5 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 10l4.553-2.276a1 1 0 011.447.894v10.764a1 1 0 01-1.447.894L15 18m0 0l-4.553 2.276A1 1 0 019 19.894V9.106a1 1 0 011.447-.894L15 10z" />
                  </svg>
                  <span>${post.view_count}</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="w-5 h-5 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M5 10h14a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1z" />
                  </svg>
                  <span>${post.posted_time} Min</span>
                </div>
              </div>
            </div>

        `

        showPost.appendChild(div)
    })
}

allPostLoad();

const searchByCategory = () => {
    const searchButton = document.getElementById('searchPosts').value;
    allPostLoad(searchButton);
}

