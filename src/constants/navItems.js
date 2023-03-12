import { CATEGORIES } from "./categories";
import { ROUTES } from "./routes";

export const NAV_ITEMS = [
  {
    id: "home",
    to: ROUTES.HOME,
    label: "Inicio",
  },
  {
    id: "about",
    to: ROUTES.ABOUT,
    label: "Nosotros",
  },
  {
    id: "categories",
    to: "#",
    label: "Categorias",
    subItems: CATEGORIES,
  },
  {
    id: "contact",
    to: ROUTES.CONTACT,
    label: "Contacto",
  },
];
