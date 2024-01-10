<script>
    export let title, subtitle, image, image_m, image_t;
</script>
<!-- ============================================ -->
<!--                   Banner                     -->
<!-- ============================================ -->

<div id="banner-559">
    <div class="cs-container">
        <span class="cs-int-topper">{subtitle}</span>
        <span class="cs-int-title">{title}</span>
<!--         <div class="cs-breadcrumbs">
            <a href="." class="cs-link">Home</a>
            <a href="." class="cs-link cs-active">About</a>
        </div> -->
    </div>
    <!--Background Image-->
    <picture class="cs-background">
        <!--Mobile Image-->
        <source media="(max-width: 600px)" srcset="{image_m.url}">
        <!--Tablet and above Image-->
        <source media="(min-width: 601px)" srcset="{image_t.url}">
        <img loading="lazy" decoding="async" src="{image.url}" alt="{image.alt}" width="1296" height="235" aria-hidden="true">
    </picture>
</div>
                                