---
title: "Self Updating Code"
date: "2021-06-25"
banner: "./images/banner.jpg"
---

Can you write code that updates itself?  Apparently, yes!
Will this artical be useful? Probaby not... But I wanted to start this blog off with something
fun and interesting.

## The gist:

We'll start with a program who's initial `num` is 0.  Everytime the file is run we'll log the current `num`, then increment it by one.
So the next time it's run, it should be one value bigger.

If you don't want to read the entire post, here's the final product:
```python
num = 0
file_name = 'update-self.py'

def update_self(line):
    sep = ' = '
    assignment = line.split(sep)
    next_val = int(assignment[1]) + 1
    assignment[1] = str(next_val)
    updated = sep.join(assignment)
    return updated

def main():
    print(f'num: {num}')

    with open(file_name) as in_file:
        data = in_file.read()
    
    lines = data.split('\n')
    with open(file_name, 'w') as out_file:
        for index, line in enumerate(lines):
            if(index == 0):
                out_file.write(update_self(line))
            else:
                out_file.write(line)
            
            if(index < len(lines) - 1): # add newline except at the end
                out_file.write('\n')

if __name__ == '__main__':
    main()
```

If you'd like to go step by step on how I wrote this, then follow along!
Diving in, first, we need some tried and true python starter code
```python
def main:
  pass

if __name__ == '__main__':
  main()
```

Alrighty, now for some more easy-ness.  Let's create the variable we will update, and print it to the console.
```python
num = 0
def main:
  print(f'num: {num}')

if __name__ == '__main__':
  main()
```

Now, for the more interesting part.  
What we need to do first is open the file that contains the code, save that text to a variable
```python
num = 0
file_name = 'update-self.py' # this should match whatever you save this file as

def main:
  print(f'num: {num}')

  with open(file_name) as in_file:
        data = in_file.read()

if __name__ == '__main__':
  main()
```

Next, let's write the same exact text back to the file, line by line. 
```python
num = 0
file_name = 'update-self.py' # this should match whatever you save this file as

def main:
  print(f'num: {num}')

  with open(file_name) as in_file:
        data = in_file.read()

  lines = data.split('\n')
  with open(file_name, 'w') as out_file:
    for line in line:
      out_file.write(line)

if __name__ == '__main__':
  main()
```

This was the most interesting part to me, that you could read from and write to the file that's being executed.
I really needed a second to take it all it's glory.
But, we want to make this a little more interesting.
```python
num = 0
file_name = 'update-self.py' # this should match whatever you save this file as

def update_self(line):
  pass # TODO

def main:
  print(f'num: {num}')

  with open(file_name) as in_file:
        data = in_file.read()

  
  with open(file_name, 'w') as out_file:
    for index, line in enumerate(lines):
      if(index == 0):
          out_file.write(update_self(line))
      else:
          out_file.write(line)

if __name__ == '__main__':
  main()
```

In the code above, we're reading the file line by line and writing the same text to file again, except for the first line.
The first line is intentionally the variable we're changing, because it makes this a bit easier. 
Now the only thing left to do is to increment our variable.

```python
def update_self(line):
  sep = ' = '
  assignment = line.split(sep)
  next_val = int(assignment[1]) + 1
  assignment[1] = str(next_val)
  updated = sep.join(assignment)
  return updated
```

The code above is simple once you step through it.
We take the first line of our file `num = 0` and separate it into `['num', '0']`.
Then, we take the item at index 1, the value, cast it to and int, and increment it.
After we increment it, we cast it back to a string and then join `['num', '1']`
back together as `num = 1`.

Voila!  Run the script a couple times and you should see the output increase each time.

# Thanks!

# Brian :)
