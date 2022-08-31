import {
  UpdateContentRepository,
  updateContentUseCase,
  GetContentByIdRepository,
  AddContentHistoryRepository,
} from '@/useCases/updateContent';
import { makeContent } from '../factories';
import { ContentNotFoundError } from '@/useCases/errors';

describe('updateContentUseCase', () => {
  let updateContentRepository: UpdateContentRepository;
  let getContentByIdRepository: GetContentByIdRepository;
  let addContentHistoryRepository: AddContentHistoryRepository
  let sut: typeof updateContentUseCase;

  beforeEach(() => {
    updateContentRepository = jest.fn();
    getContentByIdRepository = jest.fn();
    addContentHistoryRepository = jest.fn();
    sut = updateContentUseCase;
  });

  it('should throw ContentNotFoundError when getContentByIdRepository returns undefined', async () => {
    const input = makeContent();
    // @ts-ignore
    getContentByIdRepository.mockImplementationOnce(() => undefined);
    expect(
       () => sut({
        input,
        updateContentRepository,
        getContentByIdRepository,
        addContentHistoryRepository,
      })
    ).rejects.toThrow(ContentNotFoundError);
  });

  it('should update a content', async () => {
    const input = makeContent();
    // @ts-ignore
    getContentByIdRepository.mockImplementationOnce(() => input);
    // @ts-ignore
    updateContentRepository.mockImplementationOnce(() => input);
    expect( await sut({
        input,
        updateContentRepository,
        getContentByIdRepository,
        addContentHistoryRepository,
      })).toStrictEqual(input)
    expect(getContentByIdRepository).toHaveBeenCalledWith(input.id)
    expect(updateContentRepository).toHaveBeenCalledWith(input)
  })
});
