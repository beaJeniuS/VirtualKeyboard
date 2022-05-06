import appModel from './js/appModel.js';
import Block from './js/block.js';
import keysEn from './js/keys_en.js';
import keysRu from './js/keys_ru.js';

// const myApp = new TaskApp();
// myApp.init();
let currentLang = 'en';
let capsMode = false;
const shiftMode = false;
const pressedKeys = new Set();

const BODY = document.querySelector('body');

const startBlock = new Block(appModel[0]);

BODY.append(startBlock.block);

// const BUTTONS = document.querySelectorAll('.button');

const SPANS = document.querySelectorAll('.button__value[en-casedown]');
const TEXT_AREA = document.querySelector('.content__inputarea');

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
  let text;

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
    default: if (!(capsMode || pressedKeys.has('ShiftLeft') || pressedKeys.has('ShiftRight'))) {
      if (currentLang === 'en') text = keysEn[keyCode].value;
      else text = keysRu[keyCode].value;
    }
      if (capsMode || pressedKeys.has('ShiftLeft') || pressedKeys.has('ShiftRight')) {
        if (currentLang === 'en') text = keysEn[keyCode].shiftValue;
        else text = keysRu[keyCode].shiftValue;
      }
      break;
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
      console.log("attr !== 'CapsLock'");
    }
    if (attr === 'CapsLock' && capsMode === false) {
      el.classList.remove('button-active');
      console.log("attr === 'CapsLock' && capsMode === false");
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
  if (!(capsMode || pressedKeys.has('ShiftLeft') || pressedKeys.has('ShiftRight'))) {
    SPANS.forEach((el) => {
      const spanEl = el;
      if (currentLang === 'en') spanEl.innerText = spanEl.getAttribute('en-casedown');
      else spanEl.innerText = spanEl.getAttribute('ru-casedown');
    });
  }
  if (capsMode || pressedKeys.has('ShiftLeft') || pressedKeys.has('ShiftRight')) {
    SPANS.forEach((el) => {
      const spanEl = el;
      if (currentLang === 'en') spanEl.innerText = spanEl.getAttribute('en-caseup');
      else spanEl.innerText = spanEl.getAttribute('ru-caseup');
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

  switch (event.code) {
    case 'Backspace': deleteText(event.code);
      break;
    case 'Delete': deleteText(event.code);
      break;
    case 'CapsLock': capsMode = !capsMode;
      updateButtons();
      break;
    case 'ShiftLeft':
      break;
    case 'ShiftRight':
      break;
    case 'ControlLeft':
      break;
    case 'ControlRight':
      break;
    case 'MetaLeft':
      break;
    case 'MetaRight':
      break;
    case 'AltLeft':
      break;
    case 'AltRight':
      break;
    default: insertText(event.code);
      break;
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.code !== 'CapsLock') { pressedKeys.delete(event.code); }
  if (event.code === 'CapsLock' && !capsMode) { pressedKeys.delete(event.code); }
  resetHighLightButtons();
  highLightButtons();
});
