const contact = {
  _prenom: '',
  set prenom(value) {
    if (value.length < 3) {
      throw new Error('Le prénom est trop court')
    }
    this._prenom = value;
  },
  get prenom() {
    return this._prenom.toUpperCase();
  },
};

contact.prenom = 'Romain';
console.log(contact.prenom);

// contact.prenom = 'A'; // Error: Le prénom est trop court
