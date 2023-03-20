import { defineComponent, h } from 'vue';
import { smoothDnD, dropHandlers } from 'smooth-dnd';
import { getTagProps, validateTagProp } from '../utils/utils';

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;

const eventEmitterMap = {
  'drag-start': 'onDragStart',
  'drag-end': 'onDragEnd',
  'drop': 'onDrop',
  'drag-enter': 'onDragEnter',
  'drag-leave': 'onDragLeave',
  'drop-ready': 'onDropReady'
};

export default defineComponent({
  name: 'Container',
  mounted () {
    // emit events
    const options = Object.assign({}, this.$props);
    for (const key in eventEmitterMap) {
      //console.log(`${key}: ${eventEmitterMap[key]}`);
      options[eventEmitterMap[key]] = (props) => {
        this.$emit(key, props);
      }
    }

    this.containerElement = this.$refs.container || this.$el;
    this.container = smoothDnD(this.containerElement, options);
  },
  unmounted () {
    if (this.container) {
      this.container.dispose();
    }
  },
  emits: ['drop', 'drag-start', 'drag-end', 'drag-enter', 'drag-leave', 'drop-ready' ],
  props: {
    removeOnDropOut: { type: Boolean, default: false },
    autoScrollEnabled: { type: Boolean, default: true },
    behaviour: String,
    groupName: String,
    orientation: String,
    dragHandleSelector: String,
    nonDragAreaSelector: String,
    lockAxis: String,
    dragClass: String,
    dropClass: String,
    dragBeginDelay: Number,
    animationDuration: { type: Number, default: 250 },
    getChildPayload: Function,
    shouldAnimateDrop: Function,
    shouldAcceptDrop: Function,
    getGhostParent: Function,
    dropPlaceholder: [Object, Boolean],
    tag: {
      validator: validateTagProp,
      default: 'div',
    }
  },
  render(){
    const tagProps = getTagProps(this);
    return h(
      tagProps.value,
      Object.assign({}, { ref: 'container' }, tagProps.props),
      this.$slots.default(),
    );
  }
});
