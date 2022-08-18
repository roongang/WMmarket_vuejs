<template>
    <div>
        <!-- 글 내용 확인 -->
        <h1>글 확인 뷰</h1>
        <DealPostGet v-bind:dealPostId="dealPostId"></DealPostGet>

        <!-- 글 좋아요 버튼 -->
        <DealPostLike v-bind:userId="userId" v-bind:dealPostId="dealPostId"></DealPostLike>

        <!-- 수정하기 버튼 -->
        <router-link v-if="isOwner" :to="'/dealPost/'+dealPostId+'/update'" tag="button">
            <button>수정하기</button>
        </router-link>
    </div>
</template>

<script>
import DealPostGet from "@/components/DealPostGet.vue";
import DealPostLike from "@/components/DealPostLike.vue";
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
        DealPostGet,
        DealPostLike,
    },
    created() {
        // 자신의 글인지 확인
        getDealPostService(this.dealPostId).then(res => {
            const dealPost = res.data.data;
            this.isOwner = dealPost.userId == this.userId;
        });
    },
    computed: {
        ...mapGetters({
            getUserId : 'userStore/userId'
        }),
        userId () {
            return this.getUserId
        },
    },
}
</script>