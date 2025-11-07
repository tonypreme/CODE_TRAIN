function querystring(key) {
    var re = new RegExp('(?:\\?|&)' + key + '=(.*?)(?=&|$)', 'gi');
    var r = [],
        m;
    while ((m = re.exec(document.location.search)) != null) r.push(m[1]);
    return r;
}

// function  showformatdate(data) {
//     var d = new Date(data);

//     let sday = d.getDate().toString();
//     let smonth = d.getMonth() + 1;
//     let syear = d.getFullYear();

//     smonth = smonth.toString();
//     if (sday.length == 1) {
//         sday = '0' + sday
//     }
//     if (smonth.length == 1) {
//         smonth = '0' + smonth
//     }


//     if (syear == "1970") {
//         return "";
//     } else {
//         return `${sday}/${smonth}/${syear}`;
//     }
// }

// function showformatdatesave(data) {
//     var d = new Date(data);

//     let sday = d.getDate().toString();
//     let smonth = d.getMonth() + 1;
//     let syear = d.getFullYear();

//     smonth = smonth.toString();
//     if (sday.length == 1) {
//         sday = '0' + sday
//     }
//     if (smonth.length == 1) {
//         smonth = '0' + smonth
//     }


//     if (syear == "1970") {
//         return "";
//     } else {
//         return `${syear}-${smonth}-${sday}`;
//     }
// }

// function showformatmoney(data) {
//     let d = numeral(data).format('0,0.00');
//     return d;
// }

function  showformatdatetime(data) {
          var d = new Date(data);

          let sday = d.getDate().toString();
          let smonth = d.getMonth() + 1;
          let syear = d.getFullYear();
          let shour = d.getHours();
          let sminute = d.getUTCMinutes();

          if (smonth > 12) { smonth = 12; }

          smonth = smonth.toString();
          sminute = sminute.toString();
          shour = shour.toString();

          if (sday.length == 1) { sday = '0' + sday }
          if (smonth.length == 1) { smonth = '0' + smonth }
          if (shour.length == 1) { shour = '0' + shour }
          if (sminute.length == 1) { sminute = '0' + sminute }
          

          if (syear == "1970") {
              return "";
          }
          else {
              return `${sday}/${smonth}/${syear} ${shour}:${sminute}`;
          }
      }
