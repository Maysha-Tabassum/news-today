
const loadNewsCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data.news_category));
}


const displayNews = (categories) => {
    const menuContainer = document.getElementById('all-menu');
    categories.forEach(category => {
        // console.log(category);
        const li = document.createElement('li');
        li.innerHTML = `<span onclick="getCategoryId('${category.category_id}')">${category.category_name}</span>`
        menuContainer.appendChild(li);
    });
//    console.log(displayNews);
}
const getCategoryId = (category_id) => {
    // console.log(catid);
     const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showNewsInCategory(data.data));

}
// console.log(showNewsInCategory);
const showNewsInCategory = (newses) => {
    console.log(newses);
    const newsItemsContainer = document.getElementById('news-items-container');
    newsItemsContainer.innerText="";
    newses.forEach(category => {
        // console.log(category.category_id);
        const newsDiv = document.createElement('div')
        newsDiv.classList.add('card', 'card-side', 'bg-base-100', 'shadow-xl', 'mt-6' )
        newsDiv.innerHTML = `
        
        <figure class="w-3/12"><img src="${category.thumbnail_url}" alt="Movie"></figure>
            <div class="card-body w-9/12">
              <h2 class="card-title">${category.title}</h2>
              <p>${category.details}</p>
              <div class="card-actions justify-end">
                <button class="btn bg-red-600 px-12">Details</button>
              </div>
            </div>
        
        `;
        newsItemsContainer.appendChild(newsDiv);
    })

}


loadNewsCategories();



