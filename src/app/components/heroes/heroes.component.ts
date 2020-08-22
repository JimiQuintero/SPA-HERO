import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/service/heroes.service';
import { Heroe } from 'src/app/interface/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  data: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {
    this.data = this.heroesService.getHeroes();
    // console.log(this.data);
   }

  ngOnInit(): void {
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);

  }



}
