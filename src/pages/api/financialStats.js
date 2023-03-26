export default function handler(req, res) {
  res.status(200).json({
    today: {
      income: 9460,
      expense: 5560,
      hired: 154,
      canceled: 120,
      pending: 74,
    },
    yesterday: {
      income: 9940,
      expense: 5240,
      hired: 100,
      canceled: 100,
      pending: 100,
    },
    lastWeek: {
      income: 25658,
      expense: 22658,
    },
  });
}
