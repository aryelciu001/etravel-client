class Auth {
  constructor() {
    this.authenticated = false;
  }
  login(cb) {
    this.authenticated = true;
  }
  logout(cb) {
    this.authenticated = false;
  }
  isAuthenticated(cb) {
    return this.authenticated;
  }
}

export default new Auth();
