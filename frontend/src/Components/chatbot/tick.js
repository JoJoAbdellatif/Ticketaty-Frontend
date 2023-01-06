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
      
      function GoToPage(){
        window.open('https://github.com/', "_blank");
        return <p>Go to google</p>
       }


    return (
        <div>
             <ThemeProvider theme={theme}>
      <ChatBot
       floating={true}
        steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: 'name',  
            },
            {
                id: 'name',
                user: true,
                trigger: 'response1',
            },
            {
                id: 'response1',
                message: 'Hi {previousValue}, nice to meet you!',
                end: true,
            }
           
              
          ]

        }
        />
        </ThemeProvider>
</div>
    );
    
}