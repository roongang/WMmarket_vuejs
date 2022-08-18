<template>
    <DealPostUpdate v-bind:dealPostId="dealPostId"></DealPostUpdate>
</template>

<script>
import DealPostUpdate from "@/components/DealPostUpdate.vue";

export default{
    name : 'DealPostUpdateView',
    data(){
        return {
            dealPostId:this.$route.params.id,
        }
    },
    components : {
        DealPostUpdate,
    },
}
</script>