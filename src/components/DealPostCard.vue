<template>
    <div>
        <Grid
        :length="50"
        :pageSize="5"
        :pageProvider="pageProvider"
        class="grid">
            <template v-slot:probe>
                <div class="item">
                    Probe
                </div>
            </template>

            <!-- When the item is not loaded, a placeholder is rendered -->
            <!-- <template v-slot:placeholder="{ index, style }">
            <div class="item" :style="style">Placeholder {{ index }}</div>
            </template> -->

            <!-- Render a loaded item -->
            <!-- eslint-disable -->
            <template v-slot:default="{ item, style, index }">
            <div class="item" :style="style">
                <DealPostCardDetail v-bind:item="item"></DealPostCardDetail>
            </div>
            </template>
        </Grid>
    </div>
</template>

<script>
import Grid from "vue-virtual-scroll-grid";
import DealPostCardDetail from "./DealPostCardDetail.vue";
import { getDealPostPageService } from "@/services/dealPost";

export default{
    name:'DealPostCard',
    components:{
        Grid,
        DealPostCardDetail
    },
    setup () {
        function pageProvider (pageNumber,pageSize) {
            return new Promise(function(resolve) {
                getDealPostPageService(
                    pageNumber,pageSize
                ).then(res => {
                    console.log("pageNumber, pageSize :",pageNumber,pageSize);
                    return res.data.data.content;
                }).then(dealPosts => {
                    console.log("dealPosts :",dealPosts);
                    const data=new Array();
                    for(let dealPost of dealPosts){
                        data.push(dealPost);
                    }
                    return data;
                }).then((data) => resolve(data));
            })
        };

        return {
            pageProvider
        }
    },
}
</script>

<style>
.grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
}

.item {
  background-color: lightgray;
  padding: 10px 0;
  text-align: center;
}
</style>