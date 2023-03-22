# What can i cook development strategy

---
Depending on what was agreed upon in the prototype and needs in the backlog
Below is the development strategy.

---

## Setup

- Create a [repository](https://github.com/HYF-Class19/RCP-Team)
- Create a [project](https://github.com/orgs/HYF-Class19/projects/37) board
- install and create a new `Next.js` project
- install `PrimeReact`
- clean the default files and remove what is not needed to start working on the project
- create and fill the planning folder
- update the readme file

---

## Must-Haves ( v 1.0 )

we will finish this milestone in 2 weeks.

### Header component

- [ ] This user story is developed on branch `11-header-v1`.
- [ ] create a header component
- [ ] add the logo to the left of the header
- [ ] add the site slogan in the center of the header
- [ ] import the component and import in all the places needed
- [ ] add the navbar under the header with links to some filters or keep it empty links `#`

### Slider component

- [ ] This user story is developed on branch `12-Slider-v1`.
- [ ] create a slider component
- [ ] let that component fetch 3 random recipes from the API
- [ ] display the following info on it (photo, title)
- [ ] add a button to go and display the single recipe

### display of recipes

- [ ] This user story is developed on branch `13-recipes-display-v1`.
- [ ] create a filter component
- [ ] return the list of all the recipes without filters and with pagination to display 3 by 4 recipes in the right part with (photo, level, duration, title, and summary)

### filter component

- [ ] This user story is developed on branch `14-filter-v1`.
- [ ] update the filter component
- [ ] let the user write the included ingredient
- [ ] let the user write the excluded ingredient
- [ ] choose the origin of the recipe
- [ ] choose the dietary
- [ ] and return the filtered list of the recipes.

### footer component

- [ ] This user story is developed on branch `15-footer-v1`.
- [ ] create a footer component
- [ ] add links to (about us, contact, and term of use) pages to the left
- [ ] add the social media icons with links on the right

### single recipe component

- [ ] This user story is developed on branch `16-single-v1`.
- [ ] create a single recipe component
- [ ] display the following details about the recipe to be as possible as the design ( title, duration, level, number of persons, photo, ingredient, instructions)
  
### about component

- [ ] This user story is developed on branch `17-about-v1`.
- [ ] create an about component
- [ ] fill it with static details about the site

---

## Should have (v 2.0 )

we will finish this milestone in 2 weeks.

### random recipe

- [ ] This user story is developed on branch `18-random-v2`.
- [ ] add random recipe links on the navBar and when the user clicks on it it should display a random recipe

### kitchen

- [ ] This user story is developed on branch `19-kitchen-v2`.
- [ ] add a dropdown menu in the navBar to display all the menu origins and when the user clicks on a kitchen it should display in the filter page all the recipe related to that kitchen

### Dietary

- [ ] This user story is developed on branch `20-dietary-v2`.
- [ ] add a dropdown menu in the navBar to display all the Dietaries and when the user clicks on a Dietary it should display in the filter page all the recipes related to that Dietary

### contact component

- [ ] This user story is developed on branch `21-contact-v2`.
- [ ] create a contact component
- [ ] add contact info
- [ ] add a contact form

### term of use component

- [ ] This user story is developed on branch `22-termOfUse-v2`.
- [ ] create a term of use component
- [ ] fill is with a static term of use details

### sign-up component

- [ ] This user story is developed on branch `23-signup-v2`.
- [ ] create a sign-up component
- [ ] the user needs to provide a name, email, and password
- [ ] check if the user is already registered in our DB
- [ ] the password should encrypt in the DB

### sign-in component

- [ ] This user story is developed on branch `24-signin-v2`.
- [ ] create a sign-in component
- [ ] when the user sign-in correctly his name should display on the right top

### reset password component

- [ ] This user story is developed on branch `25-reset-v2`.
- [ ] create a reset password component
- [ ] the user needs to provide his email and we will send a reset link if the email is correct
- [ ] when the user follows the link we let him create a new password

---

## Could have ( v 3.0 )

we will finish this milestone in 2 weeks.

### rating component

- [ ] This user story is developed on branch `26-rating-v3`.
- [ ] create a rating component
- [ ] the user will be able to rate and recipe 1 time so we need to store the following info about that (rating number from 1-5, user id, recipe id)

### comment component

- [ ] This user story is developed on branch `27-comment-v3`.
- [ ] create a comment component
- [ ] the user would write as many comments as he wants
- [ ] we will store the user id, comment, and recipe id

### wishlist component

- [ ] This user story is developed on branch `28-wishlist-v3`.
- [ ] create a wishlist component
- [ ] the user will be able to add any recipe to his wishlist

### add a recipe component

- [ ] This user story is developed on branch `29-add-recipe-v3`.
- [ ] create add a recipe component
- [ ] the user needs to fill in all the info needed
