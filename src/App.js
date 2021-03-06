import './App.css';
import HeadacheModule from './modules/diary/components/headache/HeadacheModule';
import { withAuthenticator, AmplifySignOut  } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="container mx-auto px-10 h-5/6">
      <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 ...">
        <p>
          Headache Diary   ciao       
        </p>
        <HeadacheModule></HeadacheModule>        
      </div>      
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
