import { faker } from '@faker-js/faker';
import {
  CreateContentRepository,
  createContentUseCase,
  Input,
} from '@/useCases/createContent';
import { makeContent } from '../factories';

describe('createContentUseCase', () => {
  let createContentRepository: CreateContentRepository;
  let sut: typeof createContentUseCase;

  const makeInput = (input?: Partial<Input>): Input => ({
    title: faker.name.fullName(),
    body: faker.phone.number(),
    ...input,
  });

  beforeEach(() => {
    createContentRepository = jest.fn();
    sut = createContentUseCase;
  });

  it('should create a new Content', async () => {
    const content = makeContent();
    // @ts-ignore
    createContentRepository.mockImplementationOnce(() => content);
    const input = makeInput();
    expect(
      await sut({
        input,
        createContentRepository,
      })
    ).toStrictEqual(content);
  });
});
