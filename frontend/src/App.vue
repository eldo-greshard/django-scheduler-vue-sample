<template>
  <div class="row">
    <div class="col-md-4 mt-5">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(calendar, index) in listCalendar" v-bind:key="index">
          <a type="button" @click="fetchPhrases(calendar.slug)">{{ calendar.name }}</a>
        </li>
      </ul>
    </div>
    <div class="col-md-8 mt-5">
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
        height: '757px',
        initialView: "listWeek",
        events: [],
        views: {
          listDay: { buttonText: "list day" },
          listWeek: { buttonText: "list week" },
        },
      },
      listCalendar: []
    };
  },
  created() {
    this.fetchCalendars();
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
    async fetchCalendars() {
      let url = 'api/calendars/';
      const response = await this.$http.get(url);
      this.listCalendar = response.body;
      console.log(this.listCalendar)
      console.log(response)
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
}
</style>