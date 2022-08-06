<template>
    <div>
        <!-- eslint-disable -->
        <div v-for="dealPost in dealPosts">
            {{dealPost.id}}
            <router-link :to="'/dealPost/'+dealPost.id">
                {{dealPost.title}}
                </router-link>
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