<script>
  export let subtitle, title, description, area_Options, area_Lists;

  let selected = area_Options[0]?.title;
</script>

<!-- ============================================ -->
<!--                    FAQ 1346                  -->
<!-- ============================================ -->
<section id="faq-1346">
  <div class="cs-container">
    <div class="cs-content">
      <span class="cs-topper">{subtitle}</span>
      <h2 class="cs-title">{title}</h2>
      <p class="cs-text">
        {description}
      </p>
    </div>
    <div class="cs-flex-group">
      <div class="cs-button-group">
        <!--If you need to add another button, make sure to copy and paste from one of the buttons here and increment the data-filter value, so the next one would be data-filter="four", and so on-->
        {#each area_Options as area_Option, i}
          <button
            class="cs-option{selected === area_Option ? ' cs-active' : ''}"
            on:click={() => (selected = area_Option)}
            data-filter={i}
          >
            {area_Option}
          </button>
        {/each}
      </div>
      <!--We need this wrapper so the absolutely positioned FAQ lists can be positioned to the top of it to so the animations don't amke it overlap the buttons group above it. We needed a wrapper div around it for the faq lists to be relatively positioned to in order to get the effect we wanted-->
      <div class="cs-wrapper">
        {#each area_Lists as area_List, i}
          <!--If you add more FAQ's, copy and paste of of the .cs-faq-grop lists and increment the data-category to the next number. We have three right now, if you added a fourth you'd change it to data-category="four" to correspond to the new button you created in the .cs-button-group. The filter and category data attributes need to match so they can work together-->
          <ul
            class="cs-faq-group{selected === area_List.title
              ? ''
              : ' cs-hidden'}"
            data-category={i}
          >
            <!-- Active class added as default -->
            <li class="cs-faq-item active">
              <div class="my-topper">
                <span class="cs-button-text">
                  {area_List.title}
                </span>
              </div>
              <p class="cs-item-p">
                {area_List.desc}
              </p>
              <ul class="ul cs-item-p">
                {#each area_List.items as item}
                  <li>
                    <span>{item}</span>
                  </li>
                {/each}
              </ul>
            </li>
          </ul>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .ul {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    padding: 0 clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 1.3vw, 1.5rem);
  }
  .my-topper {
    font-size: var(--topperFontSize);
    line-height: 1.2em;
    text-align: inherit;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: var(--primary);
    padding: 1rem;
    display: block;
  }
</style>
