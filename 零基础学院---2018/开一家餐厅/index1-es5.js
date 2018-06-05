function restaurant(money, sitNum, staffList) {
  this.money = money
  this.sitNum = sitNum
  this.staffList = staffList
  this.recruit = function () {

  }
  this.fire = function() {

  }
}

function staff(id, name, salary) {
  this.id = id
  this.name = name
  this.salary = salary
  this.finishOnceWork = function() {

  }
}

function servicer(){
  staff.call(this)
  this.finishOnceWork = function() {
    if (Object.prototype.toString.call(o)=='[object Array]') {
      alert('记录客人点菜')
    } else {
      alert('上菜行为')
    }
  }
}

function cooker(){
  staff.call(this)
  this.finishOnceWork = function() {
    alert('烹饪出菜品')
  }
}

function customer() {
  this.order = function() {
    alert('点菜')
  }
  this.eat = function() {
    alert('吃')
  }
}

function foodType(name, cost, price) {
  this.name = name
  this.cost = cost
  this.price = price
}
