export default function Dollarizer(props) {
  const formatter = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  return formatter.format(props);
}
