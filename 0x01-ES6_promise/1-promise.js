export default function getFullResponseFromAPI(success) {
  if (success) return Promise.resolve({ status: 200, body: 'Success' });
  return Promise.reject(new Error('The fake API is not working currently'));
}
