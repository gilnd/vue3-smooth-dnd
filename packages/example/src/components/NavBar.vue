<template>
  <div class="flex justify-between p-4 shadow-lg bg-gray-50 dark:bg-gray-800">
    <a href="https://github.com/gilnd/vue3-smooth-dnd" class="flex hover:text-primary text-2xl font-bold">
      <HandIcon class="h-8 w-8"></HandIcon>
      <span class="">vue3-smooth-dnd</span>
    </a>
    <div class="flex space-x-6 text-lg">
      <a href="https://kutlugsahin.github.io/vue-smooth-dnd"
        class="flex space-x-2 items-center hover:text-primary">
        <CodeIcon class="h-6 w-6"></CodeIcon>
        <span>Other Demos</span>
      </a>
      <a href="https://github.com/gilnd/vue3-smooth-dnd/blob/main/packages/example/src/pages/Kanban.vue"
        class="flex space-x-2 items-center hover:text-primary">
        <CodeIcon class="h-6 w-6"></CodeIcon>
        <span>View source</span>
      </a>
      <theme-toggler></theme-toggler>
    </div>
  </div>
</template>
<script>
import { ref, computed  } from 'vue'
import { useStore  } from 'vuex'
import { CodeIcon, HandIcon } from '@heroicons/vue/outline'
import ThemeToggler from './ThemeToggler.vue'

const navigation = [
  {
    name: 'showcase', 
    links:[
      { name: 'Kanban', href: '/' },
      { name: 'Form elements', href: '/form' }
    ]
  }
]

export default {
  components: { ThemeToggler, CodeIcon, HandIcon },
  setup() {
    const store = useStore();
    const theme = computed(() => store.getters.theme);
    return {
      theme
    }
  },
}
</script>