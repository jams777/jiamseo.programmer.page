<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  jiam.kr Homepage 
</h1>

Barcadia V2 Starter([github](https://github.com/bagseye/barcadia.git)) 로 시작해서 만들었음.

( make by Barcadia V2 Starter([github](https://github.com/bagseye/barcadia.git)) )

## 시작하기

1.  **Gatsby 사이트 생성**

    Gatsby CLI ( npm install -g gatsby-cli 또는 yarn global add gatsby-cli ) 명령어를 사용해서 사이트를 생성

    ```shell
    # create a new Gatsby site using the barcadia starter
    gatsby new jiamkr https://github.com/bagseye/barcadia
    ```

    현재 생성되어 있는 소스를 가져와도 된다.

    ```shell
    # clone repo
    git clone https://github.com/jams777/jiam.kr.git jiamkr
    ```

    그리고 필요 시 라이브러리 초기 설치를 진행한다.

    ```shell
    # npm install 
    npm install
    ```

2.  **개발환경 시작전에.**

    Contentful [Here](https://www.contentful.com/) 무료계정을 생성하고, 컨텐츠 공간의 아이디(space ID) 와 접근 토큰(access token)을 만들어야 함

    그리고 처음 사용할때 연경을 위한 환경 설정을 진행한다. 최상위 폴더에 `.env.development` 파일을 생성하고 아래의 공간아이디와 토큰을 넣는다.

    Contentful 로그인 후 > Settings > Space Settings > General Settings 에서 공간의 아이디(space ID)를 확인할 수 있다.

    Contentful 로그인 후 > Settings > Space Settings > API Keys 에서 Content Delivery API - access token 을 만들어 넣는다.

    ```
    CONTENTFUL_SPACE_ID={YOUR SPACE ID}
    CONTENTFUL_ACCESS_TOKEN={YOUR ACCESS TOKEN}
    ```

    **주요노트** - 해당 파일은 공개되지 않게 `.gitignore` 설정해서 commit 와 push 가 안되게 한다.

3.  **개발 시작하기.**

    해당 소스의 위치로 가서 gatsby 개발 시작 명령어를 입력한다. ( package.json 에 설정되어 있음 )

    ```shell
    cd jiamkr/
    gatsby develop
    ```

4.  **Contentful의 최초 데이터를 프로젝트에 설정하여 넣는다.(Content-model.json 을 제공한다.)**
    아래 설정((Json)파일(예. jiamkr-config.json)을 통해서 contentful 명령어를 사용하면 Contentful의 데이터를 넣을 수 있다..

    ```
    {
      "spaceId": "SPACE_ID",
      "managementToken": " Settings > Space Settings > API Keys > Content management tokens",
      "contentFile": "content-model.json",
      "contentModelOnly": false,
      "skipLocales": false
     }
    ```

    중요노트: 명령어(`npm i -g contentful-cli`)를 통해서 관리도구를 설치한 후 아래의 명령어를 입력한다:
    `contentful space import --config jiamkr-config.json`

5.  **사이트 열어보기**

    8000번 포트로 사이트가 열려있다. 브라우저에서 확인한다. `http://localhost:8000`!

    _Note: 해당 API 를 통해서 데이터를 확인(관리)해볼 수 있다. : _`http://localhost:8000/___graphql`_. 자세한 내용은 여기서 배울 수 있다. [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    폴더(`jiamkr`) 에 해당 파일부터 수정(`src/pages/index.js`)을 시작하면 된다. 수정 후 변경하면 바로 확인이 가능하다.

    Contentful 컨텐츠가 변경될 경우엔  (POST) _`http://localhost:8000/__refresh`_ 를 통해서 반영할 수 있다. ( 환경변수 ENABLE_GATSBY_REFRESH_ENDPOINT 를 true 로 설정해야 사용가능 ) 

6.  **사이트 배포하기**

    개발이 다 완료되면 , 운영환경 설정파일(`.env.production`) 을 만들고  아래의 공간아이디와 토큰을 넣는다.

    Contentful 로그인 후 > Settings > Space Settings > General Settings 에서 공간의 아이디(space ID)를 확인할 수 있다.

    Contentful 로그인 후 > Settings > Space Settings > API Keys 에서 Content Delivery API - access token 을 만들어 넣는다.

    그 후에 명령어( `npm run build` or `gatsby build` )를 통해서 빌드하면 public 폴더에 결과 파일이 생성된다.

## CMS 컨텐츠 모델 관리

    Contentful 데이터(`content-model.json`)를 백업/복원하는 방법은 [Here](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export) 를 참고하면 된다.

## 🧐 폴더 구조?

최상위 폴더와 파일만 우선 확인
.
├── node_modules
├── src
├── .gitignore
├── .prettierignore
├── .prettierrc
├── content-model.json
├── gatsby-config.js
├── gatsby-node.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md

1.  **`/node_modules`**: 프로젝트에 사용하는 모든 라이브러리 파일은 여기에 설치돤다. 

2.  **`/src`**: 화면관련 개발 코드가 있는 곳이다.

3.  **`.gitignore`**: 소스를 서버에 관리할때 관리하면 안되는 비밀스런 파일을 적어놓는 곳.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: MIT license로 Gatsby 라이센스.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: 이 프로젝트의 기본적인 설명이 있는 파일.

## 🎓 Gatsby 배우기

더 많은 정보는 메뉴얼 [on the website](https://www.gatsbyjs.org/)을 보고 우선 배우자:

- **개발자라면, 여기를 [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/) 참고.** 누군든지 할 수 있다고 생각한다.^^

- **코드샘플을 확인하려면, 여기를 [to our documentation](https://www.gatsbyjs.org/docs/) 참고.** 특히, 메뉴 중 _Guides_, _API Reference_, 그리고 _Advanced Tutorials_ 부분을 확인봐야한다.

<!-- AUTO-GENERATED-CONTENT:END -->

#### 사진 생성한사람들

[Ales Nesetril](https://unsplash.com/@alesnesetril)
[Josh Rose](https://unsplash.com/@joshsrose)
[Cat Han](https://unsplash.com/@figmentprints)
[Martin Sanchez](https://unsplash.com/@martinsanchez)
[Onur Binay](https://unsplash.com/@onurbinay)
[Torsten Dettlaff](https://www.pexels.com/@tdcat)
[Nick Demou](https://www.pexels.com/@nick-demou-365778)
[Little John](https://unsplash.com/@joao_freire)
