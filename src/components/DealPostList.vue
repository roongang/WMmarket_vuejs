<template>
    <div>
        <p>
            <label for="page">페이지 번호 </label>
            <input type="number" v-model="page" min="0">
        </p>
        <p>
            <label for="size">게시글 조회 수 </label>
            <input type="number" v-model="size" min="0" max="10">
        </p>
        <button @click="doGetPage">조회</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name : 'DealPostList',
    data(){
        return {
            page:'',
            size:'',
            dealPost:[]
        }
    },
    methods:{
        doGetPage(){
            this.getDealPostPage({
                page : this.page,
                size : this.size,
            }).then(res => {
                console.log("res ",res);
            });
        },
        ...mapActions('dealPostStore', ['getDealPostPage']),
    },
}
</script>