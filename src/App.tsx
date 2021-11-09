import React from 'react';
import './App.css';

import { useCandidates } from './models/candidates';

import CandidatesTable from './components/CandidatesTable';
import CandidateForm from './components/CandidateForm';
function App() {
  const candidates = useCandidates();

  return (
    <div className="App" style={{ display:"flex", flexDirection: "row" }}>
      <section>
        <CandidatesTable candidates={candidates} />
      </section>
      <CandidateForm />
    </div>
  );
}

export default App;
