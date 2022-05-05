import keysEn from './keys_en.js';
import keysRu from './keys_ru.js';
import Block from './block.js';
import appModel from './appModel.js';

const BODY = document.querySelector('body');
export default class TaskApp {
  output;

  language = 'ru';

  startBlock;

  constructor(title) {
    this.title = title;
  }

  init() {
    appModel.forEach((el) => {
      this.startBlock = new Block(BODY, el);
    });

    document.addEventListener('keydown', (event) => {
      console.log(event.code);
      /* if (this.language === 'ru') {
         if (event.shiftKey) this.output.value += keysRu[event.code].shiftValue;
         else this.output.value += keysRu[event.code].value;
       } else if (event.shiftKey) this.output.value += keysEn[event.code].shiftValue;
       else this.output.value += keysEn[event.code].value; */
    });
  }
}
