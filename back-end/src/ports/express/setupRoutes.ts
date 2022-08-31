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
import { typeormAddContentHistoryRepository as addContentHistoryRepository } from '@/adapters/repositores/typeormAddContentHistoryRepository'
import { updateContentUseCase } from '@/useCases/updateContent'
import { createContentUseCase } from '@/useCases/createContent'
import { listContentsUseCase } from '@/useCases/listContents'
import { destroyContentUseCase } from '@/useCases/destroyContent'

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
