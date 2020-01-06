
export const mergeItem = (items, item) => {
  return items.find(i => i.id === item.id) ? 
    items.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i) :
    [...items, {...item, quantity: 1}]
}
