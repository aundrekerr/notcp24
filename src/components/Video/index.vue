<template>
  <section
    id="video"
    class="relative"
    :class="pinVideo && 'lock-video z-50'">
    <!-- Video Menu -->
    <div class="section-menu">
      <!-- Refresh -->
      <!-- <Refresh
        :fetching="fetching"
      /> -->

      <!-- Time Ago -->
      <TimeAgo :fetching="fetching" />

      <!-- Player Controls -->
      <PlayerControls
        :mobileSize=mobileSize
        :isPlaying=isPlaying
        :showVideoList=showVideoList
        :playVideo="playVideo"
        :pauseVideo="pauseVideo"
        :nextVideo="nextVideo"
        :prevVideo="prevVideo"
        :toggleVideoList="toggleVideoList"
        :togglePinVideo="togglePinVideo"
      />
    </div>

    <template v-if="showVideoList">
      <VideoList
        :videos=allVideos
        :jumpToVideo="jumpToVideo"
      />
    </template>

    <div
      class="video-container"
      :class="isPlaying && 'playing'"
      v-if="allVideos.length > 0"
      ref="youtubeContainer">

      <!-- <div class="test text-white">
        <ul>
          <li
            v-for="v in allVideos"
            :key="v.id.videoID"
            v-html="v.snippet.title">
          </li>
        </ul>
      </div> -->

      <!-- <div class="video-title inline-block absolute top-0 left-0 z-30">
        <h3 class="leading-none text-sm">{{ allVideos[playerIndex].snippet.title }}</h3>
      </div> -->

      <!-- Video Player -->
      <youtube
        ref="youtube"
        :video-id="allVideos[playerIndex].id.videoId"
        :width="'100%'"
        :height="'100%'"
        @playing="playing"
        @ended="ended"
        :player-vars="playerVars">
      </youtube>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import VueYoutube from 'vue-youtube';
import PlayerControls from './PlayerControls.vue';
import VideoList from './VideoList.vue';
// import Refresh from '../Refresh.vue';
import TimeAgo from '../TimeAgo.vue';

Vue.use(VueYoutube);

export default {
  name: 'Video',
  components: {
    // Refresh,
    TimeAgo,
    PlayerControls,
    VideoList,
  },
  data() {
    return {
      fetching: false,
      isPlaying: false,
      pinVideo: false,
      showVideoList: false,
      mobileSize: window.innerWidth <= 768,
      playerVars: {
        autoplay: 1,
        controls: 1,
        mute: 1,
        modestbranding: 1,
        playsinline: 1,
      },
      channelIds: {
        cbc: 'UCuFFtHWoLl5fauMMD5Ww2jA',
        citytv: 'UCVKAcQQCO8vv87Gk62SutAg',
        ctv: 'UCi7Zk9baY1tvdlgxIML8MXg',
        global: 'UChLtXXpo4Ge1ReTEboVvTDg',
      },
      allVideos: [],
      playerIndex: 0,
    };
  },
  mounted() {
    // Fetch data
  },
  created() {
    // watch for resize, conditionally show Pin Video button
    window.addEventListener('resize', this.mobileResize);

    // Fetch videos per channelId given
    Object.keys(this.channelIds).map((channel) => this.fetchYouTubeVideos(channel));

    // Sort by most recent
    this.allVideos = this.allVideos.sort((a, b) => a.snippet.publishedAt - b.snippet.publishedAt);
  },
  destroyed() {
    window.removeEventListener('resize', this.mobileResize);
  },
  methods: {
    async fetchYouTubeVideos(channel) {
      const endpoint = `https://www.googleapis.com/youtube/v3/search?key=${process.env.VUE_APP_YOUTUBE_API_KEY}&channelId=${this.channelIds[channel]}&part=snippet,id&order=date&maxResults=8`;

      await fetch(endpoint)
        .then((res) => res.json())
        .then((data) => this.allVideos.push(...data.items))
        .catch((error) => {
          console.warn(error);
          return null;
        });
    },

    // control
    playVideo() {
      this.isPlaying = true;
      this.player.playVideo();
    },
    pauseVideo() {
      this.isPlaying = false;
      this.player.pauseVideo();
    },
    togglePinVideo() {
      this.pinVideo = !this.pinVideo;
    },
    nextVideo() {
      this.playerIndex = this.playerIndex <= this.allVideos.length - 1
        ? this.playerIndex + 1
        : 0;
    },
    prevVideo() {
      this.playerIndex = this.playerIndex > 0
        ? this.playerIndex - 1
        : this.allVideos.length - 1;
    },
    toggleVideoList() {
      this.showVideoList = !this.showVideoList;
    },
    jumpToVideo(index) {
      this.playerIndex = index;
      this.showVideoList = false;
    },

    // status
    playing() { this.isPlaying = true; },
    pause() { this.isPlaying = false; },
    ended() { this.nextVideo(); },
    mobileResize() { this.mobileSize = window.innerWidth <= 768; },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  section#video {
    &.lock-video {
      position: sticky;
      top: 0;
      border-bottom: 1px solid var(--brandPrimary);
    }
  }

  .video-container {
    position: sticky;
    top: 5rem;
    width: 100%;
    height: calc(100% - 2.6rem);
    overflow: hidden;

    &:hover, &:focus {
      .player-controls {
        left: 0;
      }
    }

    @media screen and (max-width: 768px) {
      height: 100%;

      &:before {
        content: '';
        display: block;
        padding-bottom: 56.25%;
        z-index: 0;
      }
    }

    .video-title {
      padding: 0.5rem;
      border-bottom-right-radius: 3px;
      border-right: 1px solid var(--brandSecondaryAlt);
      border-bottom: 1px solid var(--brandSecondaryAlt);
      background: rgba(20,20,20, 0.75);
      color: var(--white);

      h3 {
        margin: 0;
      }
    }

    ::v-deep iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
