import Card from './components/card';



const App = () => {

const jobs = [
  {
    logo: "https://cdn-icons-png.flaticon.com/512/732/732229.png",
    company: "Amazon",
    role: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
    posted: "5 days ago"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    company: "Microsoft",
    role: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Bengaluru, India",
    posted: "1 week ago"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    company: "Google",
    role: "Product Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Hyderabad, India",
    posted: "2 weeks ago"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    company: "Meta",
    role: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Remote",
    posted: "3 days ago"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
    company: "Apple",
    role: "iOS Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Delhi, India",
    posted: "1 day ago"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
    company: "Netflix",
    role: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Pune, India",
    posted: "2 weeks ago"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    company: "X (Twitter)",
    role: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hr",
    location: "Chennai, India",
    posted: "4 days ago"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/732/732234.png",
    company: "IBM",
    role: "Cloud Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Kolkata, India",
    posted: "3 weeks ago"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    company: "Adobe",
    role: "Graphic Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Gurugram, India",
    posted: "6 days ago"
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    company: "LinkedIn",
    role: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Remote",
    posted: "1 week ago"
  }
];


  return (
    <div className="parent">
{jobs.map(function(elem){
return (
  <>
  <Card logo={elem.logo} company={elem.company} role={elem.role} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} posted={elem.posted}/>

  <Card logo={elem.logo} company={elem.company} role={elem.role} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} posted={elem.posted}/>

  </>

)

})}
    </div>
    
  )

}

export default App;
