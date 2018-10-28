export default class Api {
  static BASE_URL = 'http://be675566.ngrok.io/api/'
  static HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  static MOCK_EMAIL_ADDRESS = 'sebastian.virlan.live@yahoo.com'
  static MOCK_PASSWORD      = 'hac100'

  
  static login() {
    return fetch(this.BASE_URL + 'login', {
      method: 'POST',
      headers: this.HEADERS,
      body: JSON.stringify({
        user : {
          email: this.MOCK_EMAIL_ADDRESS,
          password: this.MOCK_PASSWORD
        }
      })
    })
  }
}