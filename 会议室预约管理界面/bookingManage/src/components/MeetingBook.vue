<template>
  <v-container>
    <!-- 代办任务  日程表 -->
    <v-sheet rounded="lg">
      <FullCalendar ref="fullCalendar" :options="calendarOptions" class="demo-app-calendar" />
    </v-sheet>
  </v-container>
  <bookdialog :day="selectDate" :open="isBookDialogOpen"  @close="isBookDialogOpen=false" @complete="()=>{
    update(true)
  }"/>
</template>

<script lang="ts" setup>
import FullCalendar from "@fullcalendar/vue3"
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import zhCnLocale from '@fullcalendar/core/locales/zh-cn'
import bookdialog from '@/components/BookDialog.vue'
import { ref } from "vue";
import { BookForm } from "@/class/book-model";
import { useRequest } from 'alova'
import {getBookMsg} from '@/api/methods/book-msg' 

let matchList = ref<BookForm[]>([])//在日历上渲染的事件

//获取日历日程信息
const {onSuccess:getBookMsgSuccess,send:update}=useRequest(
  getBookMsg(),
  {
    force: (shouldForce:boolean) => shouldForce
  });

getBookMsgSuccess((response)=>{
matchList.value=response.data.data
})

const isBookDialogOpen=ref<boolean>(false)
const openBookDialog=()=>{
  isBookDialogOpen.value=true
}
const selectDate=ref<string>('');

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],//需要加载的插件        
  initialView: "timeGridWeek", //初始视图
  height: "700px",
  locale: zhCnLocale, //语言汉化
  selectable: true,
  nowIndicator: true,
  dayMaxEventRows: 2.0, //事件最大展示列数
  fixedWeekCount: false, //因为每月起始日是星期几不固定，导致一个月的行数会不固定，是否固定行数
  handleWindowResize: true,
  windowResizeDelay: 100,
  aspectRatio: 2, //宽高比
  headerToolbar: {
    left: "prev,today,next",
    center: "title",
    right: "timeGridWeek"
  }, //日历上方的按钮和title
  events: matchList, //绑定展示事件
  // eventClick: (info: any) => {
  //   openBookDialog()
  // },//点击事件显示信息
  select: (info: any) => {
    //将选择的时间传给子组件
    selectDate.value=(info.startStr.substring(0, 10));
    openBookDialog()
}//选择单元格
});

</script>
<style scoped>
</style>