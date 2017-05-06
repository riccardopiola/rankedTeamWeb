/**
 * @param {Array} the array to sort
 * @param {string} the key of the numerical parameter to sort by
 */
function sortDataForChart(dataArray, sortBy) {
  function compareFunction(a, b) {
    if (a[sortBy] < b[sortBy])
      return 1;
    else if (a[sortBy] > b[sortBy])
      return -1;
    else if (a[sortBy] === b[sortBy])
      return 0;
  }
  const sortedArray = dataArray.sort(compareFunction);
  return sortedArray;
}

export default sortDataForChart;