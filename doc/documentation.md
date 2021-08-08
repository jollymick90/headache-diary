Ciao,
devo studiare.
Devo imparare react. Ora. Velocemente!

ah giusto!
Devo imparare anche aws.... ci sta.

Cerchiamo... <react-search>
si... lo vedi.... brave....
<react-search-brave-highligh>

si lo so, il referral program è finito... ma è comunque il miglior browser da utlizzare.
"Se fossi il capo, installerei su tutti i pc dei miei dipendenti brave! con il mio account brave collegato LOL!"



Ho trovato questa guida. 
https://aws.amazon.com/it/getting-started/hands-on/build-react-app-amplify-graphql/


GraphQL l'ho già sentito... 

https://aws.amazon.com/it/getting-started/hands-on/build-react-app-amplify-graphql/


tailwind:
ho installato tailwind seguendo la guida ufficiale- 
https://tailwindcss.com/docs/guides/create-react-app

ho riscontrato un problema durante il deploy su amlify: 

probabilmente è dovuto al fatto che ho usato 'carco'. 
Craco ti invita a cambiare gli script di build:


                                 # Starting phase: build
                                 # Executing command: npm run build
2021-08-08T07:16:01.251Z [INFO]: > headache-diary@0.1.0 build /codebuild/output/src585557808/src/headache-diary
                                 > craco build
2021-08-08T07:16:02.735Z [INFO]: Creating an optimized production build...
2021-08-08T07:16:03.211Z [INFO]: Failed to compile.
2021-08-08T07:16:03.212Z [INFO]: ./src/index.js
                                 Cannot find file './aws-exports' in './src'.
2021-08-08T07:16:03.222Z [WARNING]: npm
2021-08-08T07:16:03.222Z [WARNING]: ERR! code ELIFECYCLE
                                    npm ERR! errno 1
2021-08-08T07:16:03.225Z [WARNING]: npm
2021-08-08T07:16:03.225Z [WARNING]: ERR! headache-diary@0.1.0 build: `craco build`
                                    npm ERR! Exit status 1
                                    npm ERR!
                                    npm ERR! Failed at the headache-diary

quindi sto seguendo questa guida:
https://www.oscarmarion.dev/articles/tailwind-react-cra

vediamo come va...


fatto ma non funziona. Mancano dipendenze!

"""
Please install PostCSS 8 or above
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! headache-diary@0.1.0 css: `postcss ./src/styles/tailwind.css -o ./src/styles/tailwind.generated.css`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the headache-diary@0.1.0 css script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\user\AppData\Roaming\npm-cache\_logs\2021-08-08T08_02_43_875Z-debug.log
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! headache-diary@0.1.0 prestart: `npm run css`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the headache-diary@0.1.0 prestart script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\user\AppData\Roaming\npm-cache\_logs\2021-08-08T08_02_43_892Z-debug.log
PS C:\Users\user\SideProject\headache\headache-diary> 

"""

""
{
  "name": "tw-cra-ts",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.15",
    "@types/node": "^12.0.0",
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.3",
    "typescript": "^4.1.2",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "css": "postcss ./src/styles/tailwind.css -o ./src/styles/tailwind.generated.css",
    "prestart": "npm run css",
    "start": "react-scripts start",
    "prebuild": "cross-env NODE_ENV=production npm run css",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

  """ 
porca miseria vorrei fare questo progetto con typescript e non javascript!

Odio non avere i tipo. Sono in fissa con i tipo, certi tipi...

magari faccio una versione di questo progetto con typescript. 


aggiornato postcss

ho anche installato il 'lens' dei package json


npm start



e te pareva!
altri errori!

""""

> headache-diary@0.1.0 prestart C:\Users\user\SideProject\headache\headache-diary
> npm run css


> headache-diary@0.1.0 css C:\Users\user\SideProject\headache\headache-diary
> postcss ./src/styles/tailwind.css -o ./src/styles/tailwind.generated.css

Input Error: You must pass a valid list of files to parse
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! headache-diary@0.1.0 css: `postcss ./src/styles/tailwind.css -o ./src/styles/tailwind.generated.css`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the headache-diary@0.1.0 css script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\user\AppData\Roaming\npm-cache\_logs\2021-08-08T08_17_04_012Z-debug.log
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! headache-diary@0.1.0 prestart: `npm run css`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the headache-diary@0.1.0 prestart script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\user\AppData\Roaming\npm-cache\_logs\2021-08-08T08_17_04_037Z-debug.log
"""



OK forse ho fatto un uso eccessivo del copia incolla....


1) Creo la cartella styles... (chissà se è corretto...)
2) creo il file tailwind.css 
3) import tailwind css
4) npm start.....

oh no! errore ancora



"""
PS C:\Users\user\SideProject\headache\headache-diary> npm start

> headache-diary@0.1.0 prestart C:\Users\user\SideProject\headache\headache-diary
> npm run css


> headache-diary@0.1.0 css C:\Users\user\SideProject\headache\headache-diary
> postcss ./src/styles/tailwind.css -o ./src/styles/tailwind.generated.css

autoprefixer: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration
TypeError: Cannot read property 'unprefixed' of undefined
    at C:\Users\user\SideProject\headache\headache-diary\src\styles\tailwind.css:2:1
    at Prefixes.unprefixed (C:\Users\user\SideProject\headache\headache-diary\node_modules\autoprefixer\lib\prefixes.js:372:39)
    at C:\Users\user\SideProject\headache\headache-diary\node_modules\autoprefixer\lib\processor.js:400:40
    at C:\Users\user\SideProject\headache\headache-diary\node_modules\postcss\lib\container.js:72:18
    at C:\Users\user\SideProject\headache\headache-diary\node_modules\postcss\lib\container.js:55:18
    at Rule.each (C:\Users\user\SideProject\headache\headache-diary\node_modules\postcss\lib\container.js:41:16)
    at Rule.walk (C:\Users\user\SideProject\headache\headache-diary\node_modules\postcss\lib\container.js:52:17)
    at C:\Users\user\SideProject\headache\headache-diary\node_modules\postcss\lib\container.js:60:24
    at Root.each (C:\Users\user\SideProject\headache\headache-diary\node_modules\postcss\lib\container.js:41:16)
    at Root.walk (C:\Users\user\SideProject\headache\headache-diary\node_modules\postcss\lib\container.js:52:17)
    at Root.walkDecls (C:\Users\user\SideProject\headache\headache-diary\node_modules\postcss\lib\container.js:70:19) {       
  postcssNode: Declaration {
    raws: { before: '\n  ', between: ': ', after: '\n  ' },
    type: 'decl',
    parent: Rule {
      raws: [Object],
      type: 'rule',
      nodes: [Array],
      source: [Object],
      selector: '*,\n::before,\n::after',
      parent: [Root],
      lastEach: 37,
      indexes: [Object],
      _autoprefixerDisabled: false,
      [Symbol(my)]: true
    },
    source: { start: [Object], input: [Input], end: [Object] },
    prop: 'box-sizing',
    value: 'border-box',
    _autoprefixerDisabled: false,
    [Symbol(my)]: true
  }
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! headache-diary@0.1.0 css: `postcss ./src/styles/tailwind.css -o ./src/styles/tailwind.generated.css`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the headache-diary@0.1.0 css script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\user\AppData\Roaming\npm-cache\_logs\2021-08-08T08_19_34_622Z-debug.log
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! headache-diary@0.1.0 prestart: `npm run css`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the headache-diary@0.1.0 prestart script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\user\AppData\Roaming\npm-cache\_logs\2021-08-08T08_19_34_648Z-debug.log
PS C:\Users\user\SideProject\headache\headache-diary>

"""


aggiornamento pacchetti in arrivo??

https://stackoverflow.com/questions/64057023/error-postcss-plugin-autoprefixer-requires-postcss-8-update-postcss-or-downgra

forse sì


compila....
ma ci sono errori!


"""

./src/index.css (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css)
TypeError: stagedAutoprefixer is not a function


"""

cerchiamo::
"postcss loader stagedAutoprefixer is not a function"