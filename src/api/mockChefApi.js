'use strict';
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const chefs = [
  {

    "id": 2,
    "name": "Joe Chef",
    "about": "I only cook steaks!",
    "restaurant": "the meat restaurant",
    "favorite_dish": "cream cheese",
    "quote": "A best friend is like a four leaf clover, hard to find, lucky to have."
  },
  {
    "id": 1,
    "name": "master chef",
    "about": "I have been cooking for 20 years.  I like dogs",
    "restaurant": "The hungry hamburger",
    "favorite_dish": "pizza",
    "quote": "if you can't stand the heat, get out of the kitchen"
  },
  {
    "id": 4,
    "name": "wierd cook guy",
    "about": "heeee-y macarena",
    "restaurant": "The bbq store",
    "favorite_dish": "lasagne",
    "quote": "pizza is yummy"
  },
  {
    "id": 3,
    "name": "Mr cooks stuff",
    "about": "I like to cook fish",
    "restaurant": "Fish place",
    "favorite_dish": "ahi tuna",
    "quote": "food is great"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (chef) => {
  return replaceAll(chef.title, ' ', '-');
};

class ChefApi {
  static getAllChefs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], chefs));
      }, delay);
    });
  }

  static saveChef(chef) {
    chef = Object.assign({}, chef); // to avoid manipulating object passed in.

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minChefTitleLength = 1;
        if (chef.title.length < minChefTitleLength) {
          reject(`Title must be at least ${minChefTitleLength} characters.`);
        }

        if (chef.id) {
          const existingChefIndex = chefs.findIndex(a => a.id == chef.id);
          chefs.splice(existingChefIndex, 1, chef);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new chefs in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          chef.id = generateId(chef);
          chef.watchHref = `http://www.pluralsight.com/chefs/${chef.id}`;
          chefs.push(chef);
        }

        resolve(chef);
      }, delay);
    });
  }

  static deletechef(chefId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfChefToDelete = chefs.findIndex(chef => {
          chef.chefId == chefId;
        });
        chefs.splice(indexOfChefToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ChefApi;
