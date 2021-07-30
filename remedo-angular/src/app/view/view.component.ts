import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ViewService } from "../services/view.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit {
  searchTitle: FormControl = new FormControl("");
  constructor(private viewService: ViewService) {}

  currentPage: number = 1;
  resultsPerPage: number = 9;
  getNumberOfPages = (): number =>
    Math.ceil(this.users.length / this.resultsPerPage);
  changePage(num: number): void {
    if (num == -1 && this.currentPage == 1) return;
    if (num == 1 && this.currentPage == this.getNumberOfPages()) return;
    this.currentPage += num;
  }
  setPage(number: number): void {
    this.currentPage = number;
  }
  getPaginationBarNumbers(): number[] {
    const numberOfPages: number = this.getNumberOfPages();
    let arr = [];
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i);
    }
    if (this.currentPage == 1) {
      return arr.slice(this.currentPage - 1, 3);
    }
    if (this.currentPage == numberOfPages) {
      return arr.slice(
        numberOfPages - (numberOfPages < 3 ? numberOfPages : 3),
        numberOfPages
      );
    }
    if (numberOfPages <= 3) {
      return arr;
    }
    return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
  }
  getUsersList(): Users[] {
    return this.users.slice(
      (this.currentPage - 1) * this.resultsPerPage,
      this.currentPage * this.resultsPerPage
    );
  }
  callerInProgress: any = null;
  debounce(): void {
    if (this.callerInProgress) {
      clearTimeout(this.callerInProgress);
    }
    this.callerInProgress = setTimeout(this.getUsers.bind(this), 500);
  }

  users: Users[] = [];
  loading: Boolean = false;
  getUsers(): void {
    this.loading = true;
    this.viewService.getUsers(this.searchTitle.value).subscribe(
      (d) => {
        if (d) {
          console.log(d);
          this.users = d;
          this.loading = false;
        }
      },
      (err) => {
        this.loading = false;
      }
    );
  }
  ngOnInit(): void {
    this.getUsers();
  }
}

interface Users {
  id: string;
  title: string;
  userId: string;
}
