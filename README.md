# MongoDB $in Operator with Single Element Array

This repository demonstrates a common error when using the `$in` operator in MongoDB queries with a single-element array. The correct approach and solution are provided.

## Bug

The provided JavaScript code incorrectly uses the `$in` operator with a single-element array.  While it will work, it's inefficient and not the best practice. 

## Solution

For single value matches, use the direct equality operator instead of `$in`. This improves query efficiency and readability.