module.exports = {
  left: {
    sections: [
      [
        {
          type: 'meeting-room',
          name: 'QUIET ROOM',
        },
      ],
      [
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 3',
          seats: [13, 14, 15, 16, 9, 10, 11, 12],
        },
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 3',
          seats: [5, 6, 7, 8, 1, 2, 3, 4],
        },
      ],
      [
        {
          type: 'meeting-room',
          name: 'KAMPALA',
          isWide: true,
        },
      ],
      [
        {
          type: 'hotdesk',
          capacity: 6,
          sides: 2,
          name: 'Section 1',
          seats: [16, 17, 18, 13, 14, 15],
        },
        {
          type: 'hotdesk',
          capacity: 6,
          sides: 2,
          name: 'Section 1',
          seats: [10, 11, 12, 7, 8, 9],
        },
        {
          type: 'hotdesk',
          capacity: 6,
          sides: 2,
          name: 'Section 1',
          seats: [4, 5, 6, 1, 2, 3],
        },
      ],
    ],
  },
  right: {
    sections: [
      [
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 4',
          seats: [16, 15, 14, 13, 12, 11, 10, 9],
        },
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 4',
          seats: [8, 7, 6, 5, 4, 3, 2, 1],
        },
      ],
      [
        {
          type: 'meeting-room',
          name: 'LOME',
        },
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 2',
          seats: [16, 15, 14, 13, 12, 11, 10, 9],
        },
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 2',
          seats: [8, 7, 6, 5, 4, 3, 2, 1],
        },
      ],
      [
        {
          type: 'meeting-room',
          name: 'REMOVE',
          blank: true,
        },
        {
          type: 'call-booth',
          name: 'CALL BOOTH',
        },
      ],
    ],
  },
};
