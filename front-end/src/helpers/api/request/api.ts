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

export {
  createContent,
  listContent,
  deleteContent
};