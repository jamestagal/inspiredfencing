<script>
    export let subtitle, title, description, phone, email, address;
</script>
<!-- ============================================ -->
<!--                   Contact 1392               -->
<!-- ============================================ -->

<section id="contact-1392">
    <div class="cs-container">
        <div class="cs-content">
            <span class="cs-topper">{subtitle}</span>
            <h2 class="cs-title">{title}</h2>
            <p class="cs-text">
               {description}
            </p>
            <ul class="cs-ul">
                <li class="cs-li">
                    <picture class="cs-icon-wrapper">
                        <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-76.svg" alt="phone icon" class="cs-icon" width="40" height="40" decoding="async">
                    </picture>
                    <div class="cs-flex-group">
                        <span class="cs-header">{phone.title}</span>
                        <a href="tel:{phone.number}
                        " class="cs-link">{phone.number}
                        </a>
                    </div>
                </li>
                <li class="cs-li">
                    <picture class="cs-icon-wrapper">
                        <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mail-76.svg" alt="address icon" class="cs-icon" width="40" height="40" decoding="async">
                    </picture>
                    <div class="cs-flex-group">
                        <span class="cs-header">{email.title}</span>
                        <a href="mailto:{email.address}" class="cs-link">{email.address}</a>
                    </div>
                </li>
                <li class="cs-li">
                    <picture class="cs-icon-wrapper">
                        <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/pin-76.svg" alt="address icon" class="cs-icon" width="40" height="40" decoding="async">
                    </picture>
                    <div class="cs-flex-group">
                        <span class="cs-header">{address.title}</span>
                        <a href="." class="cs-link">{address.location}</a>
                    </div>
                </li>
            </ul>
        </div>
        <!--Form-->
        <form class="cs-form" id="cs-form-1392" name="Contact Form" method="post">
            <h3 class="cs-h3">Enquire Now</h3>
            <label class="cs-label">
                Name
                <input class="cs-input" required type="text" id="name-1392" name="name" placeholder="Name">
            </label>
            <label class="cs-label cs-email">
                Email
                <input class="cs-input" required type="email" id="email-1392" name="email" placeholder="Email">
            </label>
            <label class="cs-label cs-phone">
                Phone
                <input class="cs-input" required type="number" id="phone-1392" name="phone" placeholder="Phone">
            </label>
            <label class="cs-label">
                Message
                <textarea class="cs-input cs-textarea" required name="Message" id="message-1392" placeholder="Write message..."></textarea>
            </label>
            <button class="cs-button-solid cs-submit" type="submit">Send Message</button>
        </form>
    </div>
</section>