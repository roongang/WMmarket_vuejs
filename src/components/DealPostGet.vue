<template>
    <div>
        <h1>글 조회 컴포넌트 입니다.</h1>
        <form>
            <h2>id : {{dealPost.id}}</h2>
            <h2>title : {{dealPost.title}}</h2>
            <h2>content : {{dealPost.content}}</h2>
            <h2>category : {{dealPost.category}}</h2>
            <h2>price : {{dealPost.price}}</h2>
            <h2>viewCnt : {{dealPost.viewCnt}}</h2>
            <!-- images -->
            <!-- eslint-disable -->
            <div class="row">
                <div class="column" v-for="image in uploadedImages">
                    <img v-bind:src="image" style="width:100%">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { getDealPostService, updateDealPostService } from '@/services/dealPost';
import { getDealPostImageService } from '@/services/dealPostImage';
import { createImageUrl } from '@/util/imageUtil'

export default{
    name : 'DealPostGet',
    props: ['dealPostId'],
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
            },
            uploadedImages:[],
        }
    },
    created(){
        console.log("dealPostId : " + this.dealPostId);
        getDealPostService(this.dealPostId).then((res) => {
            const dealPost = res.data.data;
            this.dealPost.id=dealPost.id;
            this.dealPost.title=dealPost.title;
            this.dealPost.content=dealPost.content;
            this.dealPost.category=dealPost.category;
            this.dealPost.price=dealPost.price;
            this.dealPost.viewCnt=dealPost.viewCnt;
            this.dealPost.imagesId.push(...dealPost.imagesId);
            for(let i=0; i<dealPost.imagesId.length; i++){
                getDealPostImageService(dealPost.imagesId[i]).then((res) => {
                    this.uploadedImages.push(createImageUrl(res));
                }).catch((err) => {
                    console.log(err);
                });
            }
        });
        // increase viewCnt
        updateDealPostService({
            id:this.dealPostId,
            viewCnt:++this.dealPost.viewCnt,
        });
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 20%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>