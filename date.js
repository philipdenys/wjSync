//console.log(dateStringNow);

module.exports = {
  dateNow: function() {
    var currentDate = new Date();
    var DD = (currentDate.getDate() < 10 ? "0" : "") + currentDate.getDate();
    var MM =
      (currentDate.getMonth() + 1 < 10 ? "0" : "") +
      (currentDate.getMonth() + 1);
    //Be careful! January is 0 not 1
    var YYYY = currentDate.getFullYear();
    var hh = currentDate.getHours();
    var mm = currentDate.getMinutes();
    //var dateStringNow =  year + "-" + (month + 1) + "-" + date + "-" + hour + "-" + minutes;
    dateString = `${YYYY}${MM}${DD}_${hh}${mm}`;
    //console.log(dateString);
    return dateString;
  }
};
