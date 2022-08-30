import {
  ListContentsRepository,
  listContentsUseCase,
} from '@/useCases/listContents';
import { makeContent } from '../createContent/factories';

describe('listContentsUseCase', () => {
  let listContentsRepository: ListContentsRepository;
  let sut: typeof listContentsUseCase;

  beforeEach(() => {
    listContentsRepository = jest.fn();
    sut = listContentsUseCase;
  });

  it('should return an array of Contents', async () => {
    const contents = [makeContent()];
    // @ts-ignore
    listContentsRepository.mockImplementationOnce(() => contents);
    expect(
      await sut({
        listContentsRepository,
      })
    ).toStrictEqual(contents);
  });
});
