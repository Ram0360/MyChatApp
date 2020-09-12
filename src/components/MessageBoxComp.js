import React from 'react'
import { css } from 'emotion';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../components/Message';

const ROOT_CSS = css({
    height: 400,
    width: 900
  });

const MessageBoxComp = ({ messages, name }) => {
    return (
        <div>
            <ScrollToBottom className={ROOT_CSS}>
                {messages.map((message, i) => 
                <div key={i}>
                    <Message message={message} name={name} />
                </div>)}
            </ScrollToBottom> 
        </div>
    )
}

export default MessageBoxComp
