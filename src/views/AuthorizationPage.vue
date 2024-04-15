<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-3xl font-bold mb-4">LeadHit</h1>
        <input v-model="siteId" type="text"
               class="border border-gray-300 rounded-lg px-4 py-2 mb-4"
               placeholder="ID сайта">
        <div v-show="showError" class="text-red-500 mb-2">Id сайта должен содержать 24 символа</div>
        <div v-show="verificationError" class="text-red-500 mb-2">Неверный Id</div>
        <button type="submit" @click="login"
                class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Войти
        </button>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import {useStore} from 'vuex';
    import {useRouter} from 'vue-router';

    const store = useStore()
    const router = useRouter();
    const siteId = ref('');
    const showError = ref(false);
    const verificationError = ref(false)

    const login = () => {
        showError.value = false
        verificationError.value = false
        if (siteId.value.length !== 24) {
            showError.value = true
            return
        }
        if (siteId.value !== '5f8475902b0be670555f1bb3') {
            verificationError.value = true
            return
        }
        if (showError.value !== true) {
            store.dispatch('fetchData', siteId.value)
                .then(response => {
                    if (response === 'ok') {
                        router.push('/analytics')
                    }
                })
        }
    };
</script>

<style scoped>

</style>
