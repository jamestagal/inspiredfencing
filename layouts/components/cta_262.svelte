<script>
    export let banner, picture;
</script>
<!-- ============================================ -->
<!--                    CTA                       -->
<!-- ============================================ -->

<section id="cta-262">
    <div class="cs-container">
        <div class="cs-left-section">
            <h2 class="cs-title">{banner.title}</h2>
            <a href="{banner.button.url}" class="cs-button-solid">{banner.button.title}</a>
        </div>
        <div class="cs-content">
            <span class="cs-header">{banner.hours}</span>
            <p class="cs-p"> 
                {banner.days}
            </p>
            <p class="cs-p">
                {banner.comment}
            </p>
        </div>
        <picture class="cs-background">
            <source media="(max-width: 600px)" srcset="{picture.image_m.src}">
            <source media="(min-width: 601px)" srcset="{picture.image_t.src}">
            <img aria-hidden="true" loading="lazy" decoding="async" src="{picture.image.url}" alt="{picture.image.alt}" width="275" height="132">
        </picture>
    </div>
</section>
                                