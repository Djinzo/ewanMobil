import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:8880/';

export const getRootPath = createAsyncThunk('getRootPath', async () => {
  const res = await axios.get(BASE_URL + 'path');
  const data = await res.data;
  return data;
});

export const getShorePath = createAsyncThunk('getShorePath', async () => {
  const res = await axios.get(BASE_URL + 'path/container/shores');
  const data = await res.data;
  return data;
});

export const getValuePath = createAsyncThunk(
  'getValuesPath',
  async (shorePath: string) => {
    try {
      const res = await axios.get(
        BASE_URL + 'path/container/values?shoreId=' + shorePath,
      );
      const data = await res.data;
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const getTrendPath = createAsyncThunk(
  'getTrendPath',
  async (valuePath: string) => {
    try {
      console.log('this is the trend path ', valuePath);
      const res = await axios.get(
        BASE_URL + 'path/container/trend?shoreId=' + valuePath,
      );
      const data = await res.data;
      console.log('this is the trend path data ', data);
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const getValues = createAsyncThunk(
  'getValues',
  async (valuePath: string) => {
    const res = await axios.get(BASE_URL + 'values/value?id=' + valuePath);
    const data = await res.data;
    return data;
  },
);

export const getTrendValues = createAsyncThunk(
  'getTrendValues',
  async (trendPath: string) => {
    const res = await axios.get(BASE_URL + 'trend/trend?id=' + trendPath);
    const data = await res.data;
    return data;
  },
);
