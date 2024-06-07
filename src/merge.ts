export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
{
    // setup
    const mergedArray: number[] = [];
    let i = 0, j = collection_2.length - 1, k = 0;

    // loop until all indexes is out of bound
    while (i != collection_1.length || j != -1 || k != collection_3.length)
    {
        // set all three to highest value possible
        let a = 1000, b = 1000, c = 1000;
        // update abc if still have number left in their represent collection 
        if (i < collection_1.length) a = collection_1[i]
        if (j > -1) b = collection_2[j]
        if (k < collection_3.length) c = collection_3[k]

        // push smallest one to merged array and update index
        if (a <= b && a <= c) { mergedArray.push(a), i++ ;}
        else if (b <= a && b <= c) { mergedArray.push(b), j-- ;}
        else {mergedArray.push(c), k++ ;}
    }

    return mergedArray;
}
