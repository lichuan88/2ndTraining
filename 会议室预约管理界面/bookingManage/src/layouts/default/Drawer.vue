<template>
    <v-navigation-drawer permanent>
        <v-list nav>
            <v-list-item prepend-icon="mdi-clock-time-nine-outline" title="会议时间" :to="{ name: 'Date' }"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-clock-outline" title="会议预约" :to="{ name: 'Book' }"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
  
<script lang="ts" setup>
//
</script>