<script>
  export let title, subtitle, description, card1, card2, card3, card4;
</script>

<!-- ============================================ -->
<!--                  Services                    -->
<!-- ============================================ -->

<section id="services-296">
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
        <a class="cs-link" href=".">
          <img
            class="cs-icon"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg"
            alt="icon"
            width=""
            height=""
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <h3 class="cs-h3">{card1.title}</h3>
          <p class="cs-item-text">
            {card1.description}
          </p>
        </a>
        <picture class="cs-image" aria-hidden="true">
          <source media="(max-width: 600px)" srcset={card1.image.url} />
          <source media="(min-width: 601px)" srcset={card1.image.url} />
          <img
            loading="lazy"
            decoding="async"
            src={card1.image.url}
            alt={card1.image.alt}
            width="413"
            height="266"
          />
        </picture>
      </li>

      <li class="cs-item">
        <a href="." class="cs-link">
          <img
            class="cs-icon"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg"
            alt="icon"
            width=""
            height=""
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <h3 class="cs-h3">{card2.title}</h3>
          <p class="cs-item-text">
            {card2.description}
          </p>
        </a>
        <picture class="cs-image" aria-hidden="true">
          <source media="(max-width: 600px)" srcset={card2.image.url} />
          <source media="(min-width: 601px)" srcset={card2.image.url} />
          <img
            loading="lazy"
            decoding="async"
            src={card2.image.url}
            alt={card2.image.alt}
            width="413"
            height="266"
          />
        </picture>
      </li>
      <li class="cs-item">
        <a href="." class="cs-link">
          <img
            class="cs-icon"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg"
            alt="icon"
            width=""
            height=""
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <h3 class="cs-h3">{card3.title}</h3>
          <p class="cs-item-text">
            {card3.description}
          </p>
        </a>
        <picture class="cs-image" aria-hidden="true">
          <source media="(max-width: 600px)" srcset={card3.image.url} />
          <source media="(min-width: 601px)" srcset={card3.image.url} />
          <img
            loading="lazy"
            decoding="async"
            src={card3.image.url}
            alt={card3.image.alt}
            width="413"
            height="266"
          />
        </picture>
      </li>
      <li class="cs-item">
        <a class="cs-link" href=".">
          <img
            class="cs-icon"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg"
            alt="icon"
            width=""
            height=""
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <h3 class="cs-h3">{card4.title}</h3>
          <p class="cs-item-text">
            {card4.description}
          </p>
        </a>
        <picture class="cs-image">
          <source media="(max-width: 600px)" srcset={card4.image.url} />
          <source media="(min-width: 601px)" srcset={card4.image.url} />
          <img
            loading="lazy"
            decoding="async"
            src={card4.image.url}
            alt={card4.image.alt}
            width="413"
            height="266"
            aria-hidden="true"
          />
        </picture>
      </li>
    </ul>
    <a href="." class="btn mt20"> our services</a>
  </div>
</section>

<style>
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  .btn {
    background-color: #73b21a;
    border: 2px solid #73b21a;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    height: 49px;
    letter-spacing: 1px;
    line-height: 49px;
    margin-bottom: 0;
    outline: 0;
    padding: 0 30px;
    text-align: center;
    text-transform: uppercase;
    text-wrap: nowrap;
    touch-action: manipulation;
    transition: all 300ms ease-in-out;
    transition-behavior: normal;
    user-select: none;
    vertical-align: top;
    white-space-collapse: collapse;
    z-index: 0;
  }

  .mt20 {
    margin-top: 20px;
  }

  @media only screen and (max-width: 1169px) {
    .btn {
      height: 40px;
      line-height: 38px;
      padding: 0 15px;
    }
  }

  @media only screen and (max-width: 767px) {
    .btn {
      letter-spacing: 0;
      text-transform: capitalize;
    }
  }

  a.btn {
    border-radius: 0;
    font-family: latobold;
    font-size: 15px;
  }
  .btn:is(:focus, :hover) {
    text-decoration: none;
  }
  /*   .btn:focus,
  .btn:hover {
    text-decoration: none;
  } */

  .btn:active {
    background-image: none;
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
  }

  .btn:is(active:focus, :focus)
  {
    outline-offset: -2px;
  }
/*   .btn:active:focus,
  .btn:focus {
    outline-offset: -2px;
  } */

  .btn:is(active:focus, :focus, :hover) {
    background-color: #fff;
    border-color: #73b21a;
    color: #73b21a;
    outline: 0;
  }
  /*  .btn:active:focus,
  .btn:focus,
  .btn:hover {
    background-color: #fff;
    border-color: #73b21a;
    color: #73b21a;
    outline: 0;
  } */
</style>