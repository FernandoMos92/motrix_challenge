import { app } from '@/ports/express';
import { AppDataSource } from '@/ports/typeorm';

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => console.log(error));
