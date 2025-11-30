import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users=[
    {img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Hello, I am John Doe, a software developer from New York.',
      tag:'Satisfied'
    },
     {img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'Hello, I am John Doe, a software developer from New York.',
      tag:'Underserved'
    },
     {img: 'https://plus.unsplash.com/premium_photo-1684249780837-62b98a932b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'Hello, I am John Doe, a software developer from New York.',
      tag:'Satisfied'
    },
  ]
  return (
    <div>
      <Section1  users={users}/>
      <Section2 />
    </div>
  )
}

export default App
