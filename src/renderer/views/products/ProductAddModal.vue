<template>
    <Modal :show="show" :title="title" maxWidth="max-w-3xl" @close="onClose()">
        <div class="flex flex-col gap-1 p-2">
            <div class="flex gap-3">
                <fieldset class="w-2/3 form-input required">
                    <legend>{{ $t("attr.product.name") }}</legend>
                    <input type="text" class="w-full form-control" required v-model="payload.name" >
                </fieldset>
                <fieldset class="w-1/3 form-input">
                    <legend>{{ $t("attr.product.SKU") }}</legend>
                    <input type="text" class="w-full form-control" v-model="payload.SKU">
                </fieldset>
            </div>
            <div class="flex gap-3">
                <div class="flex w-2/3 gap-3">
                    <fieldset class="w-1/2 form-input required">
                        <legend>{{ $t("attr.product.unit") }}</legend>
                        <input type="text" class="w-full form-control" required v-model="payload.unit">
                    </fieldset>
                    <fieldset class="w-1/2 form-input">
                        <legend>{{ $t("attr.product.price") }}</legend>
                        <input type="number" class="w-full form-control" v-model="payload.price">
                    </fieldset>
                </div>
                <fieldset class="w-1/3 form-input">
                    <legend>{{ $t("attr.product.expire") }} (days)</legend>
                    <input type="number" class="w-full form-control" v-model="payload.expire">
                </fieldset>
            </div>

            <div class="flex">
                <fieldset class="w-full form-input">
                    <legend>{{ $t("attr.product.remark") }}</legend>
                    <textarea class="w-full form-control min-h-12"></textarea v-model="payload.remark">
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
import { productStore } from '@/store/product';

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
    price: 0,
    expire: null,
})

const onSave = async () => {
    await productStore.store(payload.value).then((res) => {
        console.log(res)
    })
}

</script>