const loadNewsCategories = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch (url);
    const data = await res.json();
    return data.data.news_category
}

const setAllMenu = async() => {
    const data = await loadNewsCategories();
    const menu = document.getElementById("all-menu");
     for(const news of data){
        // console.log(news.category_name)
        const li = document.createElement("li");
        li.innerHTML = `<a>${news.category_name}</a>`;
        menu.appendChild(li);
     }
}
setAllMenu();
// loadNewsCategories();

