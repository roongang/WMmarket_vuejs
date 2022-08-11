<template>
    <div>
        <h1>글 확인 뷰</h1>
        <DealPostGet v-bind:dealPostId="dealPostId"></DealPostGet>
        <router-link v-if="isOwner" :to="'/dealPost/'+dealPostId+'/update'" tag="button">
            <button>수정하기</button>
        </router-link>
    </div>
</template>

<script>
import DealPostGet from "@/components/DealPostGet.vue";
import { getDealPostService } from "@/services/dealPost";
import { mapGetters } from "vuex";

export default {
    name : 'DealPostGetView',
    data(){
        return {
            dealPostId:this.$route.params.id,
            isOwner:false,
        }
    },
    components : {
        DealPostGet
    },
    created() {
        getDealPostService(this.dealPostId).then(res => {
            const dealPost = res.data.data;
            this.isOwner = dealPost.userId == this.getId;
        }) 
    },
    computed: {
        ...mapGetters("userStore",["getId"]),
    },
}
</script>