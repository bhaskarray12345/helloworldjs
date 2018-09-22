Demonstration of how Angular keeps track of 
all mouse events without adding events to 
EventListening Handlers like in Javascript.

Event Directives
|-------------------------------------|
|                                     |   <---Whatever mouse is doing, cannot be hidden.
|                                     |       It is all recorded.
|                                     |
|                                     |
|                                     |
|                                     |
|                                     |
|                                     |
|                                     |
|                                     |
|                                     |
|-------------------------------------|
Mouse State: Left   <-- can be Left, Entered, Clicked, Down, Up
Mouse Position Info: { "clientX": 210, "clientY": 99, "screenX": 210, "screenY": 201 } <--- notice it is in JSON
Last Click Info: {"clientX": 104, "clientY": 176, "screenX": 104, "screenY": 278}