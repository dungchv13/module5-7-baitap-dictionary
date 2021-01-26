import { Component, OnInit } from '@angular/core';
import {DictionaryService, IWord} from '../dictionary.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWords: IWord[] = [];

  constructor(private sv:DictionaryService, private router: Router) { }

  ngOnInit(): void {
    this.listWords = this.sv.getAll();
  }

  click(key: string) {
    this.router.navigate(['/page',key])
  }
}
