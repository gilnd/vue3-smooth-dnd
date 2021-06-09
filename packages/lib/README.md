<h1 align="center">vue3-smooth-dnd</h1>

<p align="center">
  Vue 3 Wrapper of smooth-dnd library.
  <br/>
  <a href="https://gilnd.github.io/vue3-smooth-dnd" target="__blank"><b>Live demo</b></a>
</p>

> NOTE: This is a Vue 3 wrapper over [smooth-dnd](https://github.com/kutlugsahin/smooth-dnd) library. It's a fork of the already done [vue2 wrapper](https://github.com/kutlugsahin/vue-smooth-dnd) done by the original author of the library.

All the [documentation](https://github.com/kutlugsahin/vue-smooth-dnd/blob/master/README.md) for the Vue 2 version works with this [package](https://www.npmjs.com/package/vue3-smooth-dnd) version too!
    
## Install
```bash
npm install vue3-smooth-dnd
```

## Usage
```jsx
<template>
  <div>
    <span>Studio Ghibli Tier List</span>
    <Container @drop="onDrop">            
      <Draggable v-for="(item, i) in items" :key="item.id">
        <div>
           {{i + 1}} -> {{item.data}}
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from "vue3-smooth-dnd";
export default {
  name: "app",
  components: { Container, Draggable },
  data() {
    return {
      items: [
        { id: 1, data: "Princess Mononoke" },
        { id: 2, data: "Spirited Away" },
        { id: 3, data: "My Neighbor Totoro" },
        { id: 4, data: "Howl's Moving Castle" }
      ]
    };
  },
  methods: {  
    onDrop(dropResult){
      this.items = this.applyDrag(this.items, dropResult);
    },
    applyDrag(arr, dragResult){
      const { removedIndex, addedIndex, payload } = dragResult;

      if (removedIndex === null && addedIndex === null) return arr;
      const result = [...arr];
      let itemToAdd = payload;
      
      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }
      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }
      return result;
    }
  }
}
</script>
```

