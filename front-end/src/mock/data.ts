import { faker } from '@faker-js/faker'

export type Data = {
  id: number;
  title: string;
  body?: string;
  createdAt: Date;
  updatedAt: Date;
};



function generateData(): Data[] {
const data = []

for (let index = 0; index < 30; index += 1) {
  data.push({
    id: Math.floor(Math.random() * (100 - 1) + 1),
    title: faker.word.adjective(),
    body: faker.lorem.text(),
    createdAt: faker.date.birthdate(),
    updatedAt: faker.date.birthdate()
  })
  }  
 return data
}

export default generateData
