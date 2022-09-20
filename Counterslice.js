import {createSlice} from 'Qreduxjs/toolkit';
export const counterSlice=createSlice({
name: 'counter1'
initialState:
qty:0,
total:0,
burgerqty:0,
pizzaqty:0,
nachosqty:0,
maggieqty:0,
faloodaqty:0,
donutqty:0,
},
reducers :{
burgerqtyc: (state, action)=>{
state.burgerqty+=action.payload;
pizzaqtyc: (state,action)->{
state.pizzaqty+=action-payload;
},
maggieqtyc:(state, action) =>{
state.maggieqty+-action.payload;
},
nachosqtyc: (state, action)=>{
state.nachosqty+=action.payload;
faloodaqtyc: (state,action)->{
state.faloodaqty+=action.payload;
},
donutqtyc: (state,action)=›{
state. donutqty+=action.payload;
totalc: (state, action)=›{
state.total+-action.payload;
},
qtyc: (state, action)=>t
state.qty+-action.payload;
}
}
})


export const
{ burgerqtyc, pizzaqtyc, maggieqtyc, nachosqtyc, faloodaqtyc, donutqtyc, totalc, qtyc ] = counterSlice. actions;
export default counterSlice.reducer;
