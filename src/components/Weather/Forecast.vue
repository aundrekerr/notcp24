<template>
  <li
    :key="f.dt"
    class="forecast ext-center flex-1"
    v-on:click="selectForecast(f)"
  >
    <template v-if="fetching">
      <span class="
        forecast-date
        text-center text-white text-xl font-extrabold z-10
      ">
        ~
      </span>
      <div class="forecast-icon z-10">
        <img :src="`https://openweathermap.org/img/wn/01d@2x.png`" alt="">
      </div>
      <span class="
        forecast-temp
        text-center text-3xl text-white font-extrabold z-10
      ">
        ~
      </span>
    </template>
    <template v-else>
      <span class="
        forecast-date
        text-center text-white text-xl font-extrabold z-10
      ">
        <template v-if="forecastRange">{{ daytimeParse(f.dt) }}</template>
        <template v-else>{{ f.dt | moment("ddd") }}</template>
      </span>
      <div class="forecast-icon z-10">
        <img :src="`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`" alt="">
      </div>
      <span class="
        forecast-temp
        text-center text-3xl text-white font-extrabold z-10
      ">
        {{ Math.round(f.main.temp) }}
      </span>
    </template>
  </li>
</template>

<script>

export default {
  name: 'Forecast',
  props: {
    forecastData: Object,
    forecastRange: Boolean,
    fetching: Boolean,
    selectForecast: Function,
  },
  data() {
    return { f: { ...this.forecastData.forecast } };
  },
  methods: {
    daytimeParse(time) {
      const date = new Date(time * 1000);
      const hour = date.getHours();

      switch (hour) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return 'NITE';

        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
          return 'MORN';

        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
          return 'AFT';

        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
          return 'EVE';

        default:
          return 'DAY';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .forecast {
    position: relative;
    background: linear-gradient(
      90deg,
      var(--brandPrimary) 0%,
      var(--brandPrimaryAlt) 100%);
    border-top: 1px solid var(--brandSecondary);
    border-right: 1px solid #095793;
    cursor: pointer;

    &:first-of-type { border-bottom-left-radius: 3px; }
    &:last-of-type { border-right: none; border-bottom-right-radius: 3px; }

    &:before {
      content: '';
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--white);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover {
      &::before {
        opacity: 0.1;
      }
    }
  }

  span.forecast-date {
    position: relative;
    display: block;
    background: linear-gradient(
      98.24deg,
      var(--brandSecondary) 0.44%,
      var(--brandSecondaryAlt) 100.44%);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }

  .forecast-icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70px;
      filter: contrast(1.5);
    }
  }

  span.forecast-temp {
    position: relative;
    display: block;
    line-height: 2rem;
    padding-bottom: 0.5rem;
  }
</style>
