import { JSX } from "react";

export type Category = "Recognition" | "ResearchActivity" | "Media" | "Grant";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  subtitle?: string;
  date: string;
  image: string;
  imageCaption?: string;
  category: Category;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Aastha Sharma leads GitHub Workshops with the MSc Biomathematics Program at Strathmore University, Kenya!",
    subtitle: "Building practical research and collaboration skills through version control",
    date: "September 23, 2025",
    category: "ResearchActivity",
    image: "/images/news/news-github-workshop.png",
    imageCaption: "Students from the MSc Biomathematics Program at Strathmore University participating in a GitHub workshop.",
    description:
        "Aastha Sharma led a series of hands-on GitHub workshops for MSc Biomathematics students at Strathmore University in Nairobi, Kenya.",
    content: `Aastha Sharma developed and led an interactive and practical tutorial, as a series of GitHub workshops with the MSc Biomathematics Program at Strathmore University, Nairobi, Kenya. This bi-directional capacity-building partnership is part of a modeling research partnership co-led by Prof. Samuel Mwalili and Sharmistha. Aastha introduced students to the basics of version control and collaboration, preparing the students with industry-standard skills and best practices for their research, theses, and professional development as mathematical modelers.`,
    },
    {
    id: "2",
    title: "Suzanne Shoush Successfully Defends MSc Thesis at IHPME",
    subtitle: "Celebrating an important academic milestone",
    date: "September 5, 2025",
    category: "Recognition",
    image: "/images/news/news-thesis-defense-suzanne.png",
    imageCaption: "Suzanne Shoush during her MSc thesis defense.",
    description:
        "Suzanne Shoush successfully defended her Master of Science thesis at IHPME, marking a significant academic achievement.",
    content: `Suzanne Shoush has successfully defended her Master of Science thesis at IHPME. Her virtual defense showcased the depth of her research and the strength of her academic journey. Congratulations to Suzanne on this outstanding achievement!`,
    },
    {
    id: "3",
    title: "Congratulations to Nancy Tahmo – Vanier Canada Graduate Scholar!",
    subtitle: "Recognizing excellence, leadership, and equity-driven research",
    date: "July 10, 2025",
    category: "Recognition",
    image: "/images/news/news-vanier-nancy.png",
    imageCaption: "Nancy Tahmo, Vanier Canada Graduate Scholar.",
    description:
        "Nancy Tahmo has been awarded the prestigious Vanier Canada Graduate Scholarship for her community-based HIV modeling research.",
    content: `Awarded by the Canadian Institutes of Health Research, the Vanier Canada Graduate Scholarship supports doctoral students who demonstrate academic excellence, leadership, and the potential to make a lasting impact through research. Nancy Tahmo received this award for her work on community-based participatory modeling of HIV transmission among gay, bisexual, and other men who have sex with men in Kenya. Her research challenges conventional modeling hierarchies by engaging community researchers as co-leaders in building HIV transmission models using routine program data. The Vanier recognizes both the methodological innovation and the commitment to equity that define her approach.

Congratulations, Nancy, on this remarkable achievement!`,
    },
    {
    id: "4",
    title: "Chidumebi Idemili awarded 2025 Unity Health PhD Angels Den Scholarship!",
    subtitle: "Advancing equitable HIV prevention for women engaged in sex work",
    date: "May 23, 2025",
    category: "Recognition",
    image: "/images/news/news-angels-den-chidumebi.png",
    imageCaption: "Chidumebi Idemili, PhD candidate at the University of Toronto.",
    description:
        "Chidumebi Idemili has received the 2025 Unity Health PhD Angels Den Scholarship for innovative HIV prevention research.",
    content: `Congratulations to Chidumebi Idemili, a PhD candidate in Health Systems Research with emphasis on Health Technology Assessment at the Institute of Health Policy, Management and Evaluation, University of Toronto, has been awarded the 2025 Unity Health PhD Angels Den Scholarship in recognition of their innovative research addressing persistent inequities in HIV prevention for women engaged in sex work in Kenya.

Chidumebi’s research examines the epidemic and programmatic consequences of early HIV risk and the “access gap” before sex workers engage with formal HIV prevention services. Her study aims to quantify the impact of delayed access to prevention and to identify optimal, efficient HIV pre-exposure prophylaxis (PrEP) strategies under resource constraints.

This award supports research aligned with Unity Health Toronto’s Urban and Community Health Pillar, advancing evidence-based, equitable solutions for marginalized populations. Overall, Chidumebi’s project will inform policy, advocacy, and global program design for key populations at high risk of HIV.`,
    },
    {
    id: "5",
    title: "Nancy Tahmo awarded HUDD Bursary from Massey College!",
    subtitle: "Recognizing academic excellence and community leadership",
    date: "May 20, 2025",
    category: "Recognition",
    image: "/images/news/news-hudd-nancy.png",
    imageCaption: "Nancy Tahmo received the HUDD Bursary from Massey College.",
    description:
        "Nancy Tahmo has been awarded the HUDD Bursary from Massey College in recognition of her academic excellence and leadership.",
    content: `We’re pleased to share that Nancy Tahmo has been awarded the HUDD Bursary from Massey College, in honor of Frederick Hudd.

This bursary recognizes graduate students who demonstrate academic excellence and a strong commitment to the intellectual life of the Massey community. It reflects the College’s enduring values of leadership, scholarship, and public engagement.

Congratulations, Nancy, on this well-deserved recognition!`,
    },
    {
    id: "6",
    title: "Nancy Tahmo receives EPIC Doctoral Award!",
    subtitle: "Supporting interdisciplinary infectious disease research",
    date: "May 20, 2025",
    category: "Recognition",
    image: "/images/news/news-epic-nancy.png",
    imageCaption: "Nancy Tahmo, EPIC Doctoral Award recipient.",
    description:
        "Nancy Tahmo has received the EPIC Doctoral Award for her interdisciplinary work in HIV modeling and community engagement.",
    content: `Congratulations to Nancy Tahmo on receiving the [Emerging and Pandemic Infections Consortium (EPIC) Doctoral Award](https://epic.utoronto.ca/research/funded-initiatives/2025-doctoral-awards-competition-results/?et_fb=1&PageSpeed=off)!

This award supports interdisciplinary scholars dedicated to the prevention and control of infectious diseases. Nancy was selected in recognition of her research integrating Bayesian causal inference, HIV modeling, and community participation to identify novel strategies for closing prevention gaps among sexual minority communities in Kenya.

Her leadership in advancing participatory modeling and co-developing network-based interventions with frontline programs reflects EPIC’s vision for collaborative, forward-thinking infectious disease research.`,
    },
    {
    id: "7",
    title: "Dr. Jesse Knight Defends His Ph.D. – Congratulations!",
    subtitle: "Celebrating Academic Excellence and Leadership",
    date: "May 20, 2025",
    category: "Recognition",
    image: "/images/news/jesse-knight-phd.png",
    imageCaption: "Dr. Jesse Knight, Ph.D. graduate.",
    description:
        "Dr. Jesse Knight has successfully defended his Ph.D. thesis.",
    content: `We’re proud to celebrate Dr. Jesse Knight, who successfully defended his Ph.D. thesis on August 30, 2023, under the supervision of Dr. Sharmistha Mishra.

During his doctoral studies, Dr. Knight received several prestigious awards recognizing his academic excellence, leadership, and research impact. These include the NSERC Postgraduate Scholarship, the Stephen Pauker Award for Outstanding Presentation in Quantitative Methods and Theoretical Developments, and the University of Toronto Student Leadership Award. He was also awarded the Queen Elizabeth II Graduate Scholarship in Science and Technology, and in 2022, the Unity Health Research Excellence Award for Graduate Students and Postdoctoral Fellows, which recognized his outstanding commitment to Unity Health’s values and his contributions to public health research.

Congratulations, Dr. Knight, on this incredible achievement!`,
    },
];

