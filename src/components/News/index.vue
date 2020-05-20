<template>
  <section id="news">
   <!-- News Menu -->
    <div class="section-menu">
      <!-- Refresh -->
      <Refresh
        :fetching="fetching"
        @click.native="fetchNewsFeed(currentFeed)"
      />
      <!-- <TimeAgo :fetching="fetching" /> -->

      <!-- Feed Select -->
      <div class="select-wrapper">
        <select
          class="transition-color duration-300 ease-in-out"
          name="news-select"
          id="news-select"
          :disabled="fetching"
          v-model="currentFeed"
          v-on:change="fetchNewsFeed($event.target.value)"
        >
          <option value="local" selected>Local</option>
          <option value="world">World</option>
          <option value="entertainment">Entertainment</option>
          <option value="sports">Sports</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
      </div>
    </div>
    <div class="news-display bg-gray-900" ref="newsRef">
      <ul class="flex flex-wrap">
        <template v-if="stories !== null">
          <li
            v-for="story in stories"
            :key="story.guid._text"
          >
            <a
              class="text-white"
              :href="story.link._text"
              @click.prevent="openNewsIframe(story.link._text, story.title._cdata)"
            >
              <div class="thumbnail transition-colors duration-300 ease-in-out">
                <img :src="story.enclosure._attributes.url" alt="">
              </div>
              <aside>
                <h3 class="
                  headline
                  tracking-tight leading-tight font-bold
                  transition-colors duration-300 ease-in-out
                ">
                  {{ story.title._cdata }}
                </h3>
                <div class="byline flex flex-col text-xs">
                  <span class="date">
                    {{ story['ctv:lastModifiedDate']._text | moment('h:mm a / dddd, MMM Do') }}
                  </span>
                  <span v-if="story['dc:creator']" class="author">
                    {{ story['dc:creator']._cdata }}
                  </span>
                </div>
              </aside>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
import Refresh from '../Refresh.vue';
// import TimeAgo from '../TimeAgo.vue';

const convert = require('xml-js');

export default {
  name: 'News',
  components: {
    Refresh,
    // TimeAgo,
  },
  props: {
    openNewsIframe: Function,
  },
  data() {
    return {
      fetching: false,
      endpoints: {
        local: 'https://toronto.ctvnews.ca/rss/ctv-news-toronto-1.822319',
        world: 'https://www.ctvnews.ca/rss/ctvnews-ca-world-public-rss-1.822289',
        entertainment: 'https://www.ctvnews.ca/rss/ctvnews-ca-entertainment-public-rss-1.822292',
        sports: 'https://www.ctvnews.ca/rss/sports/ctv-news-sports-1.3407726',
        lifestyle: 'https://www.ctvnews.ca/rss/lifestyle/ctv-news-lifestyle-1.3407722',
      },
      currentFeed: null,
      stories: null,
    };
  },
  mounted() {
    if (localStorage.newsFeed) {
      this.currentFeed = localStorage.newsFeed;
    }

    // Fetch data
    if (this.currentFeed !== null) {
      this.fetchNewsFeed(this.currentFeed);
    } else {
      this.fetchNewsFeed('local');
    }

    console.log(this.stories);
  },
  methods: {
    fetchNewsFeed(feed) {
      // Designate fetching.
      this.fetching = true;
      localStorage.newsFeed = feed;

      // Grab the specific feed from endpoints.
      return fetch(this.endpoints[feed])
        .then((response) => response.text())
        .then((str) => {
          // Convert the XML to JSON, then parse it.
          const newJson = convert.xml2json(str, { compact: true, spaces: 2 });
          const news = JSON.parse(newJson);

          // Set the new data and say we're no longer fetching.
          this.currentFeed = feed;
          this.stories = news.rss.channel.item;

          // Reset scroll position to top and say we're no longer fetching.
          this.$refs.newsRef.scrollTop = 0;
          this.fetching = false;
        })
        .catch((error) => {
          console.warn(error);
          this.fetching = false;
          return null;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .section-menu {
    /* border-bottom: 1px solid var(--brandSecondary); */
  }

  .news-display {
    overflow-y: scroll;
    height: calc(100% - 2.6rem);
    padding: 1rem;
    border-left: 1px solid var(--brandSecondary);

    @media screen and (max-width: 768px) {
      height: auto;
    }

    li {
      width: calc(50% - 0.5rem);
      opacity: 0;
      animation: introNews 0.3s cubic-bezier(0.86, 0, 0.07, 1) forwards;
      margin-bottom: 1rem;

      @for $i from 1 through 50 {
        &:nth-of-type(#{$i}) {
          animation-delay: 0.05s * $i;
        }
      }

      &:nth-of-type(odd) {
        margin-right: 1rem;
      }

      @media screen and (max-width: 768px){
        width: 100%;

        &:nth-of-type(odd) {
          margin-right: 0;
        }
      }
    }

    a {
      display: grid;
      grid-template-columns: minmax(0,0.6fr) minmax(0,1fr);
      grid-gap: 1rem;
      grid-template-areas:
        "thumbnail byline";
      height: 100%;

      &:hover {
        .thumbnail { border-color: var(--brandPrimary); }
        .headline { color: var(--brandPrimary); }
      }
    }
  }

  @keyframes introNews {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .thumbnail {
    grid-area: thumbnail;
    overflow: hidden;
    border: 1px solid var(--brandTertiary);
    border-radius: 3px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  aside {
    .headline {
      grid-area: headline;
      margin-bottom: 1rem;;
    }

    .byline {
      grid-area: byline;
      span { display: block; }
    }
  }

</style>
