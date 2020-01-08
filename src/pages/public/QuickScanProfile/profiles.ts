const footer = {
  type: "c1-footer",
  data: {
    socialNetworks: [
      {
        uuid: "1",
        image: {
          src: "/socialNetworks/linkedIn.svg",
          alt: "LinkedIn logo",
          fallbackColor: "transparent"
        },
        link: {
          href: "https://www.linkedin.com/company/studata/",
          children: "LinkedIn",
          title: "LinkedIn",
          target: "_blank"
        }
      }
    ],
    sitemap: [
      {
        uuid: "2",
        tag: "Blog",
        links: [
          {
            uuid: "1",
            href: "/article",
            children: "Blog",
            title: "Blog",
            target: "_self"
          }
        ]
      },
      {
        uuid: "3",
        tag: "Algemeen",
        links: [
          {
            uuid: "1",
            href: "/algemene-voorwaarden",
            children: "Algemene voorwaarden",
            title: "Algemene voorwaarden",
            target: "_self"
          },
          {
            uuid: "2",
            href: "/privacy-policy",
            children: "Privacy policy",
            title: "Privacy policy",
            target: "_self"
          }
        ]
      }
    ],
    disclaimer: "Data Science Platform - Copyright 2019"
  }
};

export default [
  {
    scoreRange: [0, 14.4],
    blocks: [
      {
        type: "c8-quickscan-profile-hero",
        data: {
          eyebrow: "Fase 1",
          title: "Prerequisites to analytical competition",
          subtitle:
            "18 tot 36 maanden voordat er relevante inzichten uit de data worden gehaald en de organisatie in fase 1 zit."
        }
      },
      {
        type: "c9-quickscan-profile-sidebar",
        data: {
          title: "Uw bedrijf"
        }
      },
      {
        type: "c10-quickscan-profile-body",
        data: {
          body: [
            {
              uuid: "1",
              type: "rt-bold",
              children:
                "De organisatie beschikt over relevante data en het management heeft enige interesse in data analytics. Organisaties in deze fase zijn opzoek naar verklaringen voor behaalde resultaten door maken gebruik van standaard rapportages. Data analyse initiatieven vinden in deze fase op tactisch niveau plaats en hebben weinig impact op de organisatie of resultaten.\n\n"
            },
            {
              uuid: "2",
              type: "rt-regular",
              children:
                "Beslissingen worden genomen door te kijken naar het verleden. Het gaat hier over de vraag wat er in het verleden is voorgevallen, waarbij gebruik gemaakt wordt van een selectie aan data dat beschikbaar en relevant is. Hierin speelt data kwaliteit vaak nog een belangrijke rol, data zou niet alleen relevant maar ook betrouwbaar (volledig, accuraat en consistent) moeten zijn.\n\nVoor deze organisaties is het belangrijk om eerst de relevante, transactionele data (omgeving) op orde te krijgen. Betrouwbare data is nodig om beslissingen te kunnen nemen. Daarnaast is de steun van het management nodig om datagedreven beslissingen te nemen en dit ook te stimuleren.\n\nVoorbeelden zijn financiele rapportages met daarin omzetcijfers, of overzichten van de beschikbare capaciteit dat in het verleden ingezet is voor productie."
            }
          ]
        }
      },
      footer
    ]
  },
  {
    scoreRange: [14.4, 20.8],
    blocks: [
      {
        type: "c8-quickscan-profile-hero",
        data: {
          eyebrow: "Fase 2",
          title: "Prove it",
          subtitle:
            "1 tot 3 jaar voordat data analytics zich binnen de organisatie bewezen heeft, middels kleinschalig opgezette analyse projecten."
        }
      },
      {
        type: "c9-quickscan-profile-sidebar",
        data: {
          title: "Uw bedrijf"
        }
      },
      {
        type: "c10-quickscan-profile-body",
        data: {
          body: [
            {
              uuid: "1",
              type: "rt-bold",
              children:
                "In fase 2 wordt analytics door individuelen of bepaalde afdelingen uitgevoerd op verzoek van het management. Beslissingen worden genomen door te kijken naar het verleden, aan de hand van historische data dat intern beschikbaar, relevant en betrouwbaar is. Fase 1 en 2 worden daarom wel de 'eerste stappen in analytics' genoemd.  Er is nog geen organisatie brede aanpak op gebied van data analytics geformuleerd.  In deze fase wordt besloten of een organisatie verder gaat op gebied van data analyse of dat het niet meer ondersteunt wordt door het management. De uitkomsten van de projecten leiden of tot een bredere aanpak op management level voor de inzetbaarheid van data analyses, of er is geen management support en wordt er besloten het niet breder op te pakken binnen de organisatie.\n\n"
            },
            {
              uuid: "2",
              type: "rt-regular",
              children:
                "Er worden vragen gesteld waarom bepaalde voorvallen hebben plaatsgevonden, waarop een data analyse wordt uitgevoerd. Deze data wordt handmatig geselecteerd, verzameld en gestructureerd. De analyse projecten zijn relatief kleinschalig/korte termijn, gebaseerd op een test-en-leer aanpak. Daarbij is analytics nog een experimenteel project. Expertise op het gebied van data science is er/ontwikkeld en er worden data science tools toegepast.\n\nEen voorbeeld van fase 2 is een analyse waarbij er gekeken is naar de factoren die een rol hebben gespeeld in de verlaging van de productiviteit. De data voor dit verkennend onderzoek zijn handmatig verzameld, gestructureerd en middels tools geanalyseerd."
            }
          ]
        }
      },
      footer
    ]
  },
  {
    scoreRange: [20.8, 27.2],
    blocks: [
      {
        type: "c8-quickscan-profile-hero",
        data: {
          eyebrow: "Fase 3",
          title: "Analytical aspirations",
          subtitle:
            "Het kan een paar maanden tot twee jaar duren voordat de organisatie zich in fase 3 bevindt."
        }
      },
      {
        type: "c9-quickscan-profile-sidebar",
        data: {
          title: "Uw bedrijf"
        }
      },
      {
        type: "c10-quickscan-profile-body",
        data: {
          body: [
            {
              uuid: "1",
              type: "rt-bold",
              children:
                "Binnen deze fase wordt er met een bredere, strategische kijk gekeken naar de toepassing van data analytics. Beslisnemers binnen de organisatie zijn overtuigd van data analytics en een datagedreven cultuur, er wordt tijd en middelen aan besteedt en er is een planning opgezet voor het uitvoeren van data analyse projecten. De organisatie heeft haar eerste grote data analyse project opgezet en gefaciliteerd. Het (technisch) integreren en standaardiseren van organisatie data is een belangrijk onderdeel van deze fase.\n\n"
            },
            {
              uuid: "2",
              type: "rt-regular",
              children:
                "In fase 3 weet men aan de hand van data analyses wat er is voorgevallen, waarom het is voorgevallen en wat er op het moment (live) gebeurt. Tijdige, onderbouwde beslissingen kunnen worden genomen gebaseerd op actuele en beschikbare data.\n\nOrganisaties kijken in fase 3 naast historische data ook naar live rapportages. Relevante data is bedrijfsbreed vastgesteld, wordt automatisch verzameld en gestructureerd (buiten afdelingsgrenzen, middels bijvoorbeeld een datawarehouse), waarop vervolgens er automatisch dashboards gegenereerd worden. De data wordt dus niet meer, zoals in vorige fasen wel het geval is, handmatig verzameld en gestructureerd.\n\nEen voorbeeld van fase 3 kan zijn dat er een set aan automatisch gegenereerde dashboards zijn die voor verschillende afdelingen inzichten geven. Hieronder vallen financiele dashboards maar ook operationele dashboards van zowel interne als externe (Google Analytics) data."
            }
          ]
        }
      },
      footer
    ]
  },
  {
    scoreRange: [27.2, 33.6],
    blocks: [
      {
        type: "c8-quickscan-profile-hero",
        data: {
          eyebrow: "Fase 4",
          title: "Analytical companies"
        }
      },
      {
        type: "c9-quickscan-profile-sidebar",
        data: {
          title: "Uw bedrijf"
        }
      },
      {
        type: "c10-quickscan-profile-body",
        data: {
          body: [
            {
              uuid: "1",
              type: "rt-bold",
              children:
                "Data analytics krijgt vanuit het management prioriteit en de organisatie implementeert een breed opgezet plan op gebied van data analyse projecten. Daarnaast is de organisatie beter ingesteld op data analytics, zijn er meer ambassadeurs die het ondersteunen/stimuleren, en is datagedreven werken opgenomen in de cultuur. Analisten en data scientists worden effectief ingezet op hun specifieke kennis en kunde. Men focust zich op het continue verbeteren van de analyses, het uitbreiden van data science binnen de organisatie, en wil graag haar concurrentievoordeel er mee behalen.\n\n"
            },
            {
              uuid: "2",
              type: "rt-regular",
              children:
                "Fase 4 gebruikt historische, beschrijvende data van de fasen ervoor om te komen tot voorspellende waarde. Het gaat 1 stap verder door de historische data te gebruiken, en daarnaast te komen tot een voorspelling voor de toekomst. Hierdoor kan er accurater worden ingespeeld op bijvoorbeeld voorraadbeheer, planningsvraagstukken, budgettering en risico analyses.\n\nVoorspellende waarde geeft inzicht in de relevante knoppen waaraan gedraaid kan worden om invloed uit te oefenen op een bepaald onderdeel. Bijvoorbeeld hoeveel voorraad er besteld moet worden voor de top 10 klanten of voor bepaalde klantsegmenten, of wanneer medewerkers naar een klant toe moeten voor het repareren van een bepaald onderdeel."
            }
          ]
        }
      },
      footer
    ]
  },
  {
    scoreRange: [33.6, 40],
    blocks: [
      {
        type: "c8-quickscan-profile-hero",
        data: {
          eyebrow: "Fase 5",
          title: "Analytical competitors"
        }
      },
      {
        type: "c9-quickscan-profile-sidebar",
        data: {
          title: "Uw bedrijf"
        }
      },
      {
        type: "c10-quickscan-profile-body",
        data: {
          body: [
            {
              uuid: "1",
              type: "rt-bold",
              children:
                "Data analytics wordt gezien als cruciaal voor de strategie van de organisatie en het behalen van concurrentievoordeel. Data projecten hebben geresulteerd in het verbeteren van de organisatie en data is een cruciaal onderdeel in het behalen van concurrentievoordeel.\n\n"
            },
            {
              uuid: "2",
              type: "rt-regular",
              children:
                "Een kleine greep van de organisaties (Google, Amazon, LinkedIn) zit in de laatste fase op gebied van data analytics. Deze fase gebruikt historische data en voorspellende waarde om te komen tot voorschrijvende inzichten (wat is de 'next practise'?). Hierin is data onderdeel van het management, het geeft richting in wat er moet gebeuren om strategische doelstellingen te behalen.\n\nIn fase 5 wordt er structureel (middels bijvoorbeeld machine learning) gezocht naar nieuwe relevante data en inzichten. Er is dus niet eenmalig gekeken naar voorspellende waarden, maar er is een model opgezet dat zichzelf blijft vernieuwen/verbeteren, om zo bijvoorbeeld de klantbehoeften steeds beter te kunnen voorspellen."
            }
          ]
        }
      },
      footer
    ]
  }
];
