import messengerReducer from "./messengerReducer"


let store = {
  _messenger: {

    newMessageText: "",

    messenger_users: [
      {
        name: "Onik Sahakyan",
        id: 1,
      },

      {
        name: "Sam Danielyan",
        id: 2,
      },

      {
        name: "Rudik Zakunts",
        id: 3,
      },
    ],

    messages: [
      { message: "Hi!" },
      { message: "How are You?" },
      { message: "Heeey!" }

    ]
  },


  getState() {
    return this._messenger
  },

  subscribeCall() { },

  subscribe(observer) {
    this.subscribeCall = observer
  },

  sendMessage() {
    let newMessage = { message: this._messenger.newMessageText }
    this._messenger.messages.push(newMessage)
    this._messenger.newMessageText = ""
    this.subscribeCall()
  },

  updateMessageArea(messageText) {
    this._messenger.newMessageText = messageText
    this.subscribeCall()
  },

  dispatch(action) {
      messengerReducer(this._messenger,action)
      this.subscribeCall()
    }
  }





export default store;





