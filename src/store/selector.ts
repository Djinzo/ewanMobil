import type {TypedUseSelectorHook} from 'react-redux';
import {useSelector as useSelectorGeneric} from 'react-redux';
import {RootState} from './store';

const useSelector: TypedUseSelectorHook<RootState> = useSelectorGeneric;

export default useSelector;
