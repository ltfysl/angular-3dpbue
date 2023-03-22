import { Component, Input, OnInit } from '@angular/core';

import { products } from '../products';

enum ComplaintReasons {
  ReceivedLeaflet = '0',
  ReceivedFalseNoBan = '1',
  ReceivedTrueBanExisting = '2',
  AnotherProblem = '3',
}

const complaintReasonsNames = [
  'empfangene Leaflet',
  'empfangene falsenoban',
  'empfangene trueban',
  'anderes lo',
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() reasons;

  selectedReason: ComplaintReasons;

  ngOnInit() {
    this.getAllComplaintReasons();
  }

  getAllComplaintReasons() {
    const reasons = Object.keys(
      ComplaintReasons
    ) as (keyof typeof ComplaintReasons)[];

    this.reasons = reasons.map((key, value) => {
      return {
        text: complaintReasonsNames[value],
        value: value,
      };
    });
  }

  setSelectedReason(reason) {
    this.selectedReason = Object.keys(ComplaintReasons).find(
      (key) => ComplaintReasons[key] == reason.value
    ) as ComplaintReasons;

    console.log(this.selectedReason);
  }
}
