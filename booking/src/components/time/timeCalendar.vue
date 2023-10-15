<template>
    <Calendar backgroundText class-name="select-mode" :remarks="remarks" style="width: 290px;"/>
</template>
<script>
import { ref } from 'vue'
import Calendar from 'mpvue-calendar'
export default {
        components: {
            Calendar,
        },
        setup() {
        const remarks = ref({'2021-1-13': 'some tings'})

            return {
                remarks,
            }
        }
    }
</script>