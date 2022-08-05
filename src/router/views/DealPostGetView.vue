<template>
    <div>
        <h1>글 확인 뷰</h1>
        <DealPostGet v-bind:dealPostId="dealPostId"></DealPostGet>
    </div>
</template>

<script>
import DealPostGet from "@/components/DealPostGet.vue";

export default {
    name : 'DealPostGetView',
    data(){
        return {
            dealPostId:this.$route.params.id
        }
    },
    components : {
        DealPostGet
    }
}
</script>