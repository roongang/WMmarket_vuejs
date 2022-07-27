<template>
    <div class="dealPostSave">
        <h1>글 저장 컴포넌트 입니다.</h1>
        <form class="dealPostSaveForm">
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
                <v-file-input id="dealPostImageInput" type="file" @change="onImageChange" class="input" ref="dealPostImageInput" placeholder="이미지 "></v-file-input>
                <v-img v-for="(image, index) in dealPost.images" :key="index" :src="image" class="image" contain height="150px" width="200px"></v-img>
            </p>
            <p class="buttons">
                <button @click.prevent="doSave" class="buttonBlue">저장</button>&nbsp;
                <button @click.prevent="doCancel" class="button">취소</button>&nbsp;
            </p>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default{
    name:'PostSave',
    data(){
        return {
            dealPost:{
                title:'',
                content:'',
                category:'',
                price:0,
                images:[],
            },
            uploadedImageUrls:[],
        }
    },
    methods:{
        doSave(){
            this.saveDealPost({
                title : this.dealPost.title,
                content : this.dealPost.content,
                category : this.dealPost.category,
                price : this.dealPost.price,
                images : this.dealPost.images,
            })
        },
        doCancel(){
            this.dealPost.title = '',
            this.dealPost.content = '',
            this.dealPost.category = '',
            this.dealPost.price = 0,
            this.dealPost.images = []
        },
        onImageChange(images){
            if(!images){
                return;
            }
            this.uploadedImageUrls = [];
            images.array.forEach(image => {
                this.dealPost.images.push(image);
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.uploadedImageUrls.push(e.target.result);
                };
                reader.readAsDataURL(image);
            });
        },
        ...mapActions('dealPostStore', ['saveDealPost']),
    },
}
</script>

<style scoped>
</style>