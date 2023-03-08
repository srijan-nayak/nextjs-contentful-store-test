import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeProductFields {
  name: EntryFields.Symbol;
  price: EntryFields.Number;
  description: EntryFields.Text;
  image: Asset;
  slug: EntryFields.Symbol;
}

export type TypeProduct = Entry<TypeProductFields>;
