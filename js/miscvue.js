
export function showformatint(data) {
    return numeral(data).format('0,0');
}

export function logoff(){
    alert('ออกจากระบบ');
    localStorage.setItem('ref1_docflow', "");
    localStorage.setItem('ref2_docflow', "");
    location.href="login.html";
}


export function showformatdate(data) {
    var d = new Date(data);

    let sday = d.getDate().toString();
    let smonth = d.getMonth() + 1;
    let syear = d.getFullYear();

    smonth = smonth.toString();
    if (sday.length == 1) {
        sday = '0' + sday
    }
    if (smonth.length == 1) {
        smonth = '0' + smonth
    }


    if (syear == "1970") {
        return "";
    } else {
        return `${sday}/${smonth}/${syear}`;
    }
}
export function showformattime(data) {
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
            return `${shour}:${sminute}`;
        }
}
export function  showformatdatesave(data) {
    var d = new Date(data);

    let sday = d.getDate().toString();
    let smonth = d.getMonth() + 1;
    let syear = d.getFullYear();

    smonth = smonth.toString();
    if (sday.length == 1) {
        sday = '0' + sday
    }
    if (smonth.length == 1) {
        smonth = '0' + smonth
    }


    if (syear == "1970") {
        return "";
    } else {
        return `${syear}-${smonth}-${sday}`;
    }
}

export function showformatmoney(data) {
    let d = numeral(data).format('0,0.00');
    return d;
}

export function  showformatdatetime(data) {
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

export function  showformat4digit(data) {
    let d = numeral(data).format('0.0000');
    return d;
}

export function  isValidNumber(input) {
     return /^\d+$/.test(input);
}

export function setuserinfoshow(user){
    const empname = document.getElementById("empname");
    empname.textContent = user.userempname;

    if(user.userempname=="" || user.userempname== null){
        empname.textContent=user.userid;
    } 

    const departmentname = document.getElementById("departmentname");
    departmentname.textContent =  user.userdepartmentname;
}

export function isValidDateTime2para(dateInput,timeInput) 
{

    if (!dateInput || !timeInput) {
    // alert("❌ Please fill in both date and time.");
    return false;
    }

    const combined = `${dateInput} ${timeInput}`;
    const dateObj = new Date(combined);

    if (isNaN(dateObj.getTime())) {
        return false;
    } else {
    return true;
    }
}

export  function checkDateRangeStartEnd(dateStart,timeStart,dateEnd,timeEnd) {
      

      if (!dateStart || !timeStart || !dateEnd || !timeEnd) {
        // result.textContent = "❌ Please fill in all date and time fields.";
        return false;
      }

      const start = new Date(`${dateStart}T${timeStart}`);
      const end = new Date(`${dateEnd}T${timeEnd}`);

      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        // result.textContent = "❌ Invalid datetime values.";
        return false;
      }

      if (end > start) {
        // result.textContent = "✅ End datetime is after start datetime.";
        return true;
      } else {
        // result.textContent = "❌ End datetime must be later than start datetime.";
        return false
      }
    }

export function isValidTime(timeString) {
  // Regular expression to match 24-hour time format HH:MM
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timeRegex.test(timeString);
}

export  function  showdocstatus(docstatus){
    let result="";

    if(docstatus=="Y"){
        result=`<span style='color:green;'>อนุมัติ</span>`
    }
    else if(docstatus=="N"){
        result=`<span style='color:red;'>ไม่อนุมัติ</span>`
    }
    else{
        result=`<span style='color:blue;'>รออนุมัติ</span>`
    }

    return result;
}
                      