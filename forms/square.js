module.exports = {
  "transforms": [
    {
      "type": "cut",
      "data": {
        "vector": {
          "start": {
            "x": 0,
            "y": 0
          },
          "end":  {
            "x": 1,
            "y": 0
          },
        },
        "keep": "right"
      }
    },
    {
      "type": "cut",
      "data": {
        "vector": {
          "start": {
            "x": 1,
            "y": 0
          },
          "end":  {
            "x": 1,
            "y": 1
          },
        },
        "keep": "right"
      }
    },
    {
      "type": "cut",
      "data": {
        "vector": {
          "start": {
            "x": 1,
            "y": 1
          },
          "end":  {
            "x": 0,
            "y": 1
          },
        },
        "keep": "right"
      }
    },
    {
      "type": "cut",
      "data": {
        "vector": {
          "start": {
            "x": 0,
            "y": 1
          },
          "end":  {
            "x": 0,
            "y": 0
          },
        },
        "keep": "right"
      }
    }
  ]
}