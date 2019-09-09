module.exports = {
  left: {
    sections: [
      [
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 3',
          seats: [13, 14, 15, 16, 9, 10, 11, 12]
        },
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 3',
          seats: [5, 6, 7, 8, 1, 2, 3, 4]
        }
      ],
      [
        {
          type: 'meeting-room',
          name: 'COUNTRY DIRECTOR OFFICE'
        },
        {
          type: 'meeting-room',
          name: 'COUNTRY DIRECTOR MEETING ROOM'
        }
      ],
      [
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 1',
          seats: [21, 22, 23, 24, 17, 18, 19, 20]
        },
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 1',
          seats: [13, 14, 15, 16, 9, 10, 11, 12]
        },
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 1',
          seats: [5, 6, 7, 8, 1, 2, 3, 4]
        }
      ]
    ]
  },
  right: {
    sections: [
      [
        {
          type: 'meeting-room',
          name: 'BOARDROOM',
          isWide: true
        }
      ],
      [
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 2',
          seats: [24, 23, 22, 21, 20, 21, 22, 23]
        },
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 2',
          seats: [16, 15, 14, 13, 12, 11, 10, 9]
        },
        {
          type: 'hotdesk',
          capacity: 8,
          sides: 2,
          name: 'Section 2',
          seats: [8, 7, 6, 5, 4, 3, 2, 1]
        }
      ],
      [
        {
          type: 'meeting-room',
          name: 'NIAMEY'
        },
        {
          type: 'blank',
          blank: true,
          name: 'blank'
        }
      ]
    ]
  }
}
