<template>
    <div class="nav">
        <meetingTime></meetingTime>
        <bookMeeting></bookMeeting>
        <reviseBooking></reviseBooking>
        <cancelMeeting></cancelMeeting>
    </div>
</template>
<script>
    import bookMeeting from "./bookMeeting.vue";
    import meetingTime from "./meetingTime.vue";
    import cancelMeeting from "./cancelMeeting.vue"
    import reviseBooking from "./reviseBooking.vue"
    
    export default{
        components:{
            bookMeeting,
            meetingTime,
            cancelMeeting,
            reviseBooking
        }
    }
</script>
<style>
    .nav{
        width: 13%;
        height: 92vh;
        background-color: #252a30;
        display: inline-block;
    }
</style>