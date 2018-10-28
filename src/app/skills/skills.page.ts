import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
  // tslint:disable-next-line:no-inferrable-types This is here because app was not acceppting string
  skills: string = 'it';

  constructor() { }

  ngOnInit() {
  }

}
