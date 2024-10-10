<template>
    <router-view>
    </router-view>

    <Confirm ref="confirm"></Confirm>
</template>
<script setup>
import { watch, ref, computed } from 'vue'
import { store } from '@/store'

const errorModal = computed(() => store.errorModal)
const confirm   = ref(null)

watch(
    errorModal,
    async (errorModal) => {
        if (errorModal.active) {
            await confirm.value.show(errorModal)
            store.initErrorModal()
        }
    },
    { deep: true }
)
</script>