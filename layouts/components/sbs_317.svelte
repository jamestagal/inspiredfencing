<script>
    export let subtitle, title, description, image, image_m, image_t, button;
</script>
<!-- ============================================ -->
<!--                 Side By Side                 -->
<!-- ============================================ -->

<section id="sbs-317">
    <div class="cs-container">
        <!-- Left Image Section -->
        <picture class="cs-picture">
            <source media="(max-width: 600px)" srcset="{image_m.url}">
            <source media="(min-width: 601px)" srcset="{image_t.url}">
            <img loading="lazy" decoding="async" src="{image.url}" alt="{image.alt}" width="520" height="680" aria-hidden="true">
        </picture>
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
            <a class="cs-button-solid" aria-label="learn more about our programs" href="{button.url}">{button.title}</a>
           <!--  SVG Circles--
            <div class="cs-circles">
                <div class="cs-circle">
                    <!--Wrapped in a div so mobile positioning is easier--
                    <div class="cs-ring-wrapper">
                        <span class="cs-number">90%</span>
                        <!--Change the --ratio to the decimal percentage of this circle--
                        <svg class="cs-ring" style="--ratio: 0.90">
                            <circle cx="50%" cy="50%" r="50%"/>
                            <circle cx="50%" cy="50%" r="50%"/>
                        </svg>
                    </div>
                    <span class="cs-desc">Case Win</span>
                </div>
                <div class="cs-circle">
                    <div class="cs-ring-wrapper">
                        <span class="cs-number">75%</span>
                        <!--Change the --ratio to the decimal percentage of this circle-
                        <svg class="cs-ring" style="--ratio: 0.75">
                            <circle cx="50%" cy="50%" r="50%"/>
                            <circle cx="50%" cy="50%" r="50%"/>
                        </svg>
                    </div>
                    <span class="cs-desc">Settle</span>
                </div>
                <div class="cs-circle">
                    <div class="cs-ring-wrapper">
                        <span class="cs-number">30%</span>
                        <!--Change the --ratio to the decimal percentage of this circle--
                        <svg class="cs-ring" style="--ratio: 0.30">
                            <circle cx="50%" cy="50%" r="50%"/>
                            <circle cx="50%" cy="50%" r="50%"/>
                        </svg>
                    </div>
                    <span class="cs-desc">Case Pending</span>
                </div>
            </div> -->
        </div>
    </div>
</section>
                                