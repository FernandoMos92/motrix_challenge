import { DestroyContentRepository, useCase } from '@/useCases/destroyContent'
import { ContentNotFoundError } from '@/useCases/errors'
import { GetContentByIdRepository } from '@/useCases/updateContent'
import { Request, Response } from 'express'


type Params = {
  destroyContentUseCase: useCase
  destroyContentRepository: DestroyContentRepository
  getContentByIdRepository: GetContentByIdRepository
}

export const setupDestroyContentController =
  ({
    destroyContentUseCase,
    destroyContentRepository,
    getContentByIdRepository,
  }: Params) =>
    async (req: Request, res: Response): Promise<Response> => {
      try {
        await destroyContentUseCase({
          id: parseInt(req.params.id),
          destroyContentRepository,
          getContentByIdRepository,
        })
        return res.status(204).end()
      } catch (error) {
        if (error instanceof ContentNotFoundError) {
          return res.status(404).end()
        }
        return res.status(500).end()
      }
    }
