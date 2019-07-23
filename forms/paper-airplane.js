const square = require('./square')

module.exports = {
  "transforms": [
    ...square.transforms,
    {
      "type": "fold",
      "data": {
        "vector": {
          "start": {
            "x": 0.5,
            "y": 0
          },
          "end":  {
            "x": 0,
            "y": 0.5
          },
        },
        "side": "right",
        "rotation": Math.PI
      }
    },
    {
      "type": "fold",
      "data": {
        "vector": {
          "start": {
            "x": 1,
            "y": 0.5
          },
          "end":  {
            "x": 0.5,
            "y": 0
          },
        },
        "side": "right",
        "rotation": Math.PI
      }
    },
    {
      "type": "fold",
      "data": {
        "vector": {
          "start": {
            "x": 0.5,
            "y": 0
          },
          "end":  {
            "x": 0.5,
            "y": 1
          }
        },
        "side": "both",
        "rotation": Math.PI/2
      }
    },
    {
      "type": "fold",
      "data": {
        "vector": {
          "start": {
            "x": 0.4,
            "y": 0
          },
          "end":  {
            "x": 0.4,
            "y": 1
          }
        },
        "side": "right",
        "rotation": Math.PI/2
      }
    },
    {
      "type": "fold",
      "data": {
        "vector": {
          "start": {
            "x": 0.6,
            "y": 0
          },
          "end":  {
            "x": 0.6,
            "y": 1
          }
        },
        "side": "left",
        "rotation": Math.PI/2
      }
    }
  ]
}