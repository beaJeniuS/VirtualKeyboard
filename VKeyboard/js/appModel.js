import keysEn from './keys_en.js';
import keysRu from './keys_ru.js';

const headerModel = {
  type: 'header',
  content: '',
  classes: ['header'],
  children: [
    {
      type: 'div',
      content: '',
      classes: ['container'],
      children: [
        {
          type: 'div',
          content: '',
          classes: ['header__column'],
          children: [
            {
              type: 'h1',
              content: 'RSS Виртуальная клавиатура',
              classes: ['header__title'],
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

function checkKeyCode(keyCode) {
  switch (keyCode) {
    case 'Backspace': return false;
    case 'Tab': return false;
    case 'Del': return false;
    case 'CapsLock': return false;
    case 'Enter': return false;
    case 'ShiftLeft': return false;
    case 'ShiftRight': return false;
    case 'ArrowUp': return false;
    case 'ArrowDown': return false;
    case 'ArrowRight': return false;
    case 'ArrowLeft': return false;
    case 'ControlLeft': return false;
    case 'ControlRight': return false;
    case 'MetaLeft': return false;
    case 'MetaRight': return false;
    case 'AltLeft': return false;
    case 'AltRight': return false;
    case 'Space': return false;
    case 'ContextMenu': return false;
    default: return true;
  }
}

function returnButtonsLine(arr = []) {
  let attributes = [];
  const resultArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (checkKeyCode(arr[i])) attributes = [{ id: `${arr[i]}-value` }, { 'en-casedown': keysEn[arr[i]].value }, { 'en-caseup': keysEn[arr[i]].shiftValue }, { 'ru-casedown': keysRu[arr[i]].value }, { 'ru-caseup': keysRu[arr[i]].shiftValue }];
    else attributes = [{ id: `${arr[i]}-value` }];

    resultArr.push(
      {
        type: 'div',
        content: '',
        classes: ['content__button', 'button'],
        styles: [{ id: arr[i] }],
        children: [
          {
            type: 'span',
            content: keysEn[arr[i]].value,
            classes: ['button__value'],
            styles: attributes,
            children: [],
          },
        ],
      },
    );
  }
  return resultArr;
}

const buttonsLine1 = returnButtonsLine(['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace']);
buttonsLine1[buttonsLine1.length - 1].classes.push('button-double-size');
buttonsLine1[buttonsLine1.length - 1].classes.push('button-dark');

const buttonsLine2 = returnButtonsLine(['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete']);
buttonsLine2[0].classes.push('button-15-size');
buttonsLine2[0].classes.push('button-dark');
buttonsLine2[buttonsLine2.length - 1].classes.push('button-dark');

const buttonsLine3 = returnButtonsLine(['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter']);
buttonsLine3[0].classes.push('button-double-size');
buttonsLine3[0].classes.push('button-dark');
buttonsLine3[buttonsLine3.length - 1].classes.push('button-double-size');
buttonsLine3[buttonsLine3.length - 1].classes.push('button-dark');

const buttonsLine4 = returnButtonsLine(['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight']);
buttonsLine4[0].classes.push('button-double-size');
buttonsLine4[0].classes.push('button-dark');
buttonsLine4[buttonsLine4.length - 1].classes.push('button-double-size');
buttonsLine4[buttonsLine4.length - 1].classes.push('button-dark');

const buttonsLine5 = returnButtonsLine(['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']);
for (let i = 0; i < buttonsLine5.length; i += 1) {
  if (i !== 3) {
    buttonsLine5[i].classes.push('button-dark');
  } else {
    buttonsLine5[i].classes.push('button-space');
  }
}

const contentModel = {
  type: 'main',
  content: '',
  classes: ['content'],
  children: [
    {
      type: 'div',
      content: '',
      classes: ['container'],
      children: [
        {
          type: 'div',
          content: '',
          classes: ['content__column'],
          children: [
            {
              type: 'textarea',
              content: '',
              classes: ['content__inputarea'],
              children: [],
            },
            {
              type: 'div',
              content: '',
              classes: ['content__keyboard-container'],
              children: [
                {
                  type: 'div',
                  content: '',
                  classes: ['content__keyboard-row'],
                  children: buttonsLine1,
                },
                {
                  type: 'div',
                  content: '',
                  classes: ['content__keyboard-row'],
                  children: buttonsLine2,
                },
                {
                  type: 'div',
                  content: '',
                  classes: ['content__keyboard-row'],
                  children: buttonsLine3,
                },
                {
                  type: 'div',
                  content: '',
                  classes: ['content__keyboard-row'],
                  children: buttonsLine4,
                },
                {
                  type: 'div',
                  content: '',
                  classes: ['content__keyboard-row'],
                  children: buttonsLine5,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const footerModel = {
  type: 'footer',
  content: '',
  classes: ['footer'],
  children: [
    {
      type: 'div',
      content: '',
      classes: ['container'],
      children: [
        {
          type: 'div',
          content: '',
          classes: ['footer__column'],
          children: [
            {
              type: 'h2',
              content: 'Клавиатура создана в операционной системе Windows 10',
              classes: ['footer__title'],
              children: [],
            },
            {
              type: 'p',
              content: 'Комбинация для переключения языка: ctrl + alt слева или справа',
              classes: ['footer__text'],
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const appModel = [
  {
    type: 'div',
    content: '',
    classes: ['wrapper'],
    children: [headerModel, contentModel, footerModel],
  },
];

export default appModel;
