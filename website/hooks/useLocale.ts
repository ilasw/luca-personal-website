import {dictionary, type Languages, type PathToStrings} from "assets/locale";
import {get} from 'radash'

export const useLocale = () => {
  const allStrings = dictionary;

  const locale = ref<Languages>('en');
  const strings = ref(allStrings[locale.value]);
  const t = <T = string>(key: PathToStrings) => get<T>(strings.value, key);

  return {
    locale,
    strings,
    t
  }
}