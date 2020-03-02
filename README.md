# node_next
notes of following node.js course Maximilian Schwarzmüller

## single threads, blocking
We have a thread handling events, registers all the callbacks
* event loop
check timers, pending callbacks, poll   
* the worker pool
handles file operations, or some other heavy liftings

