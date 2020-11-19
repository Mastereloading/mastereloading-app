import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export const getUser = () => auth().currentUser;

export const getUserData = async () => {
  const currentUser = auth().currentUser;
  const accountRef = firestore().collection("users").doc(currentUser.uid);
  const accountSnap = await accountRef.get();
  const accountData = accountSnap.data();

  return { accountData, accountRef };
};

export const createUser = async (name, email, password) => {
  const accounts = firestore().collection("users");
  const userQuery = await accounts.where("email", "==", email).limit(1).get()
  if (userQuery.empty) {
    const result = await auth().createUserWithEmailAndPassword(email, password).catch((error) => alert(error))
    const accountData = result.user
    const accountRef = accounts.doc(accountData.uid);
    await accountRef.set(
      {
        displayName: name,
        email: email,
        phoneNumber: accountData.phoneNumber,
        photoURL: accountData.photoURL,
      },
      { merge: true }
    )
    await auth().signInWithEmailAndPassword(email, password).catch((error) => alert(error))

    return "200"
  }
  else {
    console.log('nao cria conta')

    return "200"
  }
}

export const loginUser = async (email, password) => {
  await auth().signInWithEmailAndPassword(email, password).catch(() => alert('Email ou senha inválidos. Tente novamente.'))

  return "200";
};

export const logoutUser = async () => {
  try {
    await auth().signOut();accountGoogle
    alert(err);

    return "200";
  } catch (error) {
    console.log(error)

    return "200"
  }
};

export const onUserChanged = (callback) => {
  const userChange = auth().onAuthStateChanged(callback);

  return userChange;
};