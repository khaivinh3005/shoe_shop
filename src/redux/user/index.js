import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "service/userAPI";
import reactLocalStorage from "utils/reactLocalStorage";

const initialState = {
  userToken: reactLocalStorage.get("shoeToken") || null,
  user: null,
  isLoading: false,
  error: null,
};
export const signIn = createAsyncThunk(
  "userSlice/signIn",
  async (value, thunkAPI) => {
    try {
      const res = userAPI.signIn(value);
      thunkAPI.fulfillWithValue(res);
      return res;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const getUser = createAsyncThunk(
  "userSlice/getUser",
  async (value, thunkAPI) => {
    try {
      const response = await userAPI.getUserDetail(value);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateUser = createAsyncThunk(
  "userSlice/updateUser",
  async (value, thunkAPI) => {
    try {
      const response = await userAPI.updateUser({ ...value });
      const accessToken = reactLocalStorage.get("shoeToken");
      thunkAPI.dispatch(getUser(accessToken));
      return response;
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  }
);

export const changePass = createAsyncThunk(
  "userSlice/changePassword",
  async (value, thunkAPI) => {
    try {
      const response = userAPI.changePassword(value);
      const accessToken = reactLocalStorage.get("shoeToken");
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const orderShoes = createAsyncThunk(
  "userSlice/orderShoes",
  async (value, thunkAPI) => {
    try {
      const response = userAPI.order(value);
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getUser.pending, (state, action) => {
      console.log("loading");
      state.isLoading = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      console.log("update profile loading");
      state.isLoading = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(changePass.fulfilled, (state, action) => {});
    builder.addCase(signIn.fulfilled, (state, action) => {
      reactLocalStorage.set("shoeToken", action.payload.accessToken);
      state.userToken = action.payload.accessToken;
    });
    builder.addCase(orderShoes.fulfilled, (state,action)=>{
      console.log(action.payload)
    })
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
