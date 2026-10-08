from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Create the PDF
pdf_path = os.path.join(os.path.dirname(__file__), '..', 'public', 'cv-tommaso-tamburini.pdf')
doc = SimpleDocTemplate(pdf_path, pagesize=letter,
                        rightMargin=72, leftMargin=72,
                        topMargin=72, bottomMargin=18)

# Container for the 'Flowable' objects
elements = []

# Define styles
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Justify', alignment=TA_JUSTIFY))
styles.add(ParagraphStyle(name='Center', alignment=TA_CENTER, fontSize=24, spaceAfter=30, textColor='#000000', fontName='Helvetica-Bold'))
styles.add(ParagraphStyle(name='SectionHeader', fontSize=14, spaceAfter=12, spaceBefore=12, textColor='#000000', fontName='Helvetica-Bold'))
styles.add(ParagraphStyle(name='JobTitle', fontSize=11, spaceAfter=6, textColor='#333333', fontName='Helvetica-Bold'))
styles.add(ParagraphStyle(name='JobDetails', fontSize=10, spaceAfter=3, textColor='#666666', fontName='Helvetica-Oblique'))
styles.add(ParagraphStyle(name='BodyText', fontSize=10, spaceAfter=6, alignment=TA_JUSTIFY, textColor='#000000'))

# Title
title = Paragraph("TOMMASO TAMBURINI – RESUME", styles['Center'])
elements.append(title)
elements.append(Spacer(1, 12))

# BIO Section
bio_header = Paragraph("BIO", styles['SectionHeader'])
elements.append(bio_header)

bio_text = """Tommaso Tamburini is a 2D animator, story artist, and actor from Italy, with over seven years of 
experience in the animation industry. Specialized in feature films and animated series, he has collaborated with renowned studios such as 
Disney, Fox Animation, Netflix, Xilam, Cartoon Network, Rai, and Toei Animation. His credits 
include acclaimed titles such as Disenchanted, Central Park, Il segreto di Liberato, A Greyhound 
of a Girl, Descendants: The Royal Wedding, Lupin's Tales, One Piece, as well as video games like 
Diesel Legacy: The Brazen Age. He is currently working as a Senior 2D Animator and Key Assistant on animated feature films and 
TV series. A lifelong enthusiast of cinema and performance, he previously studied and worked as an actor in 
Italy, where he continues to develop independent projects supporting young talents eager to enhance 
their skills in the audiovisual field. Through his work, he is committed to fostering creativity and 
celebrating the art of storytelling and traditional animation. He is based in Bassano del Grappa, Italy."""

bio = Paragraph(bio_text, styles['BodyText'])
elements.append(bio)
elements.append(Spacer(1, 12))

# WORK EXPERIENCE Section
work_header = Paragraph("WORK EXPERIENCE", styles['SectionHeader'])
elements.append(work_header)

# Netflix
netflix_header = Paragraph("NETFLIX:", styles['JobTitle'])
elements.append(netflix_header)

job1 = Paragraph('"Tear along the edges" Netflix (2021)', styles['JobDetails'])
elements.append(job1)
job1_role = Paragraph('Color Artist (Doghead, Pisa)', styles['BodyText'])
elements.append(job1_role)

job2 = Paragraph('"The secret of Liberato" Feature Film (2024)', styles['JobDetails'])
elements.append(job2)
job2_role = Paragraph('2D animator (ILBE Animation, Rome)', styles['BodyText'])
elements.append(job2_role)
elements.append(Spacer(1, 6))

# Disney
disney_header = Paragraph("DISNEY:", styles['JobTitle'])
elements.append(disney_header)

job3 = Paragraph('"Descendants: The Royal Wedding" (2021)', styles['JobDetails'])
elements.append(job3)
job3_role = Paragraph('Clean-up Artist (as Tomaso Tamburini) (Final Frontiers, remote work)', styles['BodyText'])
elements.append(job3_role)

job4 = Paragraph('"Disenchanted" Feature Film (2022)', styles['JobDetails'])
elements.append(job4)
job4_role = Paragraph('2D Inbetween and Clean-up Artist (TONIC DNA, remote work)', styles['BodyText'])
elements.append(job4_role)
elements.append(Spacer(1, 6))

# Fox Animation
fox_header = Paragraph("FOX ANIMATION:", styles['JobTitle'])
elements.append(fox_header)

job5 = Paragraph('"Central Park" Season 2-3 (2021-2022)', styles['JobDetails'])
elements.append(job5)
job5_role = Paragraph('2D Animator, Inbetween and Clean-up Artist (TONIC DNA, remote work)', styles['BodyText'])
elements.append(job5_role)
elements.append(Spacer(1, 6))

# Additional Feature Films
films_header = Paragraph("ADDITIONAL FEATURE FILMS:", styles['JobTitle'])
elements.append(films_header)

job6 = Paragraph('"Iggy the Eagle" (2024)', styles['JobDetails'])
elements.append(job6)
job6_role = Paragraph('2D Animator (OrangeAnimation, Remote)', styles['BodyText'])
elements.append(job6_role)

job7 = Paragraph('"A Greyhound of a Girl" by Enzo D\'alò (2020)', styles['JobDetails'])
elements.append(job7)
job7_role = Paragraph('2D Animator (STUDIO ALIANTE, Prato)', styles['BodyText'])
elements.append(job7_role)
elements.append(Spacer(1, 6))

# Videogames
games_header = Paragraph("VIDEOGAMES:", styles['JobTitle'])
elements.append(games_header)

job8 = Paragraph('"Diesel Legacy: The Brazen Age" (2023)', styles['JobDetails'])
elements.append(job8)
job8_role = Paragraph('2D Animator, Inbetween and Clean-up Artist (Maximum Games, remote work)', styles['BodyText'])
elements.append(job8_role)
elements.append(Spacer(1, 6))

# Additional TV Shows
tv_header = Paragraph("ADDITIONAL TV SHOWS:", styles['JobTitle'])
elements.append(tv_header)

job9 = Paragraph('"One Piece" (2023-2024)', styles['JobDetails'])
elements.append(job9)
job9_role = Paragraph('Secondary Key Animator (Toei Animation, remote work)', styles['BodyText'])
elements.append(job9_role)

job10 = Paragraph('"Lupin\'s Tales" (2020)', styles['JobDetails'])
elements.append(job10)
job10_role = Paragraph('Layout Artist (Studio Maga, Monza)', styles['BodyText'])
elements.append(job10_role)

job11 = Paragraph('"Ninjin" Cartoon Network (2019)', styles['JobDetails'])
elements.append(job11)
job11_role = Paragraph('2D Animator (Birdo, São Paulo - Brazil)', styles['BodyText'])
elements.append(job11_role)
elements.append(Spacer(1, 6))

# Page break for second page
elements.append(PageBreak())

# Short Films / Pilots / Music Videos / Commercials
shorts_header = Paragraph("SHORT FILMS / PILOTS / MUSIC VIDEOS / COMMERCIALS:", styles['SectionHeader'])
elements.append(shorts_header)

job12 = Paragraph('"Stuck" shorts film (2021-2024)', styles['JobDetails'])
elements.append(job12)
job12_role = Paragraph('2D Animator', styles['BodyText'])
elements.append(job12_role)

job13 = Paragraph('"Hannukah: The Festival of Lights" RAI Shorts film (2019)', styles['JobDetails'])
elements.append(job13)
job13_role = Paragraph('2D Inbetween Artist (Animago, remote work)', styles['BodyText'])
elements.append(job13_role)

job14 = Paragraph('"Flocky" Shorts film (2019-2020)', styles['JobDetails'])
elements.append(job14)
job14_role = Paragraph('2D Animator (ClayManiac, remote work)', styles['BodyText'])
elements.append(job14_role)

job15 = Paragraph('"Enzo d\'Alò\'s secret series" teaser never out (2019)', styles['JobDetails'])
elements.append(job15)
job15_role = Paragraph('2D Inbetween Artist (GalactusSTudios, Rome)', styles['BodyText'])
elements.append(job15_role)

job16 = Paragraph('"Gay Help Line" ads (2017)', styles['JobDetails'])
elements.append(job16)
job16_role = Paragraph('2D Animator (Region Lazio, Rome)', styles['BodyText'])
elements.append(job16_role)

job17 = Paragraph('"Totò tribute" Short film (2017)', styles['JobDetails'])
elements.append(job17)
job17_role = Paragraph('2D Animator (Urciuolo production, Naples)', styles['BodyText'])
elements.append(job17_role)

job18 = Paragraph('"Cinema Roma Festival" Short film (2017)', styles['JobDetails'])
elements.append(job18)
job18_role = Paragraph('2D Animator (Riande Production, Rome)', styles['BodyText'])
elements.append(job18_role)

job19 = Paragraph('"Nipponitaly" Website Animation (2016)', styles['JobDetails'])
elements.append(job19)
job19_role = Paragraph('2D Animator (Italian Japanese Productions, Rome)', styles['BodyText'])
elements.append(job19_role)

job20 = Paragraph('"Buongiorno a te - Gionnyscandal" Official Music Video (2016)', styles['JobDetails'])
elements.append(job20)
job20_role = Paragraph('2D Animator (VEVO, Milan)', styles['BodyText'])
elements.append(job20_role)

job21 = Paragraph('"Used to you - Annalisa" Official Music Video (2016)', styles['JobDetails'])
elements.append(job21)
job21_role = Paragraph('2D Animator (Warner Music, Milan)', styles['BodyText'])
elements.append(job21_role)
elements.append(Spacer(1, 12))

# Software Knowledge
software_header = Paragraph("SOFTWARE KNOWLEDGE:", styles['SectionHeader'])
elements.append(software_header)
software_text = "• Toon Boom Harmony • Maya 3D • Storyboard Pro • Adobe Photoshop • TV Paint"
software = Paragraph(software_text, styles['BodyText'])
elements.append(software)
elements.append(Spacer(1, 12))

# Spoken Languages
languages_header = Paragraph("SPOKEN LANGUAGES:", styles['SectionHeader'])
elements.append(languages_header)
languages_text = "Italian (Native) • English (Fluent) • German (Basic) • Portuguese (Basic)"
languages = Paragraph(languages_text, styles['BodyText'])
elements.append(languages)
elements.append(Spacer(1, 12))

# Hobbies
hobbies_header = Paragraph("HOBBIES:", styles['SectionHeader'])
elements.append(hobbies_header)
hobbies_text = "Acting, comedy impersonations and sports"
hobbies = Paragraph(hobbies_text, styles['BodyText'])
elements.append(hobbies)

# Build PDF
doc.build(elements)

print(f"CV PDF generated successfully at: {pdf_path}")
