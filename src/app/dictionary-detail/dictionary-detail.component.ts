import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  msg = '';

  constructor(private activatedRouter: ActivatedRoute, private sv:DictionaryService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const key = paramMap.get('key');
        if(key != null){
          this.msg = this.sv.search(key);
        }
      }
    );
  }

}
