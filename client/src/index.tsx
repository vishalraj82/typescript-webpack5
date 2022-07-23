import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootDiv = document.getElementById('root');
if (rootDiv) {
    createRoot(rootDiv).render(<App />);
}
