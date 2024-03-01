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
  // console.log(data.data);
  data.data.forEach((item) => {
    console.log(item);

    const newsContainer = document.getElementById("news-container");
    const div = document.createElement("div");
    div.classList.add("card-container");
    div.innerHTML = `
    
        <div class="flex gap-3 shadow-xl">
          <figure class="w-2/5">
            <img
              class="w-full h-full"
              src="${item?.image_url}"
              alt="Album" />
          </figure>
          <div class="basis-full p-10">
            <div class="flex justify-between gap-2">
              <h2 class="text-3xl font-bold">${item?.title}</h2>
              <p class="shrink-0">
                ${item?.rating?.badge} <sup class="badge badge-primary">${
      item?.rating?.number
    }</sup>
              </p>
            </div>
            <p class="py-5 text-justify">
             ${item?.details.slice(0, 200)}
            </p>
            <div class="flex justify-between">
              <!-- author details -->
              <div class="flex items-center gap-4">
                <img
                  class="w-[80px] h-[80px] rounded-full"
                  src="${item?.author?.img}"
                  alt="" />
                <div>
                  <h4 class="capitalize text-xl font-bold">${
                    item?.author?.name
                  }</h4>
                  <p>Date: ${item?.author?.published_date}</p>
                </div>
              </div>
              <!-- view details -->
              <div class="flex items-center gap-6">
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 h-10">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <span class="text-lg font-bold">${item?.total_view}</span>
                </div>
                <button class="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>`;

    newsContainer.appendChild(div);
  });
};

loadNews();
loadCategory();
