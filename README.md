# JavaBuzz

# Introduction to Javascript (and Jasmine)

Javascript week is a very special time at Makers. For me it was the first time I wanted to throw things at the projector and scream ‘HERESY’. It was not my beloved Ruby, and I was not happy about it.

I felt strangely codeblind - unable to make sense of all the curly brackets, parenthesis, semicolons and the damn word ‘function’ here there and everywhere. My reaction was to fill my soul with a deep and passionate hatred of Javascript as a language, and anyone involved with it was the Devil. I was wrong.

Despite my incredible prejudice against Javascript I was unable to deny the cool things this ugly little duckling could do in a browser. It made my webpages shimmer and sparkle- and I knew I had to get over this.

The first step to recovery, was to implement our beloved friend Fizzbuzz in this [confusingly-named new language](http://www.quora.com/Why-is-JavaScript-called-Java) - although we are going to call it 'Javabuzz' in homage to our new friend Javascript. You should be familiar with FizzBuzz from your introduction to RSpec with Ruby. If that isn't the case, now might be a good time to find an adult.

## Testing with Jasmine

Jasmine is a testing framework built by the wonderful people over at [Pivotal labs](http://pivotallabs.com/). To get started, go to the [latest build page for Jasmine](https://github.com/pivotal/jasmine/releases) and download the most recent *standalone* version in a zip file. The version I will be using in this tutorial is [v2.0.2](https://github.com/pivotal/jasmine/releases/download/v2.0.2/jasmine-standalone-2.0.2.zip).

Once you have downloaded the .zip archive and unpacked it, open the 'SpecRunner.html' file in your browser as a sanity check.  It should look like this:

![Jasmine Sanity](../images/jquery-sanity-check.png)

This runs a suite of Jasmine tests on a demo Song project.  Feel free to inspect the files in the spec and src directories to see what's going on, but it might make a lot more sense if we work through creating our own project from scratch.

To use Jasmine in your own project create a new directory with the appropriate name, e.g. JavaBuzz and transfer over the lib directory intact, e.g. from your project dir

```sh
cp -r ~/Downloads/jasmine-standalone-2.0.2/lib .
```

Your file structure within your project directory should now look like this:

```sh
→ tree
.
└── lib
    └── jasmine-2.0.2
        ├── boot.js
        ├── console.js
        ├── jasmine-html.js
        ├── jasmine.css
        ├── jasmine.js
        └── jasmine_favicon.png

```

Now we need to create a test file, and a file for our code. Create a spec and a src directory and then let's touch a couple of files!

* spec/JavabuzzSpec.js
* src/Javabuzz.js

There's one last step before we can make sure our Jasmine setup is complete: copy over the SpecRunner.html to the root of our project directory.  SpecRunner.html includes the following code

```html
   <!-- include source files here... -->
  <script type="text/javascript" src="src/Player.js"></script>
  <script type="text/javascript" src="src/Song.js"></script>

  <!-- include spec files here... -->
  <script type="text/javascript" src="spec/SpecHelper.js"></script>
  <script type="text/javascript" src="spec/PlayerSpec.js"></script>
```

Which needs to be changed over to the following:

```html
   <!-- include source files here... -->
  <script type="text/javascript" src="src/Javabuzz.js"></script>

  <!-- include spec files here... -->
  <script type="text/javascript" src="spec/JavabuzzSpec.js"></script>

```

Our directory structure now looks like this:

```sh
→ tree
.
├── SpecRunner.html
├── lib
│   └── jasmine-2.0.2
│       ├── boot.js
│       ├── console.js
│       ├── jasmine-html.js
│       ├── jasmine.css
│       ├── jasmine.js
│       └── jasmine_favicon.png
├── spec
│   └── JavabuzzSpec.js
└── src
    └── Javabuzz.js

```

Now we need to start writing our tests. YAY TESTING! <3

The first thing to remember with Jasmine, is it lacks the 'context' method that RSpec provides for Ruby. But don't cry little ones - we can simply reuse the 'describe' method. At this point, we're going to zoom in to the creation of the describe method. Why? Because it's an excellent way to get used to building methods in Javascript - and it's also how you start a Jasmine test file :zap:

## The first rule of Javascript is...

**Close your brackets the _moment_ you open them.** No ifs, no buts. This is non-negotiable. Personally, I like to have auto-complete and auto-matching disabled in my editor (Sublime Text) so I have complete control over what appears in my code.

That aside, the one practice that turned Javascript from a chore to a joy for me was this one little habit. Open bracket, close it.

Why is this so important? Javascript has a lot of nesting, and with all those brackets, curly braces and semicolons flying around things can get confusing and quickly.

Just in case there is any confusion here, I am going to show a step-by-step example of how I would write a describe method in Javascript/Jasmine:

#### Step 1
Type the name of your method. In our case:
```javascript
describe
```

#### Step 2
Open and close parenthesis, and end the line with a semicolon. This creates the wrapper for your method:

```javascript
describe();
```
#### Step 3
Next, inside the parenthesis, open and close a pair of quote marks.

```javascript
describe('');
```

#### Step 4
Once you have your quote marks, put a comma afterwards to separate your arguments from the next part of the method definition:
```javascript
describe('',);
```
#### Step 5
Now we need to declare the body of our method. In Ruby, we would type 'do' and 'end' - but in javascript we use the dreaded 'function' keyword.

We are going to step outside of our describe method right now, and focus on 'function' as its own entity. The reason we will do this will become apparent in a short while.

##### Step 5a
```javascript
function
```
##### Step 5b
```javascript
function()
```
##### Step 5c
```javascript
function(){}
```
##### Step 5d
The space is just a good practice/convention:
```javascript
function() {}
```

Painful isn't it? I realise that this is laborious and a bit prescriptive - but this is honestly the best way to build a habit that will make your Javascript life so much more more comfortable.

Now to integrate our function syntax into our describe method.

#### Step 6
After that argument-separating comma, put your function syntax in, just how we learnt in step 5:

```javascript
describe('', function() {});
```
Then place your cursor in-between the curly braces, and press return:

```javascript
describe('', function() {
//method statements go here
});
```

If you can drill this and make it habit when you're typing your code, you will have less syntax errors, and it should also help your eyes navigate Javascript, and start to see the segments more easily.

## An aside on function(){}

Function has multiple uses in Javascript - and since we are Rubyists first and foremost, let's consider that this one keyword can be used to create versions of all the following in Ruby:

#### Ruby class creation of object factories becomes:
```javascript
class Classname {}
```
An intro to the class syntax can be found in the [js_classes pill](https://github.com/makersacademy/course/blob/master/pills/js_classes.md) in the Makers Course repository.

#### Ruby 'do ... end' blocks becomes:
```javascript
methodName(function() {
  // codeblock goes here
});
```
There are many use-cases for the keyword `function` in Javascript. If you would like more background reading, now would be an excellent time to peruse the [js_functions pill](https://github.com/makersacademy/course/blob/master/pills/js_functions.md) in the Makers Course repository.


#### Ruby 'def' definition of methods becomes:
```javascript
class Classname {
  methodName() {
  // codeblock goes here
  }
}
```





### Back to Javabuzz

So, we have our JavabuzzSpec.js file, looking all empty and yearning for meaning. Let's give it some purpose! Pop a describe method in there, and let's give it some context in-between those dang quote marks:

```javascript
describe('Javabuzz', function() {

});
```

#### Variable time

Now let's declare us a nice variable just inside that function block. Remember how function is used in place of Ruby's do/end?

```javascript
describe('Javabuzz', function() {

  var javabuzz;

});
```

Oooh, look - a new keyword! What does `var` do when it's at home? Well there's a really good explanation over on [Stack Overflow](http://stackoverflow.com/questions/1470488/what-is-the-function-of-the-var-keyword-and-when-to-use-it-or-omit-it) but let me summarise here in case you don't feel like leaving us right now.

Basically it's an issue of scope and clarity. `var` means that within a function, you are declaring a **local variable.** This means that in the example above, `var javabuzz` is available only between the nearest `{}`.

What happens if you don't specify `var`? Basically Javascript looks up the scope chain - that is to say, it looks in every parent function, until it finds the variable (in this case `javabuzz`). Once it hits the uppermost level, if it still can't find `javabuzz` it will create it for you - and because it has been created at the top level, it becomes a global variable, available to every function in the program, which is generally considered a 'bad thing'. It's bad because if other JavaScript libraries use the same name in the global variable space, your program will break, so use `var`!

#### Contextual healing

As I mentioned previously, Jasmine has no equivalent for Rspec's `context` block. While this is both sad and upsetting, it's by no means going to stop us writing meaningful tests. We can just nest another `describe` function in the place of context:

```javascript
describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

  });

});

```

However, it does support `it` - so let's put one of those in!

```javascript
describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {

    });

  });

});
```

Well alright, this is looking pretty good - don't you think? I'm excited. However, now we need to actually have an instance of Javabuzz to test against, so let's go ahead and create that in our `it` block:

```javascript
describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
    });

  });

});
```

Note that when we refer to `Javabuzz` when we are instantiating our version of the class - we MUST add the `();` at the end, like so:

```javascript
javabuzz = new Javabuzz();
```

This is non-negotiable and Javascript WILL be pedantic about it, so please for the sake of all that is good and holy, whenever referring to a class or method, put the bloody `();` after the name, or we'll never hear the end of it.

So close! All we need now is an expectation within our `it` block and we are an unstoppable testing machine:

```javascript
describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });

  });

});
```
#### Javascript Convention Centre

Now, being children of Makers, you should all be familiar with Fizzbuzz as a concept so I won't waste time re-explaining the wheel. However, it's worth mentioning a couple of points about the naming of our 'divisible by three' method.

Firstly you'll notice that instead of separating words using underscores a la Ruby, we are omitting spaces, and using uppercase letters to enforce the separation between words. **thisIsCalledCamelCase,** and it is a Javascript convention.

Secondly, you'll see that there is no `?` at the end of the method - which is something that we were able to do with Ruby. Unfortunately Javascript doesn't allow us this as a syntactic option, so to get around that Javascript developers have come up with _yet another_ convention: to put `is` at the beginning of methods which would usually end in `?` in Ruby. Got it? Great!

### Javascript Convention Centre

Now, if you head to your terminal application, and whilst in the home directory of your app type `open SpecRunner.html`, your default browser should open with the results of your very first (failing) Jasmine test. Ooooooooh! It'll be all red and angry, and should have the following error:

```bash
Javabuzz knows when a number is divisible by 3
ReferenceError: Javabuzz is not defined
```

This is Jasmine's very dramatic way of saying that it doesn't know what we mean when we refer to `Javabuzz();` on line 8(ish) of our spec file. Well you and I both know we meant the Javabuzz class, so let's head on over to **src/Javabuzz.js** and create the class now:

```javascript
class Javabuzz {}
```

Sweet, error message has been changed!

```bash
ReferenceError: isDivisibleByThree is not defined
```
### The Ties That Bind

Now we need to define the `isDivisibleByThree` method. Fun times.

```javascript
class Javabuzz {
  isDivisibleByThree(number) {
    return true;
  }
}
```

(I have hardcoded `return true` in the method for the sake of speeding this along, hopefully that makes sense.)

However, our test, is still failing, despite everything in our Fizzbuzz career telling us this should be enough to make that light go green. WTF???

Well, the problem lies in our spec file. Take a look at that expectation again:

```javascript
expect(isDivisibleByThree(3)).toBe(true);
```

Javascript needs us to be more specific. It needs to know exactly what `isDivisibleByThree(3)` refers to. So let's help it out. Since 'isDivisibleByThree' is a method of our javabuzz instance, let's do some Ruby-style dot notation:

```javascript
expect(javabuzz.isDivisibleByThree(3)).toBe(true);
```

Now there can be no doubt that we mean **this particular method** belongs to **that particular class!**

Refresh your browser, and SpecRunner.html should be a very happy Bunny. But all y'all Fizzbuzzers out there should know that a hard-coded `true` just isn't going to cut the mustard. We need something a bit more robust. Time for a counter test! Remembering that we have no `context`, set up another `describe` method on the same level as the one with the label 'knows when a number is', and do as your training has taught you:

```javascript
describe('knows when a number is NOT', function() {

  it('divisible by 3', function() {
    javabuzz = new Javabuzz();
    expect(javabuzz.isDivisibleByThree(1)).toBe(false);
  });

});
```

This second test should be upsetting the balance of your greenery, and rightly so. Shame on you for hardcoding a value just to pass a test (just kidding!) However, we do need to fix that pronto. To our **Javabuzz.js** file!

```javascript
class Javabuzz {
  isDivisibleByThree(number) {
    return (number % 3 === 0);
  }
}
```

And with that, all your tests should be passing. Glorious, isn't it? This shouldn't be too surprising given your black belt in the Ruby version of Fizzbuzz, but I will take a moment to point out a couple of things here. Firstly, the parenthesis around our logic isn't strictly necessary. But it does make the statement look neater, so I'm keeping it in.

The second thing to be aware of, is the `return` keyword. That one's a deal-breaker and it's essential that we use it - notice how much more specific we need to be with Javascript over Ruby?

Given that by now, we all know our Fizz from our Buzz, we'll leave it up to you to create the rest of the tests. By the time you are finished the spec file should have 6 tests (2 tests for each method to make sure a number IS divisible by n, and NOT divisible by n).

You may find you have a lot of repetition in the spec file - namely the instantiation of our Javabuzz class in each `it` statement. Remember the `let` syntax in Ruby? Jasmine affords us the same luxury! Just after we declare `var javabuzz` at the top level of our spec file, add the following:

```javascript
 beforeEach(function() {
    javabuzz = new Javabuzz();
  });
```

Now you can get rid of each line containing `javabuzz = new Javabuzz();`. Joy unparalleled.

Since we're in a refactory kind of mood, let's see if we can make our code more elegant. The following should make sense given our previous Rubybuzz pedigree:

```javascript
class Javabuzz {
  ...
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }
}
```

#### Private Dancer

Notice that I have added an underscore to my method name? This is how we communicate to other Javascript developers that the following method is considered a private method - one that should only be available within the class.

Now let's implement it (in one method first, to make sure everything is hunky dory:

```javascript
class Javabuzz {
  ...
  isDivisibleByFifteen(number) {
    return _isDivisibleBy(number, 15);
  }
}
```

Oh no! Our tests fail! Does anyone know why? BECAUSE WE ARE NOT BEING SPECIFIC ENOUGH!!! Javascript really does need you to go the extra mile. I know, I know - but it is worth it.

#### this.

We need to tell Javascript that `_isDivisibleBy();` belongs to the Javabuzz class. Now, since we are inside a method definition that is already bound to that class, all we have to do is add `this.` to the beginning of our method, and all our problems go away:

```javascript
class Javabuzz {
  ...
  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }
}
```

Let's adjust the rest of our methods accordingly, and move on. Now, we have all of the numerical operations we could need to play Javabuzz, so now let's create our game method. First, as always, a wee test:

```javascript
describe('when playing, says', function() {

  it('"Java" when a number is divisible by 3', function() {
    expect(javabuzz.says(3)).toEqual("Java");
  });

});
```

Dang, we're back in the red. How do we fix it? Oh yeah, we need to add a new method to our Javabuzz class.

```javascript
class Javabuzz {
  ...
  says(number) {
    if (this.isDivisibleByThree(number)) {
      return "Java";
    }
  }
}
```

There shouldn't be too many surprises here at this point. Things to note:
* `if` statement conditions need to be wrapped in parenthesis
* `says` method name - just makes sense to me. Feel free to use whatever name works for you.

Now this works like a charm for me, so I'm going to write the rest of my tests, to make sure I get "Java" for 3, "Buzz" for 5 and "Javabuzz" for 15, as well as returning the original number if it is not divisible by 3, 5 or both.

Almost there - all we need to do now, is a straight conversion of what worked for us in Ruby. We can repeat the `if` statements, as long as we remember to lead with the `isDivisibleByFifteen` method - and not forgetting to `return number` if all else fails:

```javascript
class Javabuzz {
  ...
  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "Javabuzz";
    }
    if (this.isDivisibleByThree(number)) {
      return "Java";
    }
    if (this.isDivisibleByFive(number)) {
       return "Buzz";
    }
    return number;
  }
}
```

Wheee! All our tests pass. Rejoice! No, seriously, go celebrate. Do something nice for yourself. If you want to test your game, go to your browser, and in the same window where your SpecRunner.html is loaded up, open your console (Google Chrome shortcut is cmd + option + i) and at the prompt intitialise an instance of Javabuzz(); as you did in your spec file:

```javascript
var javabuzz = new Javabuzz();
```

and then throw some numbers at it:

```javascript
>  javabuzz.says(3)
<- "Java"

>  javabuzz.says(5)
<- "Buzz"

>  javabuzz.says(15)
<- "Javabuzz"

>  javabuzz.says(1)
<- 1
```

Here endeth the lesson. Hope you had as much fun as I did - enjoy Javascript and go make something cool! <3

### Related Pills

* [js_functions pill](js_functions.md)
* [js_arrays pill](js_arrays.md)
* [js_conventions pill](js_conventions.md)
* [jQuery events pill](jquery_events.md)

### External Resources

In addition to the 5 JavaScript and jQuery pills we have supplied for you in the course materials, you will also find the following external resources helpful:

* [Codecademy - Javascript Track](http://www.codecademy.com/tracks/javascript) - They also have a jQuery track that is worth working through.
* [JavaScript for Cats](http://jsforcats.com/) - An introduction for new Programmers.
* [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript) - An Awesome repository of JavaScript resources.

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=course&prefill_File=pills/javascript&JasminePill.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=course&prefill_File=pills/javascript&JasminePill.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=course&prefill_File=pills/javascript&JasminePill.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=course&prefill_File=pills/javascript&JasminePill.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=course&prefill_File=pills/javascript&JasminePill.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
