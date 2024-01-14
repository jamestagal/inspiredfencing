<script>
    export let subtitle, title, description, cards;
</script>
<!-- ============================================ -->
<!--                   Process  4 steps          -->
<!-- ============================================ -->

<section id="process-688">
    <div class="cs-container">
        <div class="cs-content">
            <span class="cs-topper">{subtitle}</span>
            <h2 class="cs-title">{title}</h2>
            <p class="cs-text">
                {description}
            </p>
        </div>
        <ul class="cs-card-group">
            {#each cards as card, i}
            <li class="cs-item">
                <picture class="cs-picture">
                    <img class="cs-icon" loading="lazy" decoding="async" src="{card.icon.url}" alt="{card.icon.alt}" width="42" height="42">
                </picture>
                <h3 class="cs-h3">{card.title}</h3>
                <p class="cs-item-text">{card.blurb}</p>
            </li>
            {/each}
        </ul>
    </div>
    <!--SVG Waves-->
    <picture class="cs-background">
        <!--Mobile Image-->
        <source media="(max-width: 766px)" srcset="media/images/Paling.jpeg">
        <!--Tablet and above Image-->
        <source media="(min-width: 767px)" srcset="media/images/Feature_paling.jpeg">
        <img loading="lazy" decoding="async" src="media/images/Feature_paling.jpeg" alt="neighborhood" width="1354" height="555">
    </picture>
<!--     <img class="cs-background" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fripples.svg" aria-hidden="true" alt="svg waves" width="1280" height="568"> -->
</section>

