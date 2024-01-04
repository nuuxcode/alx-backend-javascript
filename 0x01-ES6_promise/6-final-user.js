import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, photo) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(photo)])
    .then((results) => results.map(({ status, value, reason }) => ({
      status,
      value: status === 'fulfilled' ? value : reason.toString(),
    })));
}
