export function oneHotEncode(data, column) {
  const uniqueValues = [...new Set(data[column])];
  const encoded = {};
  
  uniqueValues.slice(1).forEach(value => {
    encoded[`${column}_${value}`] = data[column].map(val => val === value ? 1 : 0);
  });
  
  return encoded;
}

export function preprocessData(data) {
  const processedData = {
    age: data.age,
    balance: data.balance,
    ...oneHotEncode(data, 'job'),
    ...oneHotEncode(data, 'marital'),
    ...oneHotEncode(data, 'education')
  };

  const target = data.y.map(val => val === 'yes' ? 1 : 0);
  
  return {
    features: processedData,
    target
  };
}