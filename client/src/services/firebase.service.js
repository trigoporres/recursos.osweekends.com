export default {
  getResourceFirebase (firebase) {
    return firebase.firestore().collection('Recursos').get()
  },
  resourceFirebase (firebase) {
    return firebase.firestore().collection('Recursos')
  },
  resource (firebase, id) {
    console.log(id)
    return firebase.firestore().collection('Recursos').doc(id).get()
  },
  resourcesUser (firebase) {
    return firebase.firestore().collection('Recursos').get()
  },
  resourcesCreate (firebase, user) {
    return firebase.firestore().collection('Recursos').where('creator', '==', user).get()
  },
  resourcesFav (firebase, uid) {
    return firebase.firestore().collection('User').doc(uid).collection('fav').get()
  }
}
