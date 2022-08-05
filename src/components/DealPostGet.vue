<template>
    <div>
        <h1>글 조회 컴포넌트 입니다.</h1>
        <form>
            <h2>"id : "{{dealPost.id}}</h2>
            <h2>"title : "{{dealPost.title}}</h2>
            <h2>"content : "{{dealPost.content}}</h2>
            <h2>"category : "{{dealPost.category}}</h2>
            <h2>"price : "{{dealPost.price}}</h2>
            <!-- images -->
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getDealPostService } from '@/services/dealPost';

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
                files:[],
            },
            uploadedImages:[],
        }
    },
    created(){
        console.log("dealPostId : " + this.dealPostId);
        getDealPostService(this.dealPostId).then((res) => {
            console.log(res);
            const dealPost = res.data.data;
            this.dealPost.id=dealPost.id;
            this.dealPost.title=dealPost.title;
            this.dealPost.content=dealPost.content;
            this.dealPost.category=dealPost.category;
            this.dealPost.price=dealPost.price;
            this.dealPost.files=dealPost.files;
        })
    },
    methods:{
        ...mapActions('dealPostStore', ['getDealPost']),
    }
}
</script>