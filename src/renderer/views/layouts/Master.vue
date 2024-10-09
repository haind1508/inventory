<template>
    <div class="master-layout">
        <div class="menu">
            <Logo></Logo>
            <Menu></Menu>
        </div>
        <main class="main-layout">
            <header class="header"></header>
            <main class="main">
                <router-view></router-view>
            </main>
        </main>
    </div>
</template>

<script setup>
import Menu from './Menu.vue';
import Logo from './Logo.vue'
</script>