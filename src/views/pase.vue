import { getAuth } from 'firebase/auth'

const getUserById = (u) => { // u = user id
    const userData = null
    getAuth()
        .getUser(u)
        .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
            userData = userRecord
        })
        .catch((error) => {
            console.log('Error fetching user data:', error);
        });

    return { userData }
}
export default getUserById