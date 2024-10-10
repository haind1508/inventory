<template>
    <Modal :show="show" :title="title" maxWidth="max-w-3xl" @close="onClose()">
        <div class="p-2 flex flex-col gap-1">
            <div class="flex gap-3">
                <fieldset class="form-input required w-2/3">
                    <legend>{{ $t("attr.product.name") }}</legend>
                    <input type="text" class="form-control w-full" required v-model="payload.name" >
                </fieldset>
                <fieldset class="form-input w-1/3">
                    <legend>{{ $t("attr.product.SKU") }}</legend>
                    <input type="text" class="form-control w-full" v-model="payload.SKU">
                </fieldset>
            </div>
            <div class="flex gap-3">
                <div class="flex gap-3 w-2/3">
                    <fieldset class="form-input required w-1/2">
                        <legend>{{ $t("attr.product.unit") }}</legend>
                        <input type="text" class="form-control w-full" required v-model="payload.unit">
                    </fieldset>
                    <fieldset class="form-input w-1/2">
                        <legend>{{ $t("attr.product.price") }}</legend>
                        <input type="number" class="form-control w-full" v-model="payload.price">
                    </fieldset>
                </div>
                <fieldset class="form-input w-1/3">
                    <legend>{{ $t("attr.product.expire") }} (days)</legend>
                    <input type="number" class="form-control w-full" v-model="payload.expire">
                </fieldset>
            </div>

            <div class="flex">
                <fieldset class="form-input w-full">
                    <legend>{{ $t("attr.product.remark") }}</legend>
                    <textarea class="form-control w-full min-h-12"></textarea v-model="payload.remark">
                </fieldset>
            </div>

            <div class="flex justify-around w-full mt-5">
                <button type="button" class="btn silver w-[6rem]" @click="onClose()">{{ $t("button.cancel") }}</button>
                <button type="button" class="btn w-[6rem]" @click="onSave()">{{ $t("button.save") }}</button>
            </div>
        </div>
    </Modal>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Modal from '../component/layout/Modal.vue';
import { t } from '@/i18n'

const title = t("modal.add_product")
const props = defineProps(['show'])
const emit = defineEmits(['close', 'save'])
const onClose = () => {
    emit('close')
}

const payload = ref({
    name: null,
    SKU: null,
    unit: null,
    price: null,
    expire: null,
})

const onSave = async () => {
    
}

</script>