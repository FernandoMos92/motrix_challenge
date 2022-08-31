import { faker } from '@faker-js/faker';
import {
  DestroyContentRepository,
  destroyContentUseCase,
} from '@/useCases/destroyContent';
import { makeContent } from '../factories';
import { GetContentByIdRepository } from '../updateContent';
import { ContentNotFoundError } from '@/useCases/errors';

describe('destroyContentUseCase', () => {
  let destroyContentRepository: DestroyContentRepository;
  let getContentByIdRepository: GetContentByIdRepository;
  let sut: typeof destroyContentUseCase;

  beforeEach(() => {
    destroyContentRepository = jest.fn();
    getContentByIdRepository = jest.fn();
    sut = destroyContentUseCase;
  });

  it('should throw ContentNotFoundError when getContentByIdRepository returns undefined', async () => {
    const id = makeContent().id;
    // @ts-ignore
    getContentByIdRepository.mockImplementationOnce(() => undefined);
    expect(
       () => sut({
        id,
        getContentByIdRepository,
        destroyContentRepository,
      })
    ).rejects.toThrow(ContentNotFoundError);
  });

  it('should destroy content', async () => {
    const id = faker.datatype.number()
    // @ts-ignore
    getContentByIdRepository.mockImplementationOnce(() => makeContent());
    await sut({ getContentByIdRepository, destroyContentRepository, id })
    expect(destroyContentRepository).toHaveBeenCalledWith(id)
  });
});
