"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X, Globe, Mail, Instagram, Download } from "lucide-react"

type Page = "bio" | "animation" | "storyboard" | "personalprojects" | "curriculum" | "contacts"
type Language = "en" | "it"

interface StoryboardProject {
  id: string
  title: string
  imageCount: number
  thumbnail: string
}

interface AnimationProject {
  id: string
  title: string
  year: string
  distributor: string
  thumbnail: string
  vimeoEmbed: string
}

interface VideoProject {
  id: string
  title: string
  vimeoId: string
  padding: string
  thumbnail: string
}

const storyboardProjects: StoryboardProject[] = [
  {
    id: "mike",
    title: "Mike",
    imageCount: 229,
    thumbnail: "https://res.cloudinary.com/dy4zopoql/image/upload/v1756737300/Mike_1.png",
  },
  {
    id: "spidey",
    title: "Spidey",
    imageCount: 229,
    thumbnail: "https://res.cloudinary.com/dy4zopoql/image/upload/v1756737300/Spidey_1.png",
  },
  {
    id: "play-rabbit",
    title: "Play Rabbit",
    imageCount: 325,
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playrabbit-Dps0fnA88mnwFge7mCo6yAPB3bMFrh.png",
  },
  {
    id: "fight",
    title: "Fight",
    imageCount: 341,
    thumbnail: "https://res.cloudinary.com/dy4zopoql/image/upload/v1756738382/FIGHT_1.png",
  },
  {
    id: "love-therapy",
    title: "Love Therapy",
    imageCount: 153,
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lovetherapy-qGW4RvzfSeinrMkpr92FBrqSA1vsd5.png",
  },
]

const animationProjects: AnimationProject[] = [
  {
    id: "blue-box",
    title: "Coming Soon",
    year: "2026",
    distributor: "Netflix",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Netflix%20Blue%20Box-O1gCHN8WXuwLImgbkxgIJPwTuj5rhS.jpg",
    vimeoEmbed: "",
  },
  {
    id: "one-piece",
    title: "One Piece",
    year: "1999-2025",
    distributor: "Toei Animation",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onepiece-74h1ipfFcAdJurvjinA4xlER0ku5vq.webp",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1117051808?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Copia di Acting Studio&#039;s Video - Aug 20, 2025-VEED"></iframe></div>',
  },
  {
    id: "iggy-eagle",
    title: "Iggy the Eagle",
    year: "2026",
    distributor: "Orange Animation",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poster-LAP6haLMIxjhM71Jl8QmmE1N2AiZaX.jpg",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1123296401?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="IGGY-trailer-FINAL-logotypy"></iframe></div>',
  },
  {
    id: "liberato",
    title: "Il segreto di Liberato",
    year: "2024",
    distributor: "Netflix",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liberato-VcPd0ea8tWx2p6ySn9ntgbYSJSTRh1.webp",
    vimeoEmbed:
      '<div style="padding:54.05% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1117052754?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Copia di Acting Studio&#039;s Video - Aug 20, 2025-VEED"></iframe></div>',
  },
  {
    id: "diesel-legacy",
    title: "Diesel Legacy",
    year: "2024",
    distributor: "Maximum Games",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maxresdefault.jpg-oSNGgPaNSuFChJP2RzXkIz9O0QFFWv.jpeg",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1117790833?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Diesel Legacy"></iframe></div>',
  },
  {
    id: "greyhound-girl",
    title: "A Greyhound of a Girl",
    year: "2023",
    distributor: "BIM Distribuzione",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mary.jpg-972Ig3qrlJP0YkimmhdaC5byF7rkFT.jpeg",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1117052920?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Copia di Acting Studio&#039;s Video - Aug 20, 2025-VEED"></iframe></div>',
  },
  {
    id: "central-park",
    title: "Central Park",
    year: "2020-2022",
    distributor: "Fox Animation",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/centralpark.jpg-9exV2stPmIHFTo1n1tNiLpo0nR9MOx.jpeg",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1117052011?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Copia di Acting Studio&#039;s Video - Aug 20, 2025-VEED"></iframe></div>',
  },
  {
    id: "disenchanted",
    title: "Disenchanted",
    year: "2022",
    distributor: "Disney",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disenchanted.jpg-hsTW6r3GxTbAem626uBwr6p5dUwtuo.jpeg",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1117052568?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Disenchanted"></iframe></div>',
  },
  {
    id: "descendants",
    title: "Descendants",
    year: "2022",
    distributor: "Disney",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Descendants.jpg-ckE4tfP5dhpYy5aD2DMyoZGjLn2i6R.jpeg",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1117791866?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Descendants"></iframe></div>',
  },
  {
    id: "lupins-tales",
    title: "Lupin's Tales",
    year: "2020-2021",
    distributor: "RAI",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lupintale-porbr5ekJIy8aaJQq5tXgu4JcmckP1.webp",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1117052807?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="LayoutPosing Reel 2020-21"></iframe></div>',
  },
  {
    id: "zerocalcare",
    title: "Strappare lungo i bordi - Zerocalcare",
    year: "2021",
    distributor: "Netflix",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strappare-lungo-i-bordi-2021-di-zerocalcare-riflessioni-sulla-serie-main-680x382-1-3SgxptMmgDKPgW67QjzYuLvWLPA9Hf.jpeg",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1123313538?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="reel zero"></iframe></div>',
  },
  {
    id: "hannukah",
    title: "Hannukah",
    year: "2019",
    distributor: "RAI",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hannukah.jpg-L6vxKJB6g3rxBKtBSAyQ1lEG34Efar.jpeg",
    vimeoEmbed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1117790657?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Hannukah"></iframe></div>',
  },
]

const translations = {
  en: {
    subtitle: "2D Animator & Storyboard Artist",
    nav: {
      bio: "Biography",
      animation: "Animation",
      storyboard: "Storyboard",
      personalprojects: "Personal Projects",
      curriculum: "Resume",
      contacts: "Contacts",
    },
    bio: {
      title: "About Me",
      content: [
        "<strong>Tommaso Tamburini</strong> is a 2D Animator, Story Artist, and Actor from Italy, with over seven years of experience in the animation industry.",
        'Specialized in feature films and animated series, he has collaborated with renowned studios such as <span class="text-primary font-bold">Disney</span>, <span class="text-primary font-bold">Fox Animation</span>, <span class="text-primary font-bold">Netflix</span>, <span class="text-primary font-bold">Xilam</span>, <span class="text-primary font-bold">Cartoon Network</span>, <span class="text-primary font-bold">Rai</span>, and <span class="text-primary font-bold">Toei Animation</span>. His credits include acclaimed titles such as <em class="text-primary clickable-storyboard" data-storyboard="disenchanted">Disenchanted</em>, <em class="text-primary clickable-storyboard" data-storyboard="central-park">Central Park</em>, <em class="text-primary clickable-storyboard" data-storyboard="liberato">Il segreto di Liberato</em>, <em class="text-primary clickable-storyboard" data-storyboard="greyhound-girl">A Greyhound of a Girl</em>, <em class="text-primary clickable-storyboard" data-storyboard="descendants">Descendants: The Royal Wedding</em>, <em class="text-primary clickable-storyboard" data-storyboard="lupins-tales">Lupin\'s Tales</em>, <em class="text-primary clickable-storyboard" data-storyboard="one-piece">One Piece</em>, as well as video games like <em class="text-primary clickable-storyboard" data-storyboard="diesel-legacy">Diesel Legacy: The Brazen Age</em>.',
        "He is currently working as a Senior 2D Animator and Key Assistant on animated feature films and TV series.",
        "A lifelong enthusiast of cinema and performance, he previously studied and worked as an actor in Italy, where he continues to develop independent projects supporting young talents eager to enhance their skills in the audiovisual field. Through his work, he is committed to fostering creativity and celebrating the art of storytelling and traditional animation.",
        "He is based in Bassano del Grappa, Italy.",
        "For freelance collaborations, conferences, or workshops, please get in touch via e-mail.",
      ],
    },
    storyboard: {
      title: "Storyboard Projects",
      images: "images",
    },
    curriculum: {
      title: "Resume",
      downloadCV: "Download CV",
      experience: "Work Experience",
      education: "Education",
      skills: "Skills",
      software: "Software Knowledge",
      languages: "Spoken Languages",
      hobbies: "Hobbies",
      jobs: [
        {
          category: "NETFLIX",
          items: [
            {
              title: '"Tear along the edges"',
              company: "Netflix (2021)",
              role: "Color Artist",
              studio: "(Doghead, Pisa)",
            },
          ],
        },
        {
          category: "DISNEY",
          items: [
            {
              title: '"Descendants: The Royal Wedding"',
              company: "(2021)",
              role: "Clean-up Artist (as Tomaso Tamburini)",
              studio: "(Final Frontiers, remote work)",
            },
            {
              title: '"Disenchanted"',
              company: "Feature Film (2022)",
              role: "2D Inbetween and Clean-up Artist",
              studio: "(TONIC DNA, remote work)",
            },
          ],
        },
        {
          category: "FOX ANIMATION",
          items: [
            {
              title: '"Central Park"',
              company: "Season 2-3 (2021-2022)",
              role: "2D Animator, Inbetween and Clean-up Artist",
              studio: "(TONIC DNA, remote work)",
            },
          ],
        },
        {
          category: "ADDITIONAL FEATURE FILMS",
          items: [
            {
              title: '"The secret of Liberato"',
              company: "Feature Film (2024)",
              role: "2D animator",
              studio: "(ILBE Animation, Rome)",
            },
            {
              title: '"Iggy the Eagle"',
              company: "(2024)",
              role: "2D Animator",
              studio: "(OrangeAnimation, Remote)",
            },
            {
              title: '"A Greyhound of a Girl"',
              company: "by Enzo D'alò (2020)",
              role: "2D Animator",
              studio: "(STUDIO ALIANTE, Prato)",
            },
          ],
        },
        {
          category: "ADDITIONAL TV SHOWS",
          items: [
            {
              title: '"One Piece"',
              company: "(2023-2024)",
              role: "Secondary Key Animator",
              studio: "(Toei Animation, remote work)",
            },
            {
              title: '"Lupin\'s Tales"',
              company: "(2020)",
              role: "Layout Artist",
              studio: "(Studio Maga, Monza)",
            },
            {
              title: '"Ninjin"',
              company: "Cartoon Network (2019)",
              role: "2D Animator",
              studio: "(Birdo, São Paulo - Brazil)",
            },
          ],
        },
        {
          category: "VIDEOGAMES",
          items: [
            {
              title: '"Diesel Legacy: The Brazen Age"',
              company: "(2023)",
              role: "2D Animator, Inbetween and Clean-up Artist",
              studio: "(Maximum Games, remote work)",
            },
          ],
        },
      ],
      softwareList: ["Toon Boom Harmony", "Maya 3D", "Storyboard Pro", "Adobe Photoshop", "TV Paint"],
      languagesList: ["Italian (Native)", "English (Fluent)", "German (Basic)", "Portuguese (Basic)"],
      hobbiesList: "Acting, comedy impersonations and sports",
    },
    contacts: {
      title: "Contacts",
      whatsapp: "WhatsApp",
      call: "Call",
      linkedin: "LinkedIn",
    },
    modal: {
      imageOf: "Image",
      of: "of",
      navigation: "Use arrow keys or click arrows to navigate between images",
    },
    footer: {
      copyright: "© 2025 Tommaso Tamburini. All rights reserved.",
    },
    animation: {
      title: "Animation",
    },
    personalprojects: {
      title: "Personal Projects",
    },
  },
  it: {
    subtitle: "Animatore 2D & Storyboard Artist",
    nav: {
      bio: "Biografia",
      animation: "Animazione",
      storyboard: "Storyboard",
      personalprojects: "Progetti Personali",
      curriculum: "Curriculum",
      contacts: "Contatti",
    },
    bio: {
      title: "Chi Sono",
      content: [
        "<strong>Tommaso Tamburini</strong> è un Animatore 2D, Story Artist e Attore italiano con oltre sette anni di esperienza nel settore dell'animazione.",
        'Specializzato in lungometraggi e serie animate, ha collaborato con studi di prestigio come <span class="text-primary font-bold">Disney</span>, <span class="text-primary font-bold">Fox Animation</span>, <span class="text-primary font-bold">Netflix</span>, <span class="text-primary font-bold">Xilam</span>, <span class="text-primary font-bold">Cartoon Network</span>, <span class="text-primary font-bold">Rai</span> e <span class="text-primary font-bold">Toei Animation</span>. Tra i titoli a cui ha preso parte figurano produzioni di rilievo quali <em class="text-primary clickable-storyboard" data-storyboard="disenchanted">Disenchanted</em>, <em class="text-primary clickable-storyboard" data-storyboard="central-park">Central Park</em>, <em class="text-primary clickable-storyboard" data-storyboard="liberato">Il segreto di Liberato</em>, <em class="text-primary clickable-storyboard" data-storyboard="greyhound-girl">A Greyhound of a Girl</em>, <em class="text-primary clickable-storyboard" data-storyboard="descendants">Descendants: The Royal Wedding</em>, <em class="text-primary clickable-storyboard" data-storyboard="lupins-tales">Lupin\'s Tales</em>, <em class="text-primary clickable-storyboard" data-storyboard="one-piece">One Piece</em> e videogiochi come <em class="text-primary clickable-storyboard" data-storyboard="diesel-legacy">Diesel Legacy: The Brazen Age</em>.',
        "Attualmente lavora come Senior 2D Animator e Key Assistant per lungometraggi e serie TV d'animazione.",
        "Appassionato da sempre di cinema e recitazione, ha intrapreso in passato un percorso come attore in Italia, dove continua a sviluppare progetti indipendenti che sostengono giovani talenti desiderosi di perfezionarsi nel mondo audiovisivo. Attraverso il suo lavoro, si dedica a valorizzare la creatività e a promuovere l'arte della narrazione e dell'animazione tradizionale.",
        "Vive a Bassano del Grappa, in Italia.",
        "Per richieste di collaborazioni freelance, conferenze o workshop, è possibile contattarlo via e-mail.",
      ],
    },
    storyboard: {
      title: "Progetti Storyboard",
      images: "immagini",
    },
    curriculum: {
      title: "Curriculum Vitae",
      downloadCV: "Scarica CV",
      experience: "Esperienza Lavorativa",
      education: "Formazione",
      skills: "Competenze",
      software: "Conoscenze Software",
      languages: "Lingue Parlate",
      hobbies: "Hobby",
      jobs: [
        {
          category: "NETFLIX",
          items: [
            {
              title: '"Tear along the edges"',
              company: "Netflix (2021)",
              role: "Color Artist",
              studio: "(Doghead, Pisa)",
            },
          ],
        },
        {
          category: "DISNEY",
          items: [
            {
              title: '"Descendants: The Royal Wedding"',
              company: "(2021)",
              role: "Clean-up Artist (come Tomaso Tamburini)",
              studio: "(Final Frontiers, lavoro remoto)",
            },
            {
              title: '"Disenchanted"',
              company: "Lungometraggio (2022)",
              role: "2D Inbetween e Clean-up Artist",
              studio: "(TONIC DNA, lavoro remoto)",
            },
          ],
        },
        {
          category: "FOX ANIMATION",
          items: [
            {
              title: '"Central Park"',
              company: "Stagione 2-3 (2021-2022)",
              role: "2D Animator, Inbetween e Clean-up Artist",
              studio: "(TONIC DNA, lavoro remoto)",
            },
          ],
        },
        {
          category: "LUNGOMETRAGGI AGGIUNTIVI",
          items: [
            {
              title: '"Il segreto di Liberato"',
              company: "Lungometraggio (2024)",
              role: "Animatore 2D",
              studio: "(ILBE Animation, Roma)",
            },
            {
              title: '"Iggy the Eagle"',
              company: "(2024)",
              role: "Animatore 2D",
              studio: "(OrangeAnimation, Remoto)",
            },
            {
              title: '"A Greyhound of a Girl"',
              company: "di Enzo D'alò (2020)",
              role: "Animatore 2D",
              studio: "(STUDIO ALIANTE, Prato)",
            },
          ],
        },
        {
          category: "SERIE TV AGGIUNTIVE",
          items: [
            {
              title: '"One Piece"',
              company: "(2023-2024)",
              role: "Secondary Key Animator",
              studio: "(Toei Animation, lavoro remoto)",
            },
            {
              title: '"Lupin\'s Tales"',
              company: "(2020)",
              role: "Layout Artist",
              studio: "(Studio Maga, Monza)",
            },
            {
              title: '"Ninjin"',
              company: "Cartoon Network (2019)",
              role: "2D Animator",
              studio: "(Birdo, São Paulo - Brasile)",
            },
          ],
        },
        {
          category: "VIDEOGIOCHI",
          items: [
            {
              title: '"Diesel Legacy: The Brazen Age"',
              company: "(2023)",
              role: "2D Animator, Inbetween e Clean-up Artist",
              studio: "(Maximum Games, lavoro remoto)",
            },
          ],
        },
      ],
      softwareList: ["Toon Boom Harmony", "Maya 3D", "Storyboard Pro", "Adobe Photoshop", "TV Paint"],
      languagesList: ["Italiano (Madrelingua)", "Inglese (Fluente)", "Tedesco (Base)", "Portoghese (Base)"],
      hobbiesList: "Recitazione, imitazioni comiche e sport",
    },
    contacts: {
      title: "Contatti",
      whatsapp: "WhatsApp",
      call: "Chiama",
      linkedin: "LinkedIn",
    },
    modal: {
      imageOf: "Immagine",
      of: "di",
      navigation: "Usa i tasti freccia o clicca le frecce per navigare tra le immagini",
    },
    footer: {
      copyright: "© 2025 Tommaso Tamburini. Tutti i diritti riservati.",
    },
    animation: {
      title: "Animazione",
    },
    personalprojects: {
      title: "Progetti Personali",
    },
  },
}

const getImageUrl = (project: StoryboardProject, imageIndex: number) => {
  if (project.id === "spidey") {
    return `https://res.cloudinary.com/dy4zopoql/image/upload/v1756737300/Spidey_${imageIndex + 1}.png`
  }

  if (project.id === "fight") {
    return `https://res.cloudinary.com/dy4zopoql/image/upload/v1756738382/FIGHT_${imageIndex + 1}.png`
  }

  if (project.id === "mike") {
    return `https://res.cloudinary.com/dy4zopoql/image/upload/v1756736644/mike_${imageIndex + 1}.png`
  }

  if (project.id === "play-rabbit") {
    return `https://res.cloudinary.com/dy4zopoql/image/upload/v1756737863/Play_Rabbit_${imageIndex + 1}.jpg`
  }

  if (project.id === "love-therapy") {
    return `https://res.cloudinary.com/dy4zopoql/image/upload/v1756737456/LoveTheray_${imageIndex + 1}.png`
  }

  // Placeholder for other projects
  return `/placeholder.svg?height=600&width=800&query=${project.title} storyboard image ${imageIndex + 1}`
}

const personalProjects = [
  { id: 1, name: "Dark", image: "https://res.cloudinary.com/dy4zopoql/image/upload/v1757941498/dark_apmmey.jpg" },
  {
    id: 2,
    name: "No Touchy",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/no%20touchy.jpg-P1VynPJG4YENzjAZL3U7s671YsWZnh.jpeg",
  },
  {
    id: 3,
    name: "No Touchy 2",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/no%20touchy2.jpg-Oa9ykc8dFCCFzmEVstv7qw4bQh7279.jpeg",
  },
  {
    id: 4,
    name: "Gatto Stivali",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gattostivali.jpg-zyNBksJ4E7FzjfT8pNl5HynM62Zy8q.jpeg",
  },
  {
    id: 5,
    name: "11",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-RWhKRyUPApd8k0HOTEQUupoSRlX6pa.png",
  },
  {
    id: 6,
    name: "Drago",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drago.jpg-UJsIMRE7DQ8324v1y9KoI0ReusT1TX.jpeg",
  },
  {
    id: 7,
    name: "Gatto Arancione",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gattoarancione-sRz3GyMUwcNXFYyS0Ijxb8AL7Mc6Ly.png",
  },
  { id: 8, name: "Michela", image: "https://res.cloudinary.com/dy4zopoql/image/upload/v1757941462/MICHELA_bgovge.jpg" },
  {
    id: 9,
    name: "Do Cazzo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/docazzo.png-4VE6bRbkXnnqd3qPEzGwt0vT5h575V.jpeg",
  },
  {
    id: 10,
    name: "Jim H",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jim%20H.jpg-0OwCDhB0EE8pryVAEa0aqM3DhG2y7H.jpeg",
  },
  {
    id: 11,
    name: "Dinosauri 1",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dinosauri%201.jpg-MCNCK0GieQvEytA7W1UUtbHKjqZzk4.jpeg",
  },
  {
    id: 12,
    name: "Dinosauri 2",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dinosauri%202.jpg-KSBSnE1j8Fye5b45QuyNliHRm5sTaa.jpeg",
  },
  {
    id: 13,
    name: "Tom Tambu 4",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tom%20Tambu%204.jpg-lAcUZ0NrsqEdMZ5DM2JvvTb6eqLK3t.jpeg",
  },
  {
    id: 14,
    name: "Tom Tambu 5",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tom%20Tambu%205.jpg-nyyPuKgygG7Zl2nfdY2mEttebwtMGC.jpeg",
  },
  {
    id: 15,
    name: "Tom Tambu 6",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tom%20Tambu%206.jpg-NykeaBc0Yoz0uIidEbm4qXNRBFbWvW.jpeg",
  },
  {
    id: 16,
    name: "Monster 2",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/monster2.jpg-mBAjkhibcM39HvGDOPA4DcMQdH4nIv.jpeg",
  },
]

// Added videoProjects array
const videoProjects: VideoProject[] = [
  {
    id: "fma",
    title: "FMA",
    vimeoId: "1123295207",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295207.jpg`,
  },
  {
    id: "goku-normale",
    title: "Goku Normale",
    vimeoId: "1123295148",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295148.jpg`,
  },
  {
    id: "bug-1",
    title: "Bug 1",
    vimeoId: "1123295796",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295796.jpg`,
  },
  {
    id: "bug-2",
    title: "Bug 2",
    vimeoId: "1123295765",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295765.jpg`,
  },
  {
    id: "wade",
    title: "Wade",
    vimeoId: "1123295013",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295013.jpg`,
  },
  {
    id: "punch",
    title: "Punch",
    vimeoId: "1123295654",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295654.jpg`,
  },
  {
    id: "pesce",
    title: "Pesce",
    vimeoId: "1123295094",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295094.jpg`,
  },
  {
    id: "carnage",
    title: "Carnage",
    vimeoId: "1123295736",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295736.jpg`,
  },
  {
    id: "digimon",
    title: "Digimon",
    vimeoId: "1123295260",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295260.jpg`,
  },
  {
    id: "doremi",
    title: "Doremi",
    vimeoId: "1123295229",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295229.jpg`,
  },
  {
    id: "poke-rough-2",
    title: "Poke Rough 2",
    vimeoId: "1123295032",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295032.jpg`,
  },
  {
    id: "poke-clean",
    title: "Poke Clean",
    vimeoId: "1123295061",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295061.jpg`,
  },
  {
    id: "gatto-rough-2",
    title: "Gatto Rough 2",
    vimeoId: "1123295878",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295878.jpg`,
  },
  {
    id: "crime",
    title: "Crime",
    vimeoId: "1123295704",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295704.jpg`,
  },
  {
    id: "goku-tribute",
    title: "Goku Tribute",
    vimeoId: "1123295844",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295844.jpg`,
  },
  {
    id: "hamtaro",
    title: "Hamtaro",
    vimeoId: "1123295119",
    padding: "56.25%",
    thumbnail: `https://vthumbnail.com/1123295119.jpg`,
  },
]

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState<Page>("bio")
  const [selectedProject, setSelectedProject] = useState<StoryboardProject | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [language, setLanguage] = useState<Language>("en")
  const [selectedAnimation, setSelectedAnimation] = useState<AnimationProject | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null)

  const [previewProject, setPreviewProject] = useState<{ name: string; image: string } | null>(null)

  const [personalProjectsTab, setPersonalProjectsTab] = useState("sketches")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "it" : "en"))
  }

  const t = translations[language]

  const openProject = (project: StoryboardProject) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.imageCount)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.imageCount) % selectedProject.imageCount)
    }
  }

  const openAnimation = (animation: AnimationProject) => {
    setSelectedAnimation(animation)
  }

  const closeAnimation = () => {
    setSelectedAnimation(null)
  }

  const openVideo = (video: VideoProject) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  const handleStoryboardClick = (storyboardId: string) => {
    // Find the corresponding storyboard project
    const project = storyboardProjects.find((p) => p.id === storyboardId)
    if (project) {
      setCurrentPage("storyboard")
      openProject(project)
    } else {
      // If not found in storyboard, look in animations
      const animation = animationProjects.find((a) => a.id === storyboardId)
      if (animation) {
        setCurrentPage("animation")
        openAnimation(animation)
      }
    }
  }

  const renderCurriculumPage = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">{t.curriculum.title}</h2>

      <div className="mb-8">
        <div className="grid grid-cols-5 gap-6 mb-4">
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-DH6WzxzOwqMUnlfiOrHN7A3YWqj4fg.jpeg"
              alt="Disney+"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix-QeCSjBU9nPBROTqDIZZVK4TS3EOBao.webp"
              alt="Netflix"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-W6PPVPx5tnaoMUOuuWyRUeG6kyDB5w.png"
              alt="Cartoon Network"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-6ECdJ7IX94ogA2CndjYuOTCYknG4CO.jpeg"
              alt="PlayStation"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-aYVjV1WFYM2l6hxJ2Ajm1qfVKZ5rXw.jpeg"
              alt="Toei Animation"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-6">
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-QbKAI2mFyiAViXi9o2V6ANJVPABiAI.png"
              alt="Tonic DNA"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-Bb7ESDcBDnKPdDth5mqK0Q6nNOtB1G.png"
              alt="Apple TV"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-VBpHAVZEZlh2D4TufUHb4y7MvYROG3.png"
              alt="Maga Animation Studio"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-CQ11LHXbLIIumWeERAeYN8myGAP8nN.png"
              alt="RAI"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-AtSqmnTsXRxxxHTKc4R8zpy3B7L0C9.png"
              alt="Final Frontier"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Button asChild className="gap-2">
          <a
            href="https://github.com/KaweAW/tommasotamburini/raw/da0259dee376d880d96992fce41c03b98a4f3e8f/C%20V%202025.pdf"
            download
          >
            <Download className="h-4 w-4" />
            {t.curriculum.downloadCV}
          </a>
        </Button>
      </div>

      <div className="space-y-12">
        <section>
          <h3 className="text-2xl font-semibold mb-8 text-center border-b border-border pb-4">
            {t.curriculum.experience}
          </h3>
          <div className="space-y-8">
            {t.curriculum.jobs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h4 className="font-bold text-primary text-lg text-center">{category.category}</h4>
                <div className="space-y-4">
                  {category.items.map((job, jobIndex) => (
                    <div key={jobIndex} className="text-center space-y-1">
                      <h5 className="font-semibold text-base">
                        {job.title} {job.company}
                      </h5>
                      <p className="text-sm font-medium">{job.role}</p>
                      <p className="text-xs text-muted-foreground">{job.studio}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-center border-b border-border pb-4">
            {t.curriculum.software}
          </h3>
          <div className="text-center space-y-2 text-sm">
            {t.curriculum.softwareList.map((software, index) => (
              <p key={index}>• {software}</p>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-center border-b border-border pb-4">
            {t.curriculum.languages}
          </h3>
          <div className="text-center space-y-2 text-sm">
            {t.curriculum.languagesList.map((lang, index) => (
              <p key={index}>{lang}</p>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-center border-b border-border pb-4">
            {t.curriculum.hobbies}
          </h3>
          <div className="text-center text-sm">
            <p>{t.curriculum.hobbiesList}</p>
          </div>
        </section>
      </div>
    </div>
  )

  const renderContactsPage = () => (
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">{t.contacts.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-6 text-center">
            <a href="mailto:tomtambu74@hotmail.it" className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Email</h3>
            </a>
          </CardContent>
        </Card>

        <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-6 text-center">
            <a
              href="https://www.linkedin.com/in/tommaso-tamburini-373b8195/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary">LinkedIn</h3>
            </a>
          </CardContent>
        </Card>

        <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent className="p-6 text-center">
            <a
              href="https://www.instagram.com/tom.tambu?igsh=MWRlY2E2bWV4dmQ2aA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                <Instagram className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Instagram</h3>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderAnimationPage = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-primary">{t.animation.title}</h2>

      <div className="mb-12">
        {/* Animation Reel Video */}
        <div style={{ padding: "31.5% 0 0 0", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1118699935?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1&sidedock=0&sharing=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="ANIMATION REEL 2025"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {animationProjects.map((animation) => (
          <Card
            key={animation.id}
            className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 relative"
            onClick={() => openAnimation(animation)}
          >
            <CardContent className="p-0 relative overflow-hidden">
              <img
                src={animation.thumbnail || "/placeholder.svg"}
                alt={`Animation ${animation.title}`}
                className="w-full h-64 object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-110"
              />
              {animation.id === "blue-box" && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Coming Soon</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{animation.title}</h3>
                  <p className="text-sm">{animation.year}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderPersonalProjectsPage = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-primary">{t.personalprojects.title}</h2>

      {/* Sub-navigation tabs */}
      <div className="flex justify-center space-x-8">
        <button
          onClick={() => setPersonalProjectsTab("video")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            personalProjectsTab === "video" ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
          }`}
        >
          Video
        </button>
        <button
          onClick={() => setPersonalProjectsTab("sketches")}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            personalProjectsTab === "sketches" ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
          }`}
        >
          Sketches
        </button>
      </div>

      {/* Content based on selected tab */}
      {personalProjectsTab === "video" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videoProjects.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 relative"
              onClick={() => openVideo(video)}
            >
              <CardContent className="p-0 relative overflow-hidden">
                <div style={{ padding: `${video.padding} 0 0 0`, position: "relative" }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoId}?background=1&autoplay=0&loop=0&byline=0&title=0&portrait=0&muted=1`}
                    frameBorder="0"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      pointerEvents: "none",
                    }}
                    title={video.title}
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {personalProjectsTab === "sketches" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {personalProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => setPreviewProject(project)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-64 object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="p-4">
                    <h3 className="text-center font-medium text-gray-800">{project.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {previewProject && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setPreviewProject(null)}
            >
              <div className="max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="text-xl font-bold text-center">{previewProject.name}</h3>
                </div>
                <div className="p-4">
                  <img
                    src={previewProject.image || "/placeholder.svg"}
                    alt={previewProject.name}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )

  const renderBioPage = () => (
    <div className="space-y-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9023%20-%20Copia.png-ZXGUsYe7ncLr3WCIieABGdrH44KCk5.jpeg"
                  alt="Tommaso Tamburini"
                  className="w-full h-96 object-cover object-center rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold text-primary">{t.bio.title}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              {t.bio.content.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .clickable-storyboard {
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .clickable-storyboard::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: currentColor;
          transition: width 1s ease;
        }
        
        .clickable-storyboard:hover::after {
          width: 100%;
        }
        
        .clickable-storyboard:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  )

  const renderStoryboardPage = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-primary">{t.storyboard.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {storyboardProjects.map((project) => (
          <Card
            key={project.id}
            className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
            onClick={() => openProject(project)}
          >
            <CardContent className="p-0 relative overflow-hidden">
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt={`Storyboard ${project.title}`}
                className="w-full h-64 object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">
                    {project.imageCount} {t.storyboard.images}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  useEffect(() => {
    const handleBioClicks = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (target.classList.contains("clickable-storyboard")) {
        const storyboardId = target.getAttribute("data-storyboard")
        if (storyboardId) {
          handleStoryboardClick(storyboardId)
        }
      }
    }

    document.addEventListener("click", handleBioClicks)
    return () => {
      document.removeEventListener("click", handleBioClicks)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedProject) return

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        prevImage()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        nextImage()
      } else if (event.key === "Escape") {
        event.preventDefault()
        closeProject()
      }
    }

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedProject])

  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.changedTouches[0].screenX
    }

    const handleTouchEnd = (event: TouchEvent) => {
      touchEndX = event.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      if (!selectedProject) return

      const swipeThreshold = 50
      const swipeDistance = touchStartX - touchEndX

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          // Swipe left - next image
          nextImage()
        } else {
          // Swipe right - previous image
          prevImage()
        }
      }
    }

    if (selectedProject) {
      window.addEventListener("touchstart", handleTouchStart)
      window.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [selectedProject])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Tommaso Tamburini</h1>
            <p className="text-black/70 mt-2 font-semibold">{t.subtitle}</p>
          </div>

          <div className="flex justify-center mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-transparent"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "Italiano" : "English"}
            </Button>
          </div>

          <nav className="flex justify-center space-x-1 mb-8 overflow-x-auto">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key as Page)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentPage === key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {currentPage === "bio" && renderBioPage()}
        {currentPage === "animation" && renderAnimationPage()}
        {currentPage === "storyboard" && renderStoryboardPage()}
        {currentPage === "personalprojects" && renderPersonalProjectsPage()}
        {currentPage === "curriculum" && renderCurriculumPage()}
        {currentPage === "contacts" && renderContactsPage()}
      </main>

      <footer className="bg-muted/50 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">{t.footer.copyright}</div>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeProject}
            >
              <X className="h-6 w-6" />
            </Button>

            <img
              src={getImageUrl(selectedProject, currentImageIndex) || "/placeholder.svg"}
              alt={`Storyboard ${selectedProject.title} ${currentImageIndex + 1}`}
              className="max-w-[80%] max-h-[80%] object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:scale-110 backdrop-blur-sm w-16 h-16 transition-all duration-200"
              onClick={prevImage}
            >
              <ChevronLeft className="h-12 w-12" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:scale-110 backdrop-blur-sm w-16 h-16 transition-all duration-200"
              onClick={nextImage}
            >
              <ChevronRight className="h-12 w-12" />
            </Button>
          </div>
        </div>
      )}

      {selectedAnimation && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-white/20">
            <h2 className="text-2xl font-bold text-white text-primary">{t.animation.title}</h2>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={closeAnimation}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
            {selectedAnimation.id === "blue-box" ? (
              <div className="w-full max-w-4xl">
                <img
                  src={selectedAnimation.thumbnail || "/placeholder.svg"}
                  alt={selectedAnimation.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="w-full max-w-4xl">
                <div dangerouslySetInnerHTML={{ __html: selectedAnimation.vimeoEmbed }} />
              </div>
            )}

            <div className="text-center text-white space-y-2">
              <h3 className="text-2xl font-bold">{selectedAnimation.title}</h3>
              <p className="text-lg text-white/80">{selectedAnimation.year}</p>
              <p className="text-base text-primary font-semibold">{selectedAnimation.distributor}</p>
            </div>
          </div>

          <div className="border-t border-white/20 p-6">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Other Animations</h4>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {animationProjects
                .filter((anim) => anim.id !== selectedAnimation.id)
                .map((animation) => (
                  <Card
                    key={animation.id}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedAnimation(animation)}
                  >
                    <CardContent className="p-0 relative overflow-hidden">
                      <img
                        src={animation.thumbnail || "/placeholder.svg"}
                        alt={animation.title}
                        className="w-full h-20 object-contain bg-gray-100"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-xs font-semibold text-center px-2">{animation.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      )}

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-white/20">
            <h2 className="text-2xl font-bold text-white text-primary">Video</h2>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={closeVideo}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
            <div className="w-full max-w-4xl">
              <div style={{ padding: `${selectedVideo.padding} 0 0 0`, position: "relative" }}>
                <iframe
                  src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title={selectedVideo.title}
                />
              </div>
            </div>

            <div className="text-center text-white space-y-2">
              <h3 className="text-2xl font-bold">{selectedVideo.title}</h3>
            </div>
          </div>

          <div className="border-t border-white/20 p-6">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Other Videos</h4>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {videoProjects
                .filter((vid) => vid.id !== selectedVideo.id)
                .map((video) => (
                  <Card
                    key={video.id}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <CardContent className="p-0 relative overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-20 object-cover bg-gray-100"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-xs font-semibold text-center px-2">{video.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      )}

      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  )
}
