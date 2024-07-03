const intersection = require('../Intersection');

describe('intersection', () => {
    test('debería devolver los elementos comunes en dos arreglos ordenados', () => {
        const arr1 = [1, 3, 5, 7, 10];
        const arr2 = [2, 3, 6, 8, 10, 20];
        expect(intersection(arr1, arr2)).toEqual([3, 10]);
    });

    test('debería devolver un arreglo vacío si no hay elementos comunes', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        expect(intersection(arr1, arr2)).toEqual([]);
    });

    test('debería manejar arreglos vacíos', () => {
        const arr1 = [];
        const arr2 = [1, 2, 3];
        expect(intersection(arr1, arr2)).toEqual([]);

        const arr3 = [1, 2, 3];
        const arr4 = [];
        expect(intersection(arr3, arr4)).toEqual([]);

        const arr5 = [];
        const arr6 = [];
        expect(intersection(arr5, arr6)).toEqual([]);
    });

    test('debería manejar arreglos con un solo elemento', () => {
        const arr1 = [1];
        const arr2 = [1];
        expect(intersection(arr1, arr2)).toEqual([1]);

        const arr3 = [1];
        const arr4 = [2];
        expect(intersection(arr3, arr4)).toEqual([]);
    });

    test('debería devolver los elementos comunes cuando hay duplicados en los arreglos de entrada', () => {
        const arr1 = [1, 1, 3, 3, 5, 7, 10, 10];
        const arr2 = [2, 3, 3, 6, 8, 10, 10, 20];

        expect(intersection(arr1, arr2)).toEqual([3, 10]);
    });
});

