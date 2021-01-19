import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseDatabaseProvider } from '@react-firebase/database';

import firebase from './firebaseConfig';
import Layout from './components/layout';
import Routes from './routes';

function App() {
    return (
        <Router>
            <FirebaseDatabaseProvider firebase={firebase}>
                <Layout>
                    <Routes />
                </Layout>
            </FirebaseDatabaseProvider>
        </Router>
    );
}

export default App;
