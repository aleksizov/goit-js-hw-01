function getElementWidth(content, padding, border) {
  const total = content + padding + border * 4;
  return total;
}

getElementWidth();
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
