<template>
  <transition>
    <div class="forecast-detail z-10" @click="closeForecast">
      <span
        class="
          forecast-date
          z-10
          text-center text-white text-xl font-extrabold
        ">
        {{ daytimeParse(f.dt) }}
      </span>
      <div class="forecast-content">
        <div class="temperature-data">
          <div class="icon">
            <img :src="`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`" alt="">
            <span class="description font-light text-xs leading-tight uppercase">
                {{ f.weather[0].description }}
            </span>
          </div>
          <div class="main">
            <span class="temp font-black text-3xl tracking-tight">
              {{ f.main.temp }}<sup>℃</sup>
            </span>
          </div>
          <div class="feels_like">
            <span class="subtitle font-light text-xs leading-none uppercase">Feels Like</span>
            <span class="temp font-black text-xl leading-tight tracking-tight">
                {{ f.main.feels_like }}<sup>℃</sup>
            </span>
          </div>
          <div class="humidity">
            <span class="subtitle font-light text-xs leading-none uppercase">Humidity</span>
            <span class="temp font-black text-xl leading-tight tracking-tight">
                {{ f.main.humidity }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Detail',
  props: {
    forecastData: Object,
    closeForecast: Function,
  },
  data() {
    return { f: { ...this.forecastData.selectedForecast } };
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
  .forecast-detail {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-top: 1px solid var(--brandSecondary);
    background: linear-gradient(
      98.24deg,
      var(--brandSecondary) 0.44%,
      var(--brandSecondaryAlt) 100.44%);
    color: white;
    cursor: pointer;
    animation: introDetail 0.3s ease-in-out forwards;

    &.v-leave-active {
      animation: exitDetail 0.3s ease-in-out forwards;
    }
  }

  @keyframes introDetail {
    0% { opacity: 0; top: -100%; }
    100% { opacity: 1; top: 0; }
  }

  @keyframes exitDetail {
    0% { opacity: 1; top: 0; }
    100% { opacity: 0; top: -100%; }
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

  .forecast-content {
    flex-grow: 1;
    display: flex;
    max-height: calc(100% - 2.4rem);
    padding: 0.5rem;
    background: linear-gradient(90deg, var(--brandPrimary) 0%, var(--brandPrimaryAlt) 100%);
    overflow-y: scroll;
  }

</style>
