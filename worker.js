postMessage('worker进程')
self.onmessage = (data) => {
    console.error(data)
}
// importScripts(worker, worker2)