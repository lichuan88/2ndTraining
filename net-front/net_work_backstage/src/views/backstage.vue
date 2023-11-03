<script setup lang="ts">
import { ref } from "vue";
import { identity_cards } from "../types/response-data";
import { useRequest } from "alova";
import { GetIndentityCards } from "../api/methods/backstage";
const IdentityCards = ref<identity_cards[]>();
const id = ref("");

//获取网管列表
const { onSuccess: GetIndentityCardsSuccess } = useRequest(() =>
  GetIndentityCards()
);
GetIndentityCardsSuccess((response) => {
  IdentityCards.value = response.data.data;
  console.log(IdentityCards.value);
});
</script>
<template>
  <div class="w-full flex flex-wrap">
    <el-card
      v-for="card in IdentityCards"
      shadow="always"
      class="cursor-pointer w-30% rounded-5 m-3"
      @click="
        () => {
          console.log(card.identity_group_id);
          id = card.identity_group_id;
          $router.push({
            name: 'admindetail',
            params: { id: id },
          });
        }
      "
      ><div class="flex items-center w-80p h-1">
        <img src="../img/iden.png" alt="" /><span>{{
          card.identity_group
        }}</span>
      </div></el-card
    >
  </div>
</template>
<style scoped>
img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
