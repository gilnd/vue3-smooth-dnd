
/**
 * Checks if object is array
 * @param {*} obj 
 * @returns boolean
 */
const isArray = function (obj) {
  return Array.isArray(obj);
  //return Object.prototype.toString.call(obj) === '[object Array]';
};

/**
 * Checks if tag or tag.value (ref) is string function or object
 * @param {*} tag 
 * @returns boolean
 */
export function validateTagProp (tag) {
  if (tag) {
    if (typeof tag === 'string') return true;
    if (typeof tag === 'object') {
      if (
        typeof tag.value === 'string' ||
        typeof tag.value === 'function' ||
        typeof tag.value === 'object'
      ) {
        return true;
      }
    }
    return false;
  }
  return true;
}

export function getTagProps (ctx, tagClasses) {
  const tag = ctx.$props.tag;
  if (tag) {
    if (typeof tag === 'string') {
      const result = { value: tag };
      if (tagClasses) {
        result.props = { class: tagClasses };
      }
      return result;
    } else if (typeof tag === 'object') {
      const result = { value: tag.value || 'div', props: tag.props || {} };
      if (tagClasses) {
        if (result.props.class) {
          if (isArray(result.props.class)) {
            result.props.class.push(tagClasses);
          } else {
            result.props.class = [tagClasses, result.props.class];
          }
        } else {
          result.props.class = tagClasses;
        }
      }
      return result;
    }
  }
  return { value: 'div' };
}