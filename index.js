const menu = [
  { name: "margaritta", price: 8 },
  { name: "peperroni", price: 20 },
  { name: "hawaiian", price: 10 },
  { name: "veggie", price: 30 },
  { name: "pizza", price: 50 }
];

function addmenu(item){
return menu.push(item)
}

function placeorder(order){
    menuItem = menu.item
   if (menuItem.name == order) {
    return menuItem
   }else {false }
    // const selectedOrder = menu.find(foodItem => foodItem.name===order)
    
}
console.log(menu.name)