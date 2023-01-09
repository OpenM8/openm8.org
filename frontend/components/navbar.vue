<template>
    <div class="fixed top-0 left-0 z-50 w-screen bg-gray-200 dark:bg-gray-800" id="navbar">
        <div class="navbar container mx-auto p-3">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                     
                    <ul tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 dark:bg-gray-800 rounded-box w-52">
                        <li v-for="item in menu" tabindex="0">
                            <a class="justify-between">
                                {{ item.name }}
                                <svg v-if="item.dropdown.length !== 0" class="fill-current" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                </svg>
                            </a>
                            <ul v-if="item.dropdown.length !== 0" class="p-2 bg-gray-200 dark:bg-gray-800 shadow-lg">
                                <li v-for="subitems in item.dropdown"><a>{{ subitems.name }}</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
                    <img v-if="colorMode.value === 'dark'" :src="siteinfo?.logodark" alt="Logo" class="h-10">
                    <img v-else :src="siteinfo?.logolight" alt="Logo" class="h-10">
                </NuxtLink>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li v-for="item in menu" tabindex="0">
                        <NuxtLink :to="item.url">
                            {{ item.name }}
                            <svg v-if="item.dropdown.length !== 0" class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20" viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </NuxtLink>
                        <ul v-if="item.dropdown.length !== 0" class="p-2 bg-gray-200 dark:bg-gray-800 shadow-lg">
                            <li v-for="subitems in item.dropdown">
                                <NuxtLink :to="subitems.url" class="min-w-[12rem]">{{ subitems.name }} <span v-if="subitems.url === ''" class="badge badge-md">Soon</span></NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="navbar-end flex-row gap-3">
                <a v-if="!isAuthenticated" @click="login" class="btn btn-tertiary">Sign In</a>
                <div v-else class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img :src="user.picture" />
                        </div>
                    </label>
                    <ul tabindex="0"
                        class="mt-3 p-2 shadow-lg menu menu-compact dropdown-content bg-gray-200 dark:bg-gray-800  rounded-box w-52">
                        <li class="!text-xl menu-title">
                            <span>{{ user.username }}</span>
                        </li>
                        <li>
                            <a>
                                Profile <span class="badge badge-md">Soon</span>
                            </a>
                        </li>
                        <li><a>Settings <span class="badge badge-md">Soon</span></a></li>
                        <li><a @click="logout">Logout</a></li>
                    </ul>
                </div>

                <a v-if="colorMode.preference === 'system'" @click="colorMode.preference = 'dark'"
                    class="btn btn-ghost">
                    <Icon class="text-xl" name="mdi:desktop-mac" />
                </a>
                <a v-if="colorMode.preference === 'dark'" @click="colorMode.preference = 'light'" class="btn btn-ghost">
                    <Icon class="text-xl" name="mdi:moon-waxing-crescent" />
                </a>
                <a v-if="colorMode.preference === 'light'" @click="colorMode.preference = 'system'"
                    class="btn btn-ghost">
                    <Icon class="text-xl" name="mdi:weather-sunny" />
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { data: menu } = await useFetch('/api/menu/getmenuitems')
const { data: siteinfo } = await useFetch('/api/getsiteinfo')
const colorMode = useColorMode()
const isAuthenticated = false;

onMounted(() => {
const navbar: HTMLElement  = window.document.getElementById('navbar') as HTMLElement;
window.addEventListener('scroll', () => {
  // If the page has been scrolled more than 50px
  if (window.scrollY > 50) {
    // Add the backdrop-blur-md class to the navbar
    navbar.classList.add('backdrop-blur-md');
    navbar.classList.add('dark:bg-gray-800/50');
    navbar.classList.add('bg-gray-200/50');
    navbar.classList.remove('dark:bg-gray-800');
    navbar.classList.remove('bg-gray-200');
    navbar.classList.add('shadow-lg');
  } else {
    // Otherwise, remove the class
    navbar.classList.remove('backdrop-blur-md');
    navbar.classList.remove('dark:bg-gray-800/50');
    navbar.classList.remove('bg-gray-200/50');
    navbar.classList.add('dark:bg-gray-800');
    navbar.classList.add('bg-gray-200');
    navbar.classList.remove('shadow-lg');
  }
});
});
</script>