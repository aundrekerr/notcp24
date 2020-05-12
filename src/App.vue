<template>
  <div id="app">
    <div id="notCP24" class="md:flex flex-col">
      <Header />
      <Video />
      <Weather />
      <News :openNewsIframe="openNewsIframe" />
      <Traffic />
    </div>

    <transition>
      <template v-if="newsIframe !== null">
        <section
          id="newsIframe"
          class="
            duration-300
            bg-gray-900 z-50
          ">
          <header>
            <i @click="closeNewsIframe">&times;</i>
            <h2>{{ newsIframeHeadline }}</h2>
          </header>
          <div class="iframe-wrapper">
            <iframe
              :src="newsIframe"
              frameborder="0"
              sandbox="allow-same-origin">
            </iframe>
          </div>
        </section>
      </template>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import Video from './components/Video/index.vue';
import Weather from './components/Weather/index.vue';
import News from './components/News/index.vue';
import Traffic from './components/Traffic/index.vue';

// channels: {
//       'CTV': 'UCi7Zk9baY1tvdlgxIML8MXg',
//       'Global': 'UChLtXXpo4Ge1ReTEboVvTDg',
//       'CityTV': 'UCVKAcQQCO8vv87Gk62SutAg',
//       'CBC': 'UCuFFtHWoLl5fauMMD5Ww2jA'
//     },

export default {
  name: 'App',
  components: {
    Header,
    Video,
    Weather,
    News,
    Traffic,
  },
  data() {
    return {
      newsIframe: null,
      newsIframeHeadline: null,
    };
  },
  methods: {
    openNewsIframe(url, headline) {
      this.newsIframe = url;
      this.newsIframeHeadline = headline;
    },
    closeNewsIframe() {
      this.newsIframe = null;
      this.newsIframeHeadline = null;
    },
  },
};
</script>

<style lang="scss">

:root{
  --black: #0a0a0a;
  --white: #fafafa;
  --brandAccent: #9A0A10;
  --brandPrimary: #0C6FB5;
  --brandPrimaryAlt: #10609E;
  --brandSecondary: #073459;
  --brandSecondaryAlt: #082845;
  --brandTertiary: #081329;

  --mediaXL: 1200px;
  --mediaLG: 992px;
  --mediaMD: 768px;
  --mediaSM: 576px;
}

html, body {
  height: 100%;
  margin: 0;
  font-family: nimbus-sans, sans-serif;

  @media screen and (max-width: 768px) {
    /* height: auto;
    overflow-y: hidden; */
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background: var(--brandSecondaryAlt);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--brandPrimary);
  }
  &::-webkit-scrollbar-corner {
    background: var(--brandSecondaryAlt);
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;

  @media screen and (max-width: 768px) {
    overflow-y: hidden;
  }
}

#notCP24 {
  grid-area: main;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  grid-template-rows: 0.6fr  1fr  1fr  1fr 0.6fr 1.6fr;
  gap: 6px;
  grid-template-areas:
    "video header"
    "video weather"
    "video traffic"
    "video traffic"
    "news traffic"
    "news traffic";
  height: 100%;
  border: 6px solid var(--black);
  background: var(--black);
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border: none;
    overflow: auto;
  }

  header.main-header { grid-area: header; }
  > section {
    background: var(--brandSecondary);
    border-radius: 3px;

    @media screen and (max-width: 768px) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &#weather { grid-area: weather; }
    &#video { grid-area: video; }
    &#news { grid-area: news; }
    &#traffic { grid-area: traffic; }
  }
}

section#newsIframe {
  position: fixed;
  top: 0;
  right: -35vw;
  width: 35vw;
  height: 100vh;
  border-left: 1px solid var(--brandPrimary);
  overflow: hidden;
  animation: introIframe 0.3s cubic-bezier(0.86, 0, 0.07, 1) forwards;
  &.v-leave-active { animation: exitIframe 0.3s cubic-bezier(0.86, 0, 0.07, 1); }

  @keyframes introIframe {
    0% { right: -35vw; }
    100% { right: 0; }
  }

  @keyframes exitIframe {
    0% { right: 0; }
    100% { right: -35vw; }
  }

  @media screen and (max-width: 768px) {
    top: 2.6rem;
    left: 0;
    right: 0;
    width: 100%;
    animation: introIframeMobile 0.3s cubic-bezier(0.86, 0, 0.07, 1) forwards;
    &.v-leave-active { animation: exitIframeMobile 0.3s cubic-bezier(0.86, 0, 0.07, 1); }

    @keyframes introIframeMobile {
      0% { top: 100%; }
      100% { top: 2.6rem; }
    }

    @keyframes exitIframeMobile {
      0% { top: 2.6rem; }
      100% { top: 100%; }
    }
  }

  header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--brandAccent);
    height: 2.6rem;
    padding: 0.5rem;
    display: flex;
    box-shadow: rgba(15, 15, 15, 0.25) 0px 10px 10px;

    i {
      color: var(--white);
      font-style: normal;
      font-size: 2rem;
      line-height: 1.6rem;
      padding-right: 0.5rem;
      cursor: pointer;
    }

    h2 {
      color: var(--white);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1rem;
    }
  }

  .iframe-wrapper {
    width: calc(100% - 1rem);
    height: calc(100vh - 3.7rem);
    margin: 0.5rem;
    background: var(--white);
    border-radius: 3px;

    iframe {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>
