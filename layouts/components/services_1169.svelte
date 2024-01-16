<script>
    export let subtitle, title, description, project1, project2, project3, button;
</script>
<!-- ============================================ -->
<!--                  Services                    -->
<!-- ============================================ -->

<section id="services-1169">
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
                  srcset="{project1.image_m}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{project1.image_t}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{project1.image}"
                  alt="{project1.imageALT}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{project1.title}</h3>
            <p class="cs-item-text">
               <strong><i>{project1.subtitle}</i></strong><br>
                {project1.description}
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
                    srcset="{project2.image_m}">
              <!--Tablet and above Image-->
              <source
                    media="(min-width: 601px)"
                    srcset="{project2.image_t}">
              <img
                    loading="lazy"
                    decoding="async"
                    src="{project2.image}"
                    alt="{project2.imageALT}"
                    width="413"
                    height="240"
                    aria-hidden="true">
            </picture>
            <div class="cs-info">
              <h3 class="cs-h3">{project2.title}</h3>
              <p class="cs-item-text">
              <strong><i>{project2.subtitle}</i></strong><br>
                {project2.description}
              </p>
             <!--  <a href="." class="cs-link">
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
                  srcset="{project3.image_m}">
            <!--Tablet and above Image-->
            <source
                  media="(min-width: 601px)"
                  srcset="{project3.image_t}">
            <img
                  loading="lazy"
                  decoding="async"
                  src="{project3.image}"
                  alt="{project3.imageALT}"
                  width="413"
                  height="240"
                  aria-hidden="true">
          </picture>
          <div class="cs-info">
            <h3 class="cs-h3">{project3.title}</h3>
            <p class="cs-item-text">
            <strong><i>{project3.subtitle}</i></strong><br>
              {project3.description}
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
      <a href={button.url} class="cs-button-solid">{button.title}</a>
    </div>
  </section>
                                