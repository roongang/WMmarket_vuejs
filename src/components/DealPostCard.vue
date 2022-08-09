<template>
    <div>
        <Grid
        :length="50"
        :pageSize="10"
        :pageProvider="pageProvider"
        class="grid">
            <template v-slot:probe>
                <div class="item">
                    Probe
                </div>
            </template>

            <!-- When the item is not loaded, a placeholder is rendered -->
            <template v-slot:placeholder="{ index, style }">
            <div class="item" :style="style">Placeholder {{ index }}</div>
            </template>

            <!-- Render a loaded item -->
            <template v-slot:default="{ item, style, index }">
            <div class="item" :style="style">{{ item }} {{ index }}</div>
            </template>
        </Grid>
    </div>
</template>

<script>
import Grid from "vue-virtual-scroll-grid";

export default{
    name:'DealPostCard',
    components:{
        Grid
    },
    setup : () => ({
        pageProvider : (pageNumber,pageSize) => (
            new Promise((resolve) => {
                setTimeout(() => resolve(new Array(pageSize).fill("Loaed Item!"))
                , Math.round(3000 * Math.random()));
            })
        )
    })
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