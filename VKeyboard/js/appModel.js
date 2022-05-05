import keysEn from './keys_en.js'
import keysRu from './keys_ru.js'
//import getCurrentLang from './app.js'

//let currentLang = getCurrentLang()

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
              content: 'Виртуальная клавиатура',
              classes: ['header__title'],
              children: []
            }									
          ]
        }
      ]
    }
  ]
}

function returnButtonsLine(arr = []){
  let resultArr = []
  for(let i = 0;i < arr.length;i++) {
    resultArr.push(
    {
      type: 'div',
      content: '',
      classes: ['content__button', 'button'],
      styles: [],
      action: true, //  pointer-events!!!!!!!!!!?????????
      children: [
        {
          type: 'div',
          content: '',
          classes: ['button__lang-en'],
          children: [
            {
              type: 'span',
              content:keysEn[arr[i]].shiftValue,
              classes: ['button__value-CaseDown'],
              children: [],
            },
            {
              type: 'span',
              content: keysEn[arr[i]].shiftValue,
              classes: ['button__value-CaseUp', 'hidden'],
              children: []
            },
            {
              type: 'span',
              content: keysEn[arr[i]].shiftValue,
              classes: ['button__value-Caps', 'hidden'],
              children: []
            },	
            {
              type: 'span',
              content: keysEn[arr[i]].value,
              classes: ['button__value-ShiftCaps', 'hidden'],
              children: []
            },	
          ]
        },					
        {
          type: 'div',
          content: '',
          classes: ['button__lang-ru', 'hidden'],
          children: [
            {
              type: 'span',
              content: arr[i], // взять из объекта с описанием кнопок
              classes: ['button__value-normal', 'hidden'],
              children: []
            },
            {
              type: 'span',
              content: arr[i], // взять из объекта с описанием кнопок
              classes: ['button__value-shift', 'hidden'],
              children: []
            },
            {
              type: 'span',
              content: arr[i], // взять из объекта с описанием кнопок
              classes: ['button__value-caps', 'hidden'],
              children: []
            },	
          ]
        }
      ]
    });
  }
  return resultArr
}

let buttonsLine1 = returnButtonsLine(['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace']);
buttonsLine1[buttonsLine1.length-1].classes.push('button-double-size');
buttonsLine1[buttonsLine1.length-1].classes.push('button-dark');

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
								children: []
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
										children: buttonsLine1
									},
									{
										type: 'div',
										content: '',
										classes: ['content__keyboard-row'],
										children: buttonsLine2
									},
									{
										type: 'div',
										content: '',
										classes: ['content__keyboard-row'],
										children: buttonsLine3
									},
									{
										type: 'div',
										content: '',
										classes: ['content__keyboard-row'],
										children: buttonsLine4
									},
									{
										type: 'div',
										content: '',
										classes: ['content__keyboard-row'],
										children: buttonsLine5
									}												
								]
							}
						]
					}
				]
			}
		]				
	}

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
              children: []
            },
            {
              type: 'p',
              content: 'Комбинация для переключения языка: левые ctrl + alt',
              classes: ['footer__text'],
              children: []
            }
          ]
        }
      ]
    }
  ]	
}

const appModel = [
	{
    type: 'div',
    content: '',
    classes: ['wrapper'],
    children: [headerModel, contentModel, footerModel]
  }
]

export default appModel;