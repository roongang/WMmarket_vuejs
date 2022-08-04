<template>
    <div>
        <h1>글 조회 컴포넌트 입니다.</h1>
        <form>
            <p>
                <label for="dealPostId">글 번호</label>
                <input type="text" id="dealPostIdInput" v-model="dealPostId" placeholder="글 번호" />
            </p>
            <p class="buttons">
                <button @click.prevent="doGet" class="button">조회</button>&nbsp;
            </p>
            <h2>"title : "{{dealPost.title}}</h2>
            <h2>"content : "{{dealPost.content}}</h2>
            <h2>"category : "{{dealPost.category}}</h2>
            <h2>"price : "{{dealPost.price}}</h2>
            <!-- images -->
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default{
    name : 'DealPostGet',
    data(){
        return {
            dealPostId : '',
            dealPost:{
                title:'',
                content:'',
                category:'',
                price:0,
                files:[],
            },
            uploadedImages:[],
        }
    },
    methods:{
        doGet(){

        },
        ...mapActions('dealPost', ['getDealPost']),
    }
}
</script>