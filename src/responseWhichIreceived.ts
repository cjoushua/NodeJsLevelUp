let A = [{
    user:
        {
            score_level: 16,
            is_system: false,
            location: 'Mumbai',
            email: 'abc@xyz.org',
            image: 'example.org',
            firstname: 'Steve'
        },
    details: { solution_count: 1, average_rating: 1, recommendation_count: 0 },
    score: 45
},
{
    user:
        {
            score_level: 17,
            is_system: false,
            location: 'Miami',
            email: 'ab.org',
            image: 'example.net',
            firstname: 'Mark'
        },
    details: { solution_count: 1, average_rating: 1, recommendation_count: 2 },
    score: 50
}];

const names = A.map((obj) => {
    if (obj.details) {
      return obj.details.recommendation_count;
    }
  });

  console.log(names);