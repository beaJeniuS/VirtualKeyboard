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
								content: arr[i], // взять из объекта с описанием кнопок
								classes: ['button__value-normal'],
								children: [],
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

const appModel = [
	{
    type: 'div',
    content: '',
    classes: ['wrapper'],
    children: [headerModel, contentModel, footerModel]
  }
]

export default appModel;