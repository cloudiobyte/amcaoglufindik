import { type SchemaTypeDefinition } from "sanity";

import siteSettings from "./siteSettings";
import contactInfo from "./contactInfo";
import equipment from "./equipment";
import hazelnutPrice from "./hazelnutPrice";
import aboutPage from "./aboutPage";
import presentPrice from "./presentPrice";
import secondHandEquipment from "./secondHandEquipment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    presentPrice,
    hazelnutPrice,
    equipment,
    secondHandEquipment,
    contactInfo,
    aboutPage,
  ] as SchemaTypeDefinition[],
};
