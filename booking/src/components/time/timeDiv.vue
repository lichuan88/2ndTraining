<template>
    <div class="time">
        <div>
            <timeDate></timeDate>
        </div>
        <div class="timeCalendar">
            <timeCalendar></timeCalendar>
        </div>
    </div>
</template>
<script>
import timeCalendar from './timeCalendar.vue';
import timeDate from './timeDate.vue'
export default {
    components: {
        timeCalendar,
        timeDate
    }
}
</script>
<style>
    .time{
        position: fixed;
        right: 20px;
        top: 10vh;
    }
    .timeCalendar{
        display: flex;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    }
</style>