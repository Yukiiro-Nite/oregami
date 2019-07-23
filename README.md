# Oregami
This application allows users to fold and cut 2d shapes into desired forms

## What is a fold
- A fold is a rotation of a shape around a crease.
### Data
- vector: Vector
  - start: Point
    - x: float
    - y: float
  - end: Point
  - type: enum
    - line
    - ray
    - segment (default)
- side: enum: Side
  - left
    - This is the left side
    - rotations will be mirror of a normal unit circle
  - both
    - This is both sides
    - rotations will be applied to both sides
  - right
    - This is the right side
    - rotations will be from a unit circle
- rotation: float (radians, values more than pi don't make a lot of sense though.)

## What is a crease
- A crease is a line, ray, or line segment on a shape that one side will be rotated around

## What is a cut
- A cut is a line, ray, or line segment that adds additional flexibility to a shape.
- cuts are intended to use with folds / creases to create more complex forms
### Data
- vector: Vector
- keep: Side

## What is a form
- A form is a shape that has folds and cuts applied to it.
### Data
- transforms: List <Cut, Fold>

## Technical Notes
- any shape can be made with many (at least 3) cuts on a plane.
  - This means that a user may actually start with a plane, and all shapes may just be predefined cuts
- Ideally, all terminal crease points (such as segment points and ray starts) should be connected to cuts (or the edges of the shape, which might just be cuts)
- Sometimes cuts will result in detached shapes.
  - The user needs to decide if they want to discard the new shape or create a new form with it
  - technically this isn't required until displaying the resulting form
- Could use just line segments to make realistic forms, but the other types give more flexibility
- Some combinations of folds don't make a lot of sense, and might need suggestions or adjustments given
  - I feel like i've heared the term 'relief' cut or fold before. These sorts of things will most likely be needed
  - relief fold fan patterns
- forms have certain features
  - valid
    - can you make this with real paper
  - symetric
    - does it have a symetry
  - flat
    - is this form flat
  - can become flat
   - can this form become flat

## Examples
### Paper air plane
```javascript
{
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
```