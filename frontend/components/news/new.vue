<template>
    <div class="bg-gray-300 dark:bg-gray-700 mb-2 pt-20">
        <div class="grid grid-flow-col grid-cols-12 mx-auto container p-3 lg:p-6">
            <div class="py-12 col-span-full col-start-1 lg:col-start-3 lg:col-span-8 w-full justify-self-center">
                <h2 class="text-4xl text-center">{{ newarticle?.title }}</h2>
                <div class="divider py-6">{{ formatDate(newarticle?.createdAt as Date) }} by {{ newarticle?.createdBy }}</div>
                <div class="grid grid-flow-col grid-cols-12">
                    <div class="text-xl col-span-6 col-start-4 lg:col-start-3 lg:col-span-8 w-full text-center lg:text-left" v-html="newarticle?.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const { data: newarticle } = await useFetch(`/api/news/getnew?url=${route.params.url}`)
function formatDate(dateString: Date) {
            const date = new Date(dateString);
                // Then specify how you want your dates to be formatted
            const updatedDate = addHours(2, date);
            return new Date(updatedDate).toLocaleDateString();
        }
 function addHours(numOfHours: number, date = new Date()) {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

  return date;
}
</script>