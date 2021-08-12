import _ from 'lodash';

const makeSpace = (offset, correction = 0) => ' '.repeat(offset + correction);

const getPrefix = (type) => {
  const prefix = {
    added: '+ ', removed: '- ', unchanged: '  ', nested: '  ',
  };
  return prefix[type];
};

const stringify = (value, spacesCount) => {
  if (!_.isPlainObject(value)) {
    return String(value);
  }
  const lines = Object
    .entries(value)
    .map(([key, value]) => `${makeSpace(spacesCount)}${key}: ${stringify(value, spacesCount + 4)}`);
  return ['{', ...lines, `${makeSpace(spacesCount - 4)}}`].join('\n');
};

const formatStylish = (obj, offset = 4) => {
  const result = (obj.flatMap((item) => {
    const prefix = getPrefix(item.type);
    switch (item.type) {
      case 'nested':
        return `${makeSpace(offset, -2)}${prefix}${item.name}: ${formatStylish(item.children, offset + 4)}`;
      case 'changed':
        return [`${makeSpace(offset, -2)}- ${item.name}: ${stringify(item.value, offset + 4)}`,
          `${makeSpace(offset, -2)}+ ${item.name}: ${stringify(item.newValue, offset + 4)}`];
      default:
        return `${makeSpace(offset, -2)}${prefix}${item.name}: ${stringify(item.value, offset + 4)}`;
    }
  }));
  return ['{', result, `${makeSpace(offset - 4)}}`].flat().join('\n');
};

export default formatStylish;
