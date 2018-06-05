function Restaurant(obj) {
  this.money = obj.money
  this.sitNum = obj.sitNum
  this.staffList = obj.staffList
  this.recruit = function (employess) {
    this.staffList.push(employess)
  }
  this.fire = function(employess) {
    let arr = this.staffList
    for (let i = 0; i < arr.length; i++) {
      if(employess === arr[i]){
        this.staffList.splice(i,1)
      }
    }
  }
}
let id = 1
function staff(name, salary) {
  this.id = id++
  this.name = name
  this.salary = salary
  this.finishOnceWork = function() {
    console.log("staff完成工作")
  }
}

function servicer(){
  staff.call(this, name, salary)
  this.finishOnceWork = function(o) {
    if (Object.prototype.toString.call(o)=='[object Array]') {
      alert('记录客人点菜')
    } else {
      alert('上菜行为')
    }
  }
}

function cooker(name, salary){
  staff.call(this, name, salary)
}

cooker.prototype.finishOnceWork = function () {
  alert('烹饪出菜品')
};

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
