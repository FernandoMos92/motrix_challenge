import { requestApi } from '../index';

async function createContent(title: string, body: string) {
  await requestApi.post('/content', {title, body})
};

async function listContent() {
  return requestApi.get('/content')
}

async function deleteContent(id: string | number) {
  await requestApi.delete(`/content/${id}`)
  return listContent()
}

async function updateContent(id: string | number, title:string, body:string) {
  await requestApi.put(`content/${id}`, { title, body })
  return listContent()
}

export {
  createContent,
  listContent,
  deleteContent,
  updateContent
};