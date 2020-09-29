import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from './../fireBase/config';

const useStorage = (file) => {
  const [process, setProcess] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // reference
    const storageRef = projectStorage.ref(file.name);
    const fireStoreRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProcess(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        fireStoreRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { process, error, url };
};

export default useStorage;
