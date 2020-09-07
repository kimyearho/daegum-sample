<div align="center">
  <img src="https://code.visualstudio.com/assets/docs/nodejs/vuejs/welcome-to-vue.png">
</div>

### ◈ Package structure

```
dist                -- build output package
mock                -- mock server & setting
public              -- static assets
src                 -- source
  └ api             -- mock server api (option)
  └ assets          -- assets
  └ components      -- vue component
  └ icons           -- svg icons (option)
  └ layout          -- vue layouts
  └ router          -- vue router
  └ store           -- vuex
  └ styles          -- scss styles
  └ utils           -- utils (option)
  └ views           -- vue renderer component
    └ dashboard       -- dashboard view
    └ error-page      -- error page view
    └ login           -- login page view
    └ redirect        -- redirect view
    └ sample          -- sample page view
    App.vue         -- vue root router index
    main.js         -- vue app main setting
    permission.js   -- pre-router processing
```

### ◈ Project setup & start

```
-- yarn module install
npm install -g yarn
```

```
-- node modules install
yarn or yarn install
```

```
-- project start or build
dev: yarn dev
build: yarn build:prod or build:stage
```

### ◈ VS Code Setting

```
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.probe": ["javascript", "javascriptreact", "vue"]
}

```

### ◈ 외부 JS 라이브러리 import

https://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/

### ◈ Front lib or Framework

#### `Vue 2.x`

#### `official Guide`: https://kr.vuejs.org/v2/guide/index.html

〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓

#### `Vuex`

#### `official Guide`: https://vuex.vuejs.org/kr/

〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓

#### `Vue Router`

#### `official Guide`: https://router.vuejs.org/kr/

〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓

#### `Element UI`

#### `official Guide`: https://element.eleme.io/#/en-US

〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓

### ◈ Backend Framework

#### `Electron`

#### `official Guide`: https://www.electronjs.org/

〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓

#### `Electron-builder`

#### `official Guide`: https://www.electron.build/

### ◈ Etc

#### `Webpack` | `Babel` | `EsLint` | `Prettier`
