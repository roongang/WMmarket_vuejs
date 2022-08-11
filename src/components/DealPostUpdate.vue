<template>
    <div>
        <h1>글 수정 컴포넌트 입니다.</h1>
        <form>
            <p>
                <label for="titleInput">제목 </label>
                <input type="text" id="dealPostTitleInput" v-model="dealPost.title" class="inputText" ref="dealPostTitleInput" placeholder="글 제목">
            </p>
            <p>
                <label for="contentInput">내용 </label>
                <input type="text" id="dealPostContentInput" v-model="dealPost.content" class="inputText" ref="dealPostContentInput" placeholder="글 내용">
            </p>
            <p>
                <label for="categoryInput">카테고리 </label>
                <input type="text" id="dealPostCategoryInput" v-model="dealPost.category" class="inputText" ref="dealPostCategoryInput" placeholder="글 카테고리">
            </p>
            <p>
                <label for="priceInput">가격 </label>
                <input type="number" id="dealPostPriceInput" v-model.number="dealPost.price" class="inputText" ref="dealPostPriceInput" placeholder="가격 ">
            </p>
            <p>
                <label for="imageInput">이미지 </label>
                <input type="file" v-on:change="onFileChange" accept="image/*" multiple="multiple">
                <!-- eslint-disable -->
                <div class="row">
                    <div class="column" v-for="image in uploadedImages">
                        <img v-bind:src="image" style="width:100%">
                    </div>
                </div>            
            </p>
            <p class="buttons">
                <button @click.prevent="doUpdate" class="buttonBlue">저장</button>&nbsp;
            </p>
        </form>
    </div>
</template>

<script>
import { getDealPostService, updateDealPostService } from '@/services/dealPost';
import { getDealPostImageService, deleteDealPostImageService, saveDealPostImageService } from '@/services/dealPostImage';
import { createImageUrl } from '@/util/imageUtil';

export default{
    name : 'DealPostUpdate',
    props : ['dealPostId'],
    data(){
        return {
            dealPost:{
                id:'',
                title:'',
                content:'',
                category:'',
                price:0,
                imagesId:[],
                newFiles:[],
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
            this.dealPost.imagesId.push(...dealPost.imagesId);
            for(let i=0; i<dealPost.imagesId.length; i++){
                getDealPostImageService(dealPost.imagesId[i]).then((res) => {
                    this.uploadedImages.push(createImageUrl(res));
                }).catch((err) => {
                    console.log(err);
                });
            }
        });
    },
    methods : {
        async doUpdate(){
            // TODO : 트랜잭션 작업 필요
            // update dealPost except images
            await updateDealPostService({
                id : this.dealPost.id,
                title : this.dealPost.title,
                content : this.dealPost.content,
                category : this.dealPost.category,
                price : this.dealPost.price,
            });
            if(this.dealPost.newFiles.length>0){
                // delete images
                for(let i=0; i<this.dealPost.imagesId.length; i++){
                    await deleteDealPostImageService(this.dealPost.imagesId[i]);
                }
                // save images
                await saveDealPostImageService(this.dealPost.id,this.dealPost.newFiles);
            }
            this.$router.push('/dealPost/board');
        },
        onFileChange(e){
            var files = e.target.files || e.dataTransfer.files;
            if(files.length<=0){
                console.log("no files");
                return;
            }
            this.dealPost.newFiles=[];
            this.uploadedImages=[];
            for(var i=0;i<files.length;i++){
                var reader=new FileReader();
                var file=files[i];
                reader.onload = (e) => {
                    this.uploadedImages.push(e.target.result);
                };
                this.dealPost.newFiles.push(file);
                reader.readAsDataURL(file);
            }
        },
    },
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