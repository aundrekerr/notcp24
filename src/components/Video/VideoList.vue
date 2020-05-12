<template>
  <transition>
    <div
      class="
        video-list
        absolute top-0 left-0 w-full z-50
        transition-opacity duration-300 ease-in-out
      ">
      <ul class="flex flex-wrap">
        <li
          class="relative"
          v-for="(v, index) in videos"
          @click="jumpToVideo(index)"
          :key="v.id.videoID">
            <div class="thumbnail relative transition-colors duration-300 ease-in-out">
              <img
                class="absolute top-0 left-0"
                :src="v.snippet.thumbnails.high.url"
                alt="">
            </div>
            <h3 class="headline absolute inline-block leading-tight">
              <span v-html="v.snippet.title" />
            </h3>
            <span class="channel absolute inline-block">
              <div v-bind:is="parseChannel(v.snippet.channelTitle)" />
            </span>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import CBCIcon from '../BroadcasterIcons/CBC.vue';
import CTVIcon from '../BroadcasterIcons/CTV.vue';
import CityTVIcon from '../BroadcasterIcons/CityTV.vue';

export default {
  name: 'PlayerControls',
  components: {
    CBCIcon,
    CTVIcon,
    CityTVIcon,
  },
  props: {
    videos: Array,
    jumpToVideo: Function,
  },
  mounted() {
    // console.log(this.videos);
  },
  methods: {
    parseChannel(channel) {
      switch (channel) {
        case 'CBC News': return 'CBCIcon';
        case 'CityNews Toronto': return 'CityTVIcon';
        case 'CTV News': return 'CTVIcon';
        case 'Global News': return '';
        default: return '';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .video-list {
    top: 2.6rem;
    height: calc(100% - 3.1rem);

    &.v-leave-active {
      opacity: 0;
    }

    @media screen and (max-width: 768px){
      height: calc(100% - 3rem);
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% + 0.5rem);
      /* backdrop-filter: blur(15px); */
      background: rgba(black, 0.8);
    }

    ul {
      position: relative;
      height: calc(100% + 0.5rem);
      overflow-y: scroll;
      padding: 2rem;

      @media screen and (max-width: 768px){
        padding: 1rem;
      }
    }

    li {
      width: calc(33.3333% - 0.6667rem);
      opacity: 0;
      animation: introVideoList 0.3s cubic-bezier(0.86, 0, 0.07, 1) forwards;
      margin-bottom: 1rem;
      margin-right: 1rem;

      @for $i from 1 through 50 {
        &:nth-of-type(#{$i}) {
          animation-delay: 0.05s * $i;
        }
      }

      &:nth-of-type(3n) { margin-right: 0; }

      @media screen and (max-width: 1200px){
        width: calc(50% - 0.5rem);
        &:nth-of-type(3n) { margin-right: 1rem; }
        &:nth-of-type(even) { margin-right: 0; }
      }

      @media screen and (min-width: 769px){
        &:nth-last-of-type(-n+3){ margin-bottom: 0; }
      }

      @media screen and (max-width: 768px){
        /* width: 100%; */
        /* margin-right: 0;

        &:last-of-type {
          margin-bottom: 0;
        } */
      }
    }

    a {

      &:hover {
        .thumbnail { border-color: var(--brandPrimary); }
        .headline { color: var(--brandPrimary); }
      }
    }
  }

  @keyframes introVideoList {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .thumbnail {
    overflow: hidden;
    border: 1px solid var(--brandTertiary);

    &:before {
      content: '';
      display: block;
      padding-bottom: 56.25%;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .headline {
    bottom: 0.75rem;
    left: 0.5rem;
    max-width: calc(100% - 1rem);

    @media screen and (max-width: 768px){
      line-height: 1rem;
    }

    span {
      padding: 0.125rem 0.5rem 0.25rem;
      color: var(--white);
      background: var(--brandSecondary);
      box-sizing: border-box;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      font-weight: 600;

      @media screen and (max-width: 768px){
        padding: 0.075rem 0.25rem 0.25rem;
        font-size: 0.75rem;
        line-height: 0.5rem;
      }
    }
  }

  span.channel {
    top: calc(0.5rem + 1px);
    right: calc(0.5rem + 1px);
    /* box-shadow: rgba(15, 15, 15, 0.25) 0px 10px 10px; */

    /* svg {
      width: 1.5rem;
      height: 1.5rem;
    } */
  }
</style>
