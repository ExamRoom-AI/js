

// document.addEventListener('keydown', event => {
//     debugger
//     console.log("event", event);
//     //data = JSON.stringify(event
    
// })

document.addEventListener('keydown', event => {
    try {
        if (event.ctrlKey && 'cvxspwuaz'.indexOf(event.key) !== -1) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl Key and ${event.key} key`
            }
            this.sendMassage(value);
          } else if (event.altKey && 'tab'.indexOf(event.key) !== -1) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed alt Key and ${event.key} key`
            }
            this.sendMassage(value);
          } else if (event.ctrlKey && event.shiftKey && 'cvxspwuaz'.indexOf(event.key) !== -1) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl key, alt Key and ${event.key} key`
            }
            this.sendMassage(value);
          } else if (['Shift', 'Control', 'Alt', 'Meta', 'meta', 'control', 'alt', 'shift', 'Escape'].includes(event.key)) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ${event.key} key`
            }
            this.sendMassage(value);
          } else if (event.ctrlKey && event.key == "Shift") {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl key and ${event.key} key`
            }
            this.sendMassage(value);
          } else if (event.ctrlKey && event.metaKey) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl key and window key`
            }
            this.sendMassage(value);
          } else if (event.ctrlKey && event.altKey) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl key and alt key`
            }
            this.sendMassage(value);
          } else if (event.key == "Shift" && event.metaKey) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed shift key and window key`
            }
            this.sendMassage(value);
          } else if (event.key == "Shift" && event.altKey) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed shift key and alt key`
            }
            this.sendMassage(value);
          } else if (event.metaKey && event.altKey) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed window key and alt key`
            }
            this.sendMassage(value);
          } else if (event.ctrlKey && event.metaKey && event.altKey) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl key, window key and alt key`
            }
            this.sendMassage(value);
          } else if (event.ctrlKey && event.metaKey && event.key == "Shift") {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl key, window key and Shift key`
            }
            this.sendMassage(value);
          } else if (event.ctrlKey && event.altKey && event.key == "Shift") {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl key, window key and Shift key`
            }
            this.sendMassage(value);
          } else if (event.metaKey && event.altKey && event.key == "Shift") {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed window key, alt key and Shift key`
            }
            this.sendMassage(value);
          } else if (event.ctrlKey && event.key == "Shift" && event.metaKey && event.altKey) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl key, window key, alt key and Shift key`
            }
            this.sendMassage(value);
          } else if (['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].includes(event.key)) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ${event.key} key`
            }
            this.sendMassage(value);
          } else if (event.ctrlKey && event.shiftKey && ('34').indexOf(event.key) !== -1) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed ctrl key, shift key and ${event.key} key`
            }
            this.sendMassage(value);
          } else if (['Mac', 'mac'].includes(navigator.platform) && event.shiftKey && event.metaKey) {
            disabledEvent(event);
            let value = {
              "timestamp": Date.now(),
              "Remark": `Pressed shift key and window key`
            }
            this.sendMassage(value);
          }
    } catch (error) {
        
    }
     
    } , false);

  function sendMassage(data) {
    console.log(data);
    window.top.postMessage(data, '*')
  }

  function disabledEvent(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }