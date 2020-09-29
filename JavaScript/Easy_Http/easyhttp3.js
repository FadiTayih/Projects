// Library 3.0 using Fetch/Async/await


class EasyHttp{

    // HTTp Get request
     async get(url){

       const response = await fetch(url);

       const data = await response.json();

       return data;
    

    }

    // Http Post Request
   async post(url, data){

       

           const response = await fetch(url , {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            
      
            const res = await response.json();

            return res;
         

       
    

    }
    // Put Http request
   async put(url, data){

      

          const response = await fetch(url , {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
           
      

            const res = await response.json();

            return res;
    

    }
    // Delete Http request
   async delete(url){

       

          const response = await fetch(url , {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                },
                
            })
            .then(res => res.json())
            .then(data => resolve('Data Deleted'))
            .catch(err => reject(err));
      

            const resdata = await 'Resource Deleted';

            return resdata;
    

    }
}