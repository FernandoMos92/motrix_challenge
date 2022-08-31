import { app } from '@/ports/express';
import { AppDataSource } from '@/ports/typeorm';

const PORT = 3002;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
