<template>
    <div>
        <!-- 글 좋아요 버튼 -->
        <div v-if="isLiked">
            <button v-on:click="doUnlike">좋아요 취소</button>
        </div>
        <div v-else>
            <button v-on:click="doLike">좋아요</button>
        </div>
    </div>
</template>

<script>
import {
    saveUserLikeService,
    deleteUserLikeService,
    getUserLikedDealPostService 
} from "@/services/user";

export default {
    name : 'DealPostLike',
    props:['userId','dealPostId'],
    data(){
        return {
            isLiked:false,
        }
    },
    created(){
        if(this.userId != null){
            getUserLikedDealPostService(this.userId).then(res => {
                const dealPosts = res.data.data;
                for(let i=0; i<dealPosts.length; i++){
                    console.log("dealPosts[i].id : " + dealPosts[i].id);
                    console.log("this.dealPostId : " + this.dealPostId);
                    if(dealPosts[i].id == this.dealPostId){
                        this.isLiked = true;
                        break;
                    }
                }
            });
        }
    },
    methods:{
        doLike(){
            saveUserLikeService(this.userId,this.dealPostId).then(res => {
                this.isLiked = true;
            });
        },
        doUnlike(){
            deleteUserLikeService(this.userId,this.dealPostId).then(res => {
                this.isLiked = false;
            });
        }
    },
}
</script>