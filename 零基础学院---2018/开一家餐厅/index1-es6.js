class restaurant{
  constructor(money, sitNum, staffList){
    this.money = money
    this.sitNum = sitNum
    this.staffList = staffList
  }
  recruit() {

  }
  fire() {

  }
}

class staff {
  constructor(id, name, salary) {
    this.id = id
    this.name = name
    this.salary = salary
  }
  finishOnceWork(){

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
