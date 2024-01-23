import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-content-column',
  templateUrl: './content-column.component.html',
  styleUrls: ['./content-column.component.css', '../../../node_modules/lineicons/web-font/lineicons.css'],
  animations: [
    trigger('listAnimation', [
      state('hidden', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden',
      })),
      state('visible', style({
        height: '*',
        opacity: 1,
        overflow: 'visible',
      })),
      transition('hidden <=> visible', animate('300ms ease-in-out'))
    ])
  ]
})

export class ContentColumnComponent implements OnInit{
  experiences: any[] = [];

  cardStates: { [key: number]: boolean } = {};

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.dataService.getWorkExperiences().subscribe((experiences) => {
      this.experiences = experiences;

      // Initialize cardStates based on the fetched experiences
      this.experiences.forEach(experience => {
        this.cardStates[experience.id] = false;
      });

      console.log(this.experiences);
    });
  }

  toggleList(experience: any) {
    const experienceId = experience.id;
    this.cardStates[experienceId] = !this.cardStates[experienceId];
  }

  getListState(experience: any) {
    const experienceId = experience.id;
    return this.cardStates[experienceId] ? 'visible' : 'hidden';
  }
}