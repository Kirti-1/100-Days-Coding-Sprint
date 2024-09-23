STL
Standard template library 
- It provides you with ample amount of functionality, so you dont have to write the same code again and again.
- STL has four major components
* Algorithms
* Containers
* Iterators
* Functions

Algorithm - generaly used algorithms, encapsulated at one place.
Containers - queues, stacks, vectors, set, map (Data structure)
Iterators - sort of smart pointers that will help you iterate on this containers
Functions - custom function that will help you in some sort of way to directly apply onto the containers.


Advantages of STL : 
- Helps in code fast.
- Increase readability of code
- Good documentation of STL
- Using STL is very easy.



## Vectors in STL

arrays - fixed containers - need to define the size at run time. - meaning size would be fixed at run time.

int arr[10]; - all of them would be initialized to some garbage value.

- what if you dont want to put any constraint onto the array, like no upper bound? How can we make it dynamic?
* Answer would be vectors

vector<int> arr_vec;
vector<int> arr_vec_size(10); - all of them would be initialized to zero.

we can also initialize them to some arbitary value, in case required.(lets initialize it to i.e 5)
vector<int> arr_vec_size_arb(10, 5);

what about 2d array? 

2d vector, n vectors of size m each.
vector<vector<int>> vec_2d(n, vector<int>(m))


associated functions to vector
vector<int> vec(3);
vec[0] = 1;
vec[1] = 2;
vec[2] = 3;


vec.front(); //1
vec.back(); //3
vec.empty(); //false
vec.push_back(4); // vec = {1,2,3,4};
vec.pop_back(); //4
vec.clear(); //vec = {};












