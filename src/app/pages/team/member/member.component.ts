import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import team from '../team';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css',
})
export class MemberComponent implements OnInit {
  public member: any = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Method 1: subscribe to paramMap observable
    this.route.paramMap.subscribe((params) => {
      this.member = team[Number(params.get('id'))];
    });
  }
}
