import ChatBot from 'react-simple-chatbot';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from '../Home';
import axios from 'axios';
import useFetch from '../useFetch';

export default function Tick(props){
    const theme = {
        background: '#f5f8fb',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
      
      let data = props.props
      let pending = data.pending
      console.log(pending)

      let reserved = data.reserved
      let cancelled = data.canceled


    return (
        <div>
             <ThemeProvider theme={theme}>
      <ChatBot
       floating={true}
       title="Say hi to Tick"
        steps={[
            {
              id: 'kick',
              message: "Hi there! I am Tick of Ticketaty. I'm here to help, once I'm developed so stay tuned ! to check your ticket click on the more tab of the nav bar and select find my tickets there you can enter your email and check your tickets, for now let's get your name",
              trigger: 'name2',
            },
            {
                id: 'name2',
                user: true,
                trigger: 'response2',
            },
            {
                id: 'response2',
                message: 'Hi {previousValue}, nice to meet you! How can I help you?',
                trigger: 'choose',
            },
            {
              id: 'choose',
              options: [
                { value: 1, label: 'Check Analytics', trigger: 'AnalyticOptions' },
                
       
              ],
            },
            {
              id: 'AnalyticOptions',
              options: [
                { value: 1, label: 'Show me how many requests are pending', trigger: 'pending' },
                { value: 2, label: 'Show me how many requests are reserved', trigger: 'reserved' },
                { value: 3, label: 'Show me how many requests are canceled', trigger: 'cancelled' },
              ],
            },
            {
              id: 'pending',
              message: data.pending+' requests are pending',
              trigger : 'AnalyticOptions'
            },
            {
              id: 'reserved',
              message: reserved+' requests are reserved',
              trigger: 'AnalyticOptions'
            },
            {
              id: 'cancelled',
              message: data.canceled+' requests are cancelled',
              trigger: 'AnalyticOptions'
            }



          ]

        }
        />
        </ThemeProvider>
</div>
    );

}