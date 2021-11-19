import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Entiteit 1: STL', cols: 1, rows: 1 , content: ''},
          { title: 'Entiteit 2: Monsters', cols: 1, rows: 1 , content: ''},
          { title: 'Entiteit 3: NPCs', cols: 1, rows: 1 , content: ''},
          { title: 'StudentInfo', cols: 1, rows: 1 , content: '' }
        ];
      }

      return [
        { title: 'Entiteit 1', cols: 1, rows: 1 , content: '' },
        { title: 'Entiteit 2', cols: 1, rows: 1 , content: ''},
        { title: 'Entiteit 3', cols: 1, rows: 1 , content: ''},
        { title: 'StudentInfo', cols: 1, rows: 1 , content: ''}
      ];
    })
  );
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
