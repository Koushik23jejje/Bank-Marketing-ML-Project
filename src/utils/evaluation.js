export function calculateMetrics(yTrue, yPred) {
  let tp = 0, fp = 0, tn = 0, fn = 0;
  
  for (let i = 0; i < yTrue.length; i++) {
    if (yTrue[i] === 1 && yPred[i] === 1) tp++;
    if (yTrue[i] === 0 && yPred[i] === 1) fp++;
    if (yTrue[i] === 0 && yPred[i] === 0) tn++;
    if (yTrue[i] === 1 && yPred[i] === 0) fn++;
  }
  
  const accuracy = (tp + tn) / (tp + tn + fp + fn);
  const precision = tp / (tp + fp);
  const recall = tp / (tp + fn);
  const f1 = 2 * (precision * recall) / (precision + recall);
  
  return {
    accuracy,
    precision,
    recall,
    f1,
    confusionMatrix: [[tn, fp], [fn, tp]]
  };
}