<template>
    <div>
        {{dealPost.id}}
        {{dealPost.title}}
        {{dealPost.content}}
        {{dealPost.category}}
        {{dealPost.price}}
        {{dealPost.viewCnt}}
        <router-link v-if="dealPost.uploadedImages.length>0" :to="'/dealPost/'+dealPost.id">
            <img v-bind:src="dealPost.uploadedImages[0]" style="width:80%">
        </router-link>
        <router-link v-else :to="'/dealPost/'+dealPost.id">
            <img id="deafaultImage" src="@/assets/wm-logo-dark.png" style="width:80%">
        </router-link>
        <!-- 거래글 좋아요 -->
        <DealPostLike v-bind:userId="userId" v-bind:dealPostId="dealPost.id"></DealPostLike>
    </div>
</template>

<script>
import { getDealPostImageService } from '@/services/dealPostImage'
import { createImageUrl } from '@/util/imageUtil'
import DealPostLike from '@/components/DealPostLike.vue'
import { mapGetters } from 'vuex'

export default{
    name : 'DealPostCardDetail',
    props : ['item'],
    components : {
        DealPostLike,
    },
    data(){
        return {
            dealPost:{
                id:'',
                title:'',
                content:'',
                category:'',
                price:0,
                viewCnt:0,
                imagesId:[],
                uploadedImages:[],
            },
        }
    },
    created(){
        this.dealPost.id = this.item.id;
        this.dealPost.title = this.item.title;
        this.dealPost.content = this.item.content;
        this.dealPost.category = this.item.category;
        this.dealPost.price = this.item.price;
        this.dealPost.viewCnt = this.item.viewCnt;
        this.dealPost.imagesId.push(...this.item.imagesId);
        this.uploadImages();
    },
    computed : {
        ...mapGetters('userStore',['userId']),
    },
    methods : {
        uploadImages(){
            for(let i=0; i<this.dealPost.imagesId.length; i++){
                getDealPostImageService(this.dealPost.imagesId[i]).then((res)=> {
                    this.dealPost.uploadedImages.push(createImageUrl(res));
                }).catch((err) => {
                    console.log(err);
                });
            }
        }
    },
}
</script>