export type LaySummarySection = {
  question: string;
  answer: string;
};

export interface Tag {
  id: number;
  tag: string;
}

export type LaySummary = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: Tag[];
  paperUrl: string;
  contentImage: string;
  imageCaption: string;
  sections: LaySummarySection[];
  createdAt: Date;
};

export const laySummaries: LaySummary[] = [
  {
    id: "1",
    title: "Evolving landscape of economic evaluations of HIV pre-exposure prophylaxis and pre-exposure prophylaxis implementation strategies: A systematic review",
    description: "A systematic review examining how the costs and benefits of HIV PrEP and its delivery strategies have been evaluated over time, and what evidence gaps remain for guiding public health decision-making.",
    date: "December 8, 2025",
    tags: [
      { id: 1, tag: "Reducing Biases in Epidemiological Studies" }],
    paperUrl: "https://onlinelibrary.wiley.com/doi/10.1002/jia2.70058",
    contentImage: "/images/summary/summary1.png",
    imageCaption: "Geographic location of cost-effectiveness modeling of PrEP intervention and implementation strategies (Number of studies (N)=128). Note: Six studies were conducted in the Sub-Saharan African region, but did not specify the countries assessed, so they are not shown on the map.",
    sections: [
      {
        question: "Why did we conduct this study?",
        answer:
          `HIV pre-exposure prophylaxis (PrEP) is a medicine that helps protect people from getting HIV. Over the years, new types of PrEP have been developed–from the first daily oral pill to newer options like long-acting injections. Different ways of delivering HIV PrEP (e.g., phone apps, community organizations, mail order, clinic) have also been developed to tailor to people’s needs.

There is a lot of evidence that HIV PrEP works extremely well, but it takes resources (e.g., medication costs, health care delivery costs) to roll out PrEP. This is where evaluations of costs and benefits come in. Policymakers, health leaders, and community-based organizations need clear and up-to-date information about the costs and benefits of different types of HIV PrEP and different ways of delivering it. This information helps decision-makers consider how to fund and deliver HIV PrEP so that the people who may be at risk of acquiring HIV can access and benefit from HIV PrEP.

We reviewed all the available research on evaluating the costs and benefits of HIV PrEP to map out how research on this topic has changed over time. Our goal was to find out what information is still missing to help guide HIV prevention efforts and support decision-making.`,
      },
      {
        question: "What did we do?",
        answer:
          `We searched five major research databases for studies that evaluated the costs and benefits of HIV PrEP, up to August 21, 2025. We included studies from all countries and in all languages.

We looked at how research on the costs and benefits of HIV PrEP has changed over time. This included looking at who received HIV PrEP in the studies, which groups of people or regions were represented in existing studies, the types of HIV PrEP studied (e.g., daily oral pills, long-acting injections), and how HIV PrEP was delivered. We also examined whether studies only considered healthcare costs or included broader societal impacts such as peoples’ out-of-pocket expenses and time missed from work in addition to healthcare costs. Lastly, we examined how studies compared HIV PrEP with other HIV prevention methods, including whether these other HIV prevention programs may grow or change over time.`,
      },
      {
        question: "What did we find?",
        answer:
          `We found 128 studies that looked at the costs and benefits of HIV PrEP. Most studies focused on countries across Sub-Saharan Africa and North America, and on gay, bisexual, and other men who have sex with men. Fewer studies looked at other regions (e.g., Latin America and the Caribbean) and/or other groups at high risk of getting HIV, including sex workers and their clients, people involved in mixed HIV status relationships (e.g., one partner living with HIV and one partner not living with HIV), adolescent girls and young women, and injection drug users.

Most studies focused on early forms of HIV PrEP, such as daily oral pills, with fewer evaluating newer forms such as long-acting injections. Few studies considered broader societal costs and impacts of HIV PrEP, compared different forms of HIV PrEP to each other, or reflected how existing HIV prevention programs may change over time in their analyses.
`,
      },
      {
        question: "What do these findings mean for public health?",
        answer:
          `Existing research on the costs and benefits of HIV PrEP does not (yet) fully reflect the current HIV epidemic and the different HIV prevention programs currently available. Because of this, policymakers and health leaders may find it difficult to decide which types of HIV PrEP and delivery methods should be funded or expanded.

We recommend that future research should compare the costs and benefits of different forms of HIV PrEP to each other, consider social and economic impacts beyond healthcare costs, and compare HIV PrEP to current HIV prevention programs, including potential changes and expansion of these programs over time. This information will help ensure shrinking budgets are used wisely and are nimble enough to ensure HIV PrEP and other HIV prevention programs can reach the people who need them most and help prevent HIV transmission in an evolving landscape of HIV epidemics and HIV programs.

This work was led by team member Min Xi, and in partnership with our close collaborator and health economist [Dr. Kednapa Thavorn](https://ohri.ca/en/find-researcher/kednapa-thavorn) at the Ottawa Hospital Research Institute.
`,
      },
      {
        question: "Funding",
        answer:
          `This study was funded by an Early Researcher Award (ER17-13-043), a Canadian Institutes for Health Research Foundations award (FDN-143266), and a Canadian Institutes for Health Research Project grant (416186).`,
      },
    ],
    createdAt: new Date("2025-12-08"),
  },
  {
    id: "2",
    title: "Evaluating the impact of achieving cascade equality in Eswatini: a modelling study on the prevention impacts of antiretroviral therapy",
    description: "A modeling study examining how unequal access to HIV treatment can undermine prevention gains, using Eswatini as a real-world case to show the consequences of leaving marginalized populations behind during treatment scale-up.",
    date: "December 7, 2025",
    tags: [
      { id: 1, tag: "Reducing Biases in Epidemiological Studies" }],
    paperUrl: "https://doi.org/10.1097/qad.0000000000004400",
    contentImage: "/images/summary/summary2.png",
    imageCaption: "Changes in HIV outcomes under four “left behind” scenarios. Boxplots show the percent increase in cumulative infections (top) and additional incidence rate (bottom) compared with the base case for scenarios where ART scale-up was slower, and FSW, clients, both, or neither are left behind.",
    sections: [
      {
        question: "Why did we conduct this study?",
        answer:
          `HIV treatment (antiretroviral therapy) prevents HIV-related illness and prevents onward transmission of HIV to sexual partners. As such, massive efforts have been underway around the world to scale up coverage of HIV treatment, targeting all steps along the “treatment cascade”: testing for HIV, starting treatment, and ensuring it’s working.

Researchers have predicted that these efforts will substantially reduce the rate of new infections in various contexts. However, these predictions have almost always assumed that access to treatment was equal for everyone, even for marginalized groups like female sex workers, which is rarely true in reality. We wanted to explore the influence of this assumption on these predictions.`,
      },
      {
        question: "What did we do?",
        answer:
          `We developed a computer model of the HIV epidemic in Eswatini, a small country in Southern Africa, based on data from surveys and on-the-ground knowledge within our team. Despite a high burden of HIV, Eswatini recently scaled up HIV treatment to almost everyone in need, while minimizing inequalities in access by tailoring services to different groups.

So, we used what actually happened in Eswatini as a base case, and then simulated four “what-if” scenarios where HIV treatment scale-up was slower overall, like in other countries, and where different groups could be especially “left behind”: (a) female sex workers, (b) their clients, (c) both, or (d) neither. We then compared the rate and total numbers of new HIV infections by 2020 in “what-if” scenarios versus the base case.`,
      },
      {
        question: "What did we find?",
        answer:
          `We estimated that slower scale-up alone (d) would have led to 22,200-38,800 more HIV infections than the base case by 2020, while slower scale-up that especially left behind female sex workers and their clients (c) would have led to 39,200-62,700 more infections. We also estimated that the yearly rate of new infections in 2020 would have been twice as high as the base case in scenario (d) but three times as high in scenario (c). Outcomes for scenarios (a) and (b) were between these extremes.

In sensitivity analysis, we estimated that the impact of leaving behind female sex workers and their clients tended to increase when these groups were larger, and when HIV risk was concentrated among clients versus other men.`,
      },
      {
        question: "What do these findings mean for public health?",
        answer:
          `The expected benefits of HIV treatment will only be realized if barriers to unequal access are minimized, especially for marginalized populations already at higher risk of HIV. Unfortunately, recent cuts to global HIV funding by the Trump administration – [outlined in this KFF global health policy review](https://www.kff.org/global-health-policy/the-trump-administrations-foreign-aid-review-status-of-pepfar/) – threaten to do the exact opposite, reversing years of progress. By contrast, recent initiatives in Eswatini to identify and address these barriers, described in this [Eswatini HIV care study](https://doi.org/10.1007/s11904-020-00501-6), could serve as a guide and a reminder of what we can achieve.`,
      }
    ],
    createdAt: new Date("2025-12-07"),
  },
  {
    id: "3",
    title: "Community participatory approaches in infectious disease dynamic transmission modelling: a scoping review protocol",
    description: "A scoping review protocol examining how communities with lived experience have been engaged in infectious disease modeling, with the goal of advancing equity, improving model relevance, and proposing inclusive participatory modeling frameworks.",
    date: "October 28, 2025",
    tags: [
      { id: 1, tag: "Community Participatory Mathematical Modeling" }],
    paperUrl: "https://bmjopen.bmj.com/content/15/10/e098196",
    contentImage: "/images/summary/summary3.png",
    imageCaption: "Framework for defining the scope of the proposed study. This figure illustrates the structure used to guide what information we synthesize in the proposed review: who is involved in modeling, what approaches are used to engage with them, and the disease context the modeling study takes place.",
    sections: [
      {
        question: "Why did we conduct this study?",
        answer:
          `Mathematical models of infectious diseases are commonly used in public health to inform policies and programs that affect the lives of communities. Models help us study how infections can spread and to test scenarios on how to prevent or dampen outbreaks and epidemics. Developing and analyzing models with community participation could make models more relevant to the needs of communities. Community engagement could also make the models more robust and reliable by drawing on knowledge where traditional data do not exist, by testing assumptions, and by reducing potential harms that could stem from models (such as stigma from the traditional jargon or language used in modeling studies). 

Communities refer to people with lived experience. Other key interest holders include policymakers and public health professionals.  

We know little about how modeling studies have engaged with communities. One way to find out is to map out what has been done before and “critically synthesize” the approaches that have been taken with communities to date. Mapping evidence using a critical synthesis is a way of not just summarizing information but uncovering patterns against established theories and approaches and then proposing a way forward. `,
      },
      {
        question: "What will we do?",
        answer:
          `We developed a protocol for a scoping review to examine the gap in what we know about community engagement in modeling studies (knowledge gap) and how to do it (methodological gap). A scoping review is a type of research method that allows us to map existing evidence to identify gaps. In our protocol, we describe each step of how we will source the literature and find what we are looking for.  Importantly, this review and synthesis involves working with community members, through our partnership with HEKA (Health Research Intervention Kuthamini Afya Yetu), a network of community members from community organizations that serve sexual and gender minorities in Kenya. 
          
          Once we find the studies, we will review them to answer the following questions:
          - What approaches were used to engage with communities, and at what steps of the infectious disease modeling?
          - What was done during the modeling study to advance equity for the communities engaged, that is, shifting power dynamics such that communities had influence, felt valued, and gained capacity through knowledge sharing, and were positioned for future similar modeling studies? 
          
          Examples of how communities might have been engaged include but are not limited to: defining the research question, helping design or interpret models, or using the results in advocacy or policy.
          
          To answer the two questions, we will use a type of synthesis called “deductive” synthesis by extracting relevant information from the studies we find through mapping what the studies report to predefined categories. The predefined categories for the approaches are drawn from community-based participatory research frameworks and established steps of infectious disease modeling, and the categories for equity advancement are drawn from a framework for evaluating equity in researcher-community partnerships. In parallel, we will also use a type of synthesis called “inductive synthesis,” where we will identify emergent themes that reflect how communities themselves describe their engagement, influence, and capacity growth within the modeling process. `,
      },
      {
        question: "What could we learn from this work?",
        answer:
          `To our knowledge, the study will provide the first systematic and comprehensive synthesis of community engagement approaches used to date in infectious disease modeling. We will be able to: 
          - Map out the spectrum of approaches, including participatory approaches used in practice 
          - Highlight where engagement has been limited
          - Propose a framework for how to foster inclusive modeling
          This synthesis is part of a body of work that aims to advance methodologies in infectious disease modeling by centering the knowledge, experiences, and expertise of affected communities. The ultimate goal is not just more relevant, robust, and reliable models, but modeling that serves to help reduce health inequities.`,
      },
      {
        question: "Funding",
        answer:
          `This work is part of Nancy Tahmo’s PhD thesis, and is supported by the New Frontiers in Research Exploration Grant, the Canadian Institutes of Health Research Planning and Dissemination Grant, the Emerging and Pandemic Infections Consortium (EPIC) Doctoral Award, and Unity Health Toronto Angels Den Scholarship.`,
      }
    ],
    createdAt: new Date("2025-10-28"),
  },
  {
    id: "4",
    title: "Effectiveness of modified vaccinia Ankara-Bavarian Nordic vaccine against mpox infection:emulation of a target trial",
    description: "A population-based modeling and target trial emulation study assessing the real-world effectiveness of a single dose of the MVA-BN mpox vaccine during the 2022 outbreak in Ontario, Canada, and its implications for targeted vaccination strategies under limited vaccine supply.",
    date: "July 8, 2025",
    tags: [
      { id: 1, tag: "Reducing Biases in Epidemiological Studies" }],
    paperUrl: "https://www.bmj.com/content/386/bmj-2023-078243",
    contentImage: "/images/summary/summary4.png",
    imageCaption: "Target trial emulation between 12 June 2022 and 27 October 2022. To learn more about how vaccine effectiveness is measured, see this [study](https://www.bmj.com/content/386/bmj.q1982).",
    sections: [
      {
        question: "Why did we conduct this study?",
        answer:
          `In May 2022, there was an outbreak of mpox which became a global health emergency. To help manage the outbreak, Canada approved a vaccine called Modified Vaccinia Ankara-Bavarian Nordic (MVA-BN), which is given in two doses, 28 days apart. Early in the outbreak however, only one dose was initially given because vaccine supplies were limited. The full two-dose plan was introduced later in 2022. We sought to estimate the effectiveness of one dose of the vaccine on mpox infection.`,
      },
      {
        question: "What did we do?",
        answer:
          `Using data of 15.1 million Ontario residents, we imitated a target trial for the period June 12 to November 26, 2022, during which 691 mpox cases were reported. We focused on men aged 18 and older who had at least one syphilis test in the past year and a new diagnosis of a sexually transmitted infection (STI), or a filled prescription for HIV pre-exposure prophylaxis in the past year. We matched 3204 men who received one dose of MVA-BN vaccine with 3204 unvaccinated men. We carefully matched each individual based on factors that could act as potential confounders, to help ensure that receipt of vaccine was the only major difference between them. Each individual was followed until one of the following events: they were diagnosed with mpox, or received a second dose of the vaccine, died, or the study’s follow-up period ended on November 26, 2022. If an unvaccinated person got vaccinated during the study period, they could re-enter into the target trial as a vaccinated person and matched with a new unvaccinated individual (Figure above).`,
      },
      {
        question: "What did we find?",
        answer:
          `We observed that 21 vaccinated individuals got mpox, compared to 50 unvaccinated individuals. This means that more than twice as many unvaccinated people got mpox. Thus, we estimated that a single dose of the MVA-BN vaccine reduced the risk of infection by 58% (95% confidence interval 31% to 75%).`,
      },
      {
        question: "What do these findings mean for public health?",
        answer:
          `While one dose of MVA-BN vaccine offers moderate protection, the full two-dose plan is still the goal as it offers the best protection. However, in cases where vaccine supply is limited, offering one dose is the next best option.

          Targeted vaccination (vaccinating people at higher risk) helped control the mpox outbreak. This highlights the importance of continuing and strengthening targeted vaccination programs.`,
      },
      {
        question: "Funding",
        answer:
          `The study was funded by Canadian Immunization Research Network through the Canadian Institutes of Health Research.`,
      }
    ],
    createdAt: new Date("2025-07-08"),
  },
];
