<template>
  <section id="weather">
    <!-- Weather Menu -->
    <div class="section-menu">
      <!-- Refresh -->
      <Refresh
        :fetching="fetching"
        @click.native="getForecastData"
      />
      <TimeAgo :fetching="fetching" />
      <!-- Toggle -->
      <div
        v-on:click="toggleForecast"
        class="forecast-range-toggle"
        :class="forecastRange ? 'day' : 'week'"
      >
        <strong class="transition-all duration-300 ease-in-out">
          <button class="transition-color duration-300 ease-in-out">Day</button>
          <button class="transition-color duration-300 ease-in-out">Week</button>
        </strong>
      </div>

      <!-- City Select -->
      <div class="select-wrapper">
        <select
          class="transition-color duration-300 ease-in-out"
          name="city-select"
          id="city-select"
          :disabled="fetching"
          v-model="cityId"
          v-on:change="getForecastData"
        >
          <!-- <option value="6167865" selected>Toronto</option> -->
          <option v-for="city in cityList" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- Forecast Display -->
    <ul
      v-if="day !== null && week !== null"
      class="forecast-list flex flex-row justify-between bg-gray-900"
    >
      <template v-if="forecastRange">
        <Forecast
          v-for="forecast in day"
          :key="forecast.dt + cityId + forecastKey"
          :forecastData={forecast}
          :forecastRange="forecastRange"
          :fetching="fetching"
          :selectForecast="selectForecast"
        />
      </template>
      <template v-else>
        <Forecast
          v-for="forecast in week"
          :key="forecast.dt + cityId + forecastKey"
          :forecastData={forecast}
          :forecastRange="forecastRange"
          :fetching="fetching"
          :selectForecast="selectForecast"
        />
      </template>
      <template v-if="selectedForecast !== null">
        <Detail
          :key="selectedForecast.dt + forecastKey"
          :forecastData={selectedForecast}
          :closeForecast="closeForecast"
        />
      </template>
    </ul>
  </section>
</template>

<script>
import Forecast from './Forecast.vue';
// import Detail from './Detail.vue';
import Refresh from '../Refresh.vue';
import TimeAgo from '../TimeAgo.vue';

export default {
  name: 'Weather',
  components: {
    Forecast,
    Detail: () => import('./Detail.vue'),
    Refresh,
    TimeAgo,
  },
  data() {
    return {
      fetching: false,
      day: null,
      week: null,
      forecastRange: true,
      forecastKey: 0,
      selectedForecast: null,
      city: null,
      cityId: 6167865,
      cityList: [
        { id: 6167865, name: 'Toronto' },
        { id: 6091104, name: 'North York' },
        { id: 5950267, name: 'Etobicoke' },
        { id: 6122091, name: 'Richmond Hill' },
        { id: 6066513, name: 'Markham' },
        { id: 6087701, name: 'Newmarket' },
        { id: 6173577, name: 'Vaughan' },
        { id: 6075357, name: 'Mississauga' },
        { id: 5907364, name: 'Brampton' },
        { id: 5882873, name: 'Ajax' },
        { id: 6094578, name: 'Oshawa' },
        { id: 6104111, name: 'Pickering' },
        { id: 6092122, name: 'Oakville' },
        { id: 5911592, name: 'Burlington' },
        { id: 6074375, name: 'Milton' },
        { id: 5906831, name: 'Bowmanville' },
        { id: 5888377, name: 'Aurora' },
        { id: 5913424, name: 'Caledonia' },
        { id: 6172932, name: 'Uxbridge' },
        { id: 5969782, name: 'Hamilton' },
      ],
    };
  },
  mounted() {
    // Local storage checks
    if (localStorage.forecastRange) {
      this.forecastRange = JSON.parse(localStorage.forecastRange);
    }
    if (localStorage.cityId) {
      this.cityId = localStorage.cityId;
    }

    // Fetch data
    this.getForecastData();
  },
  methods: {
    async getForecastData() {
      this.fetching = true;

      await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.cityId}&APPID=${process.env.VUE_APP_WEATHER_API_KEY}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
          // The list of forecasts.
          const forecast = data.list;

          // Filter out forecasts for the day.
          const day = (forecast.filter((f, index) => index % 2 === 0)).slice(0, 5);

          // Filter out forecasts for the week.
          const firstHour = (new Date(forecast[0].dt * 1000)).getHours();
          const week = forecast.filter((obj) => {
            const date = new Date(obj.dt * 1000);
            const hour = date.getHours();

            return firstHour <= 5 && firstHour >= 19
              ? hour === firstHour && obj
              : hour === 17 && obj;
          });

          // Set the values.
          this.city = data.city;
          this.day = day;
          this.week = week;

          // Save cityId to local storage.
          localStorage.cityId = this.cityId;

          // Re-enable the select field.
          this.fetching = false;

          // Force forecasts to re-render.
          this.forceForecastRerender();
        });
    },
    toggleForecast() {
      this.forecastRange = !this.forecastRange;

      // Save cityId to local storage.
      localStorage.forecastRange = this.forecastRange;
    },
    selectForecast(f) {
      this.selectedForecast = f;
    },
    closeForecast() {
      this.selectedForecast = null;
      this.fetching = false;
    },
    forceForecastRerender() {
      this.forecastKey += 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  /* Forecast Toggle */
  .forecast-range-toggle {
    position: relative;
    width: 60px;
    height: 1.6rem;
    margin: 0 0.5rem;
    overflow: hidden;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid var(--brandPrimary);
    background: linear-gradient(
      98.24deg,
      var(--brandSecondary) 0.44%,
      var(--brandSecondaryAlt) 100.44%);

    &.day strong {
      left: 0;
      button:last-of-type { color: var(--brandPrimaryAlt); }
    }
    &.week strong {
      left: calc(-20px - 0.75rem);
      button:first-of-type { color: var(--brandPrimaryAlt); }
    }

    strong {
      position: absolute;
      top: 0;
      width: 80px;
      display: flex;
      line-height: 1.6rem;
      border-radius: 3px;
    }

    button {
      display: inline-block;
      text-transform: uppercase;
      padding: 0 0.25rem;
      width: 50px;
      color: var(--white);
      font-weight: bold;
      outline: none;
    }
  }

  /* Forecast List */
  ul.forecast-list {
    position: relative;
    overflow: hidden;
    flex-grow: 1;

    li {
      animation: introForecast 0.3s cubic-bezier(0.86, 0, 0.07, 1) forwards;

      @for $i from 1 through 50 {
        &:nth-of-type(#{$i}) {
          animation-delay: 0.05s * $i;
        }
      }
    }
  }

  @keyframes introForecast {
    0% { top: -0.5rem; }
    100% { top: 0; }
  }
</style>
