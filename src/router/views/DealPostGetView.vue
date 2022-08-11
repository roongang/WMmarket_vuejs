<template>
    <div>
        <!-- 글 내용 확인 -->
        <h1>글 확인 뷰</h1>
        <DealPostGet v-bind:dealPostId="dealPostId"></DealPostGet>

        <!-- 글 좋아요 버튼 -->
        <div v-if="isLiked">좋아요한 글</div>
        <div v-else>좋아요 안 한 글</div>
        <!-- 수정하기 버튼 -->
        <router-link v-if="isOwner" :to="'/dealPost/'+dealPostId+'/update'" tag="button">
            <button>수정하기</button>
        </router-link>
    </div>
</template>

<script>
import DealPostGet from "@/components/DealPostGet.vue";
import { getUserLikedDealPostService } from "@/services/user";
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
            this.isOwner = dealPost.userId == this.userId;
        });
    },
    computed: {
        ...mapGetters('userStore',['userId']),

        isLiked : () => {
            /* if(this.userId !== undefined && this.userId !== null){
                getUserLikedDealPostService(this.userId).then(res => {
                    const dealPosts = res.data.data;
                    for(let i=0; i<dealPosts.length; i++){
                        if(dealPosts[i].id == this.dealPostId){
                            return true;
                        }
                    }
                });
                return false;
            } */
            return true;
        }
    },
}
</script>