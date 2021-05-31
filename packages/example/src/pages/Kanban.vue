<template>
  <div class="h-screen overflow-y-auto">
    <Container
      @drop="onColumnDrop($event)"
      orientation="horizontal"
      group-name="cols"
      :autoScrollEnabled="true"
      :drop-placeholder="{ className: 'bg-primary bg-opacity-10 rounded-lg' }">
      <Draggable v-for="column in scene.children" :key="column.id">
        <div class=" bg-gray-50 dark:bg-gray-700 shadow-xl rounded-md mx-4">
          <!-- Header -->
          <div class="cursor-move rounded-t-lg p-4 space-x-4 bg-primary text-white flex space-x-2">
            <HandIcon class="h-6 w-6"></HandIcon>
            <span class="text-lg">{{ column.name }}</span>
          </div>
          <!-- Column -->
          <Container
            class="m-4 w-60 pb-2"
            orientation="vertical"
            @drop="(e) => onCardDrop(column.id, e)"
            group-name="col-items"
            :autoScrollEnabled="true"
            :shouldAcceptDrop="(e, payload) =>  (e.groupName === 'col-items' && !payload.loading)"
            :get-child-payload="getCardPayload(column.id)"
            :drop-placeholder="{
              className: 'bg-primary bg-opacity-20 rounded-lg border-dotted border-2 border-primary', 
              animationDuration: '200', 
              showOnTop: true }"
            drag-class="bg-primary dark:bg-primary border-2 border-purple-600 text-white transition duration-100 ease-in z-50 transform rotate-6 scale-110 "
            drop-class="transition duration-100 ease-in z-50 transform -rotate-2 scale-90">
            <!-- Items -->
            <KanbanItem v-for="item in column.children" :key="item.id" :item="item"></KanbanItem>
          </Container>
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { HandIcon, CodeIcon } from '@heroicons/vue/outline'
import { applyDrag, generateItems, generateWords } from '../utils/helpers'
import KanbanItem from '../components/KanbanItem.vue'

const scene = {
  type: 'container',
  props: {
    orientation: 'horizontal'
  },
  children: generateItems(8, i => ({
    id: `column${i}`,
    type: 'container',
    name: generateWords(Math.random() * 2 + 1),
    props: {
      orientation: 'vertical',
    },
    children: generateItems(+(Math.random() * 10).toFixed() + 5, j => ({
      type: 'draggable',
      id: `${i}${j}`,
      loading: false,
      data: generateWords(Math.random() * 12 + 2)
    }))
  }))
}
export default {
  components: { Container, Draggable, KanbanItem, HandIcon, CodeIcon},
  data () {
    return {
      scene,
    }
  },
  methods: {
    onColumnDrop (dropResult) {
      const scene = Object.assign({}, this.scene)
      scene.children = applyDrag(scene.children, dropResult)
      this.scene = scene
    },
    onCardDrop (columnId, dropResult) {
      
      // check if element where ADDED or REMOVED in current collumn
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        
        const scene = Object.assign({}, this.scene)
        const column = scene.children.filter(p => p.id === columnId)[0]
        const itemIndex = scene.children.indexOf(column)
        const newColumn = Object.assign({}, column)
        
        // check if element was ADDED in current column
        if((dropResult.removedIndex == null && dropResult.addedIndex >= 0)){
          // your action / api call
          dropResult.payload.loading = true
          // simulate api call
          setTimeout(function(){ dropResult.payload.loading = false }, (Math.random() * 5000) + 1000); 
        }
        
        newColumn.children = applyDrag(newColumn.children, dropResult)
        scene.children.splice(itemIndex, 1, newColumn)
        this.scene = scene
      }
    },
    getCardPayload (columnId) {
      return index => {
        return this.scene.children.filter(p => p.id === columnId)[0].children[index]
      }
    },
  }
}
</script>