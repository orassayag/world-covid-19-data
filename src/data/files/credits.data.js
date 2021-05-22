/* cSpell:disable */
import settings from '../../settings/settings';
import { CreditModel } from '../../core/models';

class SourcesData {

    constructor() {
        const { POP1_API_URL, POP2_API_URL, CAC_API_URL, CLN_API_URL, COA_API_URL,
            CVA_API_URL, CVS_API_URL, GOO_API_URL, WIK_API_URL, WOD_API_URL } = settings;
        // Credits list.
        this.creditsList = [
            new CreditModel({
                id: 1,
                name: 'OrEmail',
                title: 'Creator - Or Assayag',
                link: 'mailto:orassayag@gmail.com',
                iconName: 'user-circle',
                iconType: null,
                tooltip: 'Creator - Or Assayag',
                iconTooltip: 'Contact',
                isMaster: false,
                order: 1
            }),
            new CreditModel({
                id: 2,
                name: 'Source',
                title: 'Source Code',
                link: 'https://github.com/orassayag/world-covid',
                iconName: 'github',
                iconType: 'b',
                tooltip: 'GitHub Source Code',
                iconTooltip: 'Source',
                isMaster: true,
                order: 2
            }),
            new CreditModel({
                id: 3,
                name: 'StackOverFlow',
                title: 'StackOverFlow',
                link: 'https://stackoverflow.com/users/4442606/or-assayag?tab=profile',
                iconName: 'stack-overflow',
                iconType: 'b',
                tooltip: 'Contact StackOverFlow',
                iconTooltip: 'StackOverFlow',
                isMaster: true,
                order: 3
            }),
            new CreditModel({
                id: 4,
                name: 'LinkedIn',
                title: 'LinkedIn',
                link: 'https://linkedin.com/in/orassayag',
                iconName: 'linkedin',
                iconType: 'b',
                tooltip: 'Contact LinkedIn',
                iconTooltip: 'LinkedIn',
                isMaster: true,
                order: 4
            }),
            new CreditModel({
                id: 5,
                name: 'VSCode',
                title: 'Visual Studio Code',
                link: 'https://code.visualstudio.com',
                iconName: null,
                iconType: null,
                tooltip: 'Visual Studio Code',
                iconTooltip: null,
                isMaster: false,
                order: 5
            }),
            new CreditModel({
                id: 6,
                name: 'Notepad++',
                title: 'Notepad++',
                link: 'https://notepad-plus-plus.org',
                iconName: null,
                iconType: null,
                tooltip: 'Notepad++',
                iconTooltip: null,
                isMaster: false,
                order: 6
            }),
            new CreditModel({
                id: 7,
                name: 'Heroku',
                title: 'Heroku',
                link: 'https://www.heroku.com',
                iconName: null,
                iconType: null,
                tooltip: 'Heroku',
                iconTooltip: null,
                isMaster: false,
                order: 7
            }),
            new CreditModel({
                id: 8,
                name: 'POP1Official',
                title: 'POP1 Official: World Population Review',
                link: 'https://worldpopulationreview.com',
                iconName: null,
                iconType: null,
                tooltip: 'POP1 Official: World Population Review',
                iconTooltip: null,
                isMaster: false,
                order: 8
            }),
            new CreditModel({
                id: 9,
                name: 'POP1API',
                title: 'POP1 API: World Population Review',
                link: POP1_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'POP1 API: World Population Review',
                iconTooltip: null,
                isMaster: false,
                order: 9
            }),
            new CreditModel({
                id: 10,
                name: 'POP2Official',
                title: 'POP2 Official: Wikipedia Population',
                link: 'https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population',
                iconName: null,
                iconType: null,
                tooltip: 'POP2 Official: Wikipedia Population',
                iconTooltip: null,
                isMaster: false,
                order: 10
            }),
            new CreditModel({
                id: 11,
                name: 'POP2API',
                title: 'POP2 API: Wikipedia Population',
                link: POP2_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'POP2 API: Wikipedia Population',
                iconTooltip: null,
                isMaster: false,
                order: 11
            }),
            new CreditModel({
                id: 12,
                name: 'CACOfficial',
                title: 'CAC Official: AboutCorona.net',
                link: 'https://about-corona.net/',
                iconName: null,
                iconType: null,
                tooltip: 'CAC Official: AboutCorona.net',
                iconTooltip: null,
                isMaster: false,
                order: 12
            }),
            new CreditModel({
                id: 13,
                name: 'CACAPI',
                title: 'CAC API: AboutCorona.net',
                link: CAC_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'CAC API: AboutCorona.net',
                iconTooltip: null,
                isMaster: false,
                order: 13
            }),
            new CreditModel({
                id: 14,
                name: 'CLNOfficial',
                title: 'CLN Official: CoronaLmaoNinja',
                link: 'https://corona.lmao.ninja',
                iconName: null,
                iconType: null,
                tooltip: 'CLN Official: CoronaLmaoNinja',
                iconTooltip: null,
                isMaster: false,
                order: 14
            }),
            new CreditModel({
                id: 15,
                name: 'CLNAPI',
                title: 'CLN API: CoronaLmaoNinja',
                link: CLN_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'CLN API: CoronaLmaoNinja',
                iconTooltip: null,
                isMaster: false,
                order: 15
            }),
            new CreditModel({
                id: 16,
                name: 'COAOfficial',
                title: 'COA Official: Covid19api.com',
                link: 'https://covid19api.com',
                iconName: null,
                iconType: null,
                tooltip: 'COA Official: Covid19api.com',
                iconTooltip: null,
                isMaster: false,
                order: 16
            }),
            new CreditModel({
                id: 17,
                name: 'COAAPI',
                title: 'COA API: Covid19api.com',
                link: COA_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'COA API: Covid19api.com',
                iconTooltip: null,
                isMaster: false,
                order: 17
            }),
            new CreditModel({
                id: 18,
                name: 'CVAOfficial',
                title: 'CVA Official: CovidAPI',
                link: 'https://github.com/javieraviles/covidAPI',
                iconName: null,
                iconType: null,
                tooltip: 'CVA Official: CovidAPI',
                iconTooltip: null,
                isMaster: false,
                order: 18
            }),
            new CreditModel({
                id: 19,
                name: 'CVAAPI',
                title: 'CVA API: CovidAPI',
                link: CVA_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'CVA API: CovidAPI',
                iconTooltip: null,
                isMaster: false,
                order: 19
            }),
            new CreditModel({
                id: 20,
                name: 'CVSOfficial',
                title: 'CVS Official: Corona Virus Stats',
                link: 'https://documenter.getpostman.com/view/4074074/SzS7Pkup?version=latest',
                iconName: null,
                iconType: null,
                tooltip: 'CVS Official: Corona Virus Stats',
                iconTooltip: null,
                isMaster: false,
                order: 20
            }),
            new CreditModel({
                id: 21,
                name: 'CVSAPI',
                title: 'CVS API: Corona Virus Stats',
                link: CVS_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'CVS API: Corona Virus Stats',
                iconTooltip: null,
                isMaster: false,
                order: 21
            }),
            new CreditModel({
                id: 22,
                name: 'GOOOfficial',
                title: 'GOO Official: Roylab Stats',
                link: 'https://www.youtube.com/channel/UCDGiCfCZIV5phsoGiPwIcyQ',
                iconName: null,
                iconType: null,
                tooltip: 'GOO Official: Roylab Stats',
                iconTooltip: null,
                isMaster: false,
                order: 22
            }),
            new CreditModel({
                id: 23,
                name: 'GOOAPI',
                title: 'GOO API: Roylab Stats',
                link: GOO_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'GOO API: Roylab Stats',
                iconTooltip: null,
                isMaster: false,
                order: 23
            }),
            new CreditModel({
                id: 24,
                name: 'WIKOfficial',
                title: 'WIK Official: Wikipedia',
                link: 'https://en.wikipedia.org/w/COVID-19_pandemic',
                iconName: null,
                iconType: null,
                tooltip: 'WIK Official: Wikipedia',
                iconTooltip: null,
                isMaster: false,
                order: 24
            }),
            new CreditModel({
                id: 25,
                name: 'WIKAPI',
                title: 'WIK API: Wikipedia',
                link: WIK_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'WIK API: Wikipedia',
                iconTooltip: null,
                isMaster: false,
                order: 25
            }),
            new CreditModel({
                id: 26,
                name: 'WODOfficial',
                title: 'WOD Official: Kfir Ram',
                link: 'https://www.facebook.com/kfiram',
                iconName: null,
                iconType: null,
                tooltip: 'WOD Official: Kfir Ram',
                iconTooltip: null,
                isMaster: false,
                order: 26
            }),
            new CreditModel({
                id: 27,
                name: 'WODAPI',
                title: 'WOD API: Kfir Ram',
                link: WOD_API_URL,
                iconName: null,
                iconType: null,
                tooltip: 'WOD API: Kfir Ram',
                iconTooltip: null,
                isMaster: false,
                order: 27
            }),
            new CreditModel({
                id: 28,
                name: 'GitHub',
                title: 'GitHub',
                link: 'https://github.com',
                iconName: null,
                iconType: null,
                tooltip: 'GitHub',
                iconTooltip: null,
                isMaster: false,
                order: 28
            }),
            new CreditModel({
                id: 29,
                name: 'CodePen',
                title: 'CodePen',
                link: 'https://codepen.io',
                iconName: null,
                iconType: null,
                tooltip: 'CodePen',
                iconTooltip: null,
                isMaster: false,
                order: 29
            }),
            new CreditModel({
                id: 30,
                name: 'StackOverFlow',
                title: 'StackOverFlow',
                link: 'https://stackoverflow.com',
                iconName: null,
                iconType: null,
                tooltip: 'StackOverFlow',
                iconTooltip: null,
                isMaster: false,
                order: 30
            }),
            new CreditModel({
                id: 31,
                name: 'WikipediaSite',
                title: 'Wikipedia',
                link: 'https://en.wikipedia.org/wiki/Main_Page',
                iconName: null,
                iconType: null,
                tooltip: 'Wikipedia',
                iconTooltip: null,
                isMaster: false,
                order: 31
            }),
            new CreditModel({
                id: 32,
                name: 'Google',
                title: 'Google',
                link: 'https://www.google.com',
                iconName: null,
                iconType: null,
                tooltip: 'Google',
                iconTooltip: null,
                isMaster: false,
                order: 32
            }),
            new CreditModel({
                id: 33,
                name: 'GoogleMaps',
                title: 'Google Maps',
                link: 'https://www.google.com/maps',
                iconName: null,
                iconType: null,
                tooltip: 'Google Maps',
                iconTooltip: null,
                isMaster: false,
                order: 33
            }),
            new CreditModel({
                id: 34,
                name: 'GoogleFonts',
                title: 'Google Fonts',
                link: 'https://fonts.google.com',
                iconName: null,
                iconType: null,
                tooltip: 'Google Fonts',
                iconTooltip: null,
                isMaster: false,
                order: 34
            }),
            new CreditModel({
                id: 35,
                name: 'WorldFlagsSprite',
                title: 'World Flags Sprite',
                link: 'https://github.com/lafeber/world-flags-sprite',
                iconName: null,
                iconType: null,
                tooltip: 'World Flags Sprite',
                iconTooltip: null,
                isMaster: false,
                order: 35
            }),
            new CreditModel({
                id: 36,
                name: 'Mapsicon',
                title: 'Maps Icon',
                link: 'https://github.com/djaiss/mapsicon',
                iconName: null,
                iconType: null,
                tooltip: 'Maps Icon',
                iconTooltip: null,
                isMaster: false,
                order: 36
            }),
            new CreditModel({
                id: 37,
                name: 'FontAwesome',
                title: 'Font Awesome',
                link: 'https://fontawesome.com',
                iconName: null,
                iconType: null,
                tooltip: 'Font Awesome',
                iconTooltip: null,
                isMaster: false,
                order: 37
            }),
            new CreditModel({
                id: 38,
                name: 'BulkResizePhotos',
                title: 'Bulk Resize Photos',
                link: 'https://bulkresizephotos.com',
                iconName: null,
                iconType: null,
                tooltip: 'Bulk Resize Photos',
                iconTooltip: null,
                isMaster: false,
                order: 38
            }),
            new CreditModel({
                id: 39,
                name: 'Manytools',
                title: 'Many Tools',
                link: 'http://manytools.org/image/colorize-filter',
                iconName: null,
                iconType: null,
                tooltip: 'Many Tools',
                iconTooltip: null,
                isMaster: false,
                order: 39
            }),
            new CreditModel({
                id: 40,
                name: 'ResizeImage',
                title: 'Resize Image',
                link: 'https://resizeimage.net',
                iconName: null,
                iconType: null,
                tooltip: 'Resize Image',
                iconTooltip: null,
                isMaster: false,
                order: 40
            }),
            new CreditModel({
                id: 41,
                name: 'Toptal',
                title: 'Toptal',
                link: 'https://www.toptal.com/developers/css/sprite-generator',
                iconName: null,
                iconType: null,
                tooltip: 'Toptal',
                iconTooltip: null,
                isMaster: false,
                order: 41
            }),
            new CreditModel({
                id: 42,
                name: 'CSSSpritesTool',
                title: 'CSS Sprites Tool',
                link: 'https://cssspritestool.com',
                iconName: null,
                iconType: null,
                tooltip: 'CSS Sprites Tool',
                iconTooltip: null,
                isMaster: false,
                order: 42
            }),
            new CreditModel({
                id: 43,
                name: 'Spritegen',
                title: 'Spritegen',
                link: 'https://spritegen.website-performance.org',
                iconName: null,
                iconType: null,
                tooltip: 'Spritegen',
                iconTooltip: null,
                isMaster: false,
                order: 43
            }),
            new CreditModel({
                id: 44,
                name: 'CSSGenerator',
                title: 'CSS Generator',
                link: 'https://cssgenerator.org/rgba-and-hex-color-generator.html',
                iconName: null,
                iconType: null,
                tooltip: 'CSS Generator',
                iconTooltip: null,
                isMaster: false,
                order: 44
            }),
            new CreditModel({
                id: 45,
                name: 'ReactJS',
                title: 'React.js',
                link: 'https://reactjs.org',
                iconName: null,
                iconType: null,
                tooltip: 'React.js',
                iconTooltip: null,
                isMaster: false,
                order: 45
            }),
            new CreditModel({
                id: 46,
                name: 'NodeJS',
                title: 'Node.js',
                link: 'https://nodejs.org/en',
                iconName: null,
                iconType: null,
                tooltip: 'Node.js',
                iconTooltip: null,
                isMaster: false,
                order: 46
            }),
            new CreditModel({
                id: 47,
                name: 'CreateReactApp',
                title: 'create-react-app',
                link: 'https://github.com/facebook/create-react-app',
                iconName: null,
                iconType: null,
                tooltip: 'create-react-app',
                iconTooltip: null,
                isMaster: false,
                order: 47
            }),
            new CreditModel({
                id: 48,
                name: 'NPM',
                title: 'npm',
                link: 'https://www.npmjs.com',
                iconName: null,
                iconType: null,
                tooltip: 'npm',
                iconTooltip: null,
                isMaster: false,
                order: 48
            }),
            new CreditModel({
                id: 49,
                name: 'Axios',
                title: 'axios',
                link: 'https://www.npmjs.com/package/axios',
                iconName: null,
                iconType: null,
                tooltip: 'axios',
                iconTooltip: null,
                isMaster: false,
                order: 49
            }),
            new CreditModel({
                id: 50,
                name: 'NodeSass',
                title: 'node-sass',
                link: 'https://www.npmjs.com/package/node-sass',
                iconName: null,
                iconType: null,
                tooltip: 'node-sass',
                iconTooltip: null,
                isMaster: false,
                order: 50
            }),
            new CreditModel({
                id: 51,
                name: 'ReactRouterDom',
                title: 'react-router-dom',
                link: 'https://www.npmjs.com/package/react-router-dom',
                iconName: null,
                iconType: null,
                tooltip: 'react-router-dom',
                iconTooltip: null,
                isMaster: false,
                order: 51
            }),
            new CreditModel({
                id: 52,
                name: 'JSdom',
                title: 'jsdom',
                link: 'https://www.npmjs.com/package/jsdom',
                iconName: null,
                iconType: null,
                tooltip: 'jsdom',
                iconTooltip: null,
                isMaster: false,
                order: 52
            }),
            new CreditModel({
                id: 53,
                name: 'ReactRedux',
                title: 'react-redux',
                link: 'https://www.npmjs.com/package/react-redux',
                iconName: null,
                iconType: null,
                tooltip: 'react-redux',
                iconTooltip: null,
                isMaster: false,
                order: 53
            }),
            new CreditModel({
                id: 54,
                name: 'Redux',
                title: 'redux',
                link: 'https://www.npmjs.com/package/redux',
                iconName: null,
                iconType: null,
                tooltip: 'redux',
                iconTooltip: null,
                isMaster: false,
                order: 54
            }),
            new CreditModel({
                id: 55,
                name: 'ReduxThunk',
                title: 'redux-thunk',
                link: 'https://www.npmjs.com/package/redux-thunk',
                iconName: null,
                iconType: null,
                tooltip: 'redux-thunk',
                iconTooltip: null,
                isMaster: false,
                order: 55
            }),
            new CreditModel({
                id: 56,
                name: 'SharpQuotes',
                title: 'Sharp Quotes',
                link: 'https://www.sharpquotes.com',
                iconName: null,
                iconType: null,
                tooltip: 'Motivational Quotes Database',
                iconTooltip: null,
                isMaster: false,
                order: 56
            }),
            new CreditModel({
                id: 57,
                name: 'MaterialUI',
                title: '@material-ui',
                link: 'https://www.npmjs.com/package/@material-ui/core',
                iconName: null,
                iconType: null,
                tooltip: 'Material UI',
                iconTooltip: null,
                isMaster: false,
                order: 57
            }),
            new CreditModel({
                id: 58,
                name: 'xlsx',
                title: 'xlsx',
                link: 'https://www.npmjs.com/package/xlsx',
                iconName: null,
                iconType: null,
                tooltip: 'XLSX',
                iconTooltip: null,
                isMaster: false,
                order: 58
            }),
            new CreditModel({
                id: 59,
                name: 'textfixer',
                title: 'textfixer',
                link: 'https://www.textfixer.com/tools/remove-line-breaks.php',
                iconName: null,
                iconType: null,
                tooltip: 'textfixer',
                iconTooltip: null,
                isMaster: false,
                order: 59
            }),
            new CreditModel({
                id: 60,
                name: 'countrycode',
                title: 'countrycode',
                link: 'https://countrycode.org',
                iconName: null,
                iconType: null,
                tooltip: 'countrycode',
                iconTooltip: null,
                isMaster: false,
                order: 60
            }),
            new CreditModel({
                id: 61,
                name: 'iloveimg',
                title: 'iloveimg',
                link: 'https://www.iloveimg.com',
                iconName: null,
                iconType: null,
                tooltip: 'iloveimg',
                iconTooltip: null,
                isMaster: false,
                order: 61
            }),
            new CreditModel({
                id: 62,
                name: 'webp-to-png',
                title: 'webp-to-png',
                link: 'https://ezgif.com/webp-to-png',
                iconName: null,
                iconType: null,
                tooltip: 'webp-to-png',
                iconTooltip: null,
                isMaster: false,
                order: 62
            }),
            new CreditModel({
                id: 63,
                name: 'gif-to-apng',
                title: 'gif-to-apng',
                link: 'https://ezgif.com/gif-to-apng',
                iconName: null,
                iconType: null,
                tooltip: 'gif-to-apng',
                iconTooltip: null,
                isMaster: false,
                order: 63
            }),
            new CreditModel({
                id: 64,
                name: 'onlinepngtools',
                title: 'onlinepngtools',
                link: 'https://onlinepngtools.com/create-transparent-png',
                iconName: null,
                iconType: null,
                tooltip: 'onlinepngtools',
                iconTooltip: null,
                isMaster: false,
                order: 64
            }),
            new CreditModel({
                id: 65,
                name: 'svgtopng',
                title: 'svgtopng',
                link: 'https://svgtopng.com',
                iconName: null,
                iconType: null,
                tooltip: 'svgtopng',
                iconTooltip: null,
                isMaster: false,
                order: 65
            }),
            new CreditModel({
                id: 66,
                name: 'jpg2png',
                title: 'jpg2png',
                link: 'https://jpg2png.com',
                iconName: null,
                iconType: null,
                tooltip: 'jpg2png',
                iconTooltip: null,
                isMaster: false,
                order: 66
            }),
            new CreditModel({
                id: 67,
                name: 'iconfinder',
                title: 'iconfinder',
                link: 'https://www.iconfinder.com',
                iconName: null,
                iconType: null,
                tooltip: 'iconfinder',
                iconTooltip: null,
                isMaster: false,
                order: 67
            }),
            new CreditModel({
                id: 68,
                name: 'favicon.io',
                title: 'favicon.io',
                link: 'https://favicon.io/favicon-converter',
                iconName: null,
                iconType: null,
                tooltip: 'favicon.io',
                iconTooltip: null,
                isMaster: false,
                order: 68
            }),
            new CreditModel({
                id: 69,
                name: 'pngtosvg',
                title: 'pngtosvg',
                link: 'https://www.pngtosvg.com',
                iconName: null,
                iconType: null,
                tooltip: 'pngtosvg',
                iconTooltip: null,
                isMaster: false,
                order: 69
            }),
            new CreditModel({
                id: 70,
                name: 'Java Guides',
                title: 'Java Guides',
                link: 'https://www.youtube.com/watch?v=tA4Fl1dZgjc',
                iconName: null,
                iconType: null,
                tooltip: 'Java Guides',
                iconTooltip: null,
                isMaster: false,
                order: 70
            }),
            new CreditModel({
                id: 71,
                name: 'Reverso',
                title: 'Reverso',
                link: 'https://www.reverso.net/spell-checker/english-spelling-grammar',
                iconName: null,
                iconType: null,
                tooltip: 'Reverso',
                iconTooltip: null,
                isMaster: false,
                order: 71
            }),
            new CreditModel({
                id: 72,
                name: 'cross-env',
                title: 'cross-env',
                link: 'https://www.npmjs.com/package/cross-env',
                iconName: null,
                iconType: null,
                tooltip: 'cross-env',
                iconTooltip: null,
                isMaster: false,
                order: 72
            }),
            new CreditModel({
                id: 73,
                name: 'react-helmet',
                title: 'react-helmet',
                link: 'https://www.npmjs.com/package/react-helmet',
                iconName: null,
                iconType: null,
                tooltip: 'react-helmet',
                iconTooltip: null,
                isMaster: false,
                order: 73
            }),
            new CreditModel({
                id: 74,
                name: 'CreateReactAppBuildPack',
                title: 'create-react-app-buildpack',
                link: 'https://github.com/mars/create-react-app-buildpack',
                iconName: null,
                iconType: null,
                tooltip: 'create-react-app-buildpack',
                iconTooltip: null,
                isMaster: false,
                order: 74
            })
        ];
    }
}

export default new SourcesData();