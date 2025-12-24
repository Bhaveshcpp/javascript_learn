//How event loop works //
// So a JS ENGINE contains a call stack and memory heap//
// Where a js browser contains this js engine with a WEB API (Consist of a dom api,set timeout or interval,fetch(),events,and register callback for the callback functions) along with a high priority promise queue and a task queue//
//wheneevr the call stack in jsengine becomes empty the callback function in the  High priority promise queue or  task queue go to the call stack and then the task is performed and this is done repeeately in the browser //
//promise queue have high priorty in comparison to task queue which causes condition of starvation sometimes //
  