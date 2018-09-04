---
title: Context Data
---

# Context Data 

Context data is data that is made available to your ~@TODOLINK @configuration-files', 'view templates') }} when they are rendered.

It is typically defined within a ~@TODOLINK @configuration-files', 'configuration file') }}, although documentation pages can opt to define it in in a ~@TODOLINK @docs#yaml-front-matter', 'YAML front-matter section') }} instead if desired.

Context data can consist of simple data types such strings, booleans, numbers, arrays and objects. It can also contain Promises (which will be resolved before context data is made available for use) and special 'static data references' that allow referencing of context data from other components or documentation pages.

## Defining & using context data

To define context data for a component or documentation page you should to set a `context` object in the relevant configuration file:

```js
// my-component.config.json
{
    "context": {
        // context data goes here
    }
}
```

Any data set within this context object will then be made available to that item's ~@TODOLINK @views', 'view template') }} as variables. For example:

```js
// users.config.json
{
    "context": {
        "title": "Our users",
        "users": [{
            "name": "Mickey Mouse",
            "email": "mickey@mouse.com"
        },{
            "name": "Daffy Duck",
            "email": "daffy@duck.com"
        }]
    }
}
```

```handlebars
<!-- users.hbs -->
<div>
    <h1>{{ title }}</h1>
    <ul>
        {{#each users}}
        <li>
            <h2>{{ name }}</h2>
            <p>{{ email }}</p>
        </li>
        {{/each}}
    <ul>
</div>
```

## Static data references

Context data object also support the use of _data references_. These are special references, resolved at runtime, that allow you to 'point' to other item's context data.

This is made possible using the `@handle` ~@TODOLINK @naming#referencing-other-items', 'reference syntax') }} in your context data definitions. For example, if we create a configuration file for a component called `list-items` that looks like this:

```yaml
context:
  title: My favourite list items
  items:
    - one
    - two
    - three
    - four
```
It is then possible to access the `list-items` component's context data in another component as follows:

```yaml
context:
  list: '@list-items'

# When resolved, the above context data (which will get passed to the template when rendered) will look as follows:

context:
  list:
    title: My favourite list items
    items:
      - one
      - two
      - three
      - four
```
You can also choose to access only part of another component's context data by using a dot-notation string after the main identifier handle:

```yaml
context:
  list: '@list-items.items'

# resolves to:

context:
  list:
    - one
    - two
    - three
    - four
```

<div class="Note Note--callout">
The reference syntax only applies to items of **the same type** - a component cannot access a documentation page's context data (or vice versa).
</div>

 ## Dynamic data

 Fractal provides the option ~@TODOLINK @configuration-files#javascript-module-format', 'to use CommonJS-style modules') }} to define configuration data for components and documentation pages. Whilst slightly more complex than using JSON or YAML as a data format, it has the advantage of letting you be able to use the full power of JavaScript to generate context data for your components.

 This can be handy if you want to provide data to your components from an API, or to use a library such as [Faker](https://github.com/marak/Faker.js) to generate placeholder data for your components.

 You can use any NodeJS functionality or NPM modules you like in your configuration data files, so the possibilities for generating dynamic data are effectively endless!

 ### Generating dynamic data with Faker

 To save us hard-coding lots of context data into our data file, we can use the excellent [faker.js](https://github.com/marak/Faker.js) library to generate a list of members for us.

 First you'll need to make sure you have installed Faker in your component library project - `npm install faker --save`.

 And now let's look at an example `member-list.config.js` file and see how we can use Faker to dynamically generate a list of members for us.

 ```js
 // member-list.config.js
 'use strict';

 const faker = require('faker'); // require the faker module
 const memberCount = 10; // how many members we should generate data for
 const memberData = [];

 for (var i = 0; i < memberCount; i++) {
     memberData.push({
         name: faker.name.findName(), // generate a random name
         email: faker.internet.email()  // generate a random email address
     });
 }

 module.exports = {
 	context: {
 		members: memberData // use our generated list of members as context data for our template.
 	}
 };
 ```

 When our component is now rendered with this data, we will get a list of ten members, all with realistic names and email addresses. And if we want to generate 100 list items instead, all we have to do is update the value of the `memberCount` constant to 100.

 Obviously this is a simple example, but the principle can often be useful when you want to preview components with large amounts of data in them.

 ### Using data from an API

 If you already have an API for your site or application, and you want to preview your components using 'real' data (or indeed if you want to use content from any other APIs) then you can handle that in your component configuration files too.

 The key to this is that if any values in the context data are [Promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), Fractal will first wait for those promises to be resolved before rendering the template using the context data. So we can use a Promise-based request module (such as [request-promise](https://github.com/request/request-promise)) to make API requests and then just pass the returned promise into our context data object.

 In the following example, we are going to make a request to our fictional members API endpoint, which returns a JSON-encoded list of members.

 ```js
 // member-list.config.js
 'use strict';

 const request = require('request-promise'); // require the request-promise module

 // make the request to the API, returns a Promise
 const response = request({
     uri: 'http://www.mysite-api.com/members',
     json: true
 });

 // do some post-processing on the response to wrangle it into the correct format
 response.then(function (membersApiData) {
     const memberData = [];
     for (let member of membersApiData) {
         memberData.push({
             name: `${member.firstName} ${member.lastName}`,
             email: member.emailAddress
         });
     }
     return memberData;
 });

 module.exports = {
 	context: {
 		members: response // use the response as context data for our template.
 	}
 };
 ```

 Now when the component is rendered, it will first make an API request to the endpoint and wait for the Promise (and its associated `then()` step) to be resolved before using the output to pass as context data to the template.
