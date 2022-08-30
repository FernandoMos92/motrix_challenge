import { setupCreateContentController } from '@/adapters';
import { setupListContentsController } from '@/adapters/listContentsController';
import { typeormCreateContentRepository as createContentRepository } from '@/adapters/typeormCreateContentRepository';
import { typeormListContentsRepository as listContentsRepository } from '@/adapters/typeormListContentsRepository';
import { createContentUseCase } from '@/useCases/createContent';
import { listContentsUseCase } from '@/useCases/listContents';

// TODO: fix anys
const adaptExpressRoute = (controller: any) => async (req: any, res: any) => {
  const data = await controller({
    ...req.body,
    ...req.locals,
  });
  res.status(200).json(data);
};

// TODO: fix any
const setupRoutes = (app: any) => {
  app.post(
    '/content',
    adaptExpressRoute(
      setupCreateContentController({
        createContentUseCase,
        createContentRepository,
      })
    )
  );
  app.get(
    '/content',
    adaptExpressRoute(
      setupListContentsController({
        listContentsUseCase,
        listContentsRepository,
      })
    )
  );
};

export default setupRoutes;
