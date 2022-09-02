import { requestApi } from '../index';

async function createContent(title: string, body: string) {
  await requestApi.post('/content', {title, body})
};




export {
  createContent
};