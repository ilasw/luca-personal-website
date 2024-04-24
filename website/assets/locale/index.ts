import {_en} from "assets/locale/_en";
import type {Paths} from "~/types/utils";

export const dictionary = {
  en: _en
} as const;

export type Languages = keyof typeof dictionary;

export type Strings = typeof dictionary[Languages];
export type PathToStrings = Paths<Strings>;