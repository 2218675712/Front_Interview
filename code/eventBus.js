class EventBus {
    constructor() {
        this.eventData = {}
    }

    on(eventName, fn) {
        if (!this.eventData[eventName]) {
            this.eventData[eventName] = []
        }
        this.eventData[eventName].push(fn)
    }

    off(eventName) {
        delete this.eventData[eventName]
    }

    emit(eventName, ...args) {
        if (this.eventData[eventName]) {
            this.eventData[eventName].forEach(i => {
                i(...args)
            })
        }
    }
}

const event = new EventBus()
const event2 = new EventBus()
event.on('click', (name) => {
    console.log('我是' + name)
})
event2.on('click', (name, age) => {
    console.log('我是' + name + '年龄' + age)
})
event.on('move', () => {
    console.log('移动了')
})
event.emit('click', '小明')
event2.emit('click', '小红', 16)
event.off('click')
