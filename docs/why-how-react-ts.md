hi in this video we're going to be

learning about typescript why it's

useful how it's going to increase your

productivity and how to implement it in

your react projects first I want to

start with a couple of pros or

advantages of using typescript number

one the biggest one is interfaces this

is the main reason why I use typescript

interfaces are like sort of some sort of

types there are not exactly types but

there you can you might as well consider

them types they let us tell our code

what types that we expect from our

objects and what their properties should

be so it gives us some sort of like

predictability to our code and protects

us from some errors and gives us the

ability to work with different libraries

as long as we specify way we expect so

for example if I would tell a react

component look I'm expecting in my props

to have a property age that's a number

if we don't pass this property it's

gonna complain and if we wanna pass an

age value of John Doe it's gonna be like

no that's not a number so it kind of

protects us from the little mistakes we

can make number two is additive support

this is a big one for especially for

beginners and the intellisense and the

autocomplete can be really useful at

times let's say you had a massive

interface and your interface had let's

say it's called user and it had age

number I don't know age name address and

you can just say when you're creating as

something of type user you can just hit

control space and it will tell you all

you're expecting a number and you

expecting rather an age and address all

this stuff so it's really cool the

autocomplete can be useful number three

is it's a JavaScript superset if you've

read anything about typescript you would

have heard about people referring to it

as a JavaScript superset because that's

what it is

you're essentially just writing

JavaScript plus some other stuff which

is really cool what's cool about it you

can just write JavaScript the way you

did it and add some things on the top of

course we have static type checking now

javascript is dynamically typed even

though under the hood really in

JavaScript there are types but they're

just not enforced in the language itself

but in typescript

in a lot of cases you would you have to

specify your types to protect yourself

against certain runtime errors now I

have to mention a couple of not

disadvantages necessarily but I would

say these are situational cons number

one is extra code you have to write some

extra code when you're typing typescript

and that can be a bit of a hassle at the

beginning and you can you have to

specify types you have to add some code

for your react components for you have

to write some interfaces for your props

and state it can be a bit of a hassle at

the beginning number two is that it's it

could be unnecessary for small projects

to be honest if you have like a small

project in and you have just a couple of

components and you know the type of data

that you're handling then it's I don't

think it's it's necessary the typescript

is labeled as the JavaScript scales and

it's made for bigger applications and it

can be a bit annoying to get into

because at the beginning you don't know

what the types of some of the variables

or objects that you're using you have to

Google sometimes some types and you have

to install some types libraries to run

certain frameworks alright enough of the

theory so let's start actually

implementing it with a react I'm

assuming you already have no J's

installed to use NPM and create react up

as well if not go ahead and install

those and let's go here on the desktop

and I'm gonna open up a terminal window

I'm gonna say create - react - up I'm

gonna call it TS react and here we need

to add the flag typescript so - -

typescript which will now scaffold this

as a typescript react application by

installing the normal react dependencies

+ installing the typescript types and

I'll be back once this is done

okay now that it's done installing we

can just close this and open this

yes code and off the go we get this TS

config file which specifies a couple of

things for the linter for the typescript

linter and and this config file has gone

so much better in the recent months it

used to be much more strict and you can

edit this to your level of strictness

that you want you can google typescript

linter and TS config and customize it

however you want I'm gonna leave it as

this for now if you can see in the

package.json we have their usual

dependencies plus these types now you're

gonna come across across a lot of types

using typescript because whenever you

use the library you need to go along and

install the types if it's not written

already in typescript so let's go to our

source folder and as you see here our

unusual files are now PSX instead of

javascript which just changes the way

the editor you know intelligence is them

I'm gonna remove this logo because we're

not gonna use it I'm gonna remove all of

this inside the app I'm gonna use a

component and what I want to do for this

is just a simple search thing if you

look at the poky API we just used this

URL this endpoint or base URL and we add

slash Pokemon slash the name of the

pokemon we want I'm gonna get a bunch of

data like you can go to postman here

I've already searched for Bulbasaur and

what I'm interested in is abilities and

base experience and of course you can

extend it how are you much you want one

as well get the picture of of this

Pokemon and I think this is in sprites

yeah so sprites here if you look at

front default if I click on this it

gives me a picture of Bulbasaur so I'm

gonna try to extract these four things

and show them on the app alright so here

I'm gonna put a component which we

haven't created yet I'm gonna call it

pokemons search

and off the go it's already with the red

squiggly saying we can't find it in

JavaScript it wouldn't complain until

you run but here it complains because

this doesn't exist actually so let's

remove this logo and let's say import

Pokemon search from I'm gonna put this

in components components yeah we haven't

created that folder yet slash Pokemon

search let's create a folder called

components and here we'll create pokemon

pokemon search dot TSX all right we can

still use the normal type script or

react snippet so RCE is gonna create a

class based component and here i want to

get some details about whoever's using

this so I want to get their name and how

many pokemons they have and we can pass

these from here so but how we gonna pass

them as props but in typescript we need

to specify the type of props so here if

I hover over component it tells me that

I can give the type of the props and the

state so the P and s so here I can do

like this and I can say that the type of

my props will have a name and it's gonna

be a string and then a number of

pokemons which is gonna be a number so

now I can go here and here there's

already a red line saying like oh you

didn't give what this component is

expecting so here I can I need to say

name and let's say this is John Doe and

the number and this is cool it already

suggests s' what we need which is really

cool I can just press ENTER and here

let's say John has five pokemons and now

all those red lines go away and now I

can actually compile and run my app so

let's for an NPM start

it runs without any problems and

actually we're not doing anything with

these props yet so let's let's actually

do that I'm gonna put this live back to

what it was and here I'm gonna have a

paragraph saying user I'm gonna use the

props so let's actually extract first

those properties so I need these

structure them so say constant name and

number of pokemons and they're already

suggested for me and we're gonna get

them from this top props and here we

will say user and concatenate the name

and here we can say has and concatenate

number of pokemons and say pokemons

let's save and let's go to our app go as

user John Doe has five pokemons which is

the data that we gave now let's say we

don't wanna like maybe user has no

pokemons and doesn't give us like a

number so we can actually make this so

right here this we can make it optional

and we can as well change this let's say

we need this type of props and other

components we can make this more modular

by by putting the interface here or

actually just having in a folder on its

own so we can use there in other

components so let's create a folder

called interfaces and I like to use so

let's call this user I like to use this

convention by adding the extension

interface so interface so user interface

dot TS and here I just want to export

the interfaces export the fault

oops default interface and this is the

user and here we're gonna have a name so

the same as we did name of that's a

string and here we will have the number

of pokemons which is a number now we can

make this optional by adding a question

mark here so here what we we cannot

chillie just admit this and not have a

number of pokemons and it's still gonna

be fine

actually yeah actually I need to bring

this in first so here let's say import

user from I go back one level to

interface this slash user dot interface

and here we can just say that the props

are of type user like this and now this

wouldn't complain that we emitted the

number of pokemons because it's optional

and here we can do so let's just take

all of this and cut it or like all of

this and we can check so because if we

don't have them it's gonna be null what

we need to do we can say number of

pokemons oops number of pokemons

so if this exists then we can just

return this and actually we can need to

wrap it in a span it's not spawn span

and put all of this so if we have a

number of pokemons we show we show that

if not we don't so let's save all files

and here it just says user John Doe and

if I go back and add the number of

pokemons it will say has five pokemons

cool so let's not add a an input field

where we can search for a Pokemon and

see results so let's go to our Pokemon

search and under this paragraph I'm

gonna put an input of type text and I'm

gonna I'm not gonna use the controlled

component I'm gonna use the reference

instead to find this input and submit

the data so the reference will be this

dot it's called a Pokemon reference ref

like this it's gonna complain because

this variable doesn't exist yet

and here we're gonna have a button it's

gonna have an on click and let's call

this this dot on search click and let's

give it a class so we can style it my

button

and here we'll say search let's go to

the app CSS

I just want to override the we don't

need these actually and the logo stuff I

just want to override the basic button

style so here I'm gonna say dot my

button I'm just gonna give it some

border so one pixel solid just I'm just

gonna say blue and just give it a

background or is it back ground of a

background color rather of just white

alright let's go back to the component

now we need to create this on search

click and we need to initialize this

pokemon reference so am I gonna say

Pokemon Pokemon ref and to give it a

type so this will be the react dot

reference object this is gonna be of

type HTML HTML input oops

input element and don't freak out I

don't just know this you can go Google

all your reference types and stuff like

this and initialize them here it says

property Pokemon ref has no initializer

yeah so we need to actually initialize

we can't just leave it just declared

like that so in the constructor

constructor so let's have a constructor

and this will take a props and our props

are of type user and inside the

constructor a constructor which is gonna

call super props and here we need to

initialize our pokemon reference so this

top pokemon reference and we need to say

it's a react squad react or create

reference and now this will initialize

it as a react a reference and now we

need to have some states because we need

to store some variables after we search

for a Pokemon so let's say this that's

oops dot state equals and here we're

gonna have the details that we need from

the Pokemon search so like the name of

the Pokemon and we're gonna initialize

this to to be empty we're also gonna get

the number of abilities number of

abilities I'm gonna set this to

initially to be null and the base

experience set this to null initially

and we're gonna need the image URL or

call it image URL is the the front

sprite thing which is gonna be is

actually not at the type an empty string

and we need to actually give the state a

type so here here we're gonna create

another interface let's call this

interface let's call a search state and

this will have the name which is oops

it's gonna be a string it's gonna have

the number of abilities which it's gonna

be a number I'm gonna have the base

experience which is gonna be a number

and we're gonna have the image URL which

is gonna be a string as well and here we

just had a Conner and we say search

state ok says null is not assignable to

type number let's just assign them 0 for

now doesn't doesn't really matter here

we need to create this on search click

so let's create that so on search click

it's not gonna take anything and it's

gonna so we need to get the value that's

inside of the input so we have a

reference to it we can say Const input

value equals this dot pokemon reference

the current value and this is just react

stuff here it complains it says object

is possible

Knowle okay so I I know the get around

around this this is a TS length problem

we can just add a key here saying what

is it

strict strict

yeah strict null checks this makes sure

that we don't have any value that could

be null

we can just set this to false because in

our state we don't have any way of

knowing so we could just set it to false

and this should be gone

actually I misspelled it here it's a

lowercase u okay that warning is gone

now so we can actually carry on so here

we can now send the request to our API

to the API endpoint so I'm gonna use the

fetch method which is just JavaScript

and do back back back ticks to have a

template string and say HTTP slash a I'm

just gonna copy it from postman so it's

this endpoint and here we need to

concatenate the what we input it so here

with the dollar sign curly braces input

value and here we say then I'm gonna

have a result and here the way fetch

works is that if we don't have a

successful result it doesn't go to the

catch so we need to do to have a check

for it we will do if result dot status

there's not equal 200 then we just set

so we just do this dot set state and we

need to set an error so set error to

true and actually we need to add this

error property so here for our state

we're gonna have we might have an error

so let's say error of type boolean and

we need to initialize it by default the

error is false

and here we set error to true we also

need to return now else if we don't have

an error we need to say rest on Jason

which as well return the promise when

you need to chain and then here and we

can chain it down here but it's going to

cause a problem if you don't have an

error is just gonna proceed and cause a

problem so we need to change the dot

then right here and here it's gonna

return us some data and inside of here

now if we have one we have the data we

need to bind it to the state data we

need to say this dot set state and here

we also need to set the earth to false

in case it was true and every we need to

set the name to data name and the number

of abilities to data dot abilities we

get an array of abilities so we access

the number of abilities by doing data

the abilities the length and we also

need the base experience

oops base experience and this will be

data dot base underscore experience and

this is in the API by the way if you

wondering where I'm getting this from

and we need the image URL which is going

to be data to pry up sprites dot what is

the front default yeah this is it

alright so now we need to show them in

our action in our markup so here we can

we need to distract them from the state

so see if we do the equals this state

and we go back here we do a control

space and we get actual autocomplete

which is called so we need the so we

need the error and we need the name the

number of abilities what else base

experience oops not base base experience

and the image URL is a problem with name

our because of course there's a conflict

in variables so this we can say we can

name it use a name like this and then

give username right here like that so

now we're gonna have a dynamic markup

here in case we have an error so here

let's say result markup and up here we

need to say we need to initialize let

result result markup and we can actually

leave it without a type here so it's

it's not the the it's not that strict

that it always requires us to specify

types

now here we we first check if we have an

error because if we only check if we

have one of these things then we might

have both so we check if we have an

error then we say result markup equals

just have a paragraph and we say Pokemon

not found please try again else I say

result markup equals and hey let's do it

div let's have an image and the source

of the image will be the image URL alt

will be let's just say Pokemon let's

give this a class name of Pokemon image

and I give this some styling and here

we'll have a paragraph or there's a

problem here oh it's because I didn't

close the string oops

alright so here in the paragraph we need

to say name of the Pokemon has and

concatenate the number of the abilities

so number of abilities and say ability

is

and we need to say the base experience

sell and base experience and say base

experience points all right I want to

style the image just gonna give it some

margin so here let's say I am G Pokemon

image give it a margin top of 20 pixels

and a margin bottom of 10 pixels

alright let's save all files and let's

see what this looks like

okay so we already get this oh it's

because we already have some details

like some initialized details or what we

need to do actually we need to

encapsulate all of these in a certain

type as well so what's cool about this

we can we can as well nest interfaces so

here we can say interface Pokemon so

this is what a Pokemon would have and it

would have these properties right here

so we can just cut them and paste them

here and our state will have a Pokemon

of type Pokemon like this and here we

instead of putting this stuff here we

can just say our Pokemon is initially

null and when we get here when we get

the details we can cut all of these and

say Pokemon and give all these

properties and now we need to extract

these from Pokemon so here we can say

Pokemon and put all of these inside of

there and here what we need to do so if

error else if Pokemon or else if this

dot state dot Pokemon and now we

shouldn't get that day

cannot read property name of no sure

it's just let's just get the Pokemon and

then accesses properties so here we can

just add Pokemon at the start of all of

these so come on dot alright cool we go

we don't get that markup I don't know

what was that about

alright so now we can search for Pokemon

so let's say Pikachu of type search cool

we get the image and we get has our has

without an e has those abilities and if

we just type something in some nonsense

it should say Pokemon not found please

try again and if we try I don't know

some other pokemon snorlax if we type

search go we get Snorlax s image and the

number of abilities and everything so

what's cool about this is that if we

make a typo right here URLs it's gonna

flag it immediately we don't have that

on the type Pokemon which is cool so we

don't have to run and then run into

runtime errors and we can as well have

types for our functions guys so this

doesn't return anything but you can even

be more strict and say void like this

and what's cool is that you can create

some functions let's say or methods on a

create a method called add numbers and I

want this method to take two numbers and

add them so a type number and be of type

number and be not can't repeat an

argument so here we just say return a

plus B now we can strictly say we can

still here say return like hello world

which which is cool but if we say here

that it has to return a number it's

gonna complain now so we can make our

code more safe and more scalable by

having all these type safety mechanisms

implemented through our code so we can

scale up without having to worry about

these little weird

runtime errors and little mistakes

anyway you can expand the functionality

of typescript and make your project so

much more typesafe I guess and more

productive by having all this these cool

functionalities I think it's a cool

technology that everyone should learn

anyway thank you for watching I hope you

learned a lot if you like this video

like it if you didn't like anything if

you didn't like by the way this theme

that I created for myself tell me I'll

revert back to the classic dark plus

anyway thank you very much and I hope to

see you soon bye

