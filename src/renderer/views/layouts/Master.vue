<template>
    <div class="master-layout">
        <div class="menu">
            <div class="logo">
            </div>
            <Menu></Menu>
        </div>
        <main class="main-layout">
            <header class="header"></header>
            <main class="main">
                <router-view></router-view>
            </main>
            <footer class="footer"></footer>
        </main>
    </div>
</template>

<script setup>
import Menu from './Menu.vue';
</script>