import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
    {
      companyLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      daysAgo: 3,
      position: "Senior Frontend Developer",
      jobType: "Full-time",
      level: "Senior",
      payScale: "₹35–50 LPA",
      location: "Mumbai, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      daysAgo: 7,
      position: "Frontend Engineer",
      jobType: "Full-time",
      level: "Mid-level",
      payScale: "₹22–32 LPA",
      location: "Bengaluru, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      daysAgo: 1,
      position: "Senior UI Developer",
      jobType: "Full-time",
      level: "Senior",
      payScale: "₹28–45 LPA",
      location: "Hyderabad, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/airbnb.com",
      companyName: "Airbnb",
      daysAgo: 14,
      position: "Frontend Developer",
      jobType: "Contract",
      level: "Mid-level",
      payScale: "₹15–25 LPA",
      location: "Remote, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/stripe.com",
      companyName: "Stripe",
      daysAgo: 5,
      position: "React Developer",
      jobType: "Part-time",
      level: "Junior",
      payScale: "₹8–12 LPA",
      location: "Pune, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      daysAgo: 2,
      position: "Senior Frontend Engineer",
      jobType: "Full-time",
      level: "Senior",
      payScale: "₹40–60 LPA",
      location: "Gurgaon, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      daysAgo: 6,
      position: "UI Developer",
      jobType: "Full-time",
      level: "Mid-level",
      payScale: "₹20–30 LPA",
      location: "Mumbai, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      daysAgo: 10,
      position: "Frontend Specialist",
      jobType: "Full-time",
      level: "Senior",
      payScale: "₹32–48 LPA",
      location: "Bengaluru, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      daysAgo: 4,
      position: "JavaScript Engineer",
      jobType: "Full-time",
      level: "Mid-level",
      payScale: "₹18–28 LPA",
      location: "Noida, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/intel.com",
      companyName: "Intel",
      daysAgo: 9,
      position: "Frontend Architect",
      jobType: "Full-time",
      level: "Lead",
      payScale: "₹45–65 LPA",
      location: "Hyderabad, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/uber.com",
      companyName: "Uber",
      daysAgo: 12,
      position: "React.js Developer",
      jobType: "Contract",
      level: "Mid-level",
      payScale: "₹12–20 LPA",
      location: "Chennai, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/paypal.com",
      companyName: "PayPal",
      daysAgo: 8,
      position: "Senior UI Engineer",
      jobType: "Full-time",
      level: "Senior",
      payScale: "₹30–42 LPA",
      location: "Pune, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/salesforce.com",
      companyName: "Salesforce",
      daysAgo: 11,
      position: "Frontend Developer",
      jobType: "Full-time",
      level: "Mid-level",
      payScale: "₹18–26 LPA",
      location: "Hyderabad, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/ibm.com",
      companyName: "IBM",
      daysAgo: 2,
      position: "UI Developer",
      jobType: "Part-time",
      level: "Junior",
      payScale: "₹6–10 LPA",
      location: "Kolkata, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/zoho.com",
      companyName: "Zoho",
      daysAgo: 3,
      position: "Frontend Engineer",
      jobType: "Full-time",
      level: "Mid-level",
      payScale: "₹10–18 LPA",
      location: "Chennai, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/flipkart.com",
      companyName: "Flipkart",
      daysAgo: 5,
      position: "React Frontend Developer",
      jobType: "Full-time",
      level: "Senior",
      payScale: "₹25–38 LPA",
      location: "Bengaluru, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/walmart.com",
      companyName: "Walmart",
      daysAgo: 7,
      position: "UI Engineer",
      jobType: "Full-time",
      level: "Mid-level",
      payScale: "₹15–22 LPA",
      location: "Hyderabad, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/tcs.com",
      companyName: "TCS",
      daysAgo: 13,
      position: "Frontend Developer",
      jobType: "Full-time",
      level: "Junior",
      payScale: "₹4–7 LPA",
      location: "Pune, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/infosys.com",
      companyName: "Infosys",
      daysAgo: 15,
      position: "React Developer",
      jobType: "Full-time",
      level: "Mid-level",
      payScale: "₹8–14 LPA",
      location: "Mysuru, India"
    },
    {
      companyLogo: "https://logo.clearbit.com/accenture.com",
      companyName: "Accenture",
      daysAgo: 4,
      position: "Frontend Engineer",
      jobType: "Full-time",
      level: "Senior",
      payScale: "₹20–35 LPA",
      location: "Bengaluru, India"
    }
  ];

  return (
    <div className='parent'>
      {jobs.map(function (elem,idx) {
        return <div key={idx}> 
        <Card  companyLogo={elem.companyLogo}
          companyName={elem.companyName}
          daysAgo={elem.daysAgo}
          position={elem.position}
          jobType={elem.jobType}
          level={elem.level}
          payScale={elem.payScale}
          location={elem.location} />
          </div>
      })}
    </div>
  )
}

export default App
