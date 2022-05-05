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
  
const appModel = [
	{
    type: 'div',
    content: '',
    classes: ['wrapper'],
    children: [headerModel, contentModel, footerModel]
  }
]

export default appModel;