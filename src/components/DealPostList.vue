<template>
    <div>
        <!-- eslint-disable -->
        <!-- TODO : 하이퍼 링크 추가해야해 -->
        <div v-for="dealPost in dealPosts">
            {{dealPost.id}}
        </div>

        <VueEternalLoading :load="load"></VueEternalLoading>
    </div>
</template>

<script>
import { VueEternalLoading } from '@ts-pro/vue-eternal-loading';
import { mapActions } from 'vuex'

export default {
    name : 'DealPostList',
    data(){
        return {
            page:0,
            size:5,
            dealPosts:[]
        }
    },
    components:{
        VueEternalLoading
    },
    methods:{
        loadDealPosts(){
            return this.getDealPostPage({
                page:this.page,
                size:this.size
            }).then( res => res.data.data.content);
        },
        async load({ loaded }){
            const dealPosts = await this.loadDealPosts();
            this.dealPosts.push(...dealPosts);
            this.page += 1;
            loaded(dealPosts.length,this.size);
        },
        ...mapActions('dealPostStore', ['getDealPostPage']),
    },
}
</script>