# Zoo JS

We are building a zoo inside a computer.   
All animal **species** can talk to each other in a similar way. Specifically, they all implement a **speak** method, the output of which is the arbitrary input string interspersed with an "**animal sound**" that is particular to that type of animal.   

For example, the lion's speak function behaves like so:
```js
> lion.speak( "I'm a lion" );
< "I'm roar a roar lion roar"
```

The tiger's speak function behaves similarly but with a different sound:
```js
> tiger.speak( "Lions suck" );
< "Lions grrr suck grrr"
```

## Project Setup

* `npm ci`
* `npm test`
