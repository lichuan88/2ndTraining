<template>
    <div class="main" ref="ref_main" v-if="isShow">
        <div style="box-shadow: 0 0 10px #00000026">
            <v-row align="end">
                <v-col>
                    <color-picker :pureColor="pureColor" :isWidget="isShow" :disableHistory="true" :pickerType="pickerType"
                        format="hex" :zIndex="1" :disableAlpha="disableAlpha" @pureColorChange="handle_pureColorChange" />
                </v-col>
                <v-col>
                    <v-btn @click="confirm" style="margin-right: 10px;">确定</v-btn>
                    <v-btn @click="isShowColorPicker(false)">关闭</v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const pureColor = ref('#71afe5');
const isShow = ref(false);
const ref_main = ref();

// 点击选择器外面会自动关闭选择器
const isFirstOpen = ref(false);
onMounted(() => {
    document.addEventListener('click', (e) => {
        if (!ref_main.value?.contains(e.target) && !isFirstOpen.value) {
            isShow.value = false;
        }
        isFirstOpen.value = false;
    });
});

const props = defineProps({
    color: { type: String, default: '' },
    pickerType: { type: String, default: 'fk' }, //fk 、chrome
    disableAlpha: { type: Boolean, default: true },
});
//  初始化颜色
pureColor.value = props.color;
watch(
    () => props.color,
    () => {
        pureColor.value = props.color;
    },
);

// 设置颜色选择器面板显隐
const isShowColorPicker = (data = false) => {
    isShow.value = data;
    isFirstOpen.value = true;
};
// 颜色变化事件
const handle_pureColorChange = (e: any) => {
    pureColor.value = e;
};

// 定义确定事件
const emit = defineEmits(['confirm']);
// 确定颜色
const confirm = () => {
    isShow.value = false;
    emit('confirm', pureColor.value);
};

// 暴露方法出去
defineExpose({
    isShowColorPicker,
    confirm,
});
</script>
<style lang="scss" scoped>
.main {
    :deep(.vc-colorpicker) {
        padding: 0;
        box-shadow: none;
        border-radius: 0;
    }

    :deep(.vc-color-wrap) {
        width: 0;
    }
}
</style>