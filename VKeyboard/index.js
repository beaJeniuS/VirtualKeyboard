import appModel from './js/appModel.js';
import Block from './js/block.js';
import keysEn from './js/keys_en.js';
import keysRu from './js/keys_ru.js';

let currentLang = 'en';
let capsMode = false;
let shiftMode = false;
const pressedKeys = new Set();

const BODY = document.querySelector('body');

const startBlock = new Block(appModel[0]);

BODY.append(startBlock.block);

const SPANS = document.querySelectorAll('.button__value[en-casedown]');
const TEXT_AREA = document.querySelector('.content__inputarea');
const BUTTONS = document.querySelectorAll('.button');

const KEY_CODE_RUSSIAN = ['Backquote', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period'];

const KEY_CODE_ENGLISH = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'];

const EXCEPTION_CODES = ['Backspace', 'Delete', 'CapsLock', 'ControlLeft', 'ControlRight',
  'ShiftlLeft', 'ShiftRight', 'MetaLeft', 'MetaRight', 'AltLeft', 'AltRight'];

function deleteText(keyCode) {
  const start = TEXT_AREA.selectionStart;
  const end = TEXT_AREA.selectionEnd;
  let finText;

  if (start === end) {
    if (keyCode === 'Delete') {
      finText = TEXT_AREA.value.substring(0, start) + TEXT_AREA.value.substring(end + 1);
      TEXT_AREA.value = finText;
      TEXT_AREA.selectionEnd = start;
    }
    if (keyCode === 'Backspace') {
      finText = TEXT_AREA.value.substring(0, start - 1) + TEXT_AREA.value.substring(end);
      TEXT_AREA.value = finText;
      TEXT_AREA.selectionEnd = start - 1;
    }
  } else {
    finText = TEXT_AREA.value.substring(0, start) + TEXT_AREA.value.substring(end);
    TEXT_AREA.value = finText;
    TEXT_AREA.selectionEnd = start;
  }
}

function insertText(keyCode) {
  let text = '';

  switch (keyCode) {
    case 'Tab': text = '\t';
      break;
    case 'Enter': text = '\n';
      break;
    case 'Space': text = ' ';
      break;
    case 'ArrowUp': text = '▲';
      break;
    case 'ArrowDown': text = '▼';
      break;
    case 'ArrowRight': text = '►';
      break;
    case 'ArrowLeft': text = '◄';
      break;
    case 'ShiftLeft': text = '';
      break;
    case 'ShiftRight': text = '';
      break;
    default: if (capsMode && !shiftMode) {
      if (currentLang === 'ru') {
        text = keysRu[keyCode].value;
        if (KEY_CODE_RUSSIAN.findIndex((element) => element === keyCode) !== -1) {
          text = keysRu[keyCode].shiftValue;
        }
      } else {
        text = keysEn[keyCode].value;
        if (KEY_CODE_ENGLISH.findIndex((element) => element === keyCode) !== -1) {
          text = keysEn[keyCode].shiftValue;
        }
      }
      break;
    }
      if (capsMode && shiftMode) {
        if (currentLang === 'ru') {
          text = keysRu[keyCode].value;
        } else {
          text = keysEn[keyCode].value;
          if (KEY_CODE_ENGLISH.findIndex((element) => element === keyCode) !== -1) {
            text = keysEn[keyCode].shiftValue;
          }
        }
        break;
      }
      if (!capsMode && shiftMode) {
        if (currentLang === 'ru') {
          text = keysRu[keyCode].shiftValue;
        } else {
          text = keysEn[keyCode].shiftValue;
        }
        break;
      }
      if (!capsMode && !shiftMode) {
        if (currentLang === 'ru') {
          text = keysRu[keyCode].value;
        } else {
          text = keysEn[keyCode].value;
        }
        break;
      }
  }
  const start = TEXT_AREA.selectionStart;
  const end = TEXT_AREA.selectionEnd;
  const finText = TEXT_AREA.value.substring(0, start) + text + TEXT_AREA.value.substring(end);
  TEXT_AREA.value = finText;
  TEXT_AREA.selectionEnd = (start === end) ? (end + text.length) : end;
}

function highLightButtons() {
  pressedKeys.forEach((el) => {
    const button = document.querySelector(`#${el}`);
    button.classList.add('button-active');
  });
}

function resetHighLightButtons() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((el) => {
    const attr = el.getAttribute('id');
    if (attr !== 'CapsLock') {
      el.classList.remove('button-active');
    }
    if (attr === 'CapsLock' && capsMode === false) {
      el.classList.remove('button-active');
    }
  });
}

function toggleLanguage() {
  if (currentLang === 'en') {
    currentLang = 'ru';
  } else {
    currentLang = 'en';
  }
  return currentLang;
}

function updateButtons() {
  if (capsMode && !shiftMode) {
    if (currentLang === 'ru') {
      SPANS.forEach((el) => {
        const spanEl = el;
        if (KEY_CODE_RUSSIAN.findIndex((element) => element === spanEl.getAttribute('id').split('-')[0]) !== -1) {
          spanEl.innerText = spanEl.getAttribute('ru-caseup');
        } else {
          spanEl.innerText = spanEl.getAttribute('ru-casedown');
        }
      });
    } else {
      SPANS.forEach((el) => {
        const spanEl = el;
        if (spanEl.getAttribute('id').substring(0, 3) === 'Key') {
          spanEl.innerText = spanEl.getAttribute('en-caseup');
        }
      });
    }
  }

  if (capsMode && shiftMode) {
    if (currentLang === 'ru') {
      SPANS.forEach((el) => {
        const spanEl = el;
        spanEl.innerText = spanEl.getAttribute('ru-casedown');
      });
    } else {
      SPANS.forEach((el) => {
        const spanEl = el;
        if (spanEl.getAttribute('id').substring(0, 3) === 'Key') {
          spanEl.innerText = spanEl.getAttribute('en-casedown');
        }
      });
    }
  }

  if (!capsMode && shiftMode) {
    SPANS.forEach((el) => {
      const spanEl = el;
      if (currentLang === 'en') spanEl.innerText = spanEl.getAttribute('en-caseup');
      else spanEl.innerText = spanEl.getAttribute('ru-caseup');
    });
  }

  if (!capsMode && !shiftMode) {
    SPANS.forEach((el) => {
      const spanEl = el;
      if (currentLang === 'en') spanEl.innerText = spanEl.getAttribute('en-casedown');
      else spanEl.innerText = spanEl.getAttribute('ru-casedown');
    });
  }
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  pressedKeys.add(event.code);
  highLightButtons();

  if (pressedKeys.has('ControlLeft') && pressedKeys.has('AltLeft')) {
    toggleLanguage();
    updateButtons();
  }

  if (pressedKeys.has('ControlRight') && pressedKeys.has('AltRight')) {
    toggleLanguage();
    updateButtons();
  }

  if (event.code === 'Backspace') { deleteText(event.code); }
  if (event.code === 'Delete') { deleteText(event.code); }
  if (event.code === 'CapsLock') {
    capsMode = !capsMode;
    updateButtons();
  }
  if (pressedKeys.has('ShiftLeft') || pressedKeys.has('ShiftRight')) {
    shiftMode = true;
    updateButtons();
  }
  if (EXCEPTION_CODES.findIndex((element) => element === event.code) === -1) {
    insertText(event.code);
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.code !== 'CapsLock') { pressedKeys.delete(event.code); }
  if (event.code === 'CapsLock' && !capsMode) {
    pressedKeys.delete(event.code);
  }
  if (pressedKeys.has('ShiftLeft') || pressedKeys.has('ShiftRight')) {
    shiftMode = true;
  } else {
    shiftMode = false;
  }
  resetHighLightButtons();
  highLightButtons();
  updateButtons();
});

BUTTONS.forEach((btn) => {
  btn.addEventListener('mousedown', () => {
    btn.classList.add('button-active');
  });
  btn.addEventListener('click', () => {
    btn.classList.remove('button-active');
  });

  const attr = btn.getAttribute('id');
  if (attr.includes('Key') || attr.includes('Digit')) {
    btn.addEventListener('click', () => {
      insertText(attr);
    });
  }

  if (attr !== 'CapsLock') {
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('button-active');
    });
  }

  if (attr === 'CapsLock') {
    btn.addEventListener('click', () => {
      capsMode = !capsMode;
      updateButtons();
      if (capsMode) {
        btn.classList.add('button-active');
      } else { btn.classList.remove('button-active'); }
    });
  }

  if (attr === 'ShiftLeft' || attr === 'ShiftRight') {
    btn.addEventListener('mousedown', () => {
      shiftMode = true;
      updateButtons();
    });
    btn.addEventListener('mouseup', () => {
      shiftMode = false;
      updateButtons();
    });
    btn.addEventListener('mouseleave', () => {
      shiftMode = false;
      updateButtons();
    });
  }
  if (attr === 'Tab') {
    btn.addEventListener('click', () => {
      insertText('Tab');
    });
  }
  if (attr === 'Enter') {
    btn.addEventListener('click', () => {
      insertText('Enter');
    });
  }
  if (attr === 'Space') {
    btn.addEventListener('click', () => {
      insertText('Space');
    });
  }
  if (attr === 'ArrowUp') {
    btn.addEventListener('click', () => {
      insertText('ArrowUp');
    });
  }
  if (attr === 'ArrowDown') {
    btn.addEventListener('click', () => {
      insertText('ArrowDown');
    });
  }
  if (attr === 'ArrowRight') {
    btn.addEventListener('click', () => {
      insertText('ArrowRight');
    });
  }
  if (attr === 'ArrowLeft') {
    btn.addEventListener('click', () => {
      insertText('ArrowLeft');
    });
  }
  if (attr === 'Backquote') {
    btn.addEventListener('click', () => {
      insertText('Backquote');
    });
  }
  if (attr === 'BracketLeft') {
    btn.addEventListener('click', () => {
      insertText('BracketLeft');
    });
  }
  if (attr === 'BracketRight') {
    btn.addEventListener('click', () => {
      insertText('BracketRight');
    });
  }
  if (attr === 'Semicolon') {
    btn.addEventListener('click', () => {
      insertText('Semicolon');
    });
  }
  if (attr === 'Quote') {
    btn.addEventListener('click', () => {
      insertText('Quote');
    });
  }
  if (attr === 'Comma') {
    btn.addEventListener('click', () => {
      insertText('Comma');
    });
  }
  if (attr === 'Period') {
    btn.addEventListener('click', () => {
      insertText('Period');
    });
  }
  if (attr === 'Backslash') {
    btn.addEventListener('click', () => {
      insertText('Backslash');
    });
  }
  if (attr === 'Slash') {
    btn.addEventListener('click', () => {
      insertText('Slash');
    });
  }
  if (attr === 'Minus') {
    btn.addEventListener('click', () => {
      insertText('Minus');
    });
  }
  if (attr === 'Equal') {
    btn.addEventListener('click', () => {
      insertText('Equal');
    });
  }
  if (attr === 'Backspace') {
    btn.addEventListener('click', () => {
      deleteText('Backspace');
    });
  }
  if (attr === 'Delete') {
    btn.addEventListener('click', () => {
      deleteText('Delete');
    });
  }
});
