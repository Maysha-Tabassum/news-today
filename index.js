
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
  const notFound = document.getElementById("not-found");
  newsItemsContainer.innerText = "";
  notFound.textContent = "";

  if(newses.length === 0){
    // console.log('Not Found')
    notFound.innerHTML = `<h2 class="text-5xl text-center text-red-600 font-semibold">No News Found</h2>`
    return;
  }
  newses.forEach(category => {
    // console.log(category.category_id);
    const {thumbnail_url, title, details} = category
    const newsDiv = document.createElement('div')
    newsDiv.classList.add('card', 'card-side', 'bg-base-100', 'shadow-xl', 'mt-6')
    newsDiv.innerHTML = `
        
        <figure class="w-3/12"><img src="${thumbnail_url}" alt="Movie"></figure>
            <div class="card-body w-9/12">
              <h2 class="card-title">${title}</h2>
              <p>${details.length > 900 ? details.slice(0, 900) + '...' : details}</p>
              <div class=" card-actions justify-between gap-2">
              
                <label tabindex="0" class="btn btn-ghost btn-circle avatar flex">
                  <div class="w-10 rounded-full">
                    <img src="${category.author.img}" />
                  </div>
                  </label>
                  <div class="flex flex-col">
                  <span>${category.author.name}</span>
                  <span>${category.author.published_date}</span>

                  </div>
                  <div class="">
                  <div class="">Total Page Views</div>
                  <div class="font-bold">${category.total_view}M</div>
                  
                  </div>
                  <div class="rating">
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" checked />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                    <input type="radio" name="rating-1" class="mask mask-star" />
                  </div class="card-actions">
                  <label for="my-modal-3" onclick="showModal('${thumbnail_url}')" class="btn modal-button bg-red-600">Display</label>
                  </div>
              </div>
              `;
    newsItemsContainer.appendChild(newsDiv);
  })

}
 

const showModal = (thumbnail_url) => {
  // console.log(thumbnail_url);
  const modalBody = document.getElementById('modal-body');
  modalBody.textContent = ""; 
  modalBody.innerHTML = `
  <img src="${thumbnail_url}"/>
  `
}

// const loadNewsDetails = async news_id => {
//   const url = `https://openapi.programming-hero.com/api/news/${news_id}`
//   const res = await fetch(url);
//   const data = await res.json();
//   displayNewsDetails(data.data[0]);
// }

// const displayNewsDetails = (news) =>{
//   console.log(news);
//   const modalTitle = document.getElementById('newsDetailModalLabel')
//   modalTitle.innerText = "";
//   const newsDetails = document.getElementById('news-details');
//   newsDetails.innerHTML = `
//   <img src="${news.thumbnail_url}">
//   `;
   
// };        


loadNewsCategories('8');




  
