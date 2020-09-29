import React, { useState } from 'react';
import ProcessBar from './ProcessBar';
function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const selectd = e.target.files[0];

    const types = ['image/png', 'image/jpeg'];

    if (selectd && types.includes(selectd.type)) {
      setFile(selectd);
      setError('');
    } else {
      setFile(null);
      setError('please select a image type of (png or jpeg)');
    }
  };
  return (
    <form>
      <label>
        <input type='file' onChange={onChange} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProcessBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
