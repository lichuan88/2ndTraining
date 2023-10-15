<template>
        <userInformation></userInformation>
        <bookingNav></bookingNav>
        <timeDiv></timeDiv>
        <timeBody></timeBody>
</template>

<script>
    import bookingNav from "./components/nav/bookingNav.vue";
    import userInformation from "./components/top/userInformation.vue"
    import timeDiv from "./components/time/timeDiv.vue"
    import timeBody from "./components/body/timeBody.vue"
    export default {
        components: {
            bookingNav,
            userInformation,
            timeDiv,
            timeBody
        },
        
    }
</script>

<style>
    *{
        margin: 0;
    }
    body{
        background-color: #eff0f5;
    }
</style>
