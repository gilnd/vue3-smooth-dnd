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
      options[eventEmitterMap[key]] = (props) => {
        this.$emit(key, props);
      }
    }
    this.containerElement = this.$refs.container || this.$el;
    this.container = smoothDnD(this.containerElement, options);
  },
  unmounted () {
    if (this.container) {
      try {
        this.container.dispose();
      } catch {
        // ignore
      }
    }
  },
  emits: ['drop', 'drag-start', 'drag-end', 'drag-enter', 'drag-leave', 'drop-ready' ],
  props: {
    orientation: { type: String, default: 'vertical' },
    removeOnDropOut: { type: Boolean, default: false },
    autoScrollEnabled: { type: Boolean, default: true },
    animationDuration: { type: Number, default: 250 },
    behaviour: String,
    groupName: String,
    dragHandleSelector: String,
    nonDragAreaSelector: String,
    lockAxis: String,
    dragClass: String,
    dropClass: String,
    dragBeginDelay: Number,
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
