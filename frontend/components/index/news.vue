<template>
    <div class="bg-gray-300 dark:bg-gray-700 mb-2">
        <div class="justify-between items-center container mx-auto p-6">
            <div class="flex flex-col gap-3 lg:gap-12 py-12">
                <h2 class="text-3xl font-bold">Latest News</h2>
                <div class="grid grid-flow-col grid-cols-1 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-5">

                    <div v-if="news !== null && news.length > 0" v-for="article, index in news"
                        class="flex flex-col gap-4 col-span-full"
                        :class="index === 0 ? 'lg:col-span-6' : 'lg:col-span-3'">
                        <NuxtLink :to="'/news/' + article.url"><div class="card card-side shadow-xl image-full">
                            <figure><img :src="article.img" alt="Shoes" /></figure>
                        </div></NuxtLink>
                        <div class="flex flex-row gap-3 justify-between">
                            <div class="inline-flex flex-col">
                                <h2 class="text-xl font-semibold">{{ article.title }}</h2>
                                <p>{{ article.subtitle }}</p>
                            </div>
                            <NuxtLink :to="'/news/' + article.url" class="btn btn-tertiary self-center">Read More
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-span-full" v-else>
                        <p class="text-lg">No news here for now! Maybe one day...</p>
                    </div>

                </div>
            </div>
            <div class="flex flex-col gap-12 py-12">
                <h2 class="text-3xl font-bold">Development Updates</h2>
                <div
                    class="grid grid-flow-col grid-rows-1 grid-cols-1 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-5">
                    <div v-if="devupdates !== null && devupdates.length > 0" v-for="devupdate in devupdates"
                        class="flex flex-col col-span-full lg:col-span-1 gap-4">
                        <NuxtLink :to="'/dev-updates/' + devupdate.url"><div class="card card-side shadow-xl image-full">
                            <figure><img :src="devupdate.img" alt="Shoes" /></figure>
                        </div></NuxtLink>
                        <div class="flex flex-row gap-2 justify-between">
                            <h2 class="text-xl font-semibold self-center">{{ devupdate.title }}</h2>
                            <NuxtLink :to="'/dev-updates/' + devupdate.url" class="btn btn-tertiary self-center">Read
                                More</NuxtLink>
                        </div>
                    </div>
                    <div class="col-span-full" v-else>
                        <p class="text-lg">No development updates here for now! Maybe one day...</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const { data: news } = await useFetch('/api/news/getnews')
const { data: devupdates } = await useFetch('/api/devupdates/getupdates')
</script>