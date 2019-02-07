function Person(name, contactInfo) {
  // set attributes (name, contactInfo) using `this`
  this.name = name;
  this.contactInfo = contactInfo;
}

function Manager(name, contactInfo) {
  // set attributes (name, contactInfo) using `this`
  Person.call(this, name, contactInfo);
}

// Manager should inherit from Person
Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

function Tenant(name, contactInfo) {
  this.references = [];
  // set attributes (name, contactInfo) using `this`
  Person.call(this, name, contactInfo);
}

// Tenant should inherit from Person
Tenant.prototype = new Person();
Tenant.prototype.constructor = Tenant;

Tenant.prototype.addReference = function(reference) {
  // push the reference to the array of the tenant's references using `this`
  // Hint: you'll need to use the `this` keyword.
  this.references.push(reference);

  return this;
};

function Apartment(address) {
  this.manager = null;
  this.units = [];
  this.address = address;
}

Apartment.prototype.setManager = function(manager) {
  // if `manager` is an instance of `Manager`
  // set `this.manager` to `manager`
  if (manager instanceof Manager) {
    this.manager = manager;
  }
  return this;
};

Apartment.prototype.getManager = function() {
  // return `this.manager`
  return this.manager;
};

Apartment.prototype.addTenant = function(unit, tenant) {
  // if apartment has a manager and tenant has 2 references
  // add tenant to unit

  var validUnit = this.units.indexOf(unit) > -1 && unit.available();
  var validTenant = tenant.references.length >= 2 && tenant instanceof Tenant;

  if(this.manager && validUnit && validTenant) {
    unit.tenant = tenant;
  }
  return this;
};

function Unit(number, building, sqft, rent) {
  this.tenant = null;
  // set attributes (number, building, sqft, rent) using `this`
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
}

Unit.prototype.available = function() {
  // return true if no tenant, false if tenant
  return !(this.tenant);
};

// Create a variable `terraces`. It should be an instance of `Apartment`.
// The address for terraces is '66 7th Street'
var terraces = new Apartment('66 7th Street');

// Create a variable `unit1`. It should be an instance of `Unit`.
// The number is `564`, the building is `terraces`, the square feet is `700` and the rent is `2000`
var unit1 = new Unit(564, terraces, 700, 2000);

// Create a variable `unit2`. It should be an instance of `Unit`.
// The number is `332`, the building is `terraces`, the square feet is `600` and the rent is `1800`
var unit2 = new Unit(332, terraces, 600, 1800);

// Push unit1 and unit2 to the units array in the terraces object.
terraces.units.push(unit1, unit2);

// Use console.log to check to make sure that each unit has been added to terraces
console.log(terraces.units[0]);
console.log(terraces.units[1]);

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

var bob = new Manager('Bob Brannan', '555-555-555'),
    jane = new Tenant('Jane Davis', '555-555-555'),
    jill = new Person('Jill Taylor', '555-555-5555'),
    carl = new Person('Carl Jones', '555-555-5555');

// Use the setManager() method to set bob as the manager of terraces
terraces.setManager(bob);

// Use console.log to make sure that bob has been set as manager

// Use console.log to access the getManager() method for the terraces object.
console.log(terraces.manager);
console.log(terraces.getManager());

// Use the addReference() method to set jill and carl as the references for jane
jane.addReference(jill);
jane.addReference(carl);

// Use the addTenant() method to set jane as the tenant for unit1
// Use console.log to check your work.
terraces.addTenant(unit1, jane);
console.log(unit1.tenant);

// BONUS:
var displayUnits = function () {
	// Use jQuery to append each available unit in the terraces apartment on the page.
	// For each available unit, the following info should be shown:
	// Number: (unit number)
	// Rent: (rent for unit)
	// (square footage) sqft
	// Contact Info: (manager name) - (manager contact info)
	var manager = terraces.getManager();
	var units = terraces.units;
	for (var i = 0; i < units.length; i++) {
		if (units[i].available()) {
			var listing = '';
			listing += '<li>Number: ' + units[i].number + '</li>';
			listing += '<li>Rent: ' + units[i].rent + '</li>';
			listing += '<li>' + units[i].sqft + ' sqft</li>';
			listing += '<li> Contact Info: ' + manager.name + ' - ' + manager.contactInfo + '</li>'

			$('#details').append('<ul>' + listing + '</ul>');
		}

	}
};

displayUnits();