<script>
    export let subtitle, title, description, listTitle, list1, list2, list3, list4, button, picture1, picture2, picture3, picture4, picture5, picture6, waves;
</script>
<!-- ============================================ -->
<!--                Side By Side                  -->
<!-- ============================================ -->

<section id="sbs-1255">
    <div class="cs-container">
        <div class="cs-content">
            <span class="cs-topper">{subtitle}</span>
            <h2 class="cs-title">{title}</h2>
            <p class="cs-text">
               {description}
            </p>
            <p class="cs-text"><i>{listTitle}</i></p>
            <ul class="cs-ul">
                <li class="cs-li">
                    <img class="cs-li-img" loading="lazy" decoding="async" src="{list1.icon}" alt="{list1.altText}" width="26" height="28" aria-hidden="true">
                    {list1.title}
                </li>
                <li class="cs-li">
                    <img class="cs-li-img" loading="lazy" decoding="async" src="{list2.icon}" alt="{list2.altText}" width="26" height="28" aria-hidden="true">
                    {list2.title}
                </li>
                <li class="cs-li">
                    <img class="cs-li-img" loading="lazy" decoding="async" src="{list3.icon}" alt="{list3.altText}" width="26" height="28" aria-hidden="true">
                    {list3.title}
                </li>
                <li class="cs-li">
                    <img class="cs-li-img" loading="lazy" decoding="async" src="{list4.icon}" alt="{list4.altText}" width="26" height="28" aria-hidden="true">
                    {list4.title}
                </li>
            </ul>
            <a href="{button.url}" class="cs-button-solid">{button.title}</a>
        </div>
        <div class="cs-image-group">
            <picture class="cs-picture cs-picture1">
                <!--Mobile Image-->
                <source media="(max-width: 600px)" srcset="{picture1.image_m.url}">
                <!--Tablet and above Image-->
                <source media="(min-width: 601px)" srcset="{picture1.image_t.url}">
                <img loading="lazy" decoding="async" src="{picture1.image.url}" alt="{picture1.image.alt}" width="203" height="203">
            </picture>
            <picture class="cs-picture cs-picture2">
                <!--Mobile Image-->
                <source media="(max-width: 600px)" srcset="{picture2.image_m.url}">
                <!--Tablet and above Image-->
                <source media="(min-width: 601px)" srcset="{picture2.image_t.url}">
                <img loading="lazy" decoding="async" src="{picture2.image.url}" alt="{picture2.image.alt}" width="207" height="207">
            </picture>
            <picture class="cs-picture cs-picture3">
                <!--Mobile Image-->
                <source media="(max-width: 600px)" srcset="{picture3.image_m.url}">
                <!--Tablet and above Image-->
                <source media="(min-width: 601px)" srcset="{picture3.image_t.url}">
                <img loading="lazy" decoding="async" src="{picture3.image.url}" alt="{picture3.image.alt}" width="214" height="214">
            </picture>
            <picture class="cs-picture cs-picture4">
                <!--Mobile Image-->
                <source media="(max-width: 600px)" srcset="{picture4.image_m.url}">
                <!--Tablet and above Image-->
                <source media="(min-width: 601px)" srcset="{picture4.image_t.url}">
                <img loading="lazy" decoding="async" src="{picture4.image.url}" alt="{picture4.image.alt}" width="223" height="223">
            </picture>
            <picture class="cs-picture cs-picture5">
                <!--Mobile Image-->
                <source media="(max-width: 600px)" srcset="{picture5.image_m.url}">
                <!--Tablet and above Image-->
                <source media="(min-width: 601px)" srcset="{picture5.image_t.url}">
                <img loading="lazy" decoding="async" src="{picture5.image.url}" alt="{picture5.image.alt}" width="287" height="287">
            </picture>
            <picture class="cs-picture cs-picture6">
                <!--Mobile Image-->
                <source media="(max-width: 600px)" srcset="{picture6.image_m.url}">
                <!--Tablet and above Image-->
                <source media="(min-width: 601px)" srcset="{picture6.image_t.url}">
                <img loading="lazy" decoding="async" src="{picture6.image.url}" alt="{picture6.image.alt}" width="203" height="203">
            </picture>
            <!--Stripe background-->
            <picture class="cs-waves-wrapper">
                <img class="cs-waves" loading="lazy" decoding="async" src="{waves.icon}" alt="{waves.altText}" width="650" height="933" aria-hidden="true">
            </picture>
        </div>
    </div>
</section>
                                