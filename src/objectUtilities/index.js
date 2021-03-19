class ObjectUtilities {
  /* Your magic here */
  static mergeObjects = (objA, objB) => ({ ...objA, ...objB });
  static removePassword = (user) => delete user.password;
  static freezeObj = (cleanUser) => Object.freeze(cleanUser);
  static getOnlyValues = (frozenUser) => Object.values(frozenUser);
  static getOnlyProperties = (frozenUser) => Object.keys(frozenUser);
}

const objA = {
  name: "Minjoo",
  favFood: "Kimchi"
};

const objB = {
  password: "12345"
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
