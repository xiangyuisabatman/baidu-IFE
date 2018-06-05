class Restaurant{
  constructor(obj){
    this.money = obj.money
    this.sitNum = obj.sitNum
    this.staffList = obj.staffList
  }
  recruit(employess) {
    this.staffList.push(employess)
  }
  fire(employess) {
    let arr = this.staffList
    for (let i = 0; i < arr.length; i++) {
      if(employess === arr[i]){
        this.staffList.splice(i,1)
      }
    }
  }
}
let id = 1
class staff {
  constructor(name, salary) {
    this.id = id++
    this.name = name
    this.salary = salary
  }
  finishOnceWork(){
    console.log("staff完成工作")
  }
}

class servicer extends staff {
  finishOnceWork(){
    super.finishOnceWork()
    if (Object.prototype.toString.call(o)=='[object Array]') {
      alert('记录客人点菜')
    } else {
      alert('上菜行为')
    }
  }
}

class cooker extends staff {
  finishOnceWork(o){
    super.finishOnceWork()
    alert('烹饪出菜品')
  }
}

class customer {
  order() {
    alert('点菜')
  }
  eat() {
    alert('吃')
  }
}

class foodType {
  constructor(name, cost, price) {
    this.name = name
    this.cost = cost
    this.price = price
  }
}
