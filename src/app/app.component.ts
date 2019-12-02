import { Component } from '@angular/core';

import {AllCommunityModules} from "@ag-grid-community/all-modules";
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormationAngularFNRS201912';

  delayMs = 2000;

  couleurs = ['Rouge', 'Vert', 'Bleu']
  couleurSelected = 'Bleu';

  modules = AllCommunityModules;


  users$: Observable<any>;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    // const sub = this.userService.getUsers().subscribe((users) => {
    //   this.users = users;
    // })

    // // dans ngOnDestroy
    // sub.unsubscribe();
    this.users$ = this.userService.getUsers();
  }
}
