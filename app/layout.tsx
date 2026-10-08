import type React from "react"
import { Roboto } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Tommaso Tamburini - 2D Animator & Storyboard Artist | Disney, Netflix, Fox Animation",
  description:
    "Tommaso Tamburini is a professional 2D Animator and Storyboard Artist from Italy with 7+ years experience. Worked with Disney, Netflix, Fox Animation, Cartoon Network, Toei Animation on Disenchanted, Central Park, One Piece, and more.",
  keywords:
    "Tommaso Tamburini, 2D animator, storyboard artist, Disney animator, Netflix animator, animation portfolio, Italian animator, Bassano del Grappa, traditional animation, character animation, layout artist, clean-up artist",
  authors: [{ name: "Tommaso Tamburini" }],
  creator: "Tommaso Tamburini",
  publisher: "Tommaso Tamburini",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "it_IT",
    url: "https://tommasotamburin.com",
    siteName: "Tommaso Tamburini Portfolio",
    title: "Tommaso Tamburini - Professional 2D Animator & Storyboard Artist",
    description:
      "Professional 2D Animator and Storyboard Artist with 7+ years experience working with Disney, Netflix, Fox Animation, and major studios worldwide.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9023%20-%20Copia.png-ZXGUsYe7ncLr3WCIieABGdrH44KCk5.jpeg",
        width: 1200,
        height: 630,
        alt: "Tommaso Tamburini - 2D Animator & Storyboard Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tommaso Tamburini - 2D Animator & Storyboard Artist",
    description:
      "Professional 2D Animator and Storyboard Artist with 7+ years experience working with Disney, Netflix, Fox Animation, and major studios worldwide.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9023%20-%20Copia.png-ZXGUsYe7ncLr3WCIieABGdrH44KCk5.jpeg",
    ],
  },
  verification: {
    google: "907410883a986753",
  },
  alternates: {
    canonical: "https://tommasotamburin.com",
    languages: {
      "en-US": "https://tommasotamburin.com",
      "it-IT": "https://tommasotamburin.com",
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased`}>
      <head>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/metropolis" type="text/css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tommaso Tamburini",
              alternateName: "Tomaso Tamburini",
              jobTitle: "2D Animator & Storyboard Artist",
              description:
                "Professional 2D Animator and Storyboard Artist with over 7 years of experience in the animation industry, specialized in feature films and animated series.",
              url: "https://tommasotamburin.com",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9023%20-%20Copia.png-ZXGUsYe7ncLr3WCIieABGdrH44KCk5.jpeg",
              sameAs: [
                "https://www.linkedin.com/in/tommaso-tamburini-373b8195/",
                "https://www.instagram.com/tom.tambu",
                "https://vimeo.com/user123456789",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bassano del Grappa",
                addressCountry: "Italy",
              },
              email: "tomtambu74@hotmail.it",
              knowsAbout: [
                "2D Animation",
                "Storyboard",
                "Character Animation",
                "Layout Design",
                "Clean-up Animation",
                "Traditional Animation",
                "Toon Boom Harmony",
                "Adobe Photoshop",
                "TV Paint",
              ],
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Disney",
                },
                {
                  "@type": "Organization",
                  name: "Netflix",
                },
                {
                  "@type": "Organization",
                  name: "Fox Animation",
                },
                {
                  "@type": "Organization",
                  name: "Cartoon Network",
                },
                {
                  "@type": "Organization",
                  name: "Toei Animation",
                },
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Senior 2D Animator",
                  description:
                    "Currently working as Senior 2D Animator and Key Assistant on animated feature films and TV series",
                },
              ],
              award: [
                "Disenchanted (Disney, 2022)",
                "Central Park (Fox Animation, 2021-2022)",
                "Il segreto di Liberato (Netflix, 2024)",
                "One Piece (Toei Animation, 2023-2024)",
                "Descendants: The Royal Wedding (Disney, 2021)",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
