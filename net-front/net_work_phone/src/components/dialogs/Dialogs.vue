<!-- 对话框弹窗
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

interface DialogProps {
  open: boolean;
}

const props = defineProps<DialogProps>();
const emit = defineEmits<{
  close: [];
  complete: [];
}>();
const open = ref(false);

const onClose = () => {
  open.value = false;
  emit("close");
};

watch(
  () => props.open,
  (isOpen: boolean) => {
    open.value = isOpen;
  }
);

onMounted(() => {
  open.value = props.open;
});
</script>
<template>
  
</template>
<style scoped>
.header {
  width: 100%;
  background-color: #1296db;
  color: #e6f3fb;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
}
</style> -->
