describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
      //let arrSm = [3]
      let array = [0,2,8,4,0]
      let evenArr = [9,2,3,4,3,6,8,5]

      //expect(split(arrSm)).toEqual([[3]])
      expect(split(array)).toEqual([[ 0, 2 ],[ 8, 4, 0 ]])
      expect(split(evenArr)).toEqual([[ 9, 2, 3, 4 ],[ 3, 6, 8, 5 ]])
    });


  });


describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        let array = [[ 0, 2 ],[ 1, 4, 8]]
        let arr = [[2],[1]]

        expect(merge(array)).toEqual([ 0, 1, 2 , 4, 8 ])
        expect(merge(arr)).toEqual([ 1, 2 ])
    });
});


describe('MergeSort function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        let array = [0, 2 , 1, 4, 8, 9, 3, 6, 7, 5]
        let arr = [2, 1]

        expect(mergeSort(array)).toEqual([ 0, 1, 2 ,3, 4, 5, 6, 7, 8, 9])
        expect(mergeSort(arr)).toEqual([ 1, 2 ])
    });
});