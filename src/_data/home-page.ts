import photoWordcamp from "@/assets/luca-wordcamp-2019.jpeg";
import photoEvent from "@/assets/luca-event.png";

export default {
  hero: {
    heading: 'Luca Pagliaro',
    motto: 'Senior front-end developer <i>responsabile</i>',
    copy: '💼 Freelancer, disponibile per collaborazioni',
    ctas: [
      {label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucapagliaro/'},
      {label: 'Blog', href: 'https://ilasw.medium.com/'},
      {label: 'Scrivimi', href: 'mailto:hello@lucapagliaro.it'},
    ]
  },
  about: {
    sections: [
      {
        photo: `https://skillicons.dev/icons?i=html,css,javascript,typescript,tailwind,react,vue,angular,nodejs,php,wordpress,graphql&theme=light&perline=4`,
        label: `Cosa faccio`,
        copy: `Sono uno specialista nello sviluppo su stack JavaScript / TypeScript, su WordPress, ed in generale di siti usabili ed accessibili.`
      },
      {
        photo: photoEvent,
        label: `Ricerca della qualità`,
        copy: `Mi piace realizzare prodotti digitali di qualità. Studio giornalmente per migliorare la qualità del mio lavoro e di quelli con cui collaboro.`
      },
      {
        photo: photoWordcamp,
        label: `Formazione ed eventi`,
        copy: `Adoro formazione, community locali, corsi ed eventi che frequento spesso anche come docente o speaker.`
      }
    ],
    talks: [
      {
        what: 'Accessibilità: cos’è e perché dovresti considerarla',
        when: 'Settembre 2019',
        where: 'WordCamp Catania',
        copy: `Vedremo cosa significa avere un sito accessibile, che può esse semplice da sviluppare e che la nostra User Experience ne guadagnerà, analizzeremo casi di successo e scopriremo piccoli accorgimenti che miglioreranno il nostro sito.`,
        cta: {
          label: 'Guarda il talk',
          href: 'https://wordpress.tv/2019/11/22/luca-pagliaro-accessibilita-cose-e-perche-dovresti-considerarla-in-fase-di-progettazione/'
        }
      },
      {
        what: 'Code Refactoring in JS, come scrivere codice che non odierai',
        when: 'Aprile 2019',
        where: 'WCAP Catania',
        copy: `Il talk in cui affronteremo vari principi di programmazione al fine di trovare una soluzione ai problemi più comuni di chi scrive codice JavaScript, infine vivremo un momento di confronto per ottenere progetti che non odierai in futuro!`,
        cta: {
          label: 'Guarda le slide',
          href: 'https://www.evernote.com/shard/s393/client/snv?noteGuid=ff49480d-a91d-4f3d-be79-d91c70e84a48&noteKey=ac57efa1455edb6d9ba5da2c973c19ac&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs393%2Fsh%2Fff49480d-a91d-4f3d-be79-d91c70e84a48%2Fac57efa1455edb6d9ba5da2c973c19ac&title=Fonti%2BEvento%253A%2BCode%2BRefactoring%2BJavaScript'
        }
      },
      {
        what: '304 - Not Modified, l\'ottimizzazione fatta bene',
        when: 'Dicembre 2018',
        where: 'Google DevFest',
        copy: `Un talk sullo stato dell'arte dei vari metodi per sviluppare siti web ottimizzati e sul come come farlo bene, dal livello base a quello esperto.`,
        cta: {
          label: 'Leggi l\'articolo',
          href: 'https://medium.com/@ilasw/larte-di-ottimizzare-i-siti-web-parte-1-328378f8a9be'
        }
      }
    ]
  },
  resume: {
    work: [
      {
        what: 'Senior front-end developer',
        when: '2022 - Oggi',
        where: 'Freelancer',
        copy: `Consulente per lo sviluppo front-end di progetti complessi.`,
        stackImg: `https://skillicons.dev/icons?i=typescript,angular,react,vue,wordpress`
      },
      {
        what: 'Lead Web Developer',
        when: '2019 - 2022',
        where: 'The Wave Studio',
        copy: `Operativo sui progetti a più alto impatto dell’agenzia e manager del team web. Ho gestito la code-review, la formazione tecnica, il budget ed il processo di recruiting.`,
        stackImg: `https://skillicons.dev/icons?i=typescript,angular,vue,react,wordpress,laravel,nodejs,graphql&perline=4`
      },
      {
        what: 'Docente JavaScript/React',
        when: '2021',
        where: 'Tree/Opinno',
        copy: `Docente per una classe di 15 persone con l’obiettivo di formare developer in grado di sviluppare con JavaScript e React. `,
        stackImg: `https://skillicons.dev/icons?i=javascript,react`
      },
      {
        what: 'Senior front-end developer',
        when: '2027 - 2019',
        where: 'Motorsquare',
        copy: `Sviluppato e mantenuto le web application in Angular e Vue della startup, applicando tutte le buone regole dello sviluppo web come client-side cache (anche tramite database in browser), skeleton, accessibilità.`,
        stackImg: `https://skillicons.dev/icons?i=sass,javascript,typescript,angular,vue,electron&perline=3`
      },
      {
        what: 'Founder & CTO',
        when: '2015 - 2017',
        where: 'HereToday',
        copy: `Mi sono occupato di sviluppatore landing, piattaforma web e mobile tramite tecnologia cross-platform, un algoritmo di scraping per le principali piattaforme di recensioni sul food che riuscisse tramite algoritmo di NLP a comprendere quali aspetti di un locale piacevano ai clienti.`,
        stackImg: `https://skillicons.dev/icons?i=sass,javascript,angular,nodejs,mongodb,azure&perline=3`
      },
      {
        what: 'Front-end developer & UI Designer',
        when: '2015',
        where: 'Newmediabit',
        copy: `Impegnato nel rifacimento del portale LovePedia con l’obbiettivo di ridisegnare la UI della piattaforma e di svilupparla in toto.`,
        stackImg: `https://skillicons.dev/icons?i=javascript,sass,jquery,php`
      },
      {
        what: 'WordPress developer',
        when: '2013 - 2014',
        where: 'Yithemes',
        copy: `Lavorato allo sviluppo di temi e plugin per YITH e ThemeForest, curato la gestione di compatibilità con il multi lingua, fornito assistenza remota per più di 2.500 clienti internazionali.`,
        stackImg: `https://skillicons.dev/icons?i=javascript,php,wordpress`
      }
    ]
  }
}