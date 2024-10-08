<template>
    <div id="app">
        <h1>Vue 3 with Electron and Express</h1>
        <button @click="addItem">Add Item</button>
        <input type="text" v-model="name">
        <ul>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'App',
    setup() {
        const items = ref([]);
        const name = ref(null);

        // Fetch items from the Express API
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/items');
                items.value = response.data.items;
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        // Add a new item via the Express API
        const addItem = async () => {
            // const name = prompt('Enter item name:');
            if (name.value) {
                try {
                    await axios.post('http://localhost:5000/items', { name: name.value });
                    fetchItems();  // Refresh the list after adding the item
                } catch (error) {
                    console.error('Error adding item:', error);
                }
            }
        };

        // Fetch items on mounted
        onMounted(() => {
            fetchItems();
        });

        return {
            items,
            addItem,
            name,
        };
    },
};
</script>