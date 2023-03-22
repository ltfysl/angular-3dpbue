import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() reasons;

  selectedReason: ComplaintReasons;

  constructor(private complaintReasonHandler: ComplaintReasonEnum) {}

  ngOnInit() {
    this.getAllComplaintReasons();
  }

  getAllComplaintReasons() {
    this.reasons = this.complaintReasonHandler.mapComplaintReasons();
  }

  setSelectedReason(reason) {
    this.selectedReason =
      this.complaintReasonHandler.findComplaintReason(reason);
    console.log(this.selectedReason);
  }
}
