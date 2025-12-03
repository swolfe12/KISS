import { COMPONENT_TYPES } from "./componentTypes";
import { CMS_TABLES } from "./tables";

import { SITE_SCHEMA } from "./collections/sites";
import { PAGE_SCHEMA } from "./collections/pages";
import { COMPONENT_SCHEMA } from "./collections/components";
import { PAGE_COMPONENTS_SCHEMA } from "./collections/pageComponents";

import { HERO_SCHEMA } from "./componentSchemas/hero";
import { NAVBAR_SCHEMA } from "./componentSchemas/navbar";
import { NAV_LINK_SCHEMA } from "./componentSchemas/navLinks";
import { GALLERY_SCHEMA } from "./componentSchemas/gallery";
import { GALLERY_ITEM_SCHEMA } from "./componentSchemas/galleryItems";
import { CONTACT_FORM_SCHEMA } from "./componentSchemas/contactForm";

export const CMS_SCHEMA = {
  componentTypes: COMPONENT_TYPES,
  tables: CMS_TABLES,
  collections: [
    SITE_SCHEMA,
    PAGE_SCHEMA,
    COMPONENT_SCHEMA,
    PAGE_COMPONENTS_SCHEMA,
    HERO_SCHEMA,
    NAVBAR_SCHEMA,
    NAV_LINK_SCHEMA,
    GALLERY_SCHEMA,
    GALLERY_ITEM_SCHEMA,
    CONTACT_FORM_SCHEMA,
  ],
};
