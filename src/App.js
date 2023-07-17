import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css'

const App = ( ) => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
        height="100vh"
        projectID="
        227f55b0-7e1a-49dd-9fc6-5bd08b7177b5"
        // username of currently log in 
        userName={localStorage.getItem('username')}
        // userpassword
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
        />
    )
}

export default App;