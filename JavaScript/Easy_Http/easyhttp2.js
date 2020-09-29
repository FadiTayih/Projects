// Library 2.0 using Fetch/promise and classes


class EasyHttp{

    // HTTp Get request
    get(url){

        return new Promise((resolve, reject) => {

            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
      

        });
    

    }

    // Http Post Request
    post(url, data){

        return new Promise((resolve, reject) => {

            fetch(url , {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
      

        });
    

    }
    // Put Http request
    put(url, data){

        return new Promise((resolve, reject) => {

            fetch(url , {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
      

        });
    

    }
    // Delete Http request
    delete(url){

        return new Promise((resolve, reject) => {

            fetch(url , {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                },
                
            })
            .then(res => res.json())
            .then(data => resolve('Data Deleted'))
            .catch(err => reject(err));
      

        });
    

    }
}