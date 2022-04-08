function productFib(prod){
  let fibValues = [0,1];
  let temp = fibValues[1];
  while(fibValues[0] * fibValues[1] < prod) {
    temp = fibValues[1];
    fibValues[1] = fibValues[0]+fibValues[1];
    fibValues[0] = temp;
  }
  return [fibValues[0], fibValues[1], fibValues[0] * fibValues[1] == prod];
}
