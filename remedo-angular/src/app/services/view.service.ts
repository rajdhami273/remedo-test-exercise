import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ViewService {
  constructor(private http: HttpClient) {}

  getUsers(title: string = ""): Observable<any> {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/albums" +
        (title ? `?title=${title}` : "")
    );
  }
}
