/*
A. Primitive Data Types:-
    Data Type               Example                    Approximately Memory Usage
1.  Boolean                 true, false                 4 bytes
2.  Number                  33, 3.14, -0.5              8 bytes ( 64-bit float )
3.  String                  "abc"                       2 bytes per character (UTF-16 encoding)
4.  BigInt                  123n                        Varies ( depends on the size of the number ) minimun 16+ bytes
5.  Undefined               undefined                   4 bytes (engine dependent)
6.  Null                    null                        0 to 4 bytes (engine dependent)
7.  Symbol                  symbol('id')                varies (internally cached)

B. Non-Primitive Data Types:-
    Data Type               Example                    Approximately Memory Usage
1.  Object                  {key:'value'}                32 to 64 bytes plus properties
2.  Array                   [1, 2, 3]                    32 to 64 bytes plus element
3.  Function                function(){}                 varies greatly: includes closure context
4.  Map                     new Map()                    ~64 bytes plus key, value pair
5.  Date                    new Date()                   48 bytes
7. TypedArray	            new Uint8Array(10)	         1 byte per element for Uint8Array


*/

