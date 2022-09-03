import { ContentNotFoundError } from '@/useCases/errors'
import { GetContentHistories, useCase } from '@/useCases/getContentHistory'
import { GetContentByIdRepository } from '@/useCases/updateContent'
import { Request, Response } from 'express'

type Params = {
  getContentHistoriesUseCase: useCase
  getContentHistoriesRepository: GetContentHistories
  getContentByIdRepository: GetContentByIdRepository
}

export const setupGetContentHistoryController =
  ({ getContentHistoriesUseCase, getContentHistoriesRepository, getContentByIdRepository }: Params ) =>
  async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
      const contentHistory = await getContentHistoriesUseCase({ id: Number(req.params.id), getContentHistoriesRepository, getContentByIdRepository})

      return res.status(200).json(contentHistory)
    } catch (error) {
      if (error instanceof ContentNotFoundError) {
        return res.status(404).end()
      }
      return res.status(500).end()
    }
  }
