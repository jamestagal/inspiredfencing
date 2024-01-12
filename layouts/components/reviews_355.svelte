<script>
  export let subtitle, title, description, button, allContent;
  let testimonials = allContent.filter(
    (content) => content.type === "testimonials"
  );
</script>

<!-- ============================================ -->
<!--                   Reviews                    -->
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
      {#each testimonials as testimonial}
      {#if testimonial.fields.quote.id === 1}
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
            {@html testimonial.fields.quote.description
              .substring(0, 120)
              .replace(/(<([^>]+)>)/gi, "")}
          </p>
          <span class="cs-name">{testimonial.fields.quote.name}</span>
          <span class="cs-job">{testimonial.fields.quote.location}</span>
        </li>
        {/if}
      {/each}
    </ul>
    <a href={button.url} class="cs-button-solid">{button.title}</a>
  </div>
</section>
