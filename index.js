function loadData() {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => showData(data.data.news_category))
    .catch((err) => console.log(err));

  function showData(datas) {
    datas.forEach((data) => {
      const linksTab = document.querySelector(".links");
      const div = document.createElement("div");

      div.innerHTML = `
      <a onclick="showNews('${data.category_id}')" href="#">${data.category_name}</a>
      `;
      linksTab.appendChild(div);
    });
  }
}
async function showNews(categoryId) {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await response.json();
  const dataArray = data.data;
  const container = document.querySelector(".container");
  container.innerHTML = "";
  dataArray.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
        <img
              src="${element?.image_url}"
              alt="super black car"
            />
            <div class="text-btn">
              <h2>${element?.title}</h2>
              <button type="submit">${element?.rating?.badge}</button>
            </div>
            <div class="time-tag">
              <p>Wednesday, Augest 24, 2022</p>
              <div class="tags">
                <p class="bold">Tags:</p>
                <p class="red">Biden</p>
                <p class="yellow">Ukraine</p>
                <p class="orange">President</p>
                <p class="green">Important</p>
              </div>
            </div>
            <div class="view">
                <p>Total View : ${
                  element.total_view ? element.total_view : "No View"
                }</p>
            </div>
            <div class="profile-img">
              <div class="left">
                <div class="dot">
                    <div class="img">
                        <img
                          class="profile"
                          src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                          alt=""
                        />
                      </div>
                </div>
                <div>
                  <p>${
                    element.author.name ? element.author.name : "Daivd Watson"
                  }</p>
                  <p>${
                    element.author.published_date
                      ? element.author.published_date
                      : "2025-08-24 17:27:34"
                  }</p>
                </div>
              </div>
              <div class="right">
                <div>
                  <button class="details" type="submit">DETAILS</button>
                </div>
              </div>
            </div>
        `;
    container.appendChild(div);
  });
}
loadData();
showNews("01");
