/**
 * Created by Master on 2019-02-08.
 */

export default {
       velasPing(){
           return axios.get('/api/v1/ping');
       },
       velasHeaders(){
           return axios.get('/api/v1/headers');
       },

};
