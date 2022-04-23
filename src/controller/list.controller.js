import { createList, deleteListById, findListById, findLists ,updateFavsOfListById} from '../services/list.service.js'

export async function createListHandler(req, res) {
  try {
    const list = await createList(req.body)
    res.status(201).json({ message: 'List created', list })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findListsHandler(req, res) {
  try {
    const lists = await findLists()
    res.status(200).json({ message: 'Lists retrived', lists })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findListByIdHandler(req, res) {
  try {
    const list = await findListById(req.params.id)
    res.status(200).json({ message: 'List retrived', list })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export async function deleteListByIdHandler(req, res) {
  try {
    const message = await deleteListById(req.params.id)
    res.status(200).json({ message })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export async function updateFavsOfListByIdHandler(req, res) {
  try {
    const list = await updateFavsOfListById(req.params.id,req.body.favs)
    res.status(200).json({ message: 'List updated', list })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
