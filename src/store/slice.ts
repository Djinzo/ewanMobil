import {createSlice} from '@reduxjs/toolkit';
import {
  getRootPath,
  getShorePath,
  getTrendPath,
  getTrendValues,
  getValuePath,
  getValues,
} from './apiCalls';

export interface initStatetype {
  rootPath: {
    Name: string;
    Description: string;
    Type: number;
    ParentId: string;
    Id: string;
  };
  shorePath: Array<{
    Name: string;
    Description: string;
    Type: number;
    ParentId: string;
    Id: string;
  }>;
  valuePath: Array<{
    Name: string;
    Description: string;
    Type: number;
    ParentId: string;
    Id: string;
  }>;
  values: {
    Id: string;
    Name: string;
    Description: string;
    Unit: string;
    Value: string;
  };
  trendPath: Array<{
    Name: string;
    Description: string;
    Type: number;
    ParentId: string;
    Id: string;
  }>;
  trendValues: Array<{
    TrendId: string;
    Value: string;
    Status: string;
    SampleDate: string;
    Id: string;
  }>;
  isLoading: boolean;
  error: {};
}

const initialState: initStatetype = {
  rootPath: {Name: '', Description: '', Type: 0, ParentId: '', Id: ''},
  shorePath: [],
  valuePath: [],
  trendPath: [],
  values: {Name: '', Id: '', Description: '', Unit: '', Value: ''},
  trendValues: [],
  isLoading: false,
  error: {},
};

const pathSlices = createSlice({
  name: 'path',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addCase(getRootPath.pending, state => {
      state.isLoading = true;
    });
    build.addCase(getRootPath.fulfilled, (state, action) => {
      state.isLoading = true;
      state.rootPath = action.payload;
    });

    build.addCase(getRootPath.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error;
    });
    build.addCase(getShorePath.pending, state => {
      state.isLoading = true;
    });
    build.addCase(getShorePath.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shorePath = action.payload;
    });
    build.addCase(getShorePath.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    build.addCase(getValuePath.pending, state => {
      state.isLoading = true;
    });
    build.addCase(getValuePath.fulfilled, (state, action) => {
      state.isLoading = false;
      state.valuePath = action.payload;
    });
    build.addCase(getValuePath.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    build.addCase(getValues.pending, state => {
      state.isLoading = true;
    });
    build.addCase(getValues.fulfilled, (state, action) => {
      state.isLoading = false;
      state.values = action.payload;
    });
    build.addCase(getValues.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    build.addCase(getTrendPath.pending, state => {
      state.isLoading = true;
    });
    build.addCase(getTrendPath.fulfilled, (state, action) => {
      state.isLoading = false;
      state.trendPath = action.payload;
    });
    build.addCase(getTrendPath.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error;
    });
    build.addCase(getTrendValues.pending, state => {
      state.isLoading = true;
    });
    build.addCase(getTrendValues.fulfilled, (state, action) => {
      state.isLoading = false;
      state.trendValues = action.payload;
    });
    build.addCase(getTrendValues.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.error;
    });
  },
});

export default pathSlices.reducer;
