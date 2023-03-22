export enum ComplaintReasons {
  ReceivedLeaflet = '0',
  ReceivedFalseNoBan = '1',
  ReceivedTrueBanExisting = '2',
  AnotherProblem = '3',
}

export class ComplaintReasonEnum {
  complaintReasonsNames = [
    'empfangene Leaflet',
    'empfangene falsenoban',
    'empfangene trueban',
    'anderes lo',
  ];

  mapComplaintReasons() {
    const reasons = Object.keys(
      ComplaintReasons
    ) as (keyof typeof ComplaintReasons)[];

    return reasons.map((key, value) => {
      return {
        text: this.complaintReasonsNames[value],
        value: value,
      };
    });
  }

  findComplaintReason(reason) {
    return Object.keys(ComplaintReasons).find(
      (key) => ComplaintReasons[key] == reason.value
    ) as ComplaintReasons;
  }
}
