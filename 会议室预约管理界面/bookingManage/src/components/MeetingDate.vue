<template>
  <v-container style="min-width: 980px;">
    <v-sheet class="d-flex " rounded="lg">
      <v-sheet class="d-flex flex-column ma-6">
        <v-sheet class="v-card-title ma-5">
          <v-icon icon="mdi-calendar-check"></v-icon>
          今日预约情况 <span class="mdi mdi-arrow-right"></span>
        </v-sheet>
        <v-sheet class="v-card-title">
          北京时间：{{ getHoursOfDay }}:{{ events() }}
        </v-sheet>
        <v-sheet class="ma-8">
          <Calendar :attributes="attributes" :color="'yellow'" />
        </v-sheet>
          <v-input :error-messages="['*查看更多预约信息，请点击‘会议预约’。']"/>
      </v-sheet>
      <v-col>
        <v-sheet class="flex-grow-1" style="min-width: 500px;">
          <FullCalendar ref="fullCalendar" :options="calendarOptions" class="demo-app-calendar" />
        </v-sheet>
      </v-col>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getMinutes, getHours } from 'date-fns'
import FullCalendar from "@fullcalendar/vue3"
import timeGridPlugin from '@fullcalendar/timegrid'
import zhCnLocale from '@fullcalendar/core/locales/zh-cn'
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';
import { BookForm } from "@/class/book-model";
import { useRequest } from 'alova'
import { getBookMsg } from '@/api/methods/book-msg'
const date = ref<any>(new Date());
const attributes = ref([{
  highlight: true,
  dates: date,
}])

const getMinutesOfDay: number = getMinutes(date.value)
const getHoursOfDay: number = getHours(date.value)
const events = () => {
  if (getMinutesOfDay < 10) {
    return ('0' + getMinutes(date.value))
  }
  return getMinutesOfDay
}

const eventList = ref<BookForm[]>([
  {
    title: '',
    start: '',
    end: '',
    color: '',
  }
]);
const { onSuccess: getBookMsgSuccess } = useRequest(
  getBookMsg(),
  {
    force: (shouldForce: boolean) => shouldForce
  });

getBookMsgSuccess((response) => {
  eventList.value = response.data.data
})



const calendarOptions = ref({
  plugins: [timeGridPlugin],//需要加载的插件        
  initialView: "timeGridDay", //初始视图
  height: "600px",
  locale: zhCnLocale, //语言汉化
  nowIndicator: true,
  dayMaxEventRows: 2.0, //事件最大展示列数
  fixedWeekCount: false, //因为每月起始日是星期几不固定，导致一个月的行数会不固定，是否固定行数
  handleWindowResize: true,
  windowResizeDelay: 100,
  aspectRatio: 2, //宽高比
  headerToolbar: {
    left: "",
    center: "",
    right: "",
  },
  events: eventList,
});
</script>

<style scoped>
.v-card-title {
  text-align: center;
  font-size: 1.75rem;
}
</style>