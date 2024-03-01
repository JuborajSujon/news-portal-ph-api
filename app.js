const loadCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  // console.log(data.data.news_category);
  data.data.news_category.forEach((item) => {
    // console.log(item);

    const categoryContainer = document.getElementById("category-bar-container");
    // create a div
    const div = document.createElement("div");
    div.innerHTML = `
    <button class="btn btn-primary">${item.category_name}</button>
    `;
    categoryContainer.appendChild(div);
  });
};

const loadNews = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/category/01"
  );
  const data = await response.json();
  console.log(data.data);
};

loadNews();
loadCategory();
