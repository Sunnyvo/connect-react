// import data from '../default.json';

export default function (state = data, action){
  console.log('Hello payload:',action.payload)
  switch(action.type){
    case "UPDATE_LISTS":
      return action.payload
    default :
      return state
  }
}
