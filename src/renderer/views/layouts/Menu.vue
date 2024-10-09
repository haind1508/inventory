<template>
    <div>
        <ul class="menus">
            <template v-for="menu in dashboard">
                <li>
                    <router-link :to="{name: menu.name}" class="menu-item"><span>{{ menu.label }}</span></router-link>
                </li>
            </template>
        </ul>
        <ul class="menus">
            <template v-for="menu in menus">
                <li>
                    <router-link :to="{name: menu.name}" class="menu-item"><span>{{ menu.label }}</span></router-link>
                </li>
            </template>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, onBeforeMount, computed, watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const menus = ref([
    {
        name: 'Products',
        label: 'Products'
    },
    {
        name: 'Import',
        label: 'Import'
    },
    {
        name: 'Export',
        label: 'Export'
    },
])

const dashboard = ref([
    {
        name: 'Dashboard',
        label: 'Dashboard',
    }
])
</script>