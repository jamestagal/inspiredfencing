<script>
    export let title, subtitle, description, card1, card2, card3, card4;
  </script>
  
<!-- ============================================ -->
<!--                  Services  4 card            -->
<!-- ============================================ -->

<section id="services-1175">
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
                    <img class="cs-icon" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/alloy-wheel%201.svg" alt="icon"
                        width="48" height="48" />
                </picture>
                <h3 class="cs-h3">{card1.title}</h3>
                <p class="cs-item-text">
                    {card1.description}
                </p>
                <a href="." class="cs-link">
                    Read More
                    <img class="cs-arrow" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg" alt="icon"
                        width="20" height="20" aria-hidden="true" />
                </a>
            </li>
            <li class="cs-item">
                <picture class="cs-picture">
                    <img class="cs-icon" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/electric%201.svg" alt="icon" width="48"
                        height="48" />
                </picture>
                <h3 class="cs-h3">{card2.title}</h3>
                <p class="cs-item-text">
                    {card2.description}
                </p>
                <a href="." class="cs-link">
                    Read More
                    <img class="cs-arrow" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg" alt="icon"
                        width="20" height="20" aria-hidden="true" />
                </a>
            </li>
            <li class="cs-item">
                <picture class="cs-picture">
                    <img class="cs-icon" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-engine.svg" alt="icon" width="48"
                        height="48" />
                </picture>
                <h3 class="cs-h3">{card3.title}</h3>
                <p class="cs-item-text">
                    {card3.description}
                </p>
                <a href="." class="cs-link">
                    Read More
                    <img class="cs-arrow" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg" alt="icon"
                        width="20" height="20" aria-hidden="true" />
                </a>
            </li>
            <li class="cs-item">
                <picture class="cs-picture">
                    <img class="cs-icon" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-gear.svg" alt="icon" width="48"
                        height="48" />
                </picture>
                <h3 class="cs-h3">{card4.title}</h3>
                <p class="cs-item-text">
                    {card4.description}
                </p>
                <a href="." class="cs-link">
                    Read More
                    <img class="cs-arrow" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg" alt="icon"
                        width="20" height="20" aria-hidden="true" />
                </a>
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
  