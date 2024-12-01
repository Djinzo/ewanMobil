import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {useEffect} from 'react';
import {
  getRootPath,
  getShorePath,
  getTrendPath,
  getTrendValues,
  getValuePath,
  getValues,
} from '../../store/apiCalls';
import useSelector from '../../store/selector';
import {Text} from 'react-native';

function MainScreen() {
  const rootPath = useSelector(state => state.path.rootPath);
  const shorePath = useSelector(state => state.path.shorePath);
  const dispatch = useDispatch<AppDispatch>();
  const PathValues = useSelector(state => state.path.valuePath);
  const value = useSelector(state => state.path.values);
  console.log('this is the valeus', value.Unit);
  const PathTrends = useSelector(state => state.path.trendPath);
  const valueTrend = useSelector(state => state.path.trendValues);

  useEffect(() => {
    dispatch(getRootPath());
    dispatch(getShorePath());
  }, [dispatch]);

  useEffect(() => {
    if (shorePath && shorePath.at(0)?.Id) {
      dispatch(getValuePath(shorePath.at(0)?.Id || ''));
      dispatch(getTrendPath(shorePath.at(0)?.Id || ''));
    }
  }, [dispatch, shorePath, rootPath]);

  useEffect(() => {
    if (PathValues && PathValues.length >= 0) {
      dispatch(getValues(PathValues.at(8)?.Id || ''));
    }
  }, [dispatch, PathValues]);

  useEffect(() => {
    if (PathTrends && PathTrends.length >= 0) {
      dispatch(getTrendValues(PathTrends.at(5)?.Id || ''));
    }
  }, [dispatch, PathTrends]);

  return (
    <>
      <Text>rootPath : {rootPath?.Id}</Text>
      <Text>shorePath : {shorePath?.map(s => s.Id)}</Text>
      <Text>firstValuePath : {PathValues.at(8)?.Id}</Text>
      <Text>
        firstValue : {value?.Value || ''}
        {value?.Unit || ''}
      </Text>
      <Text>trendPath : {PathTrends?.at(5)?.Id}</Text>
      <Text>trendValues : {valueTrend?.map(v => v.Value + ' ')}</Text>
    </>
  );
}

export default MainScreen;
