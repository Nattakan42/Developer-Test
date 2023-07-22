
module.exports = () => {
  const sequence = [3, 5, 9, 15];
  const difference = sequence[3] - sequence[2];
  const valueX = (difference + 2) + sequence[3]
  const valueY = (valueX - sequence[3])+ 2 + (valueX)
  const valueZ = (valueY - valueX)+ 2 + (valueY)
   const value = {
      valueX,
      valueY,
      valueZ
   }

   return value
};
