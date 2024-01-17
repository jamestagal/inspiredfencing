<script>
    export let title1, title2, description, listTitle, list1, list2, list3, image_m, image_t, image, waves, button;
</script>
<!-- ============================================ -->
<!--                  Content Pge                 -->
<!-- ============================================ -->

<section id="content-page-713">
    <div class="cs-container">
        <div class="cs-content">
            <h1 class="cs-title">{title1} <br> <span style="color: var(--primary)">{title2}</span>
            </h1>
            {#each description as d}
            <p>
                {@html d.paragraph1}
                <br><br>
                {@html d.paragraph2}
            </p>
            {/each}
            <i>{listTitle}</i><br>
            <ol>
                <li><strong>{list1.title}</strong><br>
                <p>{list1.description}</p></li>
                <li><strong>{list2.title}</strong>
                    <p>{list2.description}</p></li>
                <li><strong>{list3.title}</strong><br>
                    <p>{list3.description}</p></li>
            </ol>
            <a href="{button.url}" class="cs-button-solid">{button.title}</a>
        </div>
        <div class="cs-image-group">
            <picture class="cs-picture">
                <!--Mobile Image-->
                <source media="(max-width: 600px)" srcset="{image_m.url}">
                <!--Tablet and above Image-->
                <source media="(min-width: 601px)" srcset="{image_t.url}">
                <img loading="lazy" decoding="async" src="{image.url}" alt="{image.alt}" width="570" height="680" aria-hidden="true">
            </picture>
        </div>
    </div>
    <!--Waves Graphic-->
    <picture class="cs-background">
        <img src="{waves.icon}" alt="{waves.altText}" decoding="async" aria-hidden="true" width="625" height="952">
    </picture>
</section>