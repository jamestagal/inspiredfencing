<script>
  export let subtitle, title, description, card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, button;
</script>
<!-- ============================================ -->
<!--                  Services                    -->
<!-- ============================================ -->

<section id="services-1168">
    <div class="cs-container">
      <div class="cs-content">
        <span class="cs-topper">{subtitle}</span>
        <h2 class="cs-title">{title}</h2>
        <p class="cs-text">
            {description}
        </p>
      </div>
      <ul class="cs-card-group">
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card1.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card1.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card1.image.url}"
                  alt="{card1.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card1.title}</h3>
            <p class="cs-item-text">
              {card1.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card2.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card2.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card2.image.url}"
                  alt="{card2.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card2.title}</h3>
            <p class="cs-item-text">
              {card2.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card3.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card3.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card3.image.url}"
                  alt="{card3.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card3.title}</h3>
            <p class="cs-item-text">
              {card3.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card4.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card4.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card4.image.url}"
                  alt="{card4.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card4.title}</h3>
            <p class="cs-item-text">
              {card4.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card5.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card5.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card5.image.url}"
                  alt="{card5.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card5.title}</h3>
            <p class="cs-item-text">
              {card5.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card6.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card6.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card6.image.url}"
                  alt="{card6.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card6.title}</h3>
            <p class="cs-item-text">
              {card6.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card7.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card7.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card7.image.url}"
                  alt="{card7.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card7.title}</h3>
            <p class="cs-item-text">
              {card7.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card8.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card8.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card8.image.url}"
                  alt="{card8.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card8.title}</h3>
            <p class="cs-item-text">
              {card8.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card9.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card9.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card9.image.url}"
                  alt="{card9.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card9.title}</h3>
            <p class="cs-item-text">
              {card9.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card10.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card10.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card10.image.url}"
                  alt="{card10.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card10.title}</h3>
            <p class="cs-item-text">
              {card10.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card11.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card11.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card11.image.url}"
                  alt="{card11.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card11.title}</h3>
            <p class="cs-item-text">
              {card11.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
        <li class="cs-item">
          <picture class="cs-picture">
            <!--Mobile Image-->
            <source
                  media="(max-width: 600px)"
                  srcset="{card12.image_m.url}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{card12.image_t.url}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{card12.image.url}"
                  alt="{card12.image.alt}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{card12.title}</h3>
            <p class="cs-item-text">
              {card12.description}.
            </p>
<!--             <a href="." class="cs-link">
              Read More
              <img
                    class="cs-arrow"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg"
                    alt="icon"
                    width="20"
                    height="20"
                    aria-hidden="true">
            </a> -->
          </div>
        </li>
      </ul>
      <a href="{button.url}" class="cs-button-solid">{button.title}</a>
    </div>
</section>
