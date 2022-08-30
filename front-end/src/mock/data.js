import { faker } from '@faker-js/faker'

const data = []

for (let index = 0; index < 30; index += 1) {
  data.push({
    title: faker.word.adjective(),
    body: faker.lorem.text(),
    createdAt: faker.date.birthdate(),
    updatedAt: faker.date.birthdate(),
  })
}

export default data;
