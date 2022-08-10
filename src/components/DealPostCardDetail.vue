<template>
    <div>
        {{dealPost.id}}
        {{dealPost.title}}
        {{dealPost.content}}
        {{dealPost.category}}
        {{dealPost.price}}
        <router-link v-if="dealPost.uploadedImages.length>0" :to="'/dealPost/'+dealPost.id">
            <img v-bind:src="dealPost.uploadedImages[0]" style="width:80%">
        </router-link>
        <router-link v-else :to="'/dealPost/'+dealPost.id">
            <img id="deafaultImage" src="@/assets/wm-logo-dark.png" style="width:80%">
        </router-link>
    </div>
</template>

<script>
import { getDealPostImageService } from '@/services/dealPostImage'
import { createImageUrl } from '@/util/imageUtil'

export default{
    name : 'DealPostCardDetail',
    props : ['item'],
    data(){
        return {
            dealPost:{
                id:'',
                title:'',
                content:'',
                category:'',
                price:0,
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
        this.dealPost.imagesId.push(...this.item.imagesId);
        this.uploadImages();
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