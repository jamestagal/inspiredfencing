<script>
  export let env;
</script>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />

  <title>Home | Inspired Fencing</title>
  <script type="module" src={`${env.entrypointJS}/core/main.js`}></script>
  <script type="module" src="js/nav.js"></script>
  <!-- Custom styles -->
  <link rel="stylesheet" href="critical.css" />
  <link
    rel="stylesheet"
    href="global.css"
    media="print"
    onload="this.media='all';this.onload=null;"
  />
  <nonscript>
    <link rel="stylesheet" href="global.css" />
  </nonscript>

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
