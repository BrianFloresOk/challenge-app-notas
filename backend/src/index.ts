import app from './app';
require('dotenv').config();
import { AppDataSource } from './database/connectionDb';
const PORT =  process.env.PORT || 4000;


const main = async () => {
    try {
        await AppDataSource.initialize();
        app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}
            http://localhost:${PORT}/api`))
    } catch (error) {
        if (error instanceof Error) {
            console.log("ERROR" + " " + error.message)
        }
    }
}

main();