// var dateStringNow =
//   year + "-" + (+month + 1) + "-" + date + "-" + hour + "-" + minutes;

//console.log(dateStringNow);
const dateStringNow = () => {
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth(); //Be careful! January is 0 not 1
  var year = currentDate.getFullYear();
  var hour = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  //var dateStringNow =  year + "-" + (month + 1) + "-" + date + "-" + hour + "-" + minutes;
  dateString = `${year}-${month + 1}-${date}_${hour}${minutes}`;
  console.log(dateString);
};
//dateStringNow();
//export default dateStringNow;
