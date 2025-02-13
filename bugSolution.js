```javascript
const query = { name: 'John Doe' };

// Correct approach using direct equality operator
db.collection('users').find({ name: 'John Doe' }).toArray((err, docs) => {
  console.log(docs);
});
```