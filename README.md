Airport Challenge Javascript
=================

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client.

```
As a pilot
So that I can arrive at my specified destination
I would like to land my plane at the appropriate airport

As a pilot
So that I can set off for my specified destination
I would like to be able to take off from the appropriate airport

As an air traffic controller
So that I can avoid collisions
I want to be able to prevent airplanes landing when the airport if full

As an air traffic controller
So that I can avoid accidents
I want to be able to prevent airplanes landing or taking off when the weather is stormy
```

Your task is to test drive the creation of a set of classes/modules to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to use a stub to override random weather to ensure consistent test behaviour. Finally, every plane must have a status indicating whether it's flying or landed. 

The existing tests in the spec folder, and base classes in the lib folder are provided merely as a general guide.  Please create more classes, unit and/or feature tests as appropriate.  The existing specs provide the layout of a set of pending unit tests. It is up to you to implement the tests and create additional tests as necessary.

For overriding random weather behaviour, please read the documentation to learn how to use test doubles. There’s an example of using a test double to test a die that’s relevant to testing random weather in the test.

As mentioned above the existing tests are there just for the inspiration if you need it. You don’t have to implement every single test there and you aren’t limited by the tests there either. Feel free to modify the tests as you see fit.

Please create separate files for every class, module and test suite. 

The submission will be judged on the following criteria:

* Tests pass
* Tests coverage is good
* The code is elegant: every class has a clear responsibility, methods are short etc.
 
BONUS
* Write a Jasmine **feature** test that lands and takes off a number of planes...
