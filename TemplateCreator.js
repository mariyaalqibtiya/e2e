/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../globals/Config';

const createHomePageContent = (restaurant) => `
  <article tabindex="0" class="posts_menu" aria-label="Go to Restaurant ${restaurant.name} the place is ${restaurant.city}. totally rating ${restaurant.rating}. description, ${restaurant.description}">
    <a href="#/restaurant/${restaurant.id}">
      <span class="posts_menu_kota">
          <h2><b>${restaurant.city}</b></h2>
      </span>

      <img id="post-menu_picture" class="lazyload"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="Restaurant Picture ${restaurant.name}">

      <div class="posts_menu_content">
        <p class="posts_menu_nilai" alt='this rating ${restaurant.rating}'>
          <span>⭐</span>${restaurant.rating}</p>
              
          <h1 class="post-menu_title" alt='Name of resto ${restaurant.name}'>
            <h1>${restaurant.name}</h1>
          </h1>
              
          <p class="posts_menu_deskripsi">${restaurant.description}</p>
      </div>
    </a>
  </article>
`;

const createDetailPageContent = (restaurant) => `
  <div class="resto_detail">
    <a href="/"><i class="fa-solid fa-right-to-bracket"></i> Kembali </a>
    <img id="detail_gambar" class="lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
    <div tabindex="0" class="resto_content">
      <h2 class="resto_judul">${restaurant.name}</h2>
      <p class="resto_deskripsi">${restaurant.description}</p>
      <p class="resto_nilai" alt='this rating ${restaurant.rating}'>
            <span>
            ⭐</span>${restaurant.rating}</p>
      <div class="resto_informasi">
        <br>
        <h3>Detail Information</h3>
        <br>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>Categories</h4>
        <p>${restaurant.categories
          .map((category) => category.name)
          .join(', ')}</p>
        <h4>Menu</h4>
        <p>=> Food <br> ${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
        <p>=> Drink <br>${restaurant.menus.drinks
          .map((drink) => drink.name)
          .join(', ')}</p>
        </div>
    </div>

    <div tabindex="0" id="review__form" class="resto_review">
        <h4>Customer Reviews</h4>
        <div id="review_container">
        ${restaurant.customerReviews
          .map(
            (review) => `
          <div class="review_items">
          <div class="review_heder">
            <p>${review.name}</p>
            <p>${review.date}</p>
          </div>
            <p>${review.review}</p>
          </div>
        `
          )
          .join('')}
          </div>
          </div>
  </div>
`;

const createReviewTemplate = (review) => `
<div class="review">
<div class="review__heder">
  <p>${review.name}</p>
  <p>${review.date}</p>
</div>
  <p>${review.review}</p>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoadingTemplate = () => `
  <div class="load">
    <strong><h1>loading lama........</h1></strong>
  </div>
`;

export {
  createHomePageContent,
  createDetailPageContent,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
  createLoadingTemplate,
  createReviewTemplate,
};
