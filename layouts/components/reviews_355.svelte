<script>
  export let subtitle, title, description, button, allContent;
  let testimonials = allContent.find(content => content.type === "testimonials");
</script>

<!-- ============================================ -->
<!--                   Reviews 355                -->
<!-- ============================================ -->

<section id="reviews-355">
  <div class="cs-container">
    <div class="cs-content">
      <span class="cs-topper">{subtitle}</span>
      <h2 class="cs-title">{title}</h2>
      <p class="cs-text">
        {description}
      </p>
    </div>
    <ul class="cs-card-group">
      {#each testimonials.fields.quote as testimonial}
      {#if testimonial.id === "1" || testimonial.id === "2" || testimonial.id === "3"}
        <li class="cs-item">
          <img
            class="cs-quote"
            aria-hidden="true"
            src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/quote-blue.svg"
            decoding="async"
            alt="quote icon"
            width="40"
            height="33"
          />
          <p class="cs-review">
            {@html testimonial.description
              ?.substring(0, 136)
              .replace(/(<([^>]+)>)/gi, "" ) + ' ...'}
          </p>
          <span class="cs-name">{testimonial.name}</span>
          <span class="cs-job">{testimonial.location}</span>
        </li>
        {/if}
      {/each}
    </ul>
    <a href={button.url} class="cs-button-solid">{button.title}</a>
  </div>
</section>
