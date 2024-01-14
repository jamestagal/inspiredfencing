<script>
    export let subtitle, title, description, box, image, image_m, image_t, button, contact;
</script>
<!-- ============================================ -->
<!--            Side By Side Reverse              -->
<!-- ============================================ -->

<section id="sbsr-298">
    <div class="cs-container">
        <!-- Left Image Section -->
        <div class="cs-image-group">
            <!--Floating Box-->
            <div class="cs-box">
                <span class="cs-number">{box.number}</span>
                <span class="cs-desc">{box.description}</span>
                <!--Background image for cs-box-->
                <picture class="cs-box-picture">
                    <source media="(max-width: 600px)" srcset="{image_m.url}">
                    <source media="(min-width: 601px)" srcset="{image_t.url}">
                    <img loading="lazy" decoding="async" src="{image.url}" alt="{image.alt}" width="521" height="672" aria-hidden="true">
                </picture>
            </div>
            <!--Big Background Image-->
            <picture class="cs-picture">
                <source media="(max-width: 600px)" srcset="{image_m.url}">
                <source media="(min-width: 601px)" srcset="{image_t.url}">
                <img loading="lazy" decoding="async" src="{image.url}" alt="{image.alt}" width="521" height="672" aria-hidden="true">
            </picture>
        </div>
        <!-- Right Content Section-->
        <div class="cs-content">
            <span class="cs-topper">{subtitle}</span>
            <h2 class="cs-title">{title}</h2>
            {#each description as d}
            <p class="cs-text">
                {@html d.paragraph1}
                <br><br>
                {@html d.paragraph2}
            </p>
            {/each}
            <p class="cs-text">{contact.text} <a class="cs-link" href="tel:">{contact.number}</a></p>
            <a class="cs-button-solid" aria-label="learn more about our programs" href="{button.url}">{button.title}</a>
        </div>
    </div>
</section>
                                