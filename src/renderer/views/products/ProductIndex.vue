<template>
    <div class="wrapper-scroll gap-3">
        <form class="flex content-between gap-3" @submit.prevent="submit()">
            <div class="flex-1 flex flex-col">
                <div class="flex w-full gap-3">
                    <fieldset class="form-input w-[30%]">
                        <legend>{{ $t("attr.product.name") }}</legend>
                        <input type="text" class="form-control w-full">
                    </fieldset>
    
                    <fieldset class="form-input w-[30%]">
                        <legend>{{ $t("attr.product.SKU") }}</legend>
                        <input type="text" class="form-control w-full">
                    </fieldset>
                </div>
            </div>
            <div class="w-[6rem] flex flex-col gap-3">
                <button type="submit" class="btn w-[6rem]">{{ $t("button.search") }}</button>
                <button type="button" class="btn silver w-[6rem]">{{ $t("button.clear") }}</button>
            </div>
        </form>

        <div class="flex">
            <div class="w-1/3"></div>
            <div class="w-1/3"></div>
            <div class="w-1/3 flex gap-3 justify-end">
                <button type="button" class="btn green w-[6rem]" @click="onShowAdd()">{{ $t("button.add") }}</button>
            </div>
        </div>

        <div class="parent-scroll">
            <table class="view-scroll t-border">
                <thead>
                    <tr>
                        <th>{{ $t("attr.product.name") }}</th>
                        <th>{{ $t("attr.product.SKU") }}</th>
                        <th>{{ $t("attr.product.unit") }}</th>
                        <th>{{ $t("attr.product.price") }}</th>
                        <th>{{ $t("attr.product.expire") }}</th>
                        <th>{{ $t("attr.product.remark") }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sữa bột</td>
                        <td>478937198379131</td>
                        <td>thùng</td>
                        <td>100,000</td>
                        <td>120 ngày</td>
                        <td>Xuất theo lô</td>
                    </tr>
                    <tr>
                        <td>Sữa hộp</td>
                        <td>478937198379131</td>
                        <td>chai</td>
                        <td>100,000</td>
                        <td>120 ngày</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <ProductAddModal
            v-if="showAdd"
            :show="showAdd"
            @close="onCloseAdd()"
            @save="onSaveAdd($event)" />
    </div>
</template>

<script setup>
import { onMounted, onBeforeMount, computed, watch, ref } from 'vue'
import ProductAddModal from './ProductAddModal.vue'


const showAdd = ref(false)
const onShowAdd = () => {
    showAdd.value = true
}
const onCloseAdd = () => {
    showAdd.value = false
}
const onSaveAdd = () => {

}
</script>