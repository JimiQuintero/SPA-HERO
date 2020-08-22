import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(private activateRoute: ActivatedRoute,
              private heroesService: HeroesService ) {
    this.activateRoute.params.subscribe(params => {
      // console.log(params['id']);
    this.heroe = this.heroesService.getHeroe(params['id']);
    console.log(this.heroe);
    });
   }

  ngOnInit(): void {
  }

}
