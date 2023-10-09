<template lang="">
<div class="max-w-screen-xl mx-auto pt-20">
    <div class="text-center py-20 bg-cover bg-center bg-no-repeat" id="head">
        <h1 data-aos="zoom-in" class="mb-4 text-4xl font-extrabold tracking-tight 0 md:text-5xl text-white">
            Arif Learning Path
        </h1>
        <p data-aos="zoom-in" class="mb-6 text-lg font-normal text-white lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and
            drive economic growth.
        </p>
        <a data-aos="zoom-in" href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Learn more
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>
    </div>
    <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 pb-5">
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mr-2">
                <h1 @click="setActiveTab('profile')" :class="{
                  'border-b-2 border-transparent': state.activeTab !== 'profile',
                  'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500': state.activeTab === 'profile',
                }" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">
                    Dashboard
                </h1>
            </li>
            <li class="mr-2">
                <h1 @click="setActiveTab('dashboard')" :class="{
                  'border-b-2 border-transparent': state.activeTab !== 'dashboard',
                  'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500': state.activeTab === 'dashboard',
                }" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">
                    User
                </h1>
            </li>
        </ul>
    </div>
    <div v-if="state.activeTab === 'profile'" class="dark:bg-gray-900">
        <div id="accordion-collapse" data-accordion="collapse">
            <div v-for="(accordion, index) in accordions" :key="index">
                <div class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-600 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" @click="toggleAccordion(index)">
                    <span class="text-2xl font-bold">{{ accordion.title }}</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </div>
                <transition name="fade">
                    <div :key="`accordion-collapse-body-${index}`" v-if="accordion.open" class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        {{ accordion.content }}
                    </div>
                </transition>
            </div>
        </div>
    </div>
    <div v-if="state.activeTab === 'dashboard'">
        <div id="main">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" class="px-6 md:px-20 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 md:px-20 py-3">
                                Roles
                            </th>
                            <th scope="col" class="px-6 md:px-20 py-3">
                                Group
                            </th>
                            <th scope="col" class="px-6 md:px-20 py-3">
                                Last Access
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in paginatedProducts" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <th scope="row" class="px-6 md:px-20 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ product.name }}
                            </th>
                            <td class="px-6 md:px-20 py-4">
                                {{ product.roles }}
                            </td>
                            <td class="px-6 md:px-20 py-4">
                                {{ product.groups }}
                            </td>
                            <td class="px-6 md:px-20 py-4">
                                {{ product.LastAccess }}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Tampilkan pagination di bawah tabel -->
            <div class="flex justify-end mt-4">
                <ul class="flex space-x-2">
                    <!-- Tombol "Previous" -->
                    <li>
                        <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 rounded bg-blue-500 text-white">
                            Previous
                        </button>
                    </li>

                    <!-- Daftar halaman -->
                    <li v-for="page in totalPages" :key="page">
                        <button @click="gotoPage(page)" :class="{ 'bg-blue-500 text-white': currentPage === page }" class="px-3 py-1 rounded">
                            {{ page }}
                        </button>
                    </li>

                    <!-- Tombol "Next" -->
                    <li>
                        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 rounded bg-blue-500 text-white">
                            Next
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    reactive
} from 'vue';
import axios from "axios"
export default {
    data() {
        return {
            accordions: [],
            products: [],
            itemsPerPage: 5, // Jumlah item per halaman
            currentPage: 1, // Halaman saat ini
        }
    },
    setup() {
        const state = reactive({
            activeTab: 'profile',
        });

        const setActiveTab = (tab) => {
            state.activeTab = tab;
        };

        const stateNav = reactive({
            activeNav: 'Home',
        });

        const setActiveNav = (nav) => {
            stateNav.activeNav = nav;
        };

        return {
            state,
            setActiveTab,
            stateNav,
            setActiveNav,
        };
    },
    computed: {
        // Menghitung jumlah halaman berdasarkan jumlah item per halaman dan total produk
        totalPages() {
            return Math.ceil(this.products.length / this.itemsPerPage);
        },
        // Data yang ditampilkan berdasarkan halaman saat ini
        paginatedProducts() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.products.slice(startIndex, endIndex);
        },
    },
    methods: {
        toggleAccordion(index) {
            this.accordions[index].open = !this.accordions[index].open;
        },
        // Pindah ke halaman sebelumnya
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        // Pindah ke halaman berikutnya
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        // Pindah ke halaman tertentu
        gotoPage(page) {
            this.currentPage = page;
        },
        setAccordions(data) {
            this.accordions = data;
        },
        setProduct(data) {
            this.products = data;
        }
    },
    mounted() {
        axios.get("https://api.jsonbin.io/v3/b/6523a7d612a5d37659892e20")
            .then((response) => this.setAccordions(response.data.record))
            .catch((error) => console.log(error));
        axios.get("https://api.jsonbin.io/v3/b/6523a72d54105e766fbfbc07")
            .then((response) => this.setProduct(response.data.record))
            .catch((error) => console.log(error));
    },
};
</script>

<style scoped>
#main {
    height: 1000px;
}

#head {
    background-image: url(../assets/unsplash.jpg);
}
</style>
