import { get, optic, OpticFor } from 'optics-ts';
import { Store } from './store';

export const storeOptic: OpticFor<Store> = optic<Store>();
export const getLocale = get(storeOptic.prop('locale'));
export const getMessages = get(storeOptic.prop('messages'));
export const getSwitchLanguage = get(storeOptic.prop('switchLanguage'));
export const getScheme = get(storeOptic.prop('scheme'));
export const getSwitchScheme = get(storeOptic.prop('switchScheme'));
