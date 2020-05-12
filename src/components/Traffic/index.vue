<template>
  <section id="traffic">
    <!-- Weather Menu -->
    <div class="section-menu">
      <!-- Refresh -->
      <Refresh
        :fetching="fetching"
      />
      <TimeAgo :fetching="fetching" />
    </div>

    <ul v-if="cameras !== null">
      <li
        v-for="g in cameras"
        :key="g.Id">
        {{ g.RoadwayName }}
      </li>
    </ul>

    <div style="overflow-y: scroll; height: 100%;">
      <Timeline
        id="opp_gtatraffic"
        sourceType="profile"
        :options="{ tweetLimit: '10' }"
      />
    </div>
  </section>
</template>

<script>
import { Timeline } from 'vue-tweet-embed';
import Refresh from '../Refresh.vue';
import TimeAgo from '../TimeAgo.vue';

export default {
  name: 'Traffic',
  components: {
    Refresh,
    TimeAgo,
    Timeline,
  },
  data() {
    return {
      fetching: false,
      cameras: null,
    };
  },
  mounted() {
    // this.fetchCameras();
  },
  methods: {
    async fetchCameras() {
      await fetch('https://aundrekerr.com/yoink/index.php?url=https://511on.ca/api/v2/get/groupedcameras')
      // await fetch('https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/xml?point=52.41072%2C4.84239&unit=KMPH&key=mlDGZnAObd6uaZoT0vGsJXp2V0NlFdXs')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.warn(error);
          return null;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #traffic {
    /* overflow-y: scroll; */
  }
</style>
