<script>
    export let title1, title2, description, question, cta, phone, email, form;
</script>
<!-- ============================================ -->
<!--                    Form  486                 -->
<!-- ============================================ -->

<section id="cs-contact-486">
    <div class="cs-container">
        <div class="cs-content">
            <h2 class="cs-title">{title1} <span class="cs-color">{title2}</span></h2>
            <p class="cs-text">
                {description}
            </p>
            <span class="cs-heading">{question}</span>
            <span class="cs-heading">{cta}</span>
            <a href="tel:{phone.number}" class="cs-link">{phone.number}</a>
            <a href="mailto:{email.address}" class="cs-link">{email.address}</a>
        </div>
        <!--Form-->
        <form id="cs-form-486" name="Contact Form" method="post">
            <h3 class="cs-h3">{form.title}</h3>
            <label class="cs-label">
                {form.name}
                <input class="cs-input" required type="text" id="name-486" name="name" placeholder="{form.name}">
            </label>
            <label class="cs-label">
                {form.phone}
                <input class="cs-input" required type="text" id="phone-486" name="phone" placeholder="{form.phone}">
            </label>
            <label class="cs-label">
                {form.email}
                <input class="cs-input" required type="text" id="email-486" name="email" placeholder="{form.email}">
            </label>
            <label class="cs-label">
               {form.label1}
                <input class="cs-input" type="text" id="find-486" name="find-us" placeholder="{form.label1}">
            </label>
            <label class="cs-label cs-label-message">
                {form.label2}
                <select name="cars" id="cs-select-486">
                    <option value="full renovation">{form.option1}</option>
                    <option value="sod install">{form.option2}</option>
                    <option value="yard cleanup">{form.option3}</option>
                    <option value="landscape design">{form.option4}</option>
                </select>
            </label>
            <button class="cs-button-solid cs-submit" type="submit">{form.button}</button>
        </form>
    </div>
</section>
                                