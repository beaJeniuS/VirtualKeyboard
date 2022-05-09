class Block {
  constructor(newBlock) {
    this.type = newBlock.type;
    this.element = document.createElement(this.type);
    this.element.innerText = newBlock.content;
    if (newBlock.classes !== undefined) { this.setClasses(newBlock.classes); }
    if (newBlock.children !== undefined) {
      this.addChildren(newBlock.children);
    }
    if (newBlock.styles !== undefined) { this.addInlineStyles(newBlock.styles); }
  }

  get block() {
    return this.element;
  }

  setClasses(classes) {
    classes.forEach((el) => {
      this.element.classList.add(el);
    });
  }

  addChildren(children) {
    children.forEach((element) => {
      const blockInst = new Block(element);
      this.element.append(blockInst.block);
    });
  }

  addInlineStyles(styles) {
    styles.forEach((el) => {
      this.element.setAttribute(Object.keys(el)[0], el[Object.keys(el)[0]]);
    });
  }
}

export default Block;
