<template>
  <div class="player-controls flex justify-between items-center">
    <!-- Previous -->
    <button  v-on:click="prevVideo">
      <svg viewBox="0 0 140 140">
        <g transform="scale(5.833333333333333,5.833333333333333)">
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M21.5,1.385,11,10.863a1.541,1.541,0,0,0,0,
            2.273l10.5,9.479A1.5,1.5,0,0,0,24,21.479V2.521A1.5,
            1.5,0,0,0,21.5,1.385Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M0.000 -0.000 L7.000 0.000 L7.000 24.000 L-0.000 24.000 Z"></path>
        </g>
      </svg>
    </button>

    <!-- Play Pause -->
    <template v-if="isPlaying">
      <button v-on:click="pauseVideo">
        <svg viewBox="0 0 140 140">
          <g transform="scale(5.833333333333333,5.833333333333333)">
            <path
              fill="#000000"
              stroke="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              d="M3.000 1.000 L10.000 1.000 L10.000 23.000 L3.000 23.000 Z"></path>
            <path
              fill="#000000"
              stroke="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              d="M14.000 1.000 L21.000 1.000 L21.000 23.000 L14.000 23.000 Z"></path>
          </g>
        </svg>
      </button>
    </template>
    <template v-else>
      <button v-on:click="playVideo">
        <svg viewBox="0 0 140 140">
          <g transform="scale(5.833333333333333,5.833333333333333)">
            <path
              fill="#000000"
              stroke="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              d="M23.14,10.608,2.253.164A1.559,1.559,0,0,0,0,
                1.557V22.444a1.558,1.558,0,0,0,2.253,
                1.392L23.14,13.393A1.557,1.557,0,0,0,23.14,10.608Z"></path>
          </g>
        </svg>
      </button>
    </template>

    <!-- Next -->
    <button v-on:click="nextVideo">
      <svg viewBox="0 0 140 140">
        <g transform="scale(5.833333333333333,5.833333333333333)">
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M13,10.863,2.5,1.385A1.5,1.5,0,0,0,0,
              2.521V21.479a1.5,1.5,0,0,0,2.5,1.136L13,
              13.137A1.538,1.538,0,0,0,13,10.863Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M17.000 -0.000 L24.000 0.000 L24.000 24.000 L17.000 24.000 Z"></path>
        </g>
      </svg>
    </button>

    <!-- Pin -->
    <button v-show="mobileSize" v-on:click="togglePinVideo">
      <svg viewBox="0 0 140 140">
        <g transform="scale(5.833333333333333,5.833333333333333)">
          <path
          fill="#000000"
          stroke="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0"
          d="M23.492,6.275,17.728.51a1.481,1.481,0,0,0-2.3.253l-4.1,6.443a7.468,
          7.468,0,0,0-5.468.8,1.48,1.48,0,0,0-.3,2.325l8.105,8.1a1.5,1.5,0,0,0,
          1.235.422,1.483,1.483,0,0,0,1.09-.72,7.423,7.423,0,0,0,.8-5.467l6.443-4.1a1.48,
          1.48,0,0,0,.253-2.295Zm-6.2-2.848L15.172,6.76a.508.508,0,0,1-.69.153.5.5,
          0,0,1-.154-.69l2.121-3.332a.5.5,0,1,1,.844.536Z"></path>
        <path
          fill="#000000"
          stroke="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0"
          d="M6.454,15.428l-5.94,5.94a1.5,1.5,0,0,0,0,2.121,1.517,1.517,0,0,0,2.121
          ,0l5.94-5.94a1.5,1.5,0,0,0-2.121-2.121Z"></path>
        </g>
      </svg>
    </button>

    <!-- Video List -->
    <button v-on:click="toggleVideoList">
      <svg viewBox="0 0 140 140">
        <g transform="scale(5.833333333333333,5.833333333333333)">
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M8.5,5H23a1,1,0,0,0,0-2H8.5a1,1,0,0,0,0,2Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M23,11H8.5a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M23,19H8.5a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M1.000 2.498 L4.000 2.498 L4.000 5.498 L1.000 5.498 Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M3.5,1.5h-2A1.5,1.5,0,0,0,0,3V5A1.5,1.5,0,0,0,
            1.5,6.5h2A1.5,1.5,0,0,0,5,
            5V3A1.5,1.5,0,0,0,3.5,1.5ZM4,5a.5.5,0,0,
            1-.5.5h-2A.5.5,0,0,1,1,5V3a.5.5,0,
            0,1,.5-.5h2A.5.5,0,0,1,4,3Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M1.000 10.498 L4.000 10.498 L4.000 13.498 L1.000 13.498 Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M3.5,9.5h-2A1.5,1.5,0,0,0,0,11v2a1.5,1.5,0,0,0,1.5,1.5h2A1.5,
            1.5,0,0,0,5,13V11A1.5,1.5,0,0,0,3.5,9.5ZM4,13a.5.5,0,0,1-.5.5h-2A.5.5,
            0,0,1,1,13V11a.5.5,0,0,1,.5-.5h2A.5.5,0,0,1,4,11Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M1.000 18.498 L4.000 18.498 L4.000 21.498 L1.000 21.498 Z"></path>
          <path
            fill="#000000"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            d="M3.5,17.5h-2A1.5,1.5,0,0,0,0,19v2a1.5,1.5,0,0,0,1.5,1.5h2A1.5,1.5,0,0,0,5,
            21V19A1.5,1.5,0,0,0,3.5,17.5ZM4,21a.5.5,0,0,1-.5.5h-2A.5.5,0,0,1,1,21V19a.5.5,
            0,0,1,.5-.5h2A.5.5,0,0,1,4,19Z"></path>
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PlayerControls',
  props: {
    mobileSize: Boolean,
    isPlaying: Boolean,
    playVideo: Function,
    pauseVideo: Function,
    nextVideo: Function,
    prevVideo: Function,
    toggleVideoList: Function,
    togglePinVideo: Function,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  -webkit-appearance: none;
  border-radius: 3px;
  border: 1px solid var(--brandPrimary);
  background: linear-gradient(
    98.24deg,
    var(--brandSecondary) 0.44%,
    var(--brandSecondaryAlt) 100.44%);
  color: var(--white);
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
  outline: none;
  margin-right: 1rem;
  &:last-of-type { margin-right: 0; }

  &:focus {
    background: var(--brandPrimary);
  }
}

svg {
  width: 0.5rem;
  height: 0.5rem;

  path {
    fill: var(--white);
  }
}
</style>
