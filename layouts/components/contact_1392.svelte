<script>
  export let subtitle, title, description, phone, email, address, form;
 
   let isFormSubmitted = false;
  
   function handleSubmit() {
    // event.preventDefault(); // prevent the form from submitting normally
    isFormSubmitted = true;
  }
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
    {#if isFormSubmitted}
      <!-- Thank you page content -->
      <div class="my-content">
      <div class="thank-you">
        <h3 class="cs-title">Thank you for submitting a request!</h3>
        <p class="cs-text">
          Look out for an email confirmation and I'll get in touch as soon as
          possible
        </p>
      </div>
    </div>
    {:else}
      <!--Form-->
      <form
        on:submit={handleSubmit}
        action="https://docs.google.com/forms/d/e/1FAIpQLSdts38ZsMVVctU9aR6-muICqykNAY-PpcTDEwxTtoS7zXbEwA/formResponse"
        class="cs-form"
        id="cs-form-1392"
        name="Contact Form"
        method="post"
      >
        <h3 class="cs-h3">{form.title}</h3>
        <label class="cs-label">
          {form.name}
          <input
            class="cs-input"
            required
            type="text"
            id="name-1392"
            name="entry.2005620554"
            placeholder="Your name"
          />
        </label>
        <label class="cs-label cs-email">
          {form.email}
          <input
            class="cs-input"
            required
            type="email"
            id="email-1392"
            name="entry.1045781291"
            placeholder="Your email"
          />
        </label>
        <label class="cs-label cs-phone">
          {form.phone}
          <input
            class="cs-input"
            required
            type="number"
            id="phone-1392"
            name="entry.1166974658"
            placeholder="Your phone number"
          />
        </label>
        <label class="cs-label">
          {form.message}
          <textarea
            class="cs-input cs-textarea"
            required
            name="entry.839337160"
            id="message-1392"
            placeholder="Write a message..."
          ></textarea>
        </label>
        <button class="cs-button-solid cs-submit" type="submit"
          >{form.button}</button
        >
      </form>
    {/if}
  </div>
</section>

<style>

  .my-content {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .thank-you {
    background-color: #8fef8f;
    border: 2px dashed rgb(30, 186, 30);
    padding: 1em 2em;
  }
</style>
