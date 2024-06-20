import { createSlice } from '@reduxjs/toolkit'
import { Message } from '../../interfaces/message.interface';


const messagesData: Message[] = [];

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: messagesData,
  },
  reducers: {
    setMessages: (state, actions) => {
        state.messages = actions.payload
    },
  },
})

export const { setMessages } = messagesSlice.actions

export default messagesSlice.reducer;