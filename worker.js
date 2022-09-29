self.addEventListener('message', function (e) {
    var data = e.data
    var mesage = "Hello! I am " + data.name + "I am " + data.age + " years old"
    self.postMessage(message)
}, false)
