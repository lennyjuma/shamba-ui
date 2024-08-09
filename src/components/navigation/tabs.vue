<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block my-7 ">
      <nav class="flex space-x-4 justify-center" aria-label="Tabs">
        <a v-for="(tab,index) in tabs" @click="change_tab(index)" :key="tab.name" :href="tab.href" :class="[tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700', 'rounded-md px-3 py-2 text-normal font-medium']" :aria-current="tab.current ? 'page' : undefined">
          <span >{{ tab.name }}</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref , defineEmits} from 'vue'


const emit = defineEmits(["current_tab"])

const tabs = ref([
  { name: 'Soil', href: '#', count: '52', current: true },
  { name: 'Air', href: '#', count: '6', current: false },
  { name: 'Realtime', href: '#', count: '4', current: false },
])
const change_tab = (idx:number) => {
  tabs.value.forEach((tab, index) => {
    // alert(idx)
    tab.current = index == idx
    emit("current_tab", idx)
  })
}
</script>