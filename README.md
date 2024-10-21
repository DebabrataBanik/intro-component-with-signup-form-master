# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [The Challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued Development](#continued-development)

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![alt text](intro_component_using_react/design/desktop-preview.jpg)

### Links

- [Live Site URl](https://intro-component-with-signup-form-by-debabrata.vercel.app/)
- [Solution URL](https://www.frontendmentor.io/solutions/intro-component-with-signup-form-master-I1UOXXTnyR)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- React Hook Form

### What I learned

Implemented `react-hook-form` to handle form validation which made it a lost easier and learned a lot from this challenge. 
- When you want the control over to some library to handle validation you need to use `forwardRef` to expose the ref of a child component to its parent for direct manipulation or validation. 
- There are different ways to validate fields like for email field where a different approach was implemented when I wanted to validate email on submit and not on input change. 
- Errors can be dealt using `react-hook-form`'s error state where for every field we can send message for each validation that will be used as error.message in the `Input` component to render. 
- Also implemented conditonal classname addition to the `Input` component to add `error` class if there is an error.

### Continued Development

Further refactor the code to make it more readable and maintainable. 
Implement it without using `react-hook-form`. 