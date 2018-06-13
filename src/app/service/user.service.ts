import { Injectable } from "@angular/core";
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
/**
 * @description
 * @class
 */
@Injectable()
export class UserService {
  private baseUrl=`http://www.teqso.in/QvotersApi`;
  
  constructor(private http: Http) {
    
  }
  login(user:any){
    let headers1 = new Headers({ 'Content-Type': 'application/json' });
    console.log(JSON.stringify(user));
    let usr$=this.http.post(`${this.baseUrl}/login.php`,JSON.stringify(user),{headers:headers1})
    .map(res =>res.json() );
    // console.log(usr$);
    return usr$;  
  }
}

