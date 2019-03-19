export const createProject = (project) => {
  return (dispatch, getState) => {
    //make async call firebase database
    dispatch({type: 'CREATE_PROJECT', project}); //es6 project:project ====project
  }
}
