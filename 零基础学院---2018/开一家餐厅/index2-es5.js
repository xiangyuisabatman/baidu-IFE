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

var ifeRestaurant = new Restaurant({
    money: 100,
    sitNum: 1,
    staffList: []
});

let id = 1
function staff(name, salary) {
  this.id = id++
  this.name = name
  this.salary = salary
  this.finishOnceWork = function() {
    console.log("staff完成工作")
  }
}

var servicer = function(name, salary){
  let instance = null;
  staff.call(this, name, salary)
  this.finishOnceWork = function(customer) {
    console.log('您好,这是菜单请问您吃点什么')
    for (var i in menuList) {
        console.log(menuList[i])
    }
    let orderedMenuList= []
    let randomMenu = Math.floor(Math.random() * 4)
    orderedMenuList.push(menuList[randomMenu])
    console.log( '顾客' + customer.name + '   点了: ')
    console.log(orderedMenuList[0])
    newCook.finishOnceWork(orderedMenuList[0])
  }
  this.serving = function() {
    console.log('上菜, 您好这是您的菜')
    newCustomer.eat()
  }
  instance = this;
  Waiter = function(){
    return instance;
  }
}
var newServicer = new servicer('Tom', 2000)
ifeRestaurant.recruit(newServicer);

var cooker = function(name, salary) {
  let instance = null;
  staff.call(this, name, salary)
  this.finishOnceWork = function(o) {
      console.log('开始做菜: ' + o.name)
      newCook.finishCook()
  }
  this.finishCook = function() {
      console.log('菜品完成')
      newServicer.serving()
  }
  instance = this;
  Waiter = function(){
    return instance;
  }
}
var newCook = new cooker("Tony", 10000);
ifeRestaurant.recruit(newCook);

function customer(name) {
  this.name = name
  this.eat = function() {
    console.log('用餐结束')
  }
}
customer.prototype.order = function(o){
  console.log('顾客' + o.name + '入座')
  console.log('顾客'+ o.name + '点菜')
  newServicer.finishOnceWork(o)
}

function foodType(args) {
  let arg = args || {}
  this.name = arg.name
  this.price = arg.price
}

var menuList = (function(){
  let menuName = ['锅包肉', '溜肉段', '小鸡炖蘑菇', '东北大拉皮']
  let menuPrice = [10, 20, 21, 12]
  let menuListArr = []
  for (var i = 0; i < menuName.length; i++) {
    let food = new foodType({name: menuName[i], price: menuPrice[i]})
    menuListArr.push(food)
  }
  return menuListArr
})()

var customerList = (function(){
  let arrList = []
  for (var i = 0; i < 2; i++) {
    var c = new customer('Jack'+ i)
    arrList.push(c)
  }
  return arrList
})()

var newCustomer = new customer()
for (var i = 0; i < customerList.length; i++) {
  newCustomer.order(customerList[i])
}
