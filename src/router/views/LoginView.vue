<template>
    <div>
        <Login></Login>
    </div>
</template>

<script>
import Login from '@/components/Login.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'LoginView',
    components: {
        Login
    },
    computed: {
        ...mapGetters('userStore', ['isLogin'])
    },
}
</script>

<style>
</style>