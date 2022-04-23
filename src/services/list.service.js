import List from '../model/list.model.js'


export async function createList(input) {
  try {
    const list = await List.create(input)
    return list.populate('user')
  } catch (error) {
    throw new Error(errorMessage)
  }
}
export async function findLists(query) {
  const lists= await List.find({})
  for (const list of lists) {
    await list.populate('favs')
    await list.populate('user')//.populate('user') 
  }
  return lists
}

export async function findListById(query) {
  const list= await List.findById(query)
  if(list){
    await list.populate('favs')
    await list.populate('user')
  }
  return list
  
}
export async function updateFavsOfListById(query,data) {
  const list= await List.findById(query)
  const newList={name:list.name,user:list.user,favs:[...list.favs,...data]}
  const listUpdated=await List.findByIdAndUpdate(query,newList,{new:true})
  if(listUpdated){
    await listUpdated.populate('favs')
    await listUpdated.populate('user')
  }
  return listUpdated  
}
export async function deleteListById(query) {
  try {
    await List.findByIdAndDelete(query)
    return 'La lista eliminó correctamente'
  } catch (error) {
    throw new Error(error)
  }
}