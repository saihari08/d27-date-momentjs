import './App.css';
import moment from 'moment/moment';
function App() {

let monthsArr=["January","Feburary","March","April","May", 
  "June","July","August","September","October","November","December"];

let daysArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

//let TATAGroups=new Date(1868,6,15,0,20,10,115);

let TATAGroups=new Date("15 June 1868");
console.log(TATAGroups.getFullYear());
console.log(monthsArr[TATAGroups.getMonth()]);
console.log(daysArr[TATAGroups.getDay()]);
console.log(TATAGroups.getDate());
console.log(TATAGroups.getHours());
console.log(TATAGroups.getMinutes());
console.log(TATAGroups.getSeconds());
console.log(TATAGroups.getMilliseconds());
console.log(TATAGroups.getTime());
  return (
    <div className="App">
     <h1>Learing Date and MomentsJS</h1>

<form>
<div>
      <label>Batch Start Date</label>
      <input type="datetime-local" onChange={(e)=>{
        let selectedDate=new Date(e.target.value);
console.log(moment(selectedDate).add(120, 'days').calendar())
console.log(TATAGroups.getFullYear());
console.log(monthsArr[selectedDate.getMonth()]);
console.log(daysArr[selectedDate.getDay()]);
console.log(selectedDate.getDate());
console.log(selectedDate.getHours());
console.log(selectedDate.getMinutes());
console.log(selectedDate.getSeconds());
console.log(selectedDate.getMilliseconds());
console.log(selectedDate.getTime());

let courseDurationInMs=120*24*60*60*1000;
let batchEndDateInMs=selectedDate.getTime()+courseDurationInMs;

let batchEndDate=new Date(batchEndDateInMs)

console.log(batchEndDate)
      }}></input>
    </div>

    <button type="button" onClick={()=>{
    console.log (moment().format('MMMM Do YYYY, h:mm:ss a'))
    console.log(moment().format('dddd')); 
    console.log(moment().format())
    }}>MomentsJS</button>
  </form>
    </div>
  );
}

export default App;
