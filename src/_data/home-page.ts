import photoWordcamp from "@/assets/luca-wordcamp-2019.jpeg";

export default {
  hero: {
    heading: 'Luca Pagliaro',
    motto: 'Senior front-end developer <i>responsabile</i>',
    copy: 'Currently freelancing, available for collaborations',
    ctas: [
      {label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucapagliaro/'},
      {label: 'Blog', href: 'https://ilasw.medium.com/'},
      {label: 'Contattami', href: 'mailto:hello@lucapagliaro.it'},
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
        photo: photoWordcamp,
        label: `Formazione ed eventi`,
        copy: `Adoro formazione, community locali, corsi ed eventi che frequento spesso anche come docente o speaker.`
      }
    ]
  },
  resume: {
    work: [
      {
        what: 'Senior front-end developer',
        when: '2022 - Oggi',
        where: 'Freelancer',
        copy: ``,
        stackImg: `https://skillicons.dev/icons?i=typescript,angular,react,vue,wordpress`
      },
      {
        what: 'Lead Web Developer',
        when: '2019 - 2022',
        where: 'The Wave Studio',
        copy: `Operativo sui progetti a più alto impatto dell’agenzia e manager del team web. Ho gestito la code-review, la formazione tecnica, il budget ed il processo di recruiting.`,
        stackImg: `https://skillicons.dev/icons?i=typescript,angular,vue,react,wordpress,laravel,nodejs,graphql`
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
        where: 'Freelancer',
        copy: `Sviluppato e mantenuto le web application in Angular e Vue della startup, applicando tutte le buone regole dello sviluppo web come client-side cache (anche tramite database in browser), skeleton, accessibilità.`,
        stackImg: `https://skillicons.dev/icons?i=sass,javascript,typescript,angular,vue,electron`
      },
      {
        what: 'Founder & CTO',
        when: '2015 - 2017',
        where: 'HereToday',
        copy: `Mi sono occupato di sviluppatore landing, piattaforma web e mobile tramite tecnologia cross-platform, un algoritmo di scraping per le principali piattaforme di recensioni sul food che riuscisse tramite algoritmo di NLP a comprendere quali aspetti di un locale piacevano ai clienti.`,
        stackImg: `https://skillicons.dev/icons?i=sass,javascript,angular,nodejs,mongodb,azure`
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
        copy: `Lavorato allo sviluppo di temi e plugin per YITH ed Envato (themeforest.net), curato la gestione di compatibilità con il multi lingua, fornito assistenza remota per più di 2.500 clienti internazionali.`,
        stackImg: `https://skillicons.dev/icons?i=javascript,php,wordpress`
      }
    ]
  }
}