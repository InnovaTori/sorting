function bubbleSort(arr){

    for(let end = arr.length; end > 0; end--){
      for (let i = 0; i<end; i++){
        let current = arr[i]
        if(arr[i] > arr[i+1]){
            arr[i] = arr[i+1];
            arr[i+1] = current
        }
      }
    }

    console.log(arr)
    return arr;
}

bubbleSort([9,10,3,4,6,2,1,5,7,8])