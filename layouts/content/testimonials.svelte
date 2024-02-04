<script>
    export let quote, banner, subtitle, title, description, button;
    // import Banner from "../components/banner_559.svelte";
</script>

<!-- ============================================ -->
<!--                   Banner 559                 -->
<!-- ============================================ -->

<div id="banner-559">
    <div class="cs-container">
        <span class="cs-int-topper">{banner.subtitle}</span>
        <span class="cs-int-title">{banner.title}</span>
<!--         <div class="cs-breadcrumbs">
            <a href="." class="cs-link">Home</a>
            <a href="." class="cs-link cs-active">About</a>
        </div> -->
    </div>
    <!--Background Image-->
    <picture class="cs-background">
        <!--Mobile Image-->
        <source media="(max-width: 600px)" srcset="{banner.image_m.url}">
        <!--Tablet and above Image-->
        <source media="(min-width: 601px)" srcset="{banner.image_t.url}">
        <img loading="lazy" decoding="async" src="{banner.image.url}" alt="{banner.image.alt}" width="1296" height="235" aria-hidden="true">
    </picture>
</div>
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
            {#each quote as quotes}
            <li class="cs-item">
                <img class="cs-icon" src="media/svg/green-quote-marks.svg" alt="quote icon" aria-hidden="true" width="40" height="38" loading="lazy" decoding="async">
                <h3 class="cs-h3">{quotes.title}</h3>
                <p class="cs-item-text">
                    {quotes.description}
                </p>
                <span class="cs-name">{quotes.name}</span>
                <span class="cs-job">{quotes.location}</span>
            </li>
            {/each}
        </ul>
        <a href="{button.url}" class="cs-button-solid">{button.title}</a>
    </div>
</section>
                                