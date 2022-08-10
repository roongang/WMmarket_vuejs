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
            <template v-slot:default="{ item, style, index }">
            <div class="item" :style="style">{{ item }} {{ index }}</div>
            </template>
        </Grid>
    </div>
</template>

<script>
import Grid from "vue-virtual-scroll-grid";
import { useStore } from 'vuex';

export default{
    name:'DealPostCard',
    components:{
        Grid
    },
    setup () {
        const store=useStore();
        const getDealPostPage = ({page,size}) => store.dispatch('dealPostStore/getDealPostPage',{page,size});
        function pageProvider (pageNumber,pageSize) {
            return new Promise(function(resolve) {
                getDealPostPage({
                    page:pageNumber,
                    size:pageSize
                }).then(res => {
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
}

.item {
  background-color: lightgray;
  padding: 100px 0;
  text-align: center;
}
</style>