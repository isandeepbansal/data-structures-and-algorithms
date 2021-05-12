# Arrays

Arrays sometimes called lists organises data sequentially that mean one after another in memory.

```js
var fruits = ["Grapes", "Mango", "Banana", "Apricots", "BlueBerries"];
```

| 0   | Apple       |
| --- | ----------- |
| 1   | Grapes      |
| 2   | Mango       |
| 3   | Banana      |
| 4   | Apricots    |
| 5   | Blueberries |

## Operations on arrays & Complexity

- `Lookup` O(1)
- `Push` O(1)
- `Insert` O(n)
- `Delete` O(n)

**`Insert` and `delete` operation are `O(n)` because when any element is inserted or deleted from array, array needs to rearrange itself.**

## Static vs Dynamic arrays

- **Static Arrays:** they are fixed in size i.e. you need to specify number of element your array will hold ahead of time.

- **Dynamic Arrays:** they are dynamic in size i.e. you don't need to specify number of element.
