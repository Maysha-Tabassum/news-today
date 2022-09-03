
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
        li.innerHTML = `
        <span onclick="getCategoryId('${category.category_id}')">${category.category_name}</span>
        `;
        menuContainer.appendChild(li);
    });
//    console.log(displayNews);
}
const getCategoryId = (category_id) => {
    // console.log(catid);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data))

}

                                     


loadNewsCategories();



