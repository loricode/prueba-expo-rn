import axios from 'axios';
import { environment } from '../../environments/environment';

export class HttpService {

  private static baseUrl = environment.baseUrl;
   
   public static get(path:string):Promise<any>{
      return axios.get(this.baseUrl + path)
   }

}