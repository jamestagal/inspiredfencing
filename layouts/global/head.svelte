<script>
  export let env;
</script>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />

  <title>Home | Inspired Fencing</title>
  <base href={env.baseurl} />
  <script type="module" src={`${env.entrypointJS}/core/main.js`}></script>
  <script type="module" src="js/nav.js"></script>
  <script type="module" src="js/faq.js"></script>
  <!-- Custom styles -->
  <link rel="stylesheet" href="critical.css" />
  <link rel="stylesheet" href="global.css" />
  <noscript>
    <link rel="stylesheet" href="global.css" />
  </noscript>

  <link rel="icon" type="image/svg+xml" href="media/logo.svg" />
  <link rel="stylesheet" href={`${env.entrypointJS}/bundle.css`} />
  <link
    rel="stylesheet preload"
    href="fonts/roboto-v29-latin-regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
</head>
