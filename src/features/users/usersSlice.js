const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  { id: "0", name: "Tianna Jenkins" },
  { id: "1", name: "Kevin Grant" },
  { id: "2", name: "Madison Price" }
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducer: {}
});

export default usersSlice.reducer;
