<script>
  export let env;
</script>

<head>
  <!--Standard meta tags-->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <!--Swap our for actual link-->
  <link rel="canonical" href="https://inspiredfencing.com.au" />
  <meta
    name="keywords"
    content="Fencing Expert, Fencing, Gates, Colorbond Fencing, Fence Repair, Fence Removal, Fence Contractors, Fence Replacement, Mornington Peninsula, Somerville"
  />
  <meta
    name="description"
    content="Inspired Fencing is a family owned and operated fencing contractor builting bespoke fence installations and repair services at affordable prices based in Somerville on Mornington Peninsula."
  />
  <title
    >Fencing Expert in Mornington Peninsula & South East Melbourne | Inspired
    Fencing</title
  >
  <base href={env.baseurl} />
  <!--Social Media Display-->
  <meta
    property="og:title"
    content="Inspired Fencing | Fencing Expert in Mornington Peninsula & South East Melbourne"
  />
  <meta
    property="og:description"
    content="Inspired Fencing is a family owned and operated fencing contractor builting bespoke fence installations and repair services at affordable prices based in Somerville on Mornington Peninsula."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://inspiredfencing.com.au" />
  <meta property="og:image" content="media/images/InspiredFencing-logo.jpeg" />
  <meta
    property="og:image:secure_url"
    content="media/images/InspiredFencing-logo.jpeg"
  />
  <!--Favicons-->
  <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="media/favicon/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="media/favicon//favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="media/favicon//favicon-16x16.png"
  />
  <link rel="manifest" href="media/favicon//site.webmanifest" />
  <link
    rel="mask-icon"
    href="media/favicon//safari-pinned-tab.svg"
    color="#5bbad5"
  />
  <meta name="msapplication-TileColor" content="#00a300" />
  <meta name="theme-color" content="#ffffff" />

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

  <link rel="icon" type="image/svg+xml" href="media/favicon/4.ico" />
  <link rel="stylesheet" href={`${env.entrypointJS}/bundle.css`} />
  <link
    rel="stylesheet preload"
    href="fonts/roboto-v29-latin-regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
</head>
