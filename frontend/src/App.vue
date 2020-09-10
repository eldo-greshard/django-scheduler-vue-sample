<template>
  <div class="row">
    <div class="col-md-4">
      <img alt="Vue logo" src="./assets/logo.png" />
      <h1>Phrases from Django API:</h1>
      <button type="button" @click="fetchPhrases('all')">Show All Callendar</button>

      <button type="button" @click="fetchPhrases('calendar-1')">Calendar 1</button>

      <button type="button" @click="fetchPhrases('calendar-2')">Calendar 2</button>
    </div>
    <div class="col-md-8">
      <div id="app">
        <FullCalendar :options="calendarOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        headerToolbar: {
          left: "today,listDay,listWeek,dayGridMonth prev,next",
          center: "",
          right: "title",
        },
        dayMaxEvents: true,
        plugins: [dayGridPlugin, interactionPlugin, listPlugin],
        initialView: "listWeek",
        events: [],
        views: {
          listDay: { buttonText: "list day" },
          listWeek: { buttonText: "list week" },
        },
      },
    };
  },
  methods: {
    async fetchPhrases(calendar_slug) {
      let url = "/api/occurrences?start=2020-01-01&end=2020-12-31";
      let get_url = "";
      if (calendar_slug === "all") {
        get_url = url;
      } else {
        get_url = url + "&calendar_slug=" + calendar_slug;
      }
      const response = await this.$http.get(get_url);
      this.calendarOptions.events = response.body;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>