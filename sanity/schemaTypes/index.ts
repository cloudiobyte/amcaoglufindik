import { type SchemaTypeDefinition } from "sanity";

import siteSettings from "./siteSettings";
import contactInfo from "./contactInfo";
import equipment from "./equipment";
import hazelnutPrice from "./hazelnutPrice";
import aboutPage from "./aboutPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    hazelnutPrice,
    equipment,
    contactInfo,
    aboutPage,
  ] as SchemaTypeDefinition[],
};
