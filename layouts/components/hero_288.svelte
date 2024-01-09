<script>
    export let title1, title2, title3, description, stat1, stat2, stat3, button, image, image_m, image_t;
</script>
<!-- ============================================ -->
<!--                   Hero                       -->
<!-- ============================================ -->

<section id="hero-288">
  <div class="cs-container">
    <div class="cs-content">
      <h1 class="cs-title">{title1} <span style="color: var(--primary)">{title2}</span> {title3}</h1>
      <p class="cs-text">
        {description}
      </p>
      <a href="{button.url}" class="cs-button-solid">{button.title}</a>
      <ul class="cs-stats-group">
        <li class="cs-item">
          <span class="cs-number">{stat1.number}</span>
          <span class="cs-desc">{stat1.desc}</span>
        </li>
        <li class="cs-item">
          <span class="cs-number">{stat2.number}</span>
          <span class="cs-desc">{stat2.desc}</span>
        </li>
        <li class="cs-item">
          <span class="cs-number">{stat3.number}</span>
          <span class="cs-desc">{stat3.desc}</span>
        </li>
      </ul>
    </div>
    <!--Hero Image-->
    <picture class="cs-picture">
      <source
        media="(max-width: 600px)"
        srcset="{image_m.url}"
      />
      <source
        media="(min-width: 601px)"
        srcset="{image_t.url}"
      />
      <source
        media="(min-width: 1024px)"
        srcset="{image.url}"
      />
      <img
        aria-hidden="true"
        decoding="async"
        src="{image.url}"
        alt="{image.alt}"
        width="630"
        height="814"
      />
    </picture>
    <!--Green Waves-->
    <picture class="cs-waves">
      <source
        media="(min-width: 1024px)"
        srcset="https://csimg.nyc3.digitaloceanspaces.com/Hero/waves.svg"
      />
      <source
        media="(min-width: 601px)"
        srcset="https://csimg.nyc3.digitaloceanspaces.com/Hero/waves-t.svg"
      />
      <source
        media="(max-width: 600px)"
        srcset="https://csimg.nyc3.digitaloceanspaces.com/Hero/waves-m.svg"
      />
      <img
        decoding="async"
        src="https://csimg.nyc3.digitaloceanspaces.com/Hero/waves.svg"
        alt="waves"
        width="645"
        height="1080"
        aria-hidden="true"
      />
    </picture>
  </div>
</section>
