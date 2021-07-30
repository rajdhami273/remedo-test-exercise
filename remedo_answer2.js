class Sorting {
  constructor(array = []) {
    this.array = array;
  }
  sortArray(array) {
    if (!this.array) {
      return [];
    }
    if (!Array.isArray(this.array)) {
      throw "Argument provided is not an array!";
    }
    //   return array.sort();
    this.quicksort(this.array, 0, this.array.length - 1);
    return this.array;
  }
  quicksort(array, start, end) {
    if (start < end) {
      const partitionPoint = this.partition(array, start, end);
      this.quicksort(array, start, partitionPoint - 1);
      this.quicksort(array, partitionPoint + 1, end);
    }
  }
  partition(array, start, end) {
    let pivot = array[end];
    let i = start - 1;
    for (let j = start; j < end; j++) {
      if (array[j] < pivot) {
        i++;
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
    let temp = array[i + 1];
    array[i + 1] = array[end];
    array[end] = temp;
    return i + 1;
  }
}
const array = [3, 2, 8, 1, 3, 5, 7, 3, 4];
const sorting = new Sorting(array);
const answer = sorting.sortArray();
console.log(answer);
