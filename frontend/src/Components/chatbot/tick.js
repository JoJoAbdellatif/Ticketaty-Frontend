import ChatBot from 'react-simple-chatbot';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from '../Home';

export default function Tick(){
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
                message: 'Hi {previousValue}, nice to meet you! and happy Ticketing:)',
                end: true,
            }


          ]

        }
        />
        </ThemeProvider>
</div>
    );

}