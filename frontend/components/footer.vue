<template>
    <div>
        <footer
            class="footer -z-10 p-10 text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200 shadow-lg container mx-auto rounded-box">
            <div class="col-span-full lg:col-auto">
                <NuxtLink to="/">
                    <img v-if="colorMode.value === 'dark'" :src="siteinfo?.logodark" alt="Logo" class="h-16">
                    <img v-else :src="siteinfo?.logolight" alt="Logo" class="h-16">
                </NuxtLink>
                <div v-html="siteinfo?.footertext"></div><p>Web app version {{ siteinfo?.version }}</p>
            </div>
            <div class="col-auto" v-for="element in footer">
                <span class="footer-title">{{ element.name }}</span>
                <div class="grid gap-3 grid-rows-1 grid-flow-col">
                    <div v-for="subelement in element.socials">
                        <NuxtLink target="_blank" :to="subelement.url" class="link">
                            <Icon class="text-3xl hover:text-blue-600" :name="subelement.name" />
                        </NuxtLink>
                    </div>
                </div>
                <div v-for="subelement in element.subitems">
                    <NuxtLink :to="subelement.url" class="link link-hover">
                        {{ subelement.name }}
                    </NuxtLink>
                </div>
            </div>
        </footer>
        
      <div class="py-2"></div>
    </div>
</template>
<script setup lang="ts">
const { data: siteinfo } = await useFetch('/api/getsiteinfo')
const colorMode = useColorMode()
const { data: footer } = await useFetch('/api/footer/getfooteritems')
</script>