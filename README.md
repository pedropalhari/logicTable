

# Running
> node index.js

# Examples
* Input
> \> (a . b) + (~ a . c)
* Output
```
----------------------------
| A | B | C | (A.B)+(~A.C) |
----------------------------
| 0 | 0 | 0 |       0      |
----------------------------
| 0 | 0 | 1 |       1      |
----------------------------
| 0 | 1 | 0 |       0      |
----------------------------
| 0 | 1 | 1 |       1      |
----------------------------
| 1 | 0 | 0 |       0      |
----------------------------
| 1 | 0 | 1 |       0      |
----------------------------
| 1 | 1 | 0 |       1      |
----------------------------
| 1 | 1 | 1 |       1      |
----------------------------
```

* Input 
> \> (A AND B) OR (NOT C AND B)
* Output
```
------------------------------------------
| A | B | C | (A AND B) OR (NOT C AND B) |
------------------------------------------
| 0 | 0 | 0 |              0             |
------------------------------------------
| 0 | 0 | 1 |              0             |
------------------------------------------
| 0 | 1 | 0 |              1             |
------------------------------------------
| 0 | 1 | 1 |              0             |
------------------------------------------
| 1 | 0 | 0 |              0             |
------------------------------------------
| 1 | 0 | 1 |              0             |
------------------------------------------
| 1 | 1 | 0 |              1             |
------------------------------------------
| 1 | 1 | 1 |              1             |
------------------------------------------
```

> README written with [StackEdit](https://stackedit.io/).
