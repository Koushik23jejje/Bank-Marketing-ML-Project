import { sampleData } from './data/dataset.js';
import { preprocessData } from './utils/preprocessor.js';
import { SimpleDecisionTree } from './models/decisionTree.js';
import { calculateMetrics } from './utils/evaluation.js';

// Preprocess the data
const { features, target } = preprocessData(sampleData);

// Create and train the model
const model = new SimpleDecisionTree();
model.fit(features, target);

// Make predictions
const predictions = model.predict(features);

// Evaluate the model
const metrics = calculateMetrics(target, predictions);

console.log('Model Evaluation Results:');
console.log('-------------------------');
console.log(`Accuracy: ${metrics.accuracy.toFixed(3)}`);
console.log(`Precision: ${metrics.precision.toFixed(3)}`);
console.log(`Recall: ${metrics.recall.toFixed(3)}`);
console.log(`F1 Score: ${metrics.f1.toFixed(3)}`);
console.log('\nConfusion Matrix:');
console.log(metrics.confusionMatrix);