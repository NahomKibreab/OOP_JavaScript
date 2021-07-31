class Pizza {
  constructor() {
    this.topping = ["cheese"];
  }

  addTopping(topping) {
    this.topping.push(topping);
    return this.topping;
  }

  removeTopping(topping) {
    this.topping.splice(this.topping.indexOf(topping), 1);
  }

  set size(size) {
    if (size === "s" || size === "m" || size === "l") {
      this._size = size;
    }
  }

  get size() {
    return this._size;
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.topping.length * toppingPrice;
  }
}
const pizza = new Pizza();
pizza.size = "s";

pizza.addTopping("more cheese");
pizza.size = "m";
console.log(pizza.size);
