import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Angus Gaukroger | Full-Stack Software Developer | Personal Portfolio",
  description: "Experienced Software Developer adept in bringing forth expertise in the design, testing and maintenance of software systems.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Angus Gaukroger, Software Developer, Full-Stack Developer, Web Development, Portfolio, Coding, Programming"
        />
        <meta name="author" content="Angus Gaukroger" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.angusgaukroger.com" />

        <meta
          property="og:title"
          content="Angus Gaukroger | Full-Stack Software Developer | Personal Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Angus Gaukroger's personal portfolio. Experienced Full-Stack Software Developer skilled in designing, testing, and maintaining software systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.angusgaukroger.com" />
        <meta
          property="og:image"
          content="/images/og-image.png"
        />
        <meta property="og:site_name" content="| Full-Stack Software Developer | Personal Portfolio" />

        {/* <meta name="twitter:card" content="summary_large_image"> */}
        {/* <meta name="twitter:site" content="@pitahayalabs" /> */}
        <meta
          name="twitter:title"
          content="The Pitahaya | Independent Travel, Tech, and Lifestyle Blog"
        />
        <meta
          name="twitter:description"
          content="Explore Angus Gaukroger's personal portfolio. Experienced Full-Stack Software Developer skilled in designing, testing, and maintaining software systems."
        />
        <meta
          name="twitter:image"
          content="https://www.yourpitahayasite.com/images/twitter-image.jpg"
        />

        <link rel="icon" href="/seo/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/seo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/seo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/seo/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/seo/favicon-chrome'192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/seo/favicon-chrome'512x512.png"
        />
        <link rel="manifest" href="/seo/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}</body>

    </html>
  )
}
