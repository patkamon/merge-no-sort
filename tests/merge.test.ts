import { merge } from '../src/merge';

test('merge sorted arrays correctly', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [9, 7, 4];
    const collection_3 = [2, 6, 8];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('handle empty arrays', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([]);
});

test('handle single element arrays', () => {
    const collection_1 = [1];
    const collection_2 = [2];
    const collection_3 = [3];

    const result = merge(collection_1, collection_2, collection_3);

    expect(result).toEqual([1, 2, 3]);
});
