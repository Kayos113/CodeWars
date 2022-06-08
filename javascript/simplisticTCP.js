function traverseTCPStates(eventList){
  var state = "CLOSED";  // initial state, always
  eventList.forEach(event => {
    state = getEventState(event, state);

  });
  return state;
}

function getEventState(event, currState) {
  let state;
  switch(event) {
      case "APP_PASSIVE_OPEN":
        if(currState == "CLOSED") { state = "LISTEN" }
        else { state = "ERROR" }
      break;
      case "APP_ACTIVE_OPEN":
        if(currState == "CLOSED") { state = "SYN_SENT" }
        else { state = "ERROR" }
      break;
      case "APP_SEND":
        if(currState == "LISTEN") { state = "SYN_SENT" }
        else { state = "ERROR" }
      break;
      case "APP_CLOSE":
        if(currState == "LISTEN") { state = "CLOSED" }
        else if(currState == "SYN_RCVD") { state = "FIN_WAIT_1" }
        else if(currState == "SYN_SENT") { state = "CLOSED" }
        else if(currState == "ESTABLISHED") { state = "FIN_WAIT_1" }
        else if(currState == "CLOSE_WAIT") { state = "LAST_ACK" }
        else { state = "ERROR" }
      break;
      case "APP_TIMEOUT":
        if(currState == "TIME_WAIT") { state = "CLOSED" }
        else { state = "ERROR" }
      break;
      case "RCV_SYN":
        if(currState == "LISTEN") { state = "SYN_RCVD" }
        else if(currState == "SYN_SENT") { state = "SYN_RCVD" }
        else { state = "ERROR" }
      break;
      case "RCV_ACK":
        if(currState == "FIN_WAIT_1") { state = "FIN_WAIT_2" }
        else if(currState == "SYN_RCVD") { state = "ESTABLISHED" }
        else if(currState == "CLOSING") { state = "TIME_WAIT" }
        else if(currState == "LAST_ACK") { state = "CLOSED" }
        else { state = "ERROR" }
      break;
      case "RCV_SYN_ACK":
        if(currState == "SYN_SENT") { state = "ESTABLISHED" }
        else { state = "ERROR" }
      break;
      case "RCV_FIN":
        if(currState == "ESTABLISHED") { state = "CLOSE_WAIT" }
        else if(currState == "FIN_WAIT_1") { state = "CLOSING" }
        else if(currState == "FIN_WAIT_2") { state = "TIME_WAIT" }
        else { state = "ERROR" }
      break;
      case "RCV_FIN_ACK":
        if(currState == "FIN_WAIT_1") { state = "TIME_WAIT" }
        else { state = "ERROR" }
      break;
      default:
        state = "ERROR";
  }
  return state;
}
