import shallowequal from 'shallowequal';

export default function isPropsUpdate(currentProps: any, nextProps: any) {
  const currentKeys = Object.keys(currentProps);

  if (currentKeys.length !== Object.keys(nextProps).length) {
    return false;
  }

  return currentKeys.every(key => {
    return shallowequal(currentProps[key], nextProps[key]);
  });
}
