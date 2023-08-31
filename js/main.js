const catagoryHandler = async () => {
  const getfecth = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const res = await getfecth.json();

  putdata(res);
};

const putdata = (res) => {
  const parent = document.getElementById("parent");
  const arrayData = res.data.news_category;
  arrayData.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
    <button id="clickCat" onclick="catagoryItem('${element.category_id}')">${element.category_name}</button>
    `;
    parent.appendChild(div);
  });
};

const catagoryItem = async (id) => {
  

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const data = await res.json();
  getData(data);
};

const getData = (data) => {

    const parent = document.getElementById('parent2');
    parent.innerHTML = '';

  data.data.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.classList.add('flex', 'p-3', 'h-76', 'bg-white', 'gap-4');
    div.innerHTML = `
    <div class="w-[20%] h-full">
            <img src="${element.thumbnail_url}" class="bg-cover" alt="" />
          </div>
          <div class="w-[89%] space-y-3">
            <h1 class="text-2xl font-bold">
              ${element.title
              }
            </h1>
            <div class="h-[170px] text-ellipsis overflow-hidden"><p class="">
            ${element.details}
          </p>
          </div>
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <img src="${element.author.img}" class="w-8 h-8 rounded-full" alt="">
                    <div>
                        <h3>${element.author.name}</h3>
                        <p>${element.author.published_date}</p>
                    </div>
                </div>
                <div>
                    <p><span><i class="fa-regular fa-eye"></i></span> ${element.total_view
                    }</p>
                </div>
                <div>
                <span>${element.rating.number

                }</span>
                <span>${element.rating.badge

                }</span>
                </div>
                <div><i class="fa-solid text-blue-500 fa-arrow-right"></i></div>
            </div>
          </div>
    `;
    parent.appendChild(div);
  });
};
catagoryHandler();

catagoryItem('01')
