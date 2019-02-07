function Person(name, contactInfo) {
  // set attributes (name, contactInfo) using `this`

}

function Manager(name, contactInfo) {
  // set attributes (name, contactInfo) using `this`
;
}

// Manager should inherit from Person


function Tenant(name, contactInfo) {
  this.references = [];
  // set attributes (name, contactInfo) using `this`

}

// Tenant should inherit from Person


Tenant.prototype.addReference = function(reference) {
  // push the reference to the array of the tenant's references using `this`
  // Hint: you'll need to use the `this` keyword.

};

function Apartment(address) {
  this.manager = null;
  this.units = [];
  this.address = address;
}

Apartment.prototype.setManager = function(manager) {
  // if `manager` is an instance of `Manager`
  // set `this.manager` to `manager`

};

Apartment.prototype.getManager = function() {
  // return `this.manager`

};

Apartment.prototype.addTenant = function(unit, tenant) {
  // if apartment has a manager and tenant has 2 references
  // add tenant to unit

};

function Unit(number, building, sqft, rent) {
  this.tenant = null;
  // set attributes (number, building, sqft, rent) using `this`

}

Unit.prototype.available = function() {
  // return true if no tenant, false if tenant

};

// Create a variable `terraces`. It should be an instance of `Apartment`.
// The address for terraces is '66 7th Street'


// Create a variable `unit1`. It should be an instance of `Unit`.
// The number is `564`, the building is `terraces`, the square feet is `700` and the rent is `2000`


// Create a variable `unit2`. It should be an instance of `Unit`.
// The number is `332`, the building is `terraces`, the square feet is `600` and the rent is `1800`


// Push unit1 and unit2 to the units array in the terraces object.


// Use console.log to check to make sure that each unit has been added to terraces


// Create an instance of the Manager object - `bob`.
// His name is 'Bob Brannan' and his contact info is '555-555-555'
// Use console.log to check your work.

// Create an instance of the Tenant object - `jane`.
// Her name is 'Jane Davis' and her contact info is '555-555-555'
// Use console.log to check your work.

// Create two instances of the Person object - `jill` and `carl`
// jill: Name: 'Jill Taylor', Contact Info '555-555-5555'
// carl: Name: 'Carl Jones', Contact Info '555-555-5555'
// Use console.log to check your work.



// Use the setManager() method to set bob as the manager of terraces


// Use console.log to make sure that bob has been set as manager

// Use console.log to access the getManager() method for the terraces object.


// Use the addReference() method to set jill and carl as the references for jane


// Use the addTenant() method to set jane as the tenant for unit1
// Use console.log to check your work.


// BONUS:
var displayUnits = function () {
	// Use jQuery to append each available unit in the terraces apartment on the page.
	// For each available unit, the following info should be shown:
	// Number: (unit number)
	// Rent: (rent for unit)
	// (square footage) sqft
	// Contact Info: (manager name) - (manager contact info)


};

displayUnits();