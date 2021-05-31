<template>
    <Switch v-model="enabledDarkMode" 
      :class="[enabledDarkMode ? 'bg-black bg-opacity-90' : 'bg-gray-200', 
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent border-opacity-0 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary']">
      
      <span class="sr-only">Dark Mode</span>
      <div class="flex" :class="[enabledDarkMode ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']">
        <span v-if="enabledDarkMode" class="m-auto">
          <MoonIcon class="h-4 w-4 text-primary" />
        </span>
        <span v-if="!enabledDarkMode" class="m-auto">
          <SunIcon class="h-4 w-4 text-primary" />
        </span>
      </div>
    </Switch>
</template>


<script>
import { computed } from 'vue'
import { Switch } from '@headlessui/vue'
import { useStore } from 'vuex'
import { SunIcon, MoonIcon } from '@heroicons/vue/outline'
export default {
  components: { Switch, SunIcon, MoonIcon },
  setup() {
    const store = useStore()
    const theme = computed(() => store.getters.theme);

    const enabledDarkMode = computed({
      get: () => theme.value === 'dark',
      set: () => {
        store.dispatch('toggleTheme');
      }
    });
    return { enabledDarkMode }
  },
};
</script>