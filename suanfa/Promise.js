// const aa = new Promise((r, j) => {
//   setTimeout(() => {
//     Math.random() > 0.5 ? r('success') : j(new Error)
//   }, 3000);
// })


// aa.then(() => {
//   console.log('then')
// }).catch(() => {
//   console.log('catch');
// }).then(() => {
//   console.log('then2');
// })



// javascript实现一个带并发限制的异步调度器，保证同时最多运行2个任务
class Scheduler {
  constructor() {
    this.task = [];
    this.curringRuning = 0;
  }
  add (promiseCreator) {
    return new Promise((resolve, reject) => {
      this.task.push(() => { return promiseCreator().then(resolve, reject) })
      if (this.curringRuning < 2) { this.doTask() }
    })
  }
  //  todo
  doTask () {
    const task = this.task.shift()
    if (!task) return
    this.curringRuning++
    task().then(() => {
      console.log('--');
      this.curringRuning--
      this.doTask()
    })
  }
}
const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})
const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}
addTask(1000, '1');
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
//  output: 2 3 1 4