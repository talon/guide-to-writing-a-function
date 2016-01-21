# Guide to Writing a Function

- It should return something.
- It should be pure.
- It should do one thing.



# It should return something

In JavaScript a function always returns but you should be explicit about
what you want it to return.


```js 
function add (x, y) {
  x + y
}
```
> What does this return? How would you fix this function?



# It should be pure

A pure function returns the same thing everytime it is called with the
same arguments


```js
function add (x, y) {
  return x + y + Math.random()
}
```
> Can you see why this might be frustrating?


```js
function getUsers () {
  return Users.getAll()
}
```
> Can you see why _this_ might be frustrating?


Also I/O is impure. If you are changing the world with your function
you can't be so sure that your program will run as intended.


```js
function log (x) {
  console.log(x)
  return x
}
```
> How might this ruin your life?


```js
var lastItem = readLastStdOut(log(printItems(items)))
```
> Holy strawman!


The point is you want to isolate all the gross parts of your program
so you know where the bugs will be.



# It should do one thing
 


```js
function add (x, y) {
  Users.find(1).update({
    name: 'Sally'
  }) 

  return x + y
}
```
> You should be cringing.


```js
function add (x, y) {
  console.log(x, '+', y, '=', x + y)
  return x + y
}
```
> These are two seperate things. Don't conflate purposes.



# Don't be so serious

But don't be a wimp either. These rules are almost always applicable. If
you think you need to break them you are probably wrong (aka: need to
write a new function). But break them if you must, it's okay!
