import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // WHEN LOGGED IN, THIS CHECKS IF A TOKEN EXISTS AND IF IT HAS NOT EXPIRED
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // THIS GETS THE TOKEN STORED IN LOCAL STORAGE 
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // THIS ALLOWS THE TOKEN TO BE STORED IN LOCAL STORAGE AND SENDS AN ALERT MESSAGE TO CONFIRM USER IS SIGNED IN
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
    alert('You successfully signed in!')
  }

  logout() {
    // REMOVES TOKEN AND CUSTOMER PROFILE DATA FROM LOCAL STORAGE
    localStorage.removeItem('id_token');
    // RELOADS THE PAGE AND RESETS THE STATE OF THE WEBSITE
    window.location.assign('/');
  }
}

export default new AuthService();
