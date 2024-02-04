<script>
  export let subtitle, title, description, area_Options, area_Lists;

  let selected = area_Options[0];
</script>

<!-- ============================================ -->
<!--                    FAQ 1346                  -->
<!-- ============================================ -->
<section id="faq-1346">
  <div class="cs-container">
    <div class="cs-content">
      <span class="cs-topper">{subtitle}</span>
      <h2 class="cs-title">{title}</h2>
      <p class="cs-text">
        {description}
      </p>
    </div>
    <div class="cs-flex-group">
      <div class="cs-button-group">
        <!--If you need to add another button, make sure to copy and paste from one of the buttons here and increment the data-filter value, so the next one would be data-filter="four", and so on-->
        {#each area_Options as area_Option, i}
          <button
            class="cs-option{selected === area_Option ? ' cs-active' : ''}"
            on:click={() => (selected = area_Option)}
            data-filter={i}
          >
            {area_Option}
          </button>
        {/each}
      </div>
      <!--We need this wrapper so the absolutely positioned FAQ lists can be positioned to the top of it to so the animations don't amke it overlap the buttons group above it. We needed a wrapper div around it for the faq lists to be relatively positioned to in order to get the effect we wanted-->
      <div class="cs-wrapper">
        {#each area_Lists as area_List, i}
          <!--If you add more FAQ's, copy and paste of of the .cs-faq-grop lists and increment the data-category to the next number. We have three right now, if you added a fourth you'd change it to data-category="four" to correspond to the new button you created in the .cs-button-group. The filter and category data attributes need to match so they can work together-->
          <ul
            class="cs-faq-group{selected === area_List.title
              ? ''
              : ' cs-hidden'}"
            data-category={i}
          >
            <!-- Active class added as default -->
            <li class="cs-faq-item active">
              <div class="my-topper">
                <span class="cs-button-text">
                  {area_List.title}
                </span>
              </div>
              <p class="cs-item-p">
                {area_List.desc}
              </p>
              <ul class="ul cs-item-p">
                {#each area_List.items as item}
                  <li>
                    <span>{item}</span>
                  </li>
                {/each}
              </ul>
            </li>
          </ul>
        {/each}
        <!-- Copy all these to the top (or even better put them into a JSON content source)
                <ul id="casey" class="cs-faq-group" data-category="2">
                    <li class="cs-faq-item active">
                        <button class="cs-button">
                            <span class="cs-button-text">
                                Casey
                            </span>
                        </button>
                        <p class="cs-item-p">
                            As fastest growing municipality in Victoria the city of Casey has one of the highest demands for fence construction. We have built many fences across the region and will be doing so for many years to come. There are numerous developments and housing estates across Clyde, the new Brompton, Lochhaven and Amstel estates around Cranbourne and the Arcadia estate in Botanic Ridge. Here you will find paling fences with exposed pointed posts and capping and various driveway and entrance gates. You will find Colorbond with exposed timber posts and capping in Botanic Ridge as well as numerous other Colorbond fence styles across the Casey region.
                        </p>
                        <ul class="ul cs-item-p">
                            <li>
                                <span>Berwick</span></li>
                            <li>
                                <span>Blind Bight</span></li>
                            <li>
                                <span>Botanic Ridge</span></li>
                            <li>
                                <span>Cannons Creek</span></li>
                            <li>
                                <span>Clyde</span></li>
                            <li>
                                <span>Clyde North</span></li>
                            <li>
                                <span>Cranbourne</span></li>
                            <li>
                                <span>Cranbourne East</span></li>
                            <li>
                                <span>Cranbourne North</span></li>
                            <li>
                                <span>Cranbourne South</span></li>
                            <li>
                                <span>Cranbourne West</span></li>
                            <li>
                                <span>Devon Meadows</span></li>
                            <li>
                                <span>Doveton</span></li>
                            <li>
                                <span>Endeavour Hills</span></li>
                            <li>
                                <span>Eumemmerring</span></li>
                            <li>
                                <span>Hallam</span></li>
                            <li>
                                <span>Hampton Park</span></li>
                            <li>
                                <span>Harkaway</span></li>
                            <li>
                                <span>Junction Village</span></li>
                            <li>
                                <span>Lynbrook</span></li>
                            <li>
                                <span>Lyndhurst (part)</span></li>
                            <li>
                                <span>Lysterfield South</span></li>
                            <li>
                                <span>Narre Warren</span></li>
                            <li>
                                <span>Narre Warren North</span></li>
                            <li>
                                <span>Narre Warren South</span></li>
                            <li>
                                <span>Pearcedale (part)</span></li>
                            <li>
                                <span>Tooradin (part) and Warneet</span></li>
                        </ul>
                    </li>
                </ul>
                <ul class="cs-faq-group" data-category="3">
                    <li class="cs-faq-item active">
                        <button class="cs-button">
                            <span class="cs-button-text">
                                Cardinia
                            </span>
                        </button>
                        <p class="cs-item-p">
                            This is a rural and horticultural hinterland with farms, agriculture and product manufacturing and with a rapidly growing population. Cardinia Shire has many established and expanding housing estates across Pakenham, Officer, Tooradin, Koo Wee Rup and Lang Lang.
                        </p>
                        <ul class="ul cs-item-p">
                            <li>
                                <span>Avonsleigh</span></li>
                            <li>
                                <span>Bayles</span></li>
                            <li>
                                <span>Beaconsfield (part)</span></li>
                            <li>
                                <span>Beaconsfield Upper</span></li>
                            <li>
                                <span>Bunyip</span></li>
                            <li>
                                <span>Bunyip North</span></li>
                            <li>
                                <span>Caldermeade</span></li>
                            <li>
                                <span>Cardinia</span></li>
                            <li>
                                <span>Catani</span></li>
                            <li>
                                <span>Clematis</span></li>
                            <li>
                                <span>Cockatoo</span></li>
                            <li>
                                <span>Cora Lynn</span></li>
                            <li>
                                <span>Dalmore</span></li>
                            <li>
                                <span>Dewhurst</span></li>
                            <li>
                                <span>Emerald (part)</span></li>
                            <li>
                                <span>Garfield</span></li>
                            <li>
                                <span>Garfield North</span></li>
                            <li>
                                <span>Gembrook </span></li>
                            <li>
                                <span>Guys Hill</span></li>
                            <li>
                                <span>Heath Hill (part)</span></li>
                            <li>
                                <span>Iona</span></li>
                            <li>
                                <span>Koo Wee Rup</span></li>
                            <li>
                                <span>Koo Wee Rup North</span></li>
                            <li>
                                <span>Lang Lang (part)</span></li>
                            <li>
                                <span>Lang Lang East</span></li>
                            <li>
                                <span>Longwarry (part)</span></li>
                            <li>
                                <span>Maryknoll</span></li>
                            <li>
                                <span>Menzies Creek (part)</span></li>
                            <li>
                                <span>Modella (part)</span></li>
                            <li>
                                <span>Monomeith</span></li>
                            <li>
                                <span>Mount Burnett</span></li>
                            <li>
                                <span>Nangana</span></li>
                            <li>
                                <span>Nar Nar Goon</span></li>
                            <li>
                                <span>Nar Nar Goon North</span></li>
                            <li>
                                <span>Nyora (part)</span></li>
                            <li>
                                <span>Officer</span></li>
                            <li>
                                <span>Officer South</span></li>
                            <li>
                                <span>Pakenham</span></li>
                            <li>
                                <span>Pakenham South</span></li>
                            <li>
                                <span>Pakenham Upper</span></li>
                            <li>
                                <span>Rythdale</span></li>
                            <li>
                                <span>Tonimbuk</span></li>
                            <li>
                                <span>Tooradin (part)</span></li>
                            <li>
                                <span>Tynong</span></li>
                            <li>
                                <span>Tynong North</span></li>
                            <li>
                                <span>Vervale and Yannathan</span></li>
                        </ul>
                    </li>
                </ul>
                <ul class="cs-faq-group" data-category="4">
                    <li class="cs-faq-item active">
                        <button class="cs-button">
                            <span class="cs-button-text">
                                Kingston
                            </span>
                        </button>
                        <p class="cs-item-p">
                            A large area with many older homes needing fence replacement and repairs along with new builds and property sub divisions. Homes around the bayside of Kingston City can often demand the decorative or feature elements to its fences and gates. Decorative screens will also extra touch to the property. Properties. Industrial areas will have wire mesh security fencing and with many schools having steel and tubular fences.
                        </p>
                        <ul class="ul cs-item-p">
                            <li>
                                <span>Aspendale</span></li>
                            <li>
                                <span>Aspendale Gardens</span></li>
                            <li>
                                <span>Bonbeach</span></li>
                            <li>
                                <span>Braeside</span></li>
                            <li>
                                <span>Carrum</span></li>
                            <li>
                                <span>Chelsea</span></li>
                            <li>
                                <span>Chelsea Heights</span></li>
                            <li>
                                <span>Cheltenham (part)</span></li>
                            <li>
                                <span>Clarinda</span></li>
                            <li>
                                <span>Clayton South</span></li>
                            <li>
                                <span>Dingley Village</span></li>
                            <li>
                                <span>Edithvale&nbsp;</span></li>
                            <li>
                                <span>Heatherton&nbsp;Highett (part)</span></li>
                            <li>
                                <span>Mentone</span></li>
                            <li>
                                <span>Moorabbin</span></li>
                            <li>
                                <span>Moorabbin Airport</span></li>
                            <li>
                                <span>Mordialloc</span></li>
                            <li>
                                <span>Oakleigh South (part)</span></li>
                            <li>
                                <span>Parkdale</span></li>
                            <li>
                                <span>Patterson Lakes and Waterways</span></li>
                        </ul>
                    </li>
                </ul>
                <ul class="cs-faq-group" data-category="5">
                    <li class="cs-faq-item active">
                        <button class="cs-button">
                            <span class="cs-button-text">
                                Bass Coast
                            </span>
                        </button>
                        <p class="cs-item-p">
                            This is an area with two main industries: tourism and agriculture. With one of the highest growth rates in Victoria during peak holiday periods the population can grow to over 60000 in this area where the beautiful coastline meets the hinterland. With upcoming developments in Grantville, Coronet Bay and Philip Island, we are seeing many new paling fences gates and other fence styles in these areas as well wired fencing across acreages.
                        </p>
                        <ul class="ul cs-item-p">
                            <li>
                                <span>Bass</span></li>
                            <li>
                                <span>Coronet Bay</span></li>
                            <li>
                                <span>Cowes</span></li>
                            <li>
                                <span>Dalyston</span></li>
                            <li>
                                <span>Grantville</span></li>
                            <li>
                                <span>Inverloch</span></li>
                            <li>
                                <span>Jam Jerrup</span></li>
                            <li>
                                <span>Lang Lang</span></li>
                            <li>
                                <span>Loch</span></li>
                            <li>
                                <span>Newhaven</span></li>
                            <li>
                                <span>North Wonthaggi</span></li>
                            <li>
                                <span>Pioneer Bay</span></li>
                            <li>
                                <span>Rhyll</span></li>
                            <li>
                                <span>San Remo</span></li>
                            <li>
                                <span>Silverleaves</span></li>
                            <li>
                                <span>Smiths Beach</span></li>
                            <li>
                                <span>The Gurdies</span></li>
                            <li>
                                <span>Wonthaggi</span></li>
                            <li>
                                <span>Woolamai</span></li>
                        </ul>
                    </li>
                </ul>
                <ul class="cs-faq-group" data-category="6">
                    <li class="cs-faq-item active">
                        <button class="cs-button">
                            <span class="cs-button-text">
                                Baw Baw
                            </span>
                        </button>
                        <p class="cs-item-p">
                            A predominantly rural area Baw Baw comprises of industry including horticulture, dairy farming and forestry. This area is seeing more urban growth particularly in the Drouin and Warragul areas, with new estates requiring fencing including paling and colorbond styles, driveway and entry gates
                        </p>
                    </li>
                </ul>
                <ul class="cs-faq-group cs-hidden" data-category="7">
                    <li class="cs-faq-item active">
                        <button class="cs-button">
                            <span class="cs-button-text">
                                South Gippsland
                            </span>
                        </button>
                        <p class="cs-item-p">
                            A widespread area of rural and farming land, South Gippsland has an array of retail trade, fishing hospitality and tourism. This region requires a mixture of all fences and gates including residential, farming, commercial along with public recreational areas.
                        </p>
                    </li>
                </ul>
                -->
      </div>
    </div>
  </div>
</section>

<style>
  .ul {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    padding: 0 clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 1.3vw, 1.5rem);
  }
  .my-topper {
    font-size: var(--topperFontSize);
    line-height: 1.2em;
    text-align: inherit;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: var(--primary);
    padding: 1rem;
    display: block;
  }
</style>
