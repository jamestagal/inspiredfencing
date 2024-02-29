<script>
  export let subtitle, title, description, phone, email, address, form;

/*    let isFormSubmitted = false;
  
   function handleSubmit(event) {
    console.log("Form submitted");
    isFormSubmitted = true;
    event.target.submit()
  } */
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
            <img
              aria-hidden="true"
              src={phone.icon}
              alt={phone.iconALT}
              class="cs-icon"
              width="40"
              height="40"
              decoding="async"
            />
          </picture>
          <div class="cs-flex-group">
            <span class="cs-header">{phone.title}</span>
            <a href="tel:{phone.number}" class="cs-link">{phone.number} </a>
          </div>
        </li>
        <li class="cs-li">
          <picture class="cs-icon-wrapper">
            <img
              aria-hidden="true"
              src={email.icon}
              alt={email.iconALT}
              class="cs-icon"
              width="40"
              height="40"
              decoding="async"
            />
          </picture>
          <div class="cs-flex-group">
            <span class="cs-header">{email.title}</span>
            <a href="mailto:{email.address}" class="cs-link">{email.address}</a>
          </div>
        </li>
        <li class="cs-li">
          <picture class="cs-icon-wrapper">
            <img
              aria-hidden="true"
              src={address.icon}
              alt={address.iconALT}
              class="cs-icon"
              width="40"
              height="40"
              decoding="async"
            />
          </picture>
          <div class="cs-flex-group">
            <span class="cs-header">{address.title}</span>
            <a href="." class="cs-link">{address.location}</a>
          </div>
        </li>
      </ul>
    </div>
       <!-- Thank you page content -->
<!--     {#if isFormSubmitted}
      <div class="my-content">
      <div class="thank-you">
        <h3 class="cs-title">Thank you for submitting a request!</h3>
        <p class="cs-text">
          We'll get in touch as soon as possible.
        </p>
      </div>
    </div>
    {:else} -->
      <!--Form-->
      <form
        data-netlify="true" 
        class="cs-form"
        id="cs-form-1392"
        name="Index Contact Form"
        method="POST"
      >
        <h3 class="cs-h3">{form.title}</h3>
        <label class="cs-label">
         {form.name}
          <input
            class="cs-input"
            required
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
          />
        </label>
        <label class="cs-label cs-email">
          {form.email}
          <input
            class="cs-input"
            required
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
        </label>
        <label class="cs-label cs-phone">
          {form.phone}
          <input
            class="cs-input"
            required
            type="number"
            id="phone"
            name="phone"
            placeholder="Your phone number"
          />
        </label>
        <label class="cs-label">
          {form.message}
          <textarea
            class="cs-input cs-textarea"
            required
            name="message"
            id="message"
            placeholder="Write a message..."
          ></textarea>
        </label>
        <button class="cs-button-solid cs-submit" type="submit"
          >{form.button}</button
        >
      </form>
    <!-- {/if} -->
  </div>
</section>

<style>

  .my-content {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }
  .thank-you {
    background-color: #8fef8f;
    border: 2px dashed rgb(30, 186, 30);
    padding: 1em 2em;
  }
  .hidden {
  display: none;
  }
</style>
