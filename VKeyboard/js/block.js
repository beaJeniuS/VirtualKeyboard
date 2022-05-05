class Block {
  children = [];

  textInputBlock;

  // target;

  constructor(parent, newBlock) {
    this.type = newBlock.type;
    this.element = document.createElement(this.type);
    this.element.innerText = newBlock.content;
    if (newBlock.classes !== undefined) { this.setClasses(newBlock.classes); }
    if (newBlock.children !== undefined) { this.addChildren(newBlock.children); }
    if (newBlock.styles !== undefined) { this.addInlineStyles(newBlock.styles); }

    if (newBlock.action) {
      // target = document.querySelector('#inputarea');

      this.element.addEventListener('click', () => {
        this.element.classList.add('button-active');
        // target.value +=
      });

      this.element.addEventListener('animationend', () => {
        this.element.classList.remove('button-active');
      });
    }
    parent.append(this.element);
  }

  setClasses(classes) {
    classes.forEach((el) => {
      this.element.classList.add(el);
    });
  }

  addChildren(children) {
    children.forEach((e) => {
      const b = new Block(this.element, e);
    });
  }

  addInlineStyles(styles) {
    styles.forEach((el) => {
      this.element.setAttribute(el, el.value);
    });
  }
}

export default Block;
