function split(arr) {
    const midLength = Math.floor(arr.length / 2)

    const first = arr.slice(0, midLength);
    const second = arr.slice(midLength)
    
    return[first, second]

}


function merge([first, second]) {
    let final = []

    let p1 = p2 = 0


    while((p1 < first.length) || (p2 < second.length)){
        
        if((first[p1] > second[p2])  || (p1 === first.length)){
            final.push(second[p2])
            p2++
        

        }else if((first[p1] < second[p2])  || (p2 === second.length)){

            final.push(first[p1])
            p1++

        }
    }

    return final;
}



function mergeSort(arr) {

    let first = []
    let second = []

    
    if(arr.length === 1 ){
        return arr
    }else {
        [first, second] = split(arr);

        let firstSort = mergeSort(first)
        let secondSort = mergeSort(second)

        const temp = merge([firstSort, secondSort])

        return temp
    }

}