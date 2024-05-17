import { useDispatch } from 'react-redux';
// eslint-disable-next-line artem-plugin/layer-imports
import { AppDispatch } from '@/app/providers/StoreProvider/config/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
