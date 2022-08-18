<template>
    <label for="searchInput">검색창 </label>
    <input type="text" id="searchInput" placeholder="검색창입니다" v-model="searchText">
</template>

<script>
export default{
    name : 'DealPostSearch',
    data(){
        return {
            searchText:'',
        }
    },
}
</script>