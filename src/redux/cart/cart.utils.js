
export const addItem = (items, item) => {
  return items.find(i => i.id === item.id) ? 
    items.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i) :
    [...items, {...item, quantity: 1}]
}

export const removeItem = (items, item) => {
  const targetItem = items.find(i => i.id === item.id)
  if (targetItem) {
    return setItemQuantity(items, item, targetItem.quantity - 1)
  }
  return [...items]
}

export const removeItemFully = (items, item) => {
  return items.filter(i => i.id !== item.id)
}
export const setItemQuantity = (items, item, quantity) => {
  return items.find(i => i.id === item.id) ? 
    quantity <= 0 ? 
      items.filter(i => i.id !== item.id) : 
      items.map(i => i.id === item.id ? {...i, quantity} : i) :
    quantity > 0 ?
      [...items, {...item, quantity}] :
      [...items]
}
