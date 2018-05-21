import { wrapAction } from 'nexusdk';
import fetch from 'react-native-digest-fetch';


wrapAction((properties, sendMessage) => {
  const { verb, url, headers, body } = properties;
  return new Promise(resolve => {
    const result = fetch(url, {
      method: verb,
      headers,
      body: verb.toLowerCase() !== 'get' ? body : undefined,
    });

    result.then(data => {
      resolve(data.text());
    });
  });
});

