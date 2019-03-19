const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'kjdsfkjkjkj'},
    {id: '2', title: 'collect all starts', content: 'kjdsfkjkjkj'},
    {id: '3', title: 'egg hunt with chicken', content: 'kjdsfkjkjkj'}
  ]
}

const projectReducer = (state=initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
  return state
}

export default projectReducer
