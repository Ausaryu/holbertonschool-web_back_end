import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup () {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user])
    .then((results) => {
      console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
