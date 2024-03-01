<script>
    export let title, subtitle, description, card1, card2, card3, card4, button;
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
                        src="{card1.icon.url}" alt="{card1.icon.alt}"
                        width="48" height="48" />
                </picture>
                <h2 class="cs-h2">{card1.title}</h2>
                <p class="cs-item-text">
                    {card1.description}
                </p>
<!--                 <a href="." class="cs-link">
                    Read More
                    <img class="cs-arrow" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg" alt="icon"
                        width="20" height="20" aria-hidden="true" />
                </a> -->
            </li>
            <li class="cs-item">
                <picture class="cs-picture">
                    <img class="cs-icon" loading="lazy" decoding="async"
                        src="{card2.icon.url}" alt="{card1.icon.alt}" width="48"
                        height="48" />
                </picture>
                <h2 class="cs-h2">{card2.title}</h2>
                <p class="cs-item-text">
                    {card2.description}
                </p>
<!--                 <a href="." class="cs-link">
                    Read More
                    <img class="cs-arrow" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg" alt="icon"
                        width="20" height="20" aria-hidden="true" />
                </a> -->
            </li>
            <li class="cs-item">
                <picture class="cs-picture">
                    <img class="cs-icon" loading="lazy" decoding="async"
                        src="{card3.icon.url}" alt="{card3.icon.alt}" width="48"
                        height="48" />
                </picture>
                <h2 class="cs-h2">{card3.title}</h2>
                <p class="cs-item-text">
                    {card3.description}
                </p>
<!--                 <a href="." class="cs-link">
                    Read More
                    <img class="cs-arrow" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg" alt="icon"
                        width="20" height="20" aria-hidden="true" />
                </a> -->
            </li>
            <li class="cs-item">
                <picture class="cs-picture">
                    <img class="cs-icon" loading="lazy" decoding="async"
                        src="{card4.icon.url}" alt="{card4.icon.alt}" width="48"
                        height="48" />
                </picture>
                <h2 class="cs-h2">{card4.title}</h2>
                <p class="cs-item-text">
                    {card4.description}
                </p>
<!--                 <a href="." class="cs-link">
                    Read More
                    <img class="cs-arrow" loading="lazy" decoding="async"
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/red-arrow-right.svg" alt="icon"
                        width="20" height="20" aria-hidden="true" />
                </a> -->
            </li>
        </ul>
        <a class="cs-button-solid" aria-label="learn more about our programs" href="{button.url}">{button.title}</a>
    </div>
</section>