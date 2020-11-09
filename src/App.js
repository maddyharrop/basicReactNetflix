import React from 'react';
import Question from './components/Question';

import './App.css';

function App() {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <Question 
        question = "What is Netflix?"
        
      />
      <Question 
        question = "How much does Netflix cost?"
      />
      <Question 
        question = "Where can I watch Netflix?"
      />
      <Question 
        question = "How do I cancel?"
      />
      <Question 
        question = "What can I watch on Netflix?"
      />
      <Question 
        question = "How does the free trial work?"
      />

      
    </div>
  );
}

export default App;
