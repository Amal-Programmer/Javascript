let Role = prompt("Are you: employee (e), enrolled_member(m), or subscriber(s)?\nPlease enter e, m or s");
//console.log(Role);
switch(Role){
    case "e": console.log("You are authorized to have access to Dietary Services"); break;
    case "m": console.log("You are authorized to have access to Dietary Services and one-on-one interaction with a dietician"); break;
    case "s": console.log("You are authorized to have partial access to facilitate Dietary Services only"); break;
    default: console.log("You need to enroll or at least subscribe first to avail this facility");
}