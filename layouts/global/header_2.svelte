<script>
  export let title;

/*   let navActive;
  const toggleMenu = () => {
    navActive = !navActive;
  };  */

/*   let isActive = true;

function setActive(id) {
  activeItem.id = id;
  isActive = !isActive;
} */

  let activeItem = { id: "home", isActive: true };

  function setActive(item) {
    if (activeItem && activeItem.id !== item) {
      activeItem.isActive = false;
    }
    activeItem = { id: item, isActive: true };
  }
</script>

<!-- ============================================ -->
<!--                 Navigation                   -->
<!-- ============================================ -->

<header id="cs-navigation">
  <!--Nav Logo-->
  <a href="." {title} class="cs-logo" aria-label="back to home">
    <img
      src="media/images/logo.jpeg"
      alt="logo"
      width="210"
      height="29"
      aria-hidden="true"
      decoding="async"
    />
  </a>
  <!--Top Bar-->
  <ul class="cs-top-bar">
    <li class="cs-item">
      <picture class="cs-picture">
        <img
          class="cs-icon"
          src="media/svg/Icons_phone-green.svg"
          alt="Green phone icon"
          width="24"
          height="24"
          aria-hidden="true"
          decoding="async"
        />
      </picture>
      <div class="cs-flex">
        <span class="cs-header">Call Us Now</span>
        <a href="tel:+61 416 186 911" class="cs-link">0416 186 911</a>
      </div>
    </li>
    <li class="cs-item">
      <picture class="cs-picture">
        <img
          class="cs-icon"
          src="media/svg/Icons_mail-green.svg"
          alt="Green email icon"
          width="24"
          height="24"
          aria-hidden="true"
          decoding="async"
        />
      </picture>
      <div class="cs-flex">
        <span class="cs-header">Send A Message</span>
        <a href="mailto:inspiredfencing@outlook.com" class="cs-link">inspiredfencing@outlook.com</a>
      </div>
    </li>
    <li class="cs-item cs-remove">
      <picture class="cs-picture">
        <img
          class="cs-icon"
          src="media/svg/Icons_pin-green.svg"
          alt="Green location pin icon"
          width="24"
          height="24"
          aria-hidden="true"
          decoding="async"
        />
      </picture>
      <div class="cs-flex">
        <span class="cs-header">Visit Us At</span>
        <a href="." class="cs-link">Frankston Flinders Rd, 3912 Somerville, Victoria, Australia</a>
      </div>
    </li>
  </ul>
  <div class="cs-bottom-bar">
    <!--Navigation List-->
    <!-- svelte-ignore a11y-no-redundant-roles -->
    <nav class="cs-nav" role="navigation">
      <!--Mobile Nav Toggle-->
      <button class="cs-toggle" aria-label="mobile menu toggle">
        <div class="cs-box" aria-hidden="true">
          <span class="cs-line cs-line1" aria-hidden="true"></span>
          <span class="cs-line cs-line2" aria-hidden="true"></span>
          <span class="cs-line cs-line3" aria-hidden="true"></span>
        </div>
      </button>
      <!-- We need a wrapper div so we can set a fixed height on the cs-ul in case the nav list gets too long from too many dropdowns being opened and needs to have an overflow scroll. This wrapper acts as the background so it can go the full height of the screen and not cut off any overflowing nav items while the cs-ul stops short of the bottom of the screen, which keeps all nav items in view no matter how mnay there are-->
      <div class="cs-ul-wrapper">
        <!-- svelte-ignore a11y-role-supports-aria-props -->
        <ul id="cs-expanded" class="cs-ul" aria-expanded="false">
          <li on:click={() => setActive("home")} class:cs-active={activeItem === 'home'} class="cs-li">
            <a
              href="."
              class="cs-li-link {activeItem.id === 'home' ? 'cs-active' : ''}"
            >
              Home
            </a>
          </li>
          <li on:click={() => setActive("about")} class="cs-li">
            <a
              href="about"
              class="cs-li-link {activeItem.id === 'about' ? 'cs-active' : ''}"
            >
              About
            </a>
          </li>
          <li on:click={() => setActive("services")} class="cs-li">
            <a
              href="services"
              class="cs-li-link {activeItem.id === 'services'
                ? 'cs-active'
                : ''}"
            >
              Services
            </a>
          </li>
          <li on:click={() => setActive("areas")} class="cs-li">
            <a
              href="areas"
              class="cs-li-link {activeItem.id === 'areas'
                ? 'cs-active'
                : ''}"
            >
              Service Areas
            </a>
          </li>
          <li on:click={() => setActive("projects")} class="cs-li">
            <a
              href="projects"
              class="cs-li-link {activeItem.id === 'projects'
                ? 'cs-active'
                : ''}"
            >
              Projects
            </a>
          </li>
 <!--          <li on:click={() => setActive("news")} class="cs-li">
            <a
              href="news"
              class="cs-li-link {activeItem.id === 'news'
                ? 'cs-active'
                : ''}"
            >
              News
            </a>
          </li> -->
          <li on:click={() => setActive("gallery")} class="cs-li">
            <a
              href="gallery"
              class="cs-li-link {activeItem.id === 'gallery'
                ? 'cs-active'
                : ''}"
            >
              Gallery
            </a>
          </li>
          <li on:click={() => setActive("testimonials")} class="cs-li">
            <a
              href="testimonials"
              class="cs-li-link {activeItem.id === 'testimonials'
                ? 'cs-active'
                : ''}"
            >
              Testimonials
            </a>
          </li>
          <li on:click={() => setActive("contact")} class="cs-li">
            <a
              href="contact"
              class="cs-li-link {activeItem.id === 'contact'
                ? 'cs-active'
                : ''}"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <!--             <div class="cs-ul-wrapper">
                <ul id="cs-expanded" class="cs-ul" aria-expanded="false">
                    <li class="cs-li">
                        <a href="." class="cs-li-link cs-active">
                            Home
                        </a>
                    </li>
                    <li class="cs-li">
                        <a href="." class="cs-li-link">
                            About
                        </a>
                    </li>
                    <li class="cs-li">
                        <a href="." class="cs-li-link">
                            Services
                        </a>
                    </li>
                    <li class="cs-li">
                        <a href="." class="cs-li-link">
                            Weight Loss
                        </a>
                    </li>
                    <li class="cs-li">
                        <a href="." class="cs-li-link">
                            Aesthetics
                        </a>
                    </li>
                    <li class="cs-li">
                        <a href="." class="cs-li-link">
                            FAQ
                        </a>
                    </li>
                </ul>
            </div> -->
    </nav>
    <a href="." class="cs-button-solid cs-nav-button">Contact Us</a>
    <!--Dark Mode toggle, uncomment button code if you want to enable a dark mode toggle-->
    <!-- <button id="dark-mode-toggle" aria-label="dark mode toggle">
            <svg class="cs-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480" xml:space="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"/></svg>
            <img class="cs-sun" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsun.svg" decoding="async" alt="moon" width="15" height="15">
        </button> -->
  </div>
</header>
