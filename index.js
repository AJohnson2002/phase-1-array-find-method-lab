// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
];
const superbowlWin = (collection) =>{
    for(const ele of collection){
        if(ele.result === "W"){
           return ele.year 
        }
    }
};