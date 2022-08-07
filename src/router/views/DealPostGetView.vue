<template>
    <div>
        <h1>글 확인 뷰</h1>
        <div v-if="dealPost.userId == userId">
            <DealPostUpdate v-bind:dealPostId="dealPostId"></DealPostUpdate>
        </div>
        <div v-else>
            <DealPostGet v-bind:dealPostId="dealPostId"></DealPostGet>
        </div>
    </div>
</template>

<script>
import DealPostGet from "@/components/DealPostGet.vue";
import DealPostUpdate from "@/components/DealPostUpdate.vue";
import { getDealPostService } from "@/services/dealPost";
import { mapGetters } from "vuex";

export default {
    name : 'DealPostGetView',
    data(){
        return {
            dealPostId:this.$route.params.id,
            userId:null,
            dealPost:{
                id:'',
                title:'',
                content:'',
                category:'',
                price:0,
                imagesId:[],
                userId:'',
            },
        }
    },
    components : {
        DealPostGet,
        DealPostUpdate,
    },
    created(){
        console.log("dealPostId : " + this.dealPostId);
        getDealPostService(this.dealPostId).then((res) => {
            const dealPost = res.data.data;
            this.dealPost = dealPost;
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            console.log(this.dealPost);
        });
        // userId
        this.userId = this.getId;
    },
    computed : {
        ...mapGetters('userStore',['getId']),
    }
}
</script>