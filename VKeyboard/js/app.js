import keysEn from './keys_en.js'
import keysRu from './keys_ru.js'

export default class TaskApp {
  output;
  language = 'ru';

  constructor(title) {
    this.title = title;
  }

  init() {
    const docBody = document.querySelector('body');
    this.output = document.createElement('textarea');
    this.output.setAttribute('id', 'output');
    this.output.setAttribute('name', 'output-area');
    this.output.setAttribute('cols', '100');
    this.output.setAttribute('rows', '10');
    docBody.prepend(this.output);
    document.addEventListener('keydown', (event) => {
      if (this.language === 'ru') {
        if(event.shiftKey)
          this.output.value += keysRu[event.code].shiftValue;
        else
          this.output.value += keysRu[event.code].value;        
      } else {
        if(event.shiftKey)
          this.output.value += keysEn[event.code].shiftValue;
        else
          this.output.value += keysEn[event.code].value;
      }
    });
  }
}
