<script>
    export let title, button, waves;
</script>
<!-- ============================================ -->
<!--                     CTA                      -->
<!-- ============================================ -->

<section id="cta-697">
    <div class="cs-container">
        <div class="cs-content">
            <h2 class="cs-title">{title}</h2>
            <a href="{button.url}" class="cs-button-solid">{button.title}</a>
        </div>
    </div>
    <!--SVG Waves Background-->
    <img class="cs-background" src="{waves.url}" alt="{waves.alt}" width="1920" height="318" loading="lazy" decoding="async" aria-hidden="true">
</section>
                                