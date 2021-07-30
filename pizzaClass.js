class Pizza {
  constructor(crust, size) {
    this.topping = ["cheese"];
    this.crust = crust;
    this.size = size;
  }

  addTopping(topping) {
    this.topping.push(topping);
    return this.topping;
  }

  removeTopping(topping) {
    this.topping.splice(this.topping.indexOf(topping), 1);
  }
}
const pizza1 = new Pizza();
console.log(pizza1);
pizza1.removeTopping("more cheese");
console.log(pizza1.topping);
