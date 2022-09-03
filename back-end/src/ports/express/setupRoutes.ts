import {
  setupCreateContentController,
  setupDestroyContentController,
  setupListContentsController,
  setupUpdateContentController,
} from '@/adapters'
import { typeormCreateContentRepository as createContentRepository } from '@/adapters'
import { typeormListContentsRepository as listContentsRepository } from '@/adapters'
import { typeormDestroyContentRepository as destroyContentRepository } from '@/adapters'
import { typeormGetContentByIdRepository as getContentByIdRepository } from '@/adapters'
import { typeormUpdateContentRepository as updateContentRepository } from '@/adapters'
import { typeormGetContentHistoryRepository as getContentHistoriesRepository } from '@/adapters/repositores/typeormGetContentHistoryRepository'
import { typeormAddContentHistoryRepository as addContentHistoryRepository } from '@/adapters/repositores/typeormAddContentHistoryRepository'
import { updateContentUseCase } from '@/useCases/updateContent'
import { createContentUseCase } from '@/useCases/createContent'
import { listContentsUseCase } from '@/useCases/listContents'
import { destroyContentUseCase } from '@/useCases/destroyContent'
import { getContentHistoriesUseCase } from '@/useCases/getContentHistory'
import { setupGetContentHistoryController } from '@/adapters/controllers/getContentHistoryController'

const setupRoutes = (app: any) => {
  app.post(
    '/content',
    setupCreateContentController({
      createContentUseCase,
      createContentRepository,
    })
  )
  app.get(
    '/content',
    setupListContentsController({
      listContentsUseCase,
      listContentsRepository,
    })
  )
  app.get(
    '/content/:id/history', 
    setupGetContentHistoryController({
      getContentHistoriesUseCase,
      getContentHistoriesRepository,
      getContentByIdRepository,
    })
  )
  app.delete(
    '/content/:id',
    setupDestroyContentController({
      destroyContentUseCase,
      destroyContentRepository,
      getContentByIdRepository,
    })
  )
  app.put(
    '/content/:id',
    setupUpdateContentController({
      updateContentUseCase,
      updateContentRepository,
      getContentByIdRepository,
      addContentHistoryRepository,
    })
  )
}

export default setupRoutes
