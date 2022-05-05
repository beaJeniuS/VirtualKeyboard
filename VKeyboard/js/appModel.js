import keysEn from './keys_en.js';
import keysRu from './keys_ru.js';
// import getCurrentLang from './app.js'

// let currentLang = getCurrentLang()

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

function returnButtonsLine(arr = []) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    resultArr.push(
      {
        type: 'div',
        content: '',
        classes: ['content__button', 'button'],
        styles: [],
        action: true,
        children: [
          {
            type: 'div',
            content: '',
            classes: ['button__lang-en'],
            children: [
              {
                type: 'span',
                content: keysEn[arr[i]].value,
                classes: ['button__value-CaseDown'],
                children: [],
              },
              {
                type: 'span',
                content: keysEn[arr[i]].shiftValue,
                classes: ['button__value-CaseUp', 'hidden'],
                children: [],
              },
              {
                type: 'span',
                content: keysEn[arr[i]].shiftValue,
                classes: ['button__value-Caps', 'hidden'],
                children: [],
              },
              {
                type: 'span',
                content: keysEn[arr[i]].value,
                classes: ['button__value-ShiftCaps', 'hidden'],
                children: [],
              },
            ],
          },
          {
            type: 'div',
            content: '',
            classes: ['button__lang-ru', 'hidden'],
            children: [
              {
                type: 'span',
                content: keysRu[arr[i]].value,
                classes: ['button__value-CaseDown'],
                children: [],
              },
              {
                type: 'span',
                content: keysRu[arr[i]].shiftValue,
                classes: ['button__value-CaseUp', 'hidden'],
                children: [],
              },
              {
                type: 'span',
                content: keysRu[arr[i]].shiftValue,
                classes: ['button__value-Caps', 'hidden'],
                children: [],
              },
              {
                type: 'span',
                content: keysRu[arr[i]].value,
                classes: ['button__value-ShiftCaps', 'hidden'],
                children: [],
              },
            ],
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

const buttonsLine2 = returnButtonsLine(['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Del']);
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

const buttonsLine5 = returnButtonsLine(['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']);
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
              content: 'Клавиатура создана в операционной системе Windows',
              classes: ['footer__title'],
              children: [],
            },
            {
              type: 'p',
              content: 'Комбинация для переключения языка: левые ctrl + alt',
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
