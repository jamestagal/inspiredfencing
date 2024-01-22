<script>
    export let subtitle, title, description, button, picture;
</script>
<!-- ============================================ -->
<!--                    CTA                       -->
<!-- ============================================ -->

<section id="cta-403">
    <div class="cs-container">
        <div class="cs-content">
            <span class="cs-topper">{subtitle}</span>
            <h2 class="cs-title">{title}</h2>
            <p class="cs-text">
                {description}
            </p>
            <a href="{button.url}" class="cs-button-solid">{button.title}</a>
        </div>
    </div>
    <!--Background Image-->
    <picture class="cs-background">
        <source media="(max-width: 600px)" srcset="{picture.image_m.src}">
        <source media="(min-width: 601px)" srcset="{picture.image_t.src}">
        <img loading="lazy" decoding="async" src="{picture.image.url}" alt="{picture.image.alt}" width="1920" height="660" aria-hidden="true">
    </picture>
</section>
                                