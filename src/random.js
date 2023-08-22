
/** Picks a random item in an array
 * And returns it
*/

function random(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

export default random