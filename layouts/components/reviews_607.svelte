<script>
  export let subtitle, title, description, button, allContent;
  let testimonials = allContent.find(
    (content) => content.type === "testimonials"
  );

  let RandomQuotes = allContent.filter((content) => content.type === "testimonials" && testimonials.fields.quote === "id");
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  RandomQuotes = shuffle(RandomQuotes);
  // import Banner from "../components/banner_559.svelte";
</script>

<!-- ============================================ -->
<!--                   Reviews  607               -->
<!-- ============================================ -->
<!-- <Banner /> -->
<section id="reviews-607">
  <div class="cs-container">
    <div class="cs-content">
      <span class="cs-topper">{subtitle}</span>
      <h2 class="cs-title">{title}</h2>
      <p class="cs-text">
        {description}
      </p>
    </div>
    <ul class="cs-card-group">
      {#each testimonials.fields.quote as testimonial, i}
        {#if RandomQuotes && i < 3}
          <li class="cs-item">
            <img
              class="cs-icon"
              src="media/svg/green-quote-marks.svg"
              alt="quote icon"
              aria-hidden="true"
              width="40"
              height="38"
              loading="lazy"
              decoding="async"
            />
            <h3 class="cs-h3">{testimonial.title}</h3>
            <p class="cs-item-text">
              {@html testimonial.description
                ?.substring(0, 155)
                .replace(/(<([^>]+)>)/gi, "") + " ..."}
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
