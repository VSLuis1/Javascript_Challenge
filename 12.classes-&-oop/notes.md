#1-Does Javascript has the concept of classes?
-> No, it does not. Javascript is a prototype based language. It does not have the concept of classes. It has the concept of objects.

#2-What is a prototype?
-> A prototype is a working object instance. Objects inherit directly from other objects.

#3-What is a constructor?
-> A constructor is a function that creates an instance of a class which is typically called an “object”. In JavaScript, a constructor gets called when you declare an object using the new keyword.

#4-What is the difference between a constructor and a method?
-> A constructor is a special type of method that is used to initialize the object. The constructor is invoked at the time of object creation. It constructs the values i.e. provides data for the object that is why it is known as constructor. The method is a function that is used to perform some operations on the data provided to the constructor.

#5-What is the difference between a class and an object?
-> A class is a template for objects. A class defines object properties including a valid range of values, and a default value. A class also describes object behavior. An object is a member or an “instance” of a class.


<!-- Syntax for declaring classes in Javascript -->
#6-What is the syntax for declaring a class in Javascript?
-> class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
    ...
}

#parts of oop in javascript
- Objects literals
- constructor functions
- classes
- protoypes
- instances (this & new)

#Four pillars of OOPs
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

#Encapsulation
- Encapsulation is the process of combining data and functions into a single unit called class. In Encapsulation, the data is not accessed directly; it is accessed through the functions present inside the class. In simpler words, attributes of the class are kept private and public getter and setter methods are provided to manipulate these attributes. Thus, encapsulation makes the concept of data hiding possible.

#Abstraction
- Abstraction is selecting data from a larger pool to show only relevant details of the object to the user. It helps in reducing programming complexity and efforts. It is one of the most important concepts of OOPs. Hiding internal details and describing things in simple terms is abstraction. For example, a method that adds two integers. We know that the addition of two integers is simple but we don’t know how this method will behave in background. It is abstraction that helps us in hiding these unnecessary details from the user.

#Inheritance
- Inheritance is a feature of object-oriented programming that allows code reusability when a class extends another class; it inherits all the methods and properties defined in the parent class. Inheritance provides code reusability, makes it easier to create and maintain an application. The class from which we are inheriting is called Parent or Super or Base class and the class that is inherited is called Child or Sub or Derived class.

#Polymorphism
- Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object. Any Java object that can pass more than one IS-A test is considered to be polymorphic. In simpler words, polymorphism allows you to define one interface and have multiple implementations. The word “poly” means many and “morphs” means forms, So it means many forms.



