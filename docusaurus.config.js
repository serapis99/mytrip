// temas de color
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// variables para implementar funciones matematicas
const math = require('remark-math');
const katex = require('rehype-katex');

// objeto de configuracion
const config = {
  //************************campos obligatorios *******************
  title: 'My trip', //titulo de la pagina
  url: 'https://github.com', //url cuando esta en produccion
  baseUrl: '/mytrip/', //base de la url para cuando pase a produccion

  //************************campos opcionales *********************
  
  tagline: 'Dinosaurs are cool', //eslogan de la pagina 
  favicon: 'img/favicon.ico', //ruta de la imagen favicon.ico
  trailingSlash:undefined, // configuracion de los slash acepta 3 valores (undefined|true|false)
  noIndex:false, // NO indexar la pagina (true|false)
  staticDirectories: ['static'], //rutas que seran estaticas y seran copiadas en la contruccion
  titleDelimiter:'|', //delimitador en el titulo

  //*** comportamiento */
  onBrokenLinks: 'throw', //comportamiento si no encuentra un link acepta los valores ('ignore'|'log'|'warn'|'throw')
  onBrokenMarkdownLinks: 'warn', //comportamiento si no encuentra un link markdown acepta los valores ('ignore'|'log'|'warn'|'throw')
  onDuplicateRoutes: 'warn', //comportamiento cuando se detecta rutas duplicadas

  //*** configuracion para el despliege en github */

  organizationName: 'facebook', // Usualmente el nombre de usuario en GitHub.
  projectName: 'docusaurus', // Usualmente el nombre del repositorio.
  deploymentBranch: 'gh-pages', //rama en la que va a ser desplegado
  githubHost: 'github.com', //pagina de donde va a ser desplegado
  githubPort: '22', //puerto que se usa para el despliege

  
  //*** configuracion de idiomas*/
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],  
  },
  //************configuracion del pluging classic de docusaurus */
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog:false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  /***************************Configuracion de los estilos css */
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  /****************************Configuracion del theme *****/
  themeConfig:
    ({
      //*****colores del tema
      defaultMode:'dark', //valores (dark|light)
      disableSwitch:false, //valores (true|false)
      respectPrefersColorScheme:false,//respetar preferencia de color de usuario (true|false)

      //metadatos del sitio
      metadata:[ 
        {name:'author', content:'Ruben Gacha'}
      ],

      //barra de navegacion
      hideOnScroll:false,
      style:'dark', //valores ('dark','primary')

      navbar: {
        title: 'my trip', //titulo de la barra

        //logo de la pagina
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
          href: "http://localhost:3000/",
          target:'_self',
          width:32,
          height:32,
        },

        // type (doc|docSidebar|dropdow)
        // propiedad (docId|sidebarId)
        items: [
          {
            type:'dropdown',
            label: 'Ingles',
            position: 'left',
            items:[
              {
                type: 'docSidebar',
                sidebarId:'InglesA1',
                label:'Ingles A1',
              },
              {
                type: 'docSidebar',
                sidebarId:'InglesA2',
                label:'Ingles A2',
              },
              {
                type: 'docSidebar',
                sidebarId:'InglesB1',
                label:'Ingles B1',
              },
              {
                type: 'docSidebar',
                sidebarId:'InglesB2',
                label:'Ingles B2',
              },{
                type: 'docSidebar',
                sidebarId:'InglesC1',
                label:'Ingles C1',
              },
              {
                type: 'docSidebar',
                sidebarId:'InglesC2',
                label:'Ingles C2',
              }
            ]
          },
          {
            type:'dropdown',
            label: 'Programacion',
            position: 'left',
            items:[
              {
                type: 'docSidebar',
                sidebarId:'ProgramacionBasica',
                label:'Basico',
              },
            ] 
          },
          {
            type:'dropdown',
            label: 'IA',
            position: 'left',
            items:[
              {
                type: 'docSidebar',
                sidebarId:'IA_Grafos',
                label:'Grafos',
              },
              {
                type: 'docSidebar',
                sidebarId:'IA_Probabilidad',
                label:'Probabilidad',
              },
              {
                type: 'docSidebar',
                sidebarId:'IA_Logica',
                label:'Logica',
              },
            ] 
          },
          {
            type:'dropdown',
            label: 'Automatizacion',
            position: 'left',
            items:[
              {
                type: 'docSidebar',
                sidebarId:'Uipath',
                label:'Uipath',
              },
              {
                type: 'docSidebar',
                sidebarId:'RocketBot',
                label:'RocketBot',
              },
              {
                type: 'docSidebar',
                sidebarId:'AutomatizacionPython',
                label:'Python',
              },
            ] 
          },
          {
            type:'dropdown',
            label: 'WEB',
            position: 'left',
            items:[
              {
                type: 'docSidebar',
                sidebarId:'HTML',
                label:'HTML',
              },
              {
                type: 'docSidebar',
                sidebarId:'CSS',
                label:'CSS',
              },
              {
                type: 'docSidebar',
                sidebarId:'JS',
                label:'Javascript',
              },
            ] 
          },
        ],
      },
      docs:{
        sidebar:{
          hideable:true,
          autoCollapseCategories:true,
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
        additionalLanguages: ['java','csharp','rust','visual-basic'],
      },
      tableOfContents:{
        minHeadingLevel:2,
        maxHeadingLevel:6,
      }
    }),
};

// exportar configuraciones
module.exports = config;
