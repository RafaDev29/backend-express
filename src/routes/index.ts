import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = __dirname;
const router = Router();

const cleanFileName = (fileName: string) => fileName.split(".").shift();

(async () => {
  for (const fileName of readdirSync(PATH_ROUTER)) {
    const cleanName = cleanFileName(fileName);

    if (cleanName !== "index") {
      try {
        const moduleRouter = await import(`./${cleanName}`);
        const route = moduleRouter.router || moduleRouter.default?.router;

        if (typeof route === "function") {
          router.use(`/${cleanName}`, route);
        } else {
          console.warn(`Ruta /${cleanName} no exporta un router válido`);
        }
      } catch (error) {
        console.error(`Error al cargar ${cleanName}:`, error);
      }
    }
  }
})();

export { router };
